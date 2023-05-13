export default function Header() {
  return (
    <header>
      <div className='flex justify-between items-center xs:px-10 px-6 py-4'>
        <h1 className='text-white font-semibold xs:text-4xl text-3xl'>NotesQL</h1>
        <div className='flex xs:gap-8 gap-4'>
          <a className='text-white xs:text-xl text-lg cursor-pointer'>Sign In</a>
          <a className='text-light-primary xs:text-xl text-lg cursor-pointer'>Sign Up</a>
        </div>
      </div>
      <hr className='border-[#1c1c1c] border-[1px]' />
    </header>
  )
}