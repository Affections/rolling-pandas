# Next.js + Sanity + Styled Components Starter

A clean, production-ready starter template for building modern web applications with Next.js 14, Sanity CMS, and Styled Components.

## 🚀 Features

- **Next.js 14** with App Router
- **Sanity CMS** for content management
- **Styled Components** for CSS-in-JS
- **TypeScript** for type safety
- **ESLint** for code quality
- Optimized for **Vercel** deployment
- Built-in **Sanity Studio** at `/studio`

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- A Sanity account (free at [sanity.io](https://www.sanity.io))

## 🛠️ Setup

### 1. Clone or Create from Template

```bash
# If using this as a template
git clone <your-repo-url>
cd <your-project-name>
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Sanity

1. Create a new project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.local.example` to `.env.local`
3. Add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-26
```

### 4. Create Your Schemas

Create your Sanity schemas in `src/sanity/schemas/` directory. Example:

```typescript
// src/sanity/schemas/homepage.ts
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

### 5. Import Schemas

Add your schemas to `src/sanity/schemaTypes/index.ts`:

```typescript
import { type SchemaTypeDefinition } from 'sanity'
import { homepage } from '../schemas/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage],
}
```

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### 7. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage your content.

## 📁 Project Structure

```
├── public/                 # Static files
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Global styles
│   │   └── studio/        # Sanity Studio
│   ├── components/        # React components (add yours here)
│   ├── lib/
│   │   ├── fonts.ts       # Font configuration
│   │   └── registry.tsx   # Styled Components registry
│   └── sanity/
│       ├── env.ts         # Environment variables
│       ├── lib/
│       │   ├── client.ts  # Sanity client
│       │   ├── image.ts   # Image URL builder
│       │   └── queries.ts # GROQ queries
│       ├── schemas/       # Your Sanity schemas (add here)
│       ├── schemaTypes/   # Schema imports
│       └── structure.ts   # Studio structure
├── .env.local             # Environment variables (create from .example)
├── next.config.js         # Next.js configuration
├── sanity.config.ts       # Sanity configuration
└── tsconfig.json          # TypeScript configuration
```

## 📝 Creating Content

1. **Define a Schema**: Create schema files in `src/sanity/schemas/`
2. **Import Schema**: Add to `src/sanity/schemaTypes/index.ts`
3. **Create Query**: Add GROQ queries in `src/sanity/lib/queries.ts`
4. **Fetch Data**: Use Sanity client in your pages
5. **Build Components**: Create React components in `src/components/`

## 🎨 Styling

This template uses **Styled Components** for styling. The setup includes:

- Server-side rendering support
- Style registry for Next.js App Router
- Theme support ready
- CSS variables in `globals.css`

Example component with Styled Components:

```typescript
'use client'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
`

export default StyledButton
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

Make sure to set the Node.js version to 20.x in your deployment settings.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Styled Components](https://styled-components.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🤝 Contributing

Feel free to customize this template for your needs!

## 📄 License

MIT
