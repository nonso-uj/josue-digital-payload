import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function fetchPostsBySearch(query: string) {
  const payload = await getPayload({ config: configPromise })

  console.log('find=== ', query)

  const results = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: true,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                content: {
                  like: query,
                },
              },
              {
                'categories.title': {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return results
}
