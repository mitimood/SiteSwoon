import Image from 'next/image'
import Link from 'next/link'

export default function animations() {
  return (
    <main className="bg-[url('/bg.svg')] flex min-h-screen flex-col items-center justify-center p-10">
      <iframe className='w-3/6 pb-10 rounded-xl aspect-video' src="https://www.youtube.com/embed/Prt41doYusE?si=uwX6SJyQrNfOdkxc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className='w-3/6 pb-10 rounded-xl aspect-video' src="https://www.youtube.com/embed/NGuFuSDcs0o?si=yQpIXAj416r8Si-l" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className='w-3/6 pb-10 rounded-xl aspect-video' src="https://www.youtube.com/embed/40CleUOuShA?si=_hYkotdoy64gQnYy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>
  )
}
