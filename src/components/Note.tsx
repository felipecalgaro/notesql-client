import { MutationFunctionOptions, useMutation } from '@apollo/client'
import { INote, Status } from '../types/note'
import NoteButton from './NoteButton'
import { PRIORITIZE_NOTE } from '../services/prioritizeNote'
import classNames from 'classnames'
import ErrorMessage from './ErrorMessage'
import { BookmarkSimple, Check, TrashSimple } from 'phosphor-react'
import { UPDATE_STATUS } from '../services/changeStatus'
import { DELETE_NOTE } from '../services/deleteNote'

type NoteProps = Pick<INote, 'title' | 'body' | 'status' | 'priority' | 'id'> & {
  refetchNotes: () => void
}

export default function Note({ body, priority, status, title, id, refetchNotes }: NoteProps) {
  const [prioritizeNote, { error }] = useMutation(PRIORITIZE_NOTE)
  const [updateStatus] = useMutation(UPDATE_STATUS)
  const [deleteNote] = useMutation(DELETE_NOTE)

  async function deleteNoteAndRefetchNotes(options: MutationFunctionOptions) {
    await deleteNote(options)
    refetchNotes()
  }

  return (
    <div className={classNames('border-[1px] flex flex-col gap-12 rounded-custom w-4/5 text-white pt-6 pl-6 pr-3 pb-2', {
      'border-light-primary': priority,
      'border-gray-custom': !priority,
      'line-through decoration-1': status === Status.FINISHED
    })}>
      <div className='flex flex-col items-start w-full gap-6'>
        <p className='text-2xl font-semibold'>{title}</p>
        <p className='text-xl italic'>{body}</p>
      </div>
      <div className='flex justify-end w-full gap-2'>
        <NoteButton mutationFunction={prioritizeNote} mutationVariables={{ id, priority: !priority }} icon={BookmarkSimple} active={priority} />
        <NoteButton mutationFunction={updateStatus} mutationVariables={{ status: status === Status.FINISHED ? Status.UNFINISHED : Status.FINISHED, id }} icon={Check} active={status === Status.FINISHED} />
        <NoteButton mutationFunction={deleteNoteAndRefetchNotes} mutationVariables={{ id }} icon={TrashSimple} active={false} />
        <ErrorMessage message={error?.message} />
      </div>
    </div>
  )
}