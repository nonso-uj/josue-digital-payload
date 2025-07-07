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

              {/* <hr className="mt-50" /> */}

              {/* <div className="tag-share pt-25 pb-55 wow fadeInUp delay-0-2s">
                <div className="item">
                  <h5>Tags</h5>
                  <div className="tag-coulds">
                    <a href="blog.html">Course</a>
                    <a href="blog.html">Design</a>
                    <a href="blog.html">marketing</a>
                  </div>
                </div>
                <div className="item">
                  <h5>Share :</h5>
                  <div className="social-style-three">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <div className="admin-comment mb-40 wow fadeInUp delay-0-2s">
                <div className="comment-body">
                  <div className="author-thumb">
                    <img src="assets/images/blog/admin-author.jpg" alt="Author" />
                  </div>
                  <div className="content">
                    <h4>Rasalina Wilimson</h4>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                      pehiles molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas
                    </p>
                    <div className="social-style-three">
                      <a href="contact.html">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-behance"></i>
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <RelatedPosts docs={post.relatedPosts.filter((post) => typeof post === 'object')} />
              )}
              {/* <hr />
              <h4 className="comment-title mt-75 mb-25">People Comments</h4>
              <div className="comments">
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img src="assets/images/blog/comment-author1.jpg" alt="Author" />
                  </div>
                  <div className="content">
                    <h5>
                      John F. Medina{' '}
                      <a href="#" className="theme-btn style-two">
                        Reply <i className="fas fa-angle-double-right"></i>
                      </a>
                    </h5>
                    <span className="date">25 Feb 2022</span>
                    <p>
                      On the other hand, we denounce with righteous indignation and dislike men who
                      are beguiled and demoralized by the charms of pleasure of the moment so
                      blinded
                    </p>
                  </div>
                </div>
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img src="assets/images/blog/comment-author2.jpg" alt="Author" />
                  </div>
                  <div className="content">
                    <h5>
                      Patrick V. Spears{' '}
                      <a href="#" className="theme-btn style-two">
                        Reply <i className="fas fa-angle-double-right"></i>
                      </a>
                    </h5>
                    <span className="date">25 Feb 2022</span>
                    <p>
                      On the other hand, we denounce with righteous indignation and dislike men who
                      are beguiled and demoralized by the charms of pleasure of the moment so
                      blinded
                    </p>
                  </div>
                </div>
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img src="assets/images/blog/comment-author3.jpg" alt="Author" />
                  </div>
                  <div className="content">
                    <h5>
                      Kevin S. Larsen{' '}
                      <a href="#" className="theme-btn style-two">
                        Reply <i className="fas fa-angle-double-right"></i>
                      </a>
                    </h5>
                    <span className="date">25 Feb 2022</span>
                    <p>
                      On the other hand, we denounce with righteous indignation and dislike men who
                      are beguiled and demoralized by the charms of pleasure of the moment so
                      blinded
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Search</h4>
                  <form action="#" className="default-search-form">
                    <input
                      type="text"
                      placeholder="Find Keywords"
                    />
                  </form>
                </div>
                {/* <div className="widget widget-category wow fadeInUp delay-0-4s">
                                            <h4 className="widget-title">Category</h4>
                                            <ul>
                                                <li><a href="blog.html">Digital Solutions</a> <span>(25)</span></li>
                                                <li><a href="blog.html">Saas Landing</a> <span>(09)</span></li>
                                                <li><a href="blog.html">WordPress</a> <span>(18)</span></li>
                                                <li><a href="blog.html">Graphics Design</a> <span>(05)</span></li>
                                                <li><a href="blog.html">Business Consulting</a> <span>(03)</span></li>
                                                <li><a href="blog.html">SEO Optimization</a> <span>(04)</span></li>
                                                <li><a href="blog.html">Marketing</a> <span>(05)</span></li>
                                            </ul>
                                        </div> */}
                {/* <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                                            <h4 className="widget-title">Recent News</h4>
                                            <ul>
                                                <li>
                                                    <div className="image">
                                                        <img src="/images/widgets/news1.jpg" alt="News" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><a href="blog-details.html">Build Group Chat App With Vanilla JS Twilio Node</a></h5>
                                                        <span className="date">
                                                            <i className="far fa-calendar-alt"></i>
                                                            <a href="#">25 June 2022</a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/images/widgets/news2.jpg" alt="News" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><a href="blog-details.html">Expand Your Horiz Desktop Wallpapers Edition See</a></h5>
                                                        <span className="date">
                                                            <i className="far fa-calendar-alt"></i>
                                                            <a href="#">25 June 2022</a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/images/widgets/news3.jpg" alt="News" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><a href="blog-details.html">Manage Accessible Design System With Colorntes</a></h5>
                                                        <span className="date">
                                                            <i className="far fa-calendar-alt"></i>
                                                            <a href="#">25 June 2022</a>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
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
                {/* <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                                            <h4 className="widget-title">Popular Tags</h4>
                                            <div className="tag-coulds">
                                                <a href="blog.html">Design</a>
                                                <a href="blog.html">Landing</a>
                                                <a href="blog.html">software</a>
                                                <a href="blog.html">web</a>
                                                <a href="blog.html">education</a>
                                                <a href="blog.html">email marketing</a>
                                                <a href="blog.html">SEO</a>
                                                <a href="blog.html">development</a>
                                                <a href="blog.html">wordpress</a>
                                            </div>
                                        </div> */}
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
