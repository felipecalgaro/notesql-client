import NotesImage from '../assets/notes.svg'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-dark-gray-custom h-screen'>
      <Header />
      <main className='flex justify-center items-center flex-wrap xl:gap-x-60 gap-x-20 h-4/5 mx-16'>
        <div className='flex flex-col justify-evenly xs:h-2/3 h-1/2 w-min'>
          <div className='w-1/2 flex items-center whitespace-nowrap'>
            <p className='text-light-primary font-antic-didone sm:text-7xl xs:text-6xl text-5xl'>Organization &<br />Productivity</p>
          </div>
          <div className='flex items-center justify-between sm:w-4/5 w-11/12'>
            <p className='text-white sm:text-xl xs:text-lg text-base w-2/3'>Your new best choice to take notes the easiest way.</p>
            <button className='border-light-primary border-custom shadow-light-primary/25 shadow-custom rounded-custom text-light-primary px-3 py-1 sm:text-xl xs:text-lg text-base hover:bg-light-primary hover:text-black transition-colors duration-300 active:bg-dark-primary active:shadow-none active:border-dark-primary active:scale-[0.98]'>Sign Up</button>
          </div>
        </div>
        <div className='basis-80'>
          <img src={NotesImage} alt="Notes Image" className='w-full' />
        </div>
      </main>
    </div>
  )
} 