import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className='p-2 border border-gray-700' href={'/dashboard'}>
        Go to dasboard
      </Link>
    </main>
  )
}
