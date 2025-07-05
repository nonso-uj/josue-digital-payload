'use client'

import React, { Fragment } from 'react'

import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <Fragment>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          {navItems.map(({ link }, i) => {
            return (
              <li key={i}>
                <Link href={link.type === 'custom' ? `${link?.url}` : link.type === 'reference' ? `/${link.reference?.value?.slug}` : '/'}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Fragment>
  )
}
