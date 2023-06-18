import { CaretDown } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLogged: boolean
  name?: string
  userId?: string
}

export default function Header({ isLogged, name, userId }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='relative select-none'>
      <nav className='flex justify-between items-center xs:px-10 px-3 py-4'>
        <h1 className='text-white font-semibold xs:text-4xl text-2xl'>NotesQL</h1>
        {isLogged ? (
          <div className='flex xs:gap-x-3 gap-x-2 justify-center items-center text-white'>
            <div className='xs:w-8 w-7 aspect-square rounded-full bg-blue-800'></div>
            <div className='flex gap-x-0.5 justify-center items-center cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>
              <p className='font-medium text-white xs:text-xl text-lg'>{name}</p>
              <CaretDown size={20} />
            </div>
            {isOpen && (
              <div className='bg-dark-gray-custom border-[#1c1c1c] border-t-0 border-custom w-40 py-4 xs:pl-8 pl-10 absolute right-2 xs:top-[4.5rem] top-16 text-left font-medium xs:text-lg text-base'>
                <ul className='flex flex-col gap-y-1'>
                  <li><Link to={`/my-account/${userId}`} state={{ name }}>My Account</Link></li>
                  <li><Link to={`/my-notes/${userId}`} state={{ name }}>My Notes</Link></li>
                  <li><Link to={`/write-note/${userId}`} state={{ name }}>Write Note</Link></li>
                  <li><Link to='/'>Sign Out</Link></li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className='flex xs:gap-8 gap-3'>
            <Link to='/sign-in' className='text-white xs:text-xl text-base cursor-pointer'>Sign In</Link>
            <Link to='/sign-up' className='text-light-primary xs:text-xl text-base cursor-pointer'>Sign Up</Link>
          </div>
        )}
      </nav>
      <hr className='border-[#1c1c1c] border-[1px]' />
    </header>
  )
}