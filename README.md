# Portfolio

A modern portfolio website built with Next.js and powered by Contentful CMS.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with React 19
- **CMS**: [Contentful](https://www.contentful.com/) for content management
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Testing**: [Vitest](https://vitest.dev/) with React Testing Library
- **TypeScript**: Full type safety throughout

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Setup

Create a `.env.local` file with your Contentful credentials:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage

## Deployment

Build the application:

```bash
npm run build
```

The app can be deployed to any platform that supports Next.js, such as Vercel,
Netlify, or your own server.

## Content Management

Content is managed through Contentful CMS. The site automatically revalidates
when content is updated via webhooks.
