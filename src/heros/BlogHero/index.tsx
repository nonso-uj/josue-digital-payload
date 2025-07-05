import React from 'react'

import type { Post } from '@/payload-types'

import Link from 'next/link'

export const BlogHero: React.FC<{
  post: Post
}> = ({ post }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { heroImage, title }: any = post

  return (
    <section className="page-banner-area bgs-cover py-135 rpy-100" style={{backgroundImage: `url("${heroImage?.url}");`}}>
            <div className="container">
                <div className="banner-inner text-white text-center">
                    <h1 className="page-title wow fadeInUp delay-0-2s">{title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><Link href="/blog">blog</Link></li>
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
  )
}
