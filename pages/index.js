import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-fit mx-auto'>
      <main className='flex flex-col gap-0 justify-center max-w-7xl mx-16'>
        <section className='flex flex-row max-w-fit items-center  justify-between gap-24 xl:flex-col'>
          <div>
            <h1 className='xl:text-5xl max-w-lg text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-blue-700 to-rose-600'>Want to improvise? Or Transcribe?<br />
              Fifth Guitar!
            </h1>
            <h2 className='xl:text-base max-w-xl text-xl opacity-70 font-bold pt-11'>
              FifthGuitar is an interactive way to improve or develop skills. Dedicated for intermediate player!
            </h2>
            <p className='text-sm font-semibold text-slate-600 pt-11'>
              Your email<span className='text-red-500'>*</span>
            </p>
            <section className='flex flex-row justify-start items-center pt-2 gap-3 md:gap-4 md:flex-col'>
              <input className='w-96 py-2 px-4 md:w-full rounded-full outline-gray-500 border-2 border-gray-400' type={'text'} placeholder='Join the mail list!'></input>
              <button className='px-8 py-3 bg-blue-700 w-fit  whitespace-nowrap rounded-full text-white font-bold'>I&apos;m in!</button>
            </section>
          </div>
          <div>
            <div className='relative mx-auto w-[23.25rem] h-[28.25rem] xl:w-[17.4375rem] xl:h-[21.435rem]'>
              <Image alt='a' fill src={"/hero.svg"}></Image>
            </div>
          </div>
        </section>

        {/* Random Comment */}
        <div className='relative w-8 h-8 mx-auto mt-36'>
          <Image alt='b' src={"/cube.svg"} fill></Image>
        </div>
        <p className='font-medium text-sm opacity-80 my-20 m-auto'>Interactive Learning</p>
        <section className='flex flex-row justify-between mx-auto gap-20 w-fit xl:flex-col'>

          <div className='relative flex flex-col items-center flex-grow'>
            <div className='-z-10 absolute w-4/5 mx-auto blur-2xl h-full translate-y-9 rounded-3xl bg-gradient-45 from-blue-700 to-rose-600'>

            </div>
            <div className='z-10  w-fit h-fit rounded-3xl bg-white'>
              <div className='flex flex-col justify-between mx-auto items-center'>
                <div className='relative w-[300px] h-[230px] my-4 mx-4'>
                  <Image alt='c' fill src={"improviser.svg"}></Image>
                </div>
                <p className='max-w-[300px] px-4 text-center font-medium opacity-70 pb-8'>
                  Click the below link to start an interactive improvisation. More demos coming soon!
                </p>
                <p className='mb-8 text-blue-600 hover:underline'><Link href={"/improviser"}>Click here to start a demo!</Link></p>
              </div>
            </div>
          </div>

          <div className='relative flex flex-col items-center flex-grow'>
            <div className='-z-10 absolute w-4/5 mx-auto blur-2xl h-full translate-y-9 rounded-3xl bg-gradient-45 from-blue-700 to-rose-600'>

            </div>
            <div className='z-10  w-fit h-fit rounded-3xl bg-white'>
              <div className='flex flex-col justify-between mx-auto items-center'>
                <div className='relative w-[300px] h-[230px] my-4 mx-4'>
                  <Image alt='d' fill src={"transcriber.svg"}></Image>
                </div>
                <p className='max-w-[300px] px-4 text-center font-medium opacity-70 pb-8'>
                  A looper to help learn song by ear and some essential features to ease the process. Coming soon...
                </p>
                <p className='mb-8'>Coming soon!</p>
              </div>
            </div>
          </div>

          <div className='relative flex flex-col items-center flex-grow'>
            <div className='-z-10 absolute w-4/5 mx-auto blur-2xl h-full translate-y-9 rounded-3xl bg-gradient-45 from-blue-700 to-rose-600'>

            </div>
            <div className='z-10  w-fit h-fit rounded-3xl bg-white'>
              <div className='flex flex-col justify-between mx-auto items-center'>
                <div className='relative w-[300px] h-[230px] my-4 mx-5'>
                  <Image alt='e' fill src={"scales.svg"}></Image>
                </div>
                <p className='max-w-[300px] px-4 text-center font-medium opacity-70 pb-8'>
                  An advanced guitar scale & arpeggio so that you can learn, or create music with ease! Coming soon!
                </p>
                <p className='mb-8'>Coming soon!</p>
              </div>
            </div>
          </div>

        </section>
        <p className='inline-block my-28'>This website is in continuous development stage, keep visiting &#59; &#41; Contact us: thefifthguitar@gmail.com</p>

      </main>
    </main>
  )
}
