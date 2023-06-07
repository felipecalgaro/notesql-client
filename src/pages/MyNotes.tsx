import { NetworkStatus, useQuery } from '@apollo/client'
import { GET_NOTES_BY_AUTHOR, GetNotesByAuthorResponseData } from '../services/getNotesByAuthor'
import { Link, useLocation } from 'react-router-dom'
import Note from '../components/Note'

export default function MyNotes() {
  const location = useLocation()
  const { userId } = location.state
  const { data, loading, refetch, networkStatus } = useQuery<GetNotesByAuthorResponseData>(GET_NOTES_BY_AUTHOR, {
    context: { headers: { 'Authorization': localStorage.getItem('token') } },
    variables: { authorId: userId },
    notifyOnNetworkStatusChange: true
  })

  return (
    <div className='bg-dark-gray-custom min-h-screen'>
      <header>
        <nav className='flex justify-center items-center xs:px-10 px-3 py-4'>
          <Link to='/' className='text-white font-semibold text-4xl'>NotesQL</Link>
        </nav>
        <hr className='border-[#1c1c1c] border-[1px]' />
      </header>
      <main className='flex flex-col justify-center items-center flex-wrap h-full xs:px-8 px-0 lg:gap-x-40 gap-x-20 pt-20'>
        <p className='text-white text-5xl font-light text-center'>My Notes</p>
        {loading || networkStatus === NetworkStatus.refetch ? (
          <p className='text-white text-4xl mt-40'>Loading...</p>
        ) : (
          <>
            {data?.getNotesByAuthor.length ? (
              <div className='mt-20 flex flex-col gap-24 w-full items-center'>
                {data?.getNotesByAuthor.map((note) => <Note key={note.id} id={note.id} body={note.body} priority={note.priority} status={note.status} title={note.title} refetchNotes={refetch} />)}
              </div>
            ) : (
              <p className='text-white text-2xl mt-40'>You don't have any notes yet.</p>
            )}
          </>
        )}
      </main>
    </div>
  )
}