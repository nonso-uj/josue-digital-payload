'use client'

import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const BlogCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'blog'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article ref={card.ref} className="blog-standard-item wow fadeInUp delay-0-2s">
      <div className="image">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media
            resource={metaImage}
            imgClassName={'tw-h-[410px] object-cover'}
            size={"(max-width: 1200px) 375px, 1200px"}
          />
        )}
      </div>
      <div className="content">
        {showCategories && hasCategories && (
          <>
            {showCategories && hasCategories && (
              <div className="blog-meta-two mb-5">
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    return (
                      <p className="tag" key={index}>
                        {categoryTitle}
                      </p>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </>
        )}
        {titleToUse && (
          <h4>
            <Link className="not-prose" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h4>
        )}
        {description && <p>{sanitizedDescription}</p>}
      </div>
    </article>
  )
}
