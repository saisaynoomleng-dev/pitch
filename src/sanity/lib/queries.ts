import { defineQuery } from 'next-sanity';

export const STARTUPS_QUERY = defineQuery(`*[_type == 'startup'
 && defined(slug.current)
 && !defined($search)
 || category match $search
 || title match $search
 || author->name match $search]{
    title,
    slug,
    author->{
      name,
      id,
      email,
      image{
        asset->{
          url
        }
      },
      bio
    },
    views,
    description,
    pitch,
    _createdAt,
    category,
    image{
      asset->{
        url
      }
    }
 } | order(_createdAt)`);
