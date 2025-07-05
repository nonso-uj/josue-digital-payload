import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RelatedCard } from '@/components/RelatedCard'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: SerializedEditorState
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className="next-prev-post py-40 wow fadeInUp delay-0-2s">
      {introContent && <RichText data={introContent} enableGutter={false} />}

      {docs?.map((doc, index) => {
        if (typeof doc === 'string') return null

        return <RelatedCard key={index} doc={doc} relationTo="blog" showCategories />
      })}
    </div>
  )
}
