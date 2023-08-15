import { NetworkStatus, useQuery } from '@apollo/client'
import { GET_USER_AND_NOTES, GetUserAndNotesResponseData } from '../services/getUserAndNotes'
import { useNavigate, useParams } from 'react-router-dom'
import Note from '../components/Note'
import { Plus } from 'phosphor-react'
import { MouseEvent as ReactMouseEvent } from 'react'
import Header from '../components/Header'
import { useFetchUserContext } from '../hooks/useFetchUserContext'
import NotAuthorized from './NotAuthorized'

export default function MyNotes() {
  const { userId } = useParams()
  const { data, loading, networkStatus } = useQuery<GetUserAndNotesResponseData>(GET_USER_AND_NOTES, {
    context: { headers: { 'Authorization': localStorage.getItem('token') } },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network'
  })
  const navigate = useNavigate()
  const { isAuthenticated } = useFetchUserContext()

  function handleNavigate(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    navigate(`/write-note/${userId}`)
  }

  const notes = data?.getUserAndNotes.notes?.filter((note) => !note.deleted_at)

  return (
    <>
      {!isAuthenticated ? (
        <NotAuthorized />
      ) : (
        <div className='bg-dark-gray-custom min-h-screen pb-20'>
          <>
            <Header isLogged userId={userId} />
            <main className='flex flex-col justify-center items-center h-full xs:px-8 px-0 lg:gap-x-40 gap-x-20 pt-20'>
              <p className='text-white text-5xl font-light text-center'>My Notes</p>
              {loading || networkStatus === NetworkStatus.refetch ? (
                <i className='mt-40 loader'></i>
              ) : (
                <>
                  {notes?.length !== 0 ? (
                    <div className='mt-20 flex flex-col gap-24 w-full items-center'>
                      {notes?.map((note) => <Note key={note.id} id={note.id} body={note.body} priority={note.priority} status={note.status} title={note.title} />)}
                    </div>
                  ) : (
                    <p className='text-white text-2xl mt-40 text-center'>You don't have any notes yet.</p>
                  )}
                  <div className='flex justify-center items-center pt-32 px-4 w-4/5'>
                    <button
                      className='rounded-[100%] bg-light-primary p-4 shadow-custom shadow-light-primary/40 active:scale-[0.96] active:shadow-none duration-300'
                      onClick={handleNavigate}
                    >
                      <Plus size={32} />
                    </button>
                  </div>
                </>
              )}
            </main>
          </>
        </div>
      )}
    </>
  )
}