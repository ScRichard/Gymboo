# 📋 Gymboo Next.js Starter - Complete Setup Guide

## 🎯 Project Overview

A minimal Next.js (v14+) starter template with:
- **App Router** for modern Next.js routing
- **TypeScript** for type safety throughout
- **TailwindCSS** for utility-first styling
- **Remark** for markdown processing
- **lucide-react** for icons
- **Responsive Navbar** with mobile support

## ✅ Installation Completed

All dependencies have been installed via npm. Your project is ready to use!

### Installed Packages

```json
{
  "runtime": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "remark": "14.0.2",
    "remark-html": "15.0.2",
    "remark-frontmatter": "4.0.1",
    "gray-matter": "4.0.3",
    "lucide-react": "0.263.1"
  },
  "dev": {
    "typescript": "5.2.2",
    "tailwindcss": "3.3.3",
    "eslint": "8.46.0"
  }
}
```

## 🚀 Quick Start

### 1. Start Development Server

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser.

### 2. Build for Production

```bash
npm run build
npm start
```

### 3. Run Linting

```bash
npm run lint
```

## 📁 Project Structure

```
gymboo/
│
├── 📂 app/                          # Next.js App Router directory
│   ├── layout.tsx                   # Root layout (all pages inherit this)
│   ├── page.tsx                     # Home page (/)
│   ├── globals.css                  # Global Tailwind CSS imports
│   ├── not-found.tsx                # 404 page
│   │
│   └── 📂 posts/
│       └── [slug]/
│           └── page.tsx             # Dynamic blog post pages (/posts/my-post)
│   
│   └── 📂 menu/
│       └── page.tsx                 # /menu example page
│
│   └── 📂 about/
│       └── page.tsx                 # /about example page
│
│   └── 📂 contact/
│       └── page.tsx                 # /contact example page
│
├── 📂 components/
│   └── Navbar.tsx                   # Responsive navigation bar
│
├── 📂 lib/
│   └── markdown.ts                  # Markdown processing utilities
│
├── 📂 posts/                        # Markdown blog posts directory
│   └── example.md                   # Example post with frontmatter
│
├── 📂 public/                       # Static files (images, fonts, etc.)
│
├── 📄 package.json                  # Dependencies and scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 next.config.ts                # Next.js configuration
├── 📄 tailwind.config.ts            # TailwindCSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 .eslintrc.json                # ESLint configuration
└── 📄 .gitignore                    # Git ignore file
```

## 🧩 Key Components Explained

### Navbar Component (`components/Navbar.tsx`)

**Layout Structure:**
- **Left**: Logo placeholder
- **Center**: Navigation links (Home, Menu, About, Contact)
- **Right**: "Rezervace" (Reservation) button

**Features:**
- 🖥️ Desktop: Full navigation bar with all links visible
- 📱 Mobile: Hamburger menu (using lucide-react `Menu` icon)
- ✨ Clean, minimal Tailwind styling
- 🎯 Uses Next.js `Link` for client-side navigation

**Usage:**
The Navbar is automatically included in all pages via `app/layout.tsx`

```tsx
<nav className="flex items-center justify-between px-6 py-4 border-b">
  {/* Logo */}
  {/* Links */}
  {/* Reservation Button */}
</nav>
```

### Layout (`app/layout.tsx`)

- **Metadata**: Configure page titles and metadata globally
- **Styles**: Imports global CSS (Tailwind directives)
- **Navigation**: Renders Navbar on all pages
- **Children**: Your page content

### Root Page (`app/page.tsx`)

- **Hero Section**: Welcome message with CTA buttons
- **Features Grid**: 4-column layout showcasing template features
- **Links**: Navigation examples to other pages

### Markdown System (`lib/markdown.ts`)

Three main utilities:

1. **`processMarkdown(markdown: string)`**
   - Input: Raw markdown with YAML frontmatter
   - Output: HTML content + frontmatter data
   - Uses: Remark + gray-matter

2. **`getAllPosts(dir: string)`**
   - Reads all `.md` files from a directory
   - Returns array of posts with metadata
   - Useful for listing blog posts

3. **`getPostBySlug(dir: string, slug: string)`**
   - Fetches a single post by filename
   - Used in dynamic routes `[slug]/page.tsx`
   - Returns null if not found

## 📝 Markdown & Blog Posts

### Creating a Blog Post

1. **Create file**: `posts/my-first-post.md`

2. **Add frontmatter** (YAML):
```markdown
---
title: My First Post
author: Your Name
date: 2026-03-07
description: Brief post description
---

# Post Title

Your markdown content...

## Subsection

More content with **bold** and *italic* text.
```

3. **Access post** at: `/posts/my-first-post`

### Frontmatter Variables

```yaml
---
title:       # Page title
author:      # Author name
date:        # Publication date
description: # SEO description
---
```

You can add any custom fields to frontmatter!

### Markdown Features Supported

- Headers (`#`, `##`, `###`, etc.)
- **Bold** (`**text**`)
- *Italic* (`*text*`)
- [Links](https://example.com)
- Code blocks (with syntax highlighting)
- Lists (ordered and unordered)
- Blockquotes (`>`)
- Horizontal rules (`---`)

## 🎨 Styling with TailwindCSS

### Utility Classes Used in Template

```tsx
// Layout
className="flex items-center justify-between"  // Flexbox alignment
className="grid grid-cols-1 md:grid-cols-2"    // Responsive grid
className="px-6 py-4"                          // Padding
className="mb-8 gap-4"                         // Margin and gap

// Typography
className="text-4xl font-bold"                 // Large heading
className="text-gray-600 text-sm"              // Secondary text
className="hover:text-gray-900"                // Hover state

// Colors
className="bg-blue-600 text-white"             // Button
className="border border-gray-200"             // Borders
className="bg-gray-50 hover:bg-gray-100"       // Hover backgrounds

// Responsive
className="hidden md:flex"                     // Hidden on mobile, visible on desktop
className="md:grid-cols-2"                     // 2 columns on desktop, 1 on mobile
```

### No Custom CSS Required

All styling uses Tailwind utilities. Edit `tailwind.config.ts` to customize theme colors, spacing, etc.

## 🔧 Configuration Files

### `tailwind.config.ts`
```typescript
{
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: []
}
```
**Edit this to**: Change colors, fonts, spacing, add plugins

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```
**Enables**: `@/components/Navbar` import syntax

### `next.config.ts`
```typescript
{
  reactStrictMode: true
}
```
**Add here**: Custom Next.js settings, image optimization, etc.

## 📚 Common Tasks

### Add a New Page

1. Create: `app/my-page/page.tsx`
2. Add content with TypeScript
3. Access at: `/my-page`

```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">My Page</h1>
    </div>
  );
}
```

### Add a New Component

1. Create: `components/MyComponent.tsx`
2. Use 'use client' if you need interactivity
3. Import in pages

```tsx
// components/MyComponent.tsx
'use client';

export default function MyComponent() {
  return <div className="flex items-center gap-4">...</div>;
}
```

### Add lucide-react Icon

1. Import from `lucide-react`
2. Use as component

```tsx
import { Menu, Home, Mail, Phone } from 'lucide-react';

<Menu size={24} className="text-gray-700" />
<Home size={20} />
```

### Customize Navbar

Edit `components/Navbar.tsx`:
- Change `"LOGO"` text to your brand
- Modify links in navigation
- Update "Rezervace" button text/color
- Customize styling with Tailwind classes

## 🌐 Routing Structure

```
/                           → app/page.tsx (Home)
/menu                       → app/menu/page.tsx
/about                      → app/about/page.tsx
/contact                    → app/contact/page.tsx
/posts/example              → Dynamic: app/posts/[slug]/page.tsx
/posts/my-first-post        → Reads from: posts/my-first-post.md
/non-existent-page          → Uses: app/not-found.tsx
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git push --set-upstream origin main

# Then import in Vercel dashboard
# https://vercel.com/new
```

### Deploy to Other Platforms

All support Next.js. See documentation for:
- Netlify
- Railway
- Render
- AWS Amplify

## 💡 Tips & Tricks

1. **Use TypeScript**: Catch errors before runtime
2. **Tailwind IntelliSense**: Install VS Code extension for autocompletion
3. **Dark Mode**: TailwindCSS supports dark mode
4. **Image Optimization**: Use Next.js `Image` component
5. **Metadata**: Update `app/layout.tsx` metadata for SEO

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run lint
```

**CSS not appearing?**
- Check global imports in `app/globals.css`
- Verify Tailwind `content` in config
- Restart dev server

## 📖 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Remark Guide](https://github.com/remarkjs/remark)
- [Lucide Icons](https://lucide.dev/)

---

**Ready to build?** Start with `npm run dev` 🚀
