/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Startup = {
  _id: string;
  _type: 'startup';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  views?: number;
  description?: string;
  category?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  pitch?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  bio?: string;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Startup
  | Slug
  | Author
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: STARTUPS_QUERY
// Query: *[_type == 'startup' && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search]{    title,    slug,    author->{      name,      id,      email,      image{        asset->{          url        }      },      bio    },    views,    description,    pitch,    _createdAt,    category,    image{      asset->{        url      }    } } | order(_createdAt)
export type STARTUPS_QUERYResult = Array<
  | {
      title: null;
      slug: null;
      author: null;
      views: null;
      description: null;
      pitch: null;
      _createdAt: string;
      category: null;
      image: {
        asset: {
          url: string | null;
        } | null;
      } | null;
    }
  | {
      title: string | null;
      slug: null;
      author: null;
      views: null;
      description: string | null;
      pitch: null;
      _createdAt: string;
      category: null;
      image: null;
    }
  | {
      title: string | null;
      slug: Slug | null;
      author: {
        name: string | null;
        id: number | null;
        email: string | null;
        image: {
          asset: {
            url: string | null;
          } | null;
        } | null;
        bio: string | null;
      } | null;
      views: number | null;
      description: string | null;
      pitch: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?:
          | 'blockquote'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'normal';
        listItem?: 'bullet' | 'number';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }> | null;
      _createdAt: string;
      category: string | null;
      image: {
        asset: {
          url: string | null;
        } | null;
      } | null;
    }
>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    "*[_type == 'startup'\n && defined(slug.current)\n && !defined($search)\n || category match $search\n || title match $search\n || author->name match $search]{\n    title,\n    slug,\n    author->{\n      name,\n      id,\n      email,\n      image{\n        asset->{\n          url\n        }\n      },\n      bio\n    },\n    views,\n    description,\n    pitch,\n    _createdAt,\n    category,\n    image{\n      asset->{\n        url\n      }\n    }\n } | order(_createdAt)": STARTUPS_QUERYResult;
  }
}
