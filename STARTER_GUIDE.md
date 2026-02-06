# 🚀 Quick Start Guide

This is your clean Next.js + Sanity + Styled Components starter template!

## What's Been Set Up For You

✅ **Next.js 14** with App Router  
✅ **Sanity CMS** configured and ready  
✅ **Styled Components** with SSR support  
✅ **TypeScript** for type safety  
✅ **Clean folder structure**  
✅ **Example schemas** to get you started  

## What Was Removed

❌ All project-specific pages (artists, blog, services, etc.)  
❌ All custom components (70+ components removed)  
❌ All Sanity schemas (43 schemas removed)  
❌ Project-specific fonts and styles  
❌ Custom queries and business logic  

## 📁 What You Have Now

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          ✅ Clean root layout
│   │   ├── page.tsx            ✅ Simple starter homepage
│   │   ├── globals.css         ✅ Basic global styles
│   │   └── studio/             ✅ Sanity Studio route
│   ├── components/             📁 Empty - add yours here
│   ├── lib/
│   │   ├── fonts.ts            ✅ Font configuration (Inter)
│   │   └── registry.tsx        ✅ Styled Components setup
│   └── sanity/
│       ├── env.ts              ✅ Environment config
│       ├── lib/
│       │   ├── client.ts       ✅ Sanity client
│       │   ├── image.ts        ✅ Image URL helper
│       │   └── queries.ts      📝 Empty - add yours
│       ├── schemas/            📁 Example schema included
│       ├── schemaTypes/        ✅ Schema index (empty)
│       └── structure.ts        ✅ Studio structure
├── .env.local.example          ✅ Template for environment vars
└── README.md                   ✅ Updated documentation
```

## 🎯 Next Steps

### 1. Set Up Environment Variables

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your Sanity credentials:
- Get them from: https://www.sanity.io/manage

### 2. Install Dependencies (if needed)

```bash
npm install
```

### 3. Start Development

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

### 4. Create Your First Schema

See the example in `src/sanity/schemas/example.ts`

```typescript
import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
```

### 5. Import Your Schema

Edit `src/sanity/schemaTypes/index.ts`:

```typescript
import { homepage } from '../schemas/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage],
}
```

### 6. Create Queries

Edit `src/sanity/lib/queries.ts`:

```typescript
export const homepageQuery = `*[_type == "homepage"][0]{
  title,
  description
}`
```

### 7. Fetch Data in Pages

```typescript
import { client } from '@/sanity/lib/client'
import { homepageQuery } from '@/sanity/lib/queries'

export default async function Home() {
  const data = await client.fetch(homepageQuery)
  
  return <h1>{data.title}</h1>
}
```

## 🎨 Adding Styled Components

Create a component with styles:

```typescript
// src/components/Button/Button.tsx
'use client'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
`

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Styled Components Docs](https://styled-components.com)

## 💡 Tips

- Keep components small and reusable
- Use TypeScript interfaces for props
- Organize schemas by feature
- Use Sanity's GROQ for efficient queries
- Test your queries in Sanity's Vision tool (/studio)

---

**You're all set!** Start building your amazing project! 🎉

