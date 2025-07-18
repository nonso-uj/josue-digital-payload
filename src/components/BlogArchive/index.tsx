import React, { Fragment } from 'react'

import { CardPostData } from '@/components/Card'
import { BlogCard } from '../BlogCard'
import LoadingComponent from '../LoadingComponent'

export type Props = {
  posts: CardPostData[]
}

export const BlogArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className="blog-standard-inner">
      {!posts ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <Fragment key={index}>
                  <BlogCard className="h-full" doc={result} relationTo="blog" showCategories />
                </Fragment>
              )
            }

            return null
          })}
        </>
      )}
    </div>
  )
}
