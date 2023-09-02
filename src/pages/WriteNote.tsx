import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage';
import { WRITE_NOTE, WriteNoteResponseData } from '../services/writeNote';
import Header from '../components/Header';
import { useFetchUserContext } from '../hooks/useFetchUserContext';
import NotAuthorized from './NotAuthorized';

export default function WriteNote() {
  const [writeNote, { error, data, loading }] = useMutation<WriteNoteResponseData>(WRITE_NOTE)
  const { userId } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useFetchUserContext()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!loading) {
      const formData = new FormData(event.target as HTMLFormElement)
      const { title, body } = Object.fromEntries(formData)

      writeNote({
        variables: {
          note: {
            title,
            body,
          }
        },
        context: {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        }
      })
    }
  }

  useEffect(() => {
    if (data) {
      navigate(`/my-notes/${userId}`)
    }
  }, [data, navigate, userId])

  return (
    <>
      {!isAuthenticated ? (
        <NotAuthorized />
      ) : (
        <div className='bg-dark-gray-custom min-h-screen pb-8'>
          <Header isLogged userId={userId} />
          <main className='flex flex-col justify-center items-center h-full lg:px-40 md:px-12 px-0 pt-20'>
            <p className='text-white text-5xl font-light text-center'>New Note</p>
            <form onSubmit={handleSubmit} className='flex flex-col items-start justify-center gap-12 pt-24 2xl:w-1/2 md:w-2/3 xs:w-3/4 w-full xs:px-0 px-2'>
              <Input name='title' id='title' label='' placeholder='Title' type='text' />
              <textarea placeholder='Body' name="body" id="body" className='border-gray-custom border-custom rounded-custom bg-transparent text-zinc-200 font-light pl-4 xs:pr-20 pr-4 py-2 placeholder:font-light placeholder:font-urbanist font-sans placeholder:text-gray-custom lg:text-2xl xs:text-xl text-lg w-full h-60'></textarea>
              <div className='flex w-full justify-end items-center'>
                <Button isOutline={false} palette='secondary' text='Submit' loading={loading} />
              </div>
              <ErrorMessage message={error?.message} />
            </form>
          </main>
        </div>
      )}
    </>
  )
}