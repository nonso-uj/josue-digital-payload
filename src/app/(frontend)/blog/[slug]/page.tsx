import type { Metadata } from 'next'
import { formatDateTime } from 'src/utilities/formatDateTime'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache, Fragment } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { BlogHero } from '@/heros/BlogHero'
import Link from 'next/link'
import { CONTACT_URL } from '@/utilities/routes'
import { formatAuthors } from '@/utilities/formatAuthors'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/blog/' + slug
  const post = await queryPostBySlug({ slug })

  const { categories, populatedAuthors, publishedAt } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  if (!post) return <PayloadRedirects url={url} />

  return (
    <Fragment>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <BlogHero post={post} />

      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-details-content wow fadeInUp delay-0-2s">
                <div className="blog-meta-two pb-15">
                  {categories?.map((category, index) => {
                    if (typeof category === 'object' && category !== null) {
                      const { title: categoryTitle } = category

                      const titleToUse = categoryTitle || 'Untitled category'

                      return (
                        <a className="tag" key={index}>
                          {titleToUse}
                        </a>
                      )
                    }
                    return null
                  })}

                  {hasAuthors && <a className="author">{formatAuthors(populatedAuthors)}</a>}

                  {publishedAt && (
                    <a className="date">
                      <i className="far fa-calendar-alt"></i> {formatDateTime(publishedAt)}
                    </a>
                  )}
                </div>
                <div className="container">
                  <RichText
                    className="max-w-[48rem] mx-auto"
                    data={post.content}
                    enableGutter={false}
                  />
                </div>
              </div>

              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <RelatedPosts docs={post.relatedPosts.filter((post) => typeof post === 'object')} />
              )}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                {/* <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Search</h4>
                  <form action="#" className="default-search-form">
                    <input
                      type="text"
                      placeholder="Find Keywords"
                    />
                  </form>
                </div> */}

                <div className="widget widget-cta wow fadeInUp delay-0-2s px-1">
                  <h4>Book Marketting Consultation</h4>
                  <Link href={CONTACT_URL} className="theme-btn style-two">
                    Contact Us <i className="fas fa-angle-double-right"></i>
                  </Link>
                  <img src="/images/widgets/cta.png" alt="CTA" />
                  <img
                    className="cta-bg-line"
                    src="/images/widgets/cta-bg-line.png"
                    alt="CTA bg line"
                  />
                  <img
                    className="cta-bg-dots"
                    src="/images/widgets/cta-bg-dots.png"
                    alt="CTA bg Dots"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
