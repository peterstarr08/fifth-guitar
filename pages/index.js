import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div><Link href={"/improviser"}>Click me for Improviser</Link></div>
    </main>
  )
}
