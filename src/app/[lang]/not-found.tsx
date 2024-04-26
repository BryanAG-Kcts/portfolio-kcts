import Link from 'next/link'
import './not-found.css'

export default function NotFound (): JSX.Element {
  return (
    <main id='not-found-lang' className='relative flex flex-col items-center justify-center gap-14 w-full h-screen bg-blue-950'>

      <div className='flex items-center w-40 h-40 rounded-full bg-lt-color-blue-100 tierra'>
        <div className='z-50'>
          <span className='absolute bottom-0 left-0 w-16 h-16 rounded-full bg-lt-color-gray-100 cloud cloud_1' />
          <span className='absolute top-0 right-0 w-12 h-12 rounded-full cloud bg-lt-color-gray-100 cloud_2' />
        </div>

        <div className='absolute flex items-center justify-center w-full h-full overflow-hidden rounded-full'>
          <span className='absolute w-20 h-12 translate-x-4 rounded-full bg-lt-color-green-100' />
          <span className='absolute right-0 w-16 h-10 translate-y-5 rounded-full bg-lt-color-green-100' />

          <span className='absolute w-24 h-24 rounded-full -top-4 -left-10 bg-lt-color-green-100' />
          <span className='absolute w-16 h-10 rounded-full -bottom-4 bg-lt-color-green-100' />
          <span className='absolute right-0 w-16 h-10 rounded-full -top-2 bg-lt-color-green-100' />
        </div>

      </div>
      <article className=' flex flex-col items-center text-center gap-4'>
        <p className='text-2xl font-semibold text-white'>Resource or language not found :(</p>
        <Link className='text-xl font-semibold text-dk-color-blue-100 bg-lt-color-white-100 px-10 py-2 rounded-lg hover:scale-95 transition-transform' href='/'>Go to home</Link>
      </article>
    </main>
  )
}
