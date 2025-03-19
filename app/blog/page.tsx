import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog | Arjun Sekhon Portfolio',
  description:
    'Insights and analysis on energy markets, data analytics, and technology from a UK-based energy data analyst.',
}

export default function Page() {
  return (
    <section className="container mx-auto py-8">
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter text-yellow-500">Blog</h1>
      <p className="mb-6 text-lg">
        Welcome to my blog. Here, I share insights and analysis on energy markets, data analytics, and technology. Stay tuned for updates and deep dives into the trends shaping the energy sector.
      </p>
      <BlogPosts />
    </section>
  )
}
