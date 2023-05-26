import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col gap-0 justify-center max-w-7xl m-auto'>
      <section className='flex flex-row  justify-center gap-24 '>
        <div>
          <h1 className='text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-blue-700 to-rose-600'>Lorem? Ipsum dolor?<br />
            Sit amet!
          </h1>
          <h2 className='max-w-xl text-xl opacity-70 font-bold pt-11'>
            Lorem ipsum dolor sit amet consectetur. Vulputate cras tincidunt tempus ut ut lacus augue. Elementum quis ridiculus sed sed.
          </h2>
          <p className='text-sm font-semibold text-slate-600 pt-11'>
            Your email<span className='text-red-500'>*</span>
          </p>
          <section className='flex flex-row justify-start pt-2 gap-3'>
            <input className='w-96 py-2 px-4 rounded-full outline-gray-500 border-2 border-gray-400' type={'text'} placeholder='Join the mail list!'></input>
            <button className='px-8 py-1 bg-blue-700 whitespace-nowrap rounded-full text-white font-bold'>I'm in!</button>
          </section>
        </div>
        <div>
          <div className='relative w-[372px] h-[452px]'>
            <Image alt='' fill src={"/hero.svg"}></Image>
          </div>
        </div>
      </section>

      {/* Random Comment */}
      <div className='relative w-8 h-8 mx-auto mt-36'>
        <Image alt='' src={"/cube.svg"} fill></Image>
      </div>
      <p className='font-medium text-sm opacity-80 my-20 m-auto'>Interactive Learning</p>
      <section className='flex flex-row justify-between mx-auto gap-20 w-fit'>

        <div className='relative flex flex-col items-center flex-grow'>
          <div className='-z-10 absolute w-4/5 mx-auto blur-2xl h-full translate-y-9 rounded-3xl bg-gradient-45 from-blue-700 to-rose-600'>

          </div>
          <div className='z-10  w-fit h-fit rounded-3xl bg-white'>
            <div className='flex flex-col justify-between mx-auto items-center'>
              <div className='relative w-[300px] h-[230px] my-4 mx-4'>
                <Image alt='' fill src={"improviser.svg"}></Image>
              </div>
              <p className='max-w-[300px] px-4 text-center font-medium opacity-70 pb-8'>
                Lorem ipsum dolor sit amet consectetur..Lorem ipsum dolor sit amet consectetur..
              </p>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col items-center flex-grow'>
          <div className='-z-10 absolute w-4/5 mx-auto blur-2xl h-full translate-y-9 rounded-3xl bg-gradient-45 from-blue-700 to-rose-600'>

          </div>
          <div className='z-10  w-fit h-fit rounded-3xl bg-white'>
            <div className='flex flex-col justify-between mx-auto items-center'>
              <div className='relative w-[300px] h-[230px] my-4 mx-4'>
                <Image alt='' fill src={"transcriber.svg"}></Image>
              </div>
              <p className='max-w-[300px] px-4 text-center font-medium opacity-70 pb-8'>
                Lorem ipsum dolor sit amet consectetur..Lorem ipsum dolor sit amet consectetur..
              </p>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col items-center flex-grow'>
          <div className='-z-10 absolute w-4/5 mx-auto blur-2xl h-full translate-y-9 rounded-3xl bg-gradient-45 from-blue-700 to-rose-600'>

          </div>
          <div className='z-10  w-fit h-fit rounded-3xl bg-white'>
            <div className='flex flex-col justify-between mx-auto items-center'>
              <div className='relative w-[300px] h-[230px] my-4 mx-5'>
                <Image alt='' fill src={"scales.svg"}></Image>
              </div>
              <p className='max-w-[300px] px-4 text-center font-medium opacity-70 pb-8'>
                Lorem ipsum dolor sit amet consectetur..Lorem ipsum dolor sit amet consectetur..
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
