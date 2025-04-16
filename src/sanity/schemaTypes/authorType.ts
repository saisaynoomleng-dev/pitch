import { title } from 'process';
import { FaUser } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const authorType = defineType({
  name: 'author',
  icon: FaUser,
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'username',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
