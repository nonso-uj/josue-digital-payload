import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { Fragment, Suspense } from 'react'
import { notFound } from 'next/navigation'
import { BlogArchive } from '@/components/BlogArchive'
import SearchPosts from '@/components/SearchPosts'
import Link from 'next/link'
import { CONTACT_URL } from '@/utilities/routes'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
  })

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

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `${pageNumber || ''} Blog | Josue Digital | Digital Marketing. Elevated.`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 10)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
