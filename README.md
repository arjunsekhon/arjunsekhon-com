# Arjun Sekhon's Personal Portfolio & Blog

This repository hosts the source code for my personal portfolio and blog, built with **Next.js** and deployed on **Vercel** using a custom domain from AWS Route 53.

## Features

- **MDX & Markdown** for blog posts  
- **SEO Optimization** (sitemap, robots, JSON-LD schema)  
- **RSS Feed** for easy content syndication  
- **Dynamic Open Graph (OG) Images** for enhanced social sharing  
- **Syntax Highlighting** for code blocks  
- **Tailwind CSS v4** for styling  
- **Vercel Speed Insights & Web Analytics** integration  
- **Geist Font** for clean typography  

## Live Site

[**arjunsekhon.com**](https://arjunsekhon.com)

- **Domain Management:** AWS Route 53 (Hosted Zones, NS & A Records)  
- **Hosting & Deployment:** Vercel  

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:arjunsekhon/arjunsekhon-com.git
cd arjunsekhon-com
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Development

```bash
pnpm dev
```

This will start the development server at <http://localhost:3000>.

### 4. Production Build

```bash
pnpm build
pnpm start
```

This compiles the project for production and starts the server locally.

## Adding a Blog Entry

To add a new blog post, create an .mdx file in the ./app/blog/posts directory. Your file can include standard Markdown syntax and JSX for more dynamic content.

## Deployment

- **Vercel**: Continuous deployment is set up via GitHub. Any push to the main branch triggers a new deployment.
- **DNS Configuration**:
  - **AWS Route 53** hosts the domain.
  - **A Record** points to 76.76.21.21 (Vercel).
  - **Nameservers** are configured in Route 53 to match the Vercel domain settings.

## Contributing

Contributions and suggestions are welcome. Feel free to open an issue or submit a pull request.

##  License

This project is open source under the MIT License.
