import type { Block, Field } from 'payload'

// import {
//   FixedToolbarFeature,
//   HeadingFeature,
//   InlineToolbarFeature,
//   lexicalEditor,
// } from '@payloadcms/richtext-lexical'

// import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'full',
    options: [
      {
        label: 'Full',
        value: 'full',
      },
    ],
  },
  // {
  //   name: 'richText',
  //   type: 'richText',
  //   editor: lexicalEditor({
  //     features: ({ rootFeatures }) => {
  //       return [
  //         ...rootFeatures,
  //         HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
  //         FixedToolbarFeature(),
  //         InlineToolbarFeature(),
  //       ]
  //     },
  //   }),
  //   label: false,
  // },
  // {
  //   name: 'enableLink',
  //   type: 'checkbox',
  // },
  // link({
  //   overrides: {
  //     admin: {
  //       condition: (_data, siblingData) => {
  //         return Boolean(siblingData?.enableLink)
  //       },
  //     },
  //   },
  // }),
]

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
