import type { Metadata } from 'next'
// import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'At Josue Digital, our industry specialists develop customized digital marketing strategies—SEO, PPC, social media, content—to elevate your brands online presence and drive conversions.',
  images: [
    {
      url: 'images/slider/og-image.jpg',
    },
  ],
  siteName: 'Josue Digital',
  title: 'Josue Digital | Digital Marketing. Elevated.',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
