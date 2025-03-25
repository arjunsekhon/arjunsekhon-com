import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Hi, I'm Arjun Sekhon!
        </h1>
        <h2 className="text-xl text-yellow-500">
          Energy Sector Analyst | Google Advanced Data Analytics Professional | Chemistry Undergraduate
        </h2>
      </header>
      <div className="mb-6 text-lg">
        <p>
          I work with data to understand energy, power and it's markets. As a second-year Chemistry student at the University of Manchester, I've developed a strong understanding of chemical principles, practical analytical skills, and a knack for problem-solving, all of which help me navigate the complexities of energy.
        </p>
        <p className="mt-4">
          I built this portfolio site with Next.js and deployed it on Vercel as I explored the challenges of launching a website in production and developing my skills in React.js. Here, I share my projects, insights, and learnings at the crossroads of energy, data, and technology.
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
