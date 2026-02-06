import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Enter hex color (e.g., #000000 for black, #B1BC99 for sage green)',
      type: 'string',
      validation: Rule => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
        name: 'hex color',
        invert: false
      }).error('Must be a valid hex color (e.g., #000000 or #fff)'),
    }),
    defineField({
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      options: {
        list: [
          { title: 'Color Only', value: 'color' },
          { title: 'Video', value: 'video' },
          { title: 'Image', value: 'image' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    
    // DESKTOP VIDEO OPTIONS
    defineField({
      name: 'videoSource',
      title: 'Desktop Video Source',
      type: 'string',
      options: {
        list: [
          { title: 'Upload Video', value: 'upload' },
          { title: '3rd Party Link', value: 'link' },
        ],
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'video',
    }),
    defineField({
      name: 'videoFile',
      title: 'Desktop Video File (Upload)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'video' || parent?.videoSource !== 'upload',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Desktop Video URL (3rd Party)',
      type: 'url',
      hidden: ({ parent }) => parent?.backgroundType !== 'video' || parent?.videoSource !== 'link',
    }),
    
    // MOBILE VIDEO OPTIONS
    defineField({
      name: 'mobileVideoSource',
      title: 'Mobile Video Source',
      description: 'Optional: Use different video for mobile (≤768px)',
      type: 'string',
      options: {
        list: [
          { title: 'Same as Desktop', value: 'same' },
          { title: 'Upload Video', value: 'upload' },
          { title: '3rd Party Link', value: 'link' },
        ],
      },
      initialValue: 'same',
      hidden: ({ parent }) => parent?.backgroundType !== 'video',
    }),
    defineField({
      name: 'mobileVideoFile',
      title: 'Mobile Video File (Upload)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'video' || parent?.mobileVideoSource !== 'upload',
    }),
    defineField({
      name: 'mobileVideoUrl',
      title: 'Mobile Video URL (3rd Party)',
      type: 'url',
      hidden: ({ parent }) => parent?.backgroundType !== 'video' || parent?.mobileVideoSource !== 'link',
    }),
    
    // DESKTOP IMAGE OPTIONS
    defineField({
      name: 'imageSource',
      title: 'Desktop Image Source',
      type: 'string',
      options: {
        list: [
          { title: 'Upload Image', value: 'upload' },
          { title: '3rd Party Link', value: 'link' },
        ],
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Desktop Background Image (Upload)',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'image' || parent?.imageSource !== 'upload',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Desktop Image URL (3rd Party)',
      type: 'url',
      hidden: ({ parent }) => parent?.backgroundType !== 'image' || parent?.imageSource !== 'link',
    }),
    
    // MOBILE IMAGE OPTIONS
    defineField({
      name: 'mobileImageSource',
      title: 'Mobile Image Source',
      description: 'Optional: Use different image for mobile (≤768px)',
      type: 'string',
      options: {
        list: [
          { title: 'Same as Desktop', value: 'same' },
          { title: 'Upload Image', value: 'upload' },
          { title: '3rd Party Link', value: 'link' },
        ],
      },
      initialValue: 'same',
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
    }),
    defineField({
      name: 'mobileBackgroundImage',
      title: 'Mobile Background Image (Upload)',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'image' || parent?.mobileImageSource !== 'upload',
    }),
    defineField({
      name: 'mobileImageUrl',
      title: 'Mobile Image URL (3rd Party)',
      type: 'url',
      hidden: ({ parent }) => parent?.backgroundType !== 'image' || parent?.mobileImageSource !== 'link',
    }),
    
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link (optional)',
              type: 'string',
            },
            {
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
              description: 'Check this to open the link in a new tab',
            },
          ],
        },
      ],
      validation: Rule => Rule.required().max(6),
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
