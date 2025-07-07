import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import React, { Fragment, Suspense } from 'react'
import Link from 'next/link'
import '@/useTailwind.css'
import { CONTACT_URL } from '@/utilities/routes'
import { BlogArchive } from '@/components/BlogArchive'
import { fetchPostsBySearch } from '@/app/_data'
import { notFound } from 'next/navigation'
import SearchPosts from '@/components/SearchPosts'

export const dynamic = 'force-dynamic'
export const revalidate = 600

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ searchParams }: any) {
  const query = await searchParams

  const posts = await fetchPostsBySearch(query?.query || '')

  if (!posts) return notFound()

  return (
    <Fragment>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{ backgroundImage: "url('/images/new/blog-header.jpg')" }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title wow fadeInUp delay-0-2s">Blog</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link href={'/'}>home</Link>
                </li>
                <li className="breadcrumb-item active">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="container mb-8">
                <PageRange
                  collection="posts"
                  currentPage={posts.page}
                  limit={12}
                  totalDocs={posts.totalDocs}
                />
              </div>

              <BlogArchive posts={posts.docs} />

              <div className="container">
                {posts.totalPages > 1 && posts.page && (
                  <Pagination page={posts.page} totalPages={posts.totalPages} />
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <Suspense>
                  <SearchPosts placeholder="Find Keywords" />
                </Suspense>

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

export function generateMetadata(): Metadata {
  return {
    title: `Blog | Josue Digital | Digital Marketing. Elevated.`,
  }
}
