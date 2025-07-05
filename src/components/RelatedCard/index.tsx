'use client'

import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const RelatedCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'blog'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { doc, relationTo, title: titleFromProps } = props

  const { slug, meta, title } = doc || {}
  const { image: metaImage } = meta || {}
  
  const titleToUse = titleFromProps || title
  
  const href = `/${relationTo}/${slug}`

  return (
    <article ref={card.ref} className="post-item">
      <div className="image">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media
            resource={metaImage}
            imgClassName={'tw-h-auto'}
            // className='tw-max-h-[90px] tw-h-[90px]'
            size={"(max-width: 1200px) 375px, 1200px"}
            // htmlElement={'span'}
          />
        )}
      </div>
      <div className="content">
        {titleToUse && (
          <h5>
            <Link href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h5>
        )}
        {/* {description && <p>{sanitizedDescription}</p>} */}
      </div>
    </article>
  )
}
