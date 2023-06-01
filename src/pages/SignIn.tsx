import TeamImage from '../assets/team.svg'
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { useLazyQuery } from '@apollo/client';
import { AUTHENTICATE_USER, AuthenticateUserResponseData } from '../services/authenticateUser';
import { useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage';

export default function SignIn() {
  const [authenticateUser, { data, error }] = useLazyQuery<AuthenticateUserResponseData>(AUTHENTICATE_USER)
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const { email, password } = Object.fromEntries(formData)

    try {
      authenticateUser({ variables: { email, password } })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.authenticateUser.token)
      navigate('/my-notes', { state: { userId: data.authenticateUser.user.id } })
    }
  }, [data, navigate])

  return (
    <div className='bg-dark-gray-custom min-h-screen'>
      <header>
        <nav className='flex justify-center items-center xs:px-10 px-3 py-4'>
          <Link to='/' className='text-white font-semibold text-4xl'>NotesQL</Link>
        </nav>
        <hr className='border-[#1c1c1c] border-[1px]' />
      </header>
      <main className='flex justify-center items-center flex-wrap h-full px-8 lg:gap-x-40 gap-x-20 md:pt-32 pt-24'>
        <div className='flex flex-col items-center justify-center h-full flex-wrap gap-y-16'>
          <div className='flex flex-col items-center lg:gap-y-8 gap-y-4 md:w-auto w-full'>
            <p className='text-white lg:text-6xl xs:text-5xl text-3xl font-medium text-center'>Welcome back!</p>
            <p className='text-white lg:text-2xl xs:text-xl text-base text-center'>Don't have an account yet? <Link to='/sign-up' className='text-light-primary whitespace-nowrap'>Sign Up</Link></p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-12 w-min mb-16'>
            <Input name='email' id='email' label='Email' placeholder='Your email' type='email' />
            <Input name='password' id='password' label='Password' placeholder='Your password' type='password' />
            <ErrorMessage message={error?.message} />
            <div className='flex w-full justify-end items-center'>
              <Button isOutline={false} palette='primary' text='Submit' />
            </div>
          </form>
        </div>
        <img className='h-96' src={TeamImage} alt="Team image" />
      </main>
    </div>
  )
}