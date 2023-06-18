import { NetworkStatus, useQuery } from '@apollo/client'
import { GET_USER_AND_NOTES, GetUserAndNotesResponseData } from '../services/getUserAndNotes'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Note from '../components/Note'
import { Plus } from 'phosphor-react'
import { MouseEvent as ReactMouseEvent, useEffect } from 'react'
import Header from '../components/Header'

export default function MyNotes() {
  const location = useLocation()
  const { name, newNote } = location.state
  const { userId } = useParams()
  const { data, loading, refetch, networkStatus } = useQuery<GetUserAndNotesResponseData>(GET_USER_AND_NOTES, {
    context: { headers: { 'Authorization': localStorage.getItem('token') } },
    variables: { id: userId },
    notifyOnNetworkStatusChange: true
  })
  const navigate = useNavigate()

  function handleNavigate(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    navigate(`/write-note/${userId}`, { state: { name } })
  }

  const notes = data?.getUserAndNotes.notes?.filter((note) => !note.deleted_at)

  useEffect(() => {
    if (newNote) {
      refetch()
    }
  }, [newNote, refetch])

  return (
    <div className='bg-dark-gray-custom min-h-screen pb-20'>
      <Header isLogged name={name} userId={userId} />
      <main className='flex flex-col justify-center items-center h-full xs:px-8 px-0 lg:gap-x-40 gap-x-20 pt-20'>
        <p className='text-white text-5xl font-light text-center'>My Notes</p>
        {loading || networkStatus === NetworkStatus.refetch ? (
          <p className='text-white text-4xl mt-40'>Loading...</p>
        ) : (
          <>
            {notes ? (
              <div className='mt-20 flex flex-col gap-24 w-full items-center'>
                {notes.map((note) => <Note key={note.id} id={note.id} body={note.body} priority={note.priority} status={note.status} title={note.title} refetchNotes={refetch} />)}
              </div>
            ) : (
              <p className='text-white text-2xl mt-40'>You don't have any notes yet.</p>
            )}
          </>
        )}
        <div className='flex justify-center items-center pt-32 px-4 w-4/5'>
          <button
            className='rounded-[100%] bg-light-primary p-4 shadow-custom shadow-light-primary/40 hover:-translate-y-0.5 active:scale-[0.96] active:shadow-none duration-300'
            onClick={handleNavigate}
          >
            <Plus size={32} />
          </button>
        </div>
      </main>
    </div>
  )
}