import TeamImage from '../assets/team.svg'
import Input from '../components/Input';
import Button from '../components/Button';

export default function SignIn() {
  return (
    <div className='bg-dark-gray-custom min-h-screen'>
      <header>
        <nav className='flex justify-center items-center xs:px-10 px-3 py-4'>
          <h1 className='text-white font-semibold text-4xl'>NotesQL</h1>
        </nav>
        <hr className='border-[#1c1c1c] border-[1px]' />
      </header>
      <main className='flex justify-center items-center flex-wrap h-full px-8 lg:gap-x-40 gap-x-20 md:pt-40 pt-24'>
        <div className='flex flex-col items-center justify-center h-full flex-wrap gap-y-16'>
          <div className='flex flex-col items-center lg:gap-y-8 gap-y-4 md:w-auto w-full'>
            <p className='text-white lg:text-6xl xs:text-5xl text-3xl font-medium text-center'>Welcome back!</p>
            <p className='text-white lg:text-2xl xs:text-xl text-base text-center'>Don't have an account yet? <span className='text-light-primary whitespace-nowrap'>Sign Up</span></p>
          </div>
          <form className='flex flex-col items-center justify-center gap-12 w-min mb-16'>
            <Input id='email' label='Email' placeholder='Your email' type='email' />
            <Input id='password' label='Password' placeholder='Your password' type='password' />
            <div className='flex w-full justify-end items-center pt-4'>
              <Button isOutline={false} palette='primary' text='Submit' />
            </div>
          </form>
        </div>
        <img className='h-96' src={TeamImage} alt="Team image" />
      </main>
    </div>
  )
}