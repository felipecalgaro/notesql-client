import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import InfoField from '../components/InfoField';
import { useQuery } from '@apollo/client';
import { GET_USER_AND_NOTES, GetUserAndNotesResponseData } from '../services/getUserAndNotes';
import { Status } from '../types/note';
import ErrorMessage from '../components/ErrorMessage';

export default function MyAccount() {
  const { userId } = useParams()
  const { data, error, loading } = useQuery<GetUserAndNotesResponseData>(GET_USER_AND_NOTES, {
    context: { headers: { 'Authorization': localStorage.getItem('token') } },
    fetchPolicy: 'cache-and-network'
  })

  const notes = data?.getUserAndNotes.notes

  const publishedNotes = notes?.length
  const uncheckedNotes = notes?.filter(note => note.status === Status.UNFINISHED && !note.deleted_at).length
  const checkedNotes = notes?.filter(note => note.status === Status.FINISHED && !note.deleted_at).length
  const prioritizedNotes = notes?.filter(note => note.priority === true && !note.deleted_at).length
  const deletedNotes = notes?.filter(note => note.deleted_at).length

  return (
    <div className='bg-dark-gray-custom min-h-screen pb-20'>
      <Header isLogged userId={userId} />
      <main className='flex flex-col justify-center items-center h-full pt-20 gap-y-20'>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <p className='text-white text-5xl font-light text-center'>My Account</p>
            <img className='w-80 mt-10' src={data?.getUserAndNotes.avatar_url} alt="User avatar" />
            <div className='w-full flex flex-col justify-center items-center'>
              <InfoField fieldName='Name' fieldValue={data?.getUserAndNotes.name} />
              <InfoField fieldName='Email' fieldValue={data?.getUserAndNotes.email} />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <InfoField fieldName='Notes published' fieldValue={publishedNotes} />
              <InfoField fieldName='Notes unchecked' fieldValue={uncheckedNotes} />
              <InfoField fieldName='Notes checked' fieldValue={checkedNotes} />
              <InfoField fieldName='Notes prioritized' fieldValue={prioritizedNotes} />
              <InfoField fieldName='Notes deleted' fieldValue={deletedNotes} />
            </div>
            <ErrorMessage message={error?.message} />
          </>
        )}
      </main>
    </div>
  )
}