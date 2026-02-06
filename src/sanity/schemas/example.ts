import { defineType, defineField } from 'sanity'

// Example schema - customize or delete this
export const exampleSchema = defineType({
  name: 'exampleDocument',
  title: 'Example Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
