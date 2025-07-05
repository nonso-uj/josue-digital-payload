import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Page } from '../../../payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  // Skip if revalidation is explicitly disabled (e.g., during seed or system ops)
  if (context.disableRevalidate) return doc

  const publishedNow = doc._status === 'published'
  const wasPublished = previousDoc?._status === 'published'

  // Exit early if the page is still a draft and nothing changed
  if (!publishedNow && !wasPublished) return doc

  const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
  const oldPath = previousDoc?.slug === 'home' ? '/' : `/${previousDoc?.slug}`

  if (publishedNow) {
    const breadcrumbs = Array.isArray(doc.breadcrumbs) ? doc.breadcrumbs : []

    if (breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1]?.url) {
      const breadcrumbPath = breadcrumbs[breadcrumbs.length - 1].url!
      revalidatePath(breadcrumbPath)
      payload.logger.info(`Revalidated: ${breadcrumbPath}`)

      if (breadcrumbs[0]?.url === '/home') {
        revalidatePath('/')
        payload.logger.info(`Revalidated: /`)
      }
    } else {
      revalidatePath(path)
      payload.logger.info(`Revalidated: ${path}`)

      if (doc.slug === 'home') {
        revalidatePath('/')
        payload.logger.info(`Revalidated: /`)
      }
    }

    revalidateTag('pages-sitemap')
  }

  // If it was unpublished (previously published but now not)
  if (wasPublished && !publishedNow) {
    revalidatePath(oldPath)
    payload.logger.info(`Revalidated old page at path: ${oldPath}`)
    revalidateTag('pages-sitemap')
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('pages-sitemap')
  }

  return doc
}
