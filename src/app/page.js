import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineBehance } from 'react-icons/ai';

export default function Home() {
  return (
    <main className="bg-[url('/bg.svg')] flex min-h-screen flex-col items-center justify-center p-10">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <div className="card w-96">
        <figure className="rounded-full	" >
          <img className=" w-36" src="Swoon_logo.png" alt="swoon_logo" />
          </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title pb-7 text-6xl tracking-wider	 font-alegreya-sans">S W O O N</h1>
          <p className='font-alegreya leading-7 tracking-widest	'>Hi, I'm Swoon I do audiovisual work!<br/>
If you are interested or have any questions, please contact me at<br/>
DM Instagram: <kbd className="kbd kbd-sm">Swoon.jpg</kbd><br/>
Discord: <kbd className="kbd kbd-sm">Suoon</kbd></p>
        </div>
      </div>
      <div className="flex flex-col">
        <Link href='/animations'>
          <button  className="btn btn-wide m-2">Animations </button>
        </Link>
        <Link href='/art'>
         <button className="btn btn-wide	m-2">Art</button>
        </Link>
        <Link href='/3d'>
         <button className="btn btn-wide	m-2">3D</button>
        </Link>
        <span class="h-1 w-full bg-slate-700 lg:w-3/3 mt-10"></span>

      	<div className='flex flex-row items-center space-x-4 justify-center pt-20'>
          <Link href='https://twitter.com/Swoon476'>
            <button className="btn btn-circle ">
              <AiOutlineTwitter className="text-2xl"/>
            </button>        
          </Link>
          <Link href='https://www.instagram.com/swoon.jpg/'>
            <button className="btn btn-circle">
              <AiOutlineInstagram className="text-2xl"/>
            </button>
          </Link>
          <Link href='https://www.behance.net/swoonjr'>
            <button className="btn btn-circle">
              <AiOutlineBehance className="text-2xl"/>
            </button>
          </Link>


        </div>

      </div>
    </main>
  )
}
