import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Arjun Sekhon Portfolio'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white p-8">
        <div tw="text-center">
          <h1 tw="text-5xl font-bold text-black mb-4">{title}</h1>
          <h2 tw="text-2xl text-gray-700">
            UK-based Energy Data Analyst & Chemistry Student
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
