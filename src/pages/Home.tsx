import { Link } from 'react-router-dom'
import NotesImage from '../assets/notes.svg'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-dark-gray-custom h-screen'>
      <Header isLogged={false} />
      <main className='flex justify-center items-center flex-wrap xl:gap-x-60 gap-x-20 h-4/5 xs:mx-16 mx-10'>
        <div className='flex flex-col justify-evenly xs:h-2/3 h-1/2 xs:w-min w-auto'>
          <div className='xs:w-1/2 w-full flex items-center xs:justify-start justify-center whitespace-nowrap'>
            <p className='text-light-primary font-antic-didone sm:text-7xl xs:text-6xl text-4xl'>Organization &<br />Productivity</p>
          </div>
          <div className='flex items-center xs:justify-between justify-center xs:w-11/12 w-full gap-x-2 gap-y-4 flex-wrap'>
            <p className='text-white xs:text-start text-center sm:text-xl xs:text-lg text-base xs:w-2/3 w-5/6'>Your new best choice to take notes the easiest way.</p>
            <Link to='/sign-up'>
              <Button isOutline={true} palette='primary' text='Sign Up' />
            </Link>
          </div>
        </div>
        <div className='basis-80'>
          <img src={NotesImage} alt="Notes Image" className='w-full' />
        </div>
      </main>
    </div>
  )
} 