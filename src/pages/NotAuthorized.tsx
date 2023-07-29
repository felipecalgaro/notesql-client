import { Link } from 'react-router-dom';

export default function NotAuthorized() {
  return (
    <div className='bg-dark-gray-custom h-screen'>
      <header>
        <nav className='flex justify-center items-center xs:px-10 px-3 py-4'>
          <Link to='/' className='text-white font-semibold text-4xl'>NotesQL</Link>
        </nav>
        <hr className='border-[#1c1c1c] border-[1px]' />
      </header>
      <main className='flex justify-center items-center pt-40 flex-col gap-32 text-center'>
        <h1 className='text-white text-9xl font-thin'>401</h1>
        <div className='flex flex-col justify-center items-center gap-10'>
          <p className='text-white text-5xl'>Unauthorized</p>
          <p className='text-white text-xl'>You are not authorized to access this page.</p>
        </div>
      </main>
    </div>
  )
}