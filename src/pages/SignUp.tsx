import BlobImage from '../assets/blob.svg'
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_USER, CreateUserResponseData } from '../services/createUser';
import { FormEvent, useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';

export default function SignUp() {
  const [createUser, { data, error }] = useMutation<CreateUserResponseData>(CREATE_USER)
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const { name, email, password } = Object.fromEntries(formData)

    if ([name, email, password].includes('')) return

    try {
      await createUser({ variables: { user: { name, email, password } } })
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.createUser.token)
      navigate(`/my-notes/${data.createUser.user.id}`)
    }
  }, [data, navigate])

  return (
    <div className='bg-dark-gray-custom h-screen relative overflow-hidden'>
      <header>
        <nav className='flex justify-center items-center xs:px-10 px-3 py-4'>
          <Link to='/' className='text-white font-semibold text-4xl'>NotesQL</Link>
        </nav>
        <hr className='border-[#1c1c1c] border-[1px]' />
      </header>
      <main className='flex justify-center items-center h-4/5'>
        <div className='flex justify-evenly w-full h-full flex-wrap gap-y-8'>
          <div className='flex flex-col items-center lg:gap-y-8 gap-y-4 md:pt-52 pt-20 md:w-auto w-full'>
            <p className='text-white lg:text-6xl xs:text-5xl text-3xl font-medium text-center'>Sign Up to NotesQL</p>
            <p className='text-white lg:text-2xl xs:text-xl text-base text-center'>Already have an account? <Link to='/sign-in' className='text-light-secondary whitespace-nowrap'>Sign In</Link></p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-12'>
            <Input name='name' id='name' label='Name' placeholder='Your name' type='text' />
            <Input name='email' id='email' label='Email' placeholder='Your email' type='email' />
            <Input name='password' id='password' label='Password' placeholder='Your password' type='password' />
            <ErrorMessage message={error?.message} />
            <div className='flex justify-end items-center w-full pt-4 px-4'>
              <Button isOutline={false} palette='secondary' text='Submit' />
            </div>
          </form>
        </div>
        <img className='absolute h-1/2 md:-bottom-40 xs:-bottom-60 -bottom-52 md:-left-32 -left-60' src={BlobImage} alt="Blob image" />
      </main>
    </div>
  )
}