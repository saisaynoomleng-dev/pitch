import { defineField, defineType } from 'sanity';

export const startupType = defineType({
  name: 'startup',
  title: 'Start Up',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'views',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pitch',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
