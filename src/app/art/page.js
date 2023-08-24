import Image from 'next/image'
import Link from 'next/link'

export default function animations() {
  return (
    <main className="bg-[url('/bg.svg')] flex min-h-screen flex-col items-center justify-center p-10">
        <Image src='/images/image02.jpg'     
        width="0"
    height="0"
    sizes="100vw"
    className="w-2/6 h-auto mb-5 rounded-full"
    ></Image>
        <Image src='/images/F3JpzGqWMAERTyU.png'
        width="0"
    height="0"
    sizes="100vw"
    className="w-2/6 h-auto mb-5"
  ></Image>
    </main>
  )
}
