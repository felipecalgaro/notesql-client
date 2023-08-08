import { MutationFunctionOptions, useMutation } from '@apollo/client'
import { INote, Status } from '../types/note'
import NoteButton from './NoteButton'
import { PRIORITIZE_NOTE } from '../services/prioritizeNote'
import classNames from 'classnames'
import { BookmarkSimple, Check, TrashSimple } from 'phosphor-react'
import { UPDATE_STATUS } from '../services/changeStatus'
import { DELETE_NOTE } from '../services/deleteNote'
import { useState } from 'react'

type NoteProps = Pick<INote, 'title' | 'body' | 'status' | 'priority' | 'id'>

export default function Note({ body, priority, status, title, id }: NoteProps) {
  const [prioritizeNote] = useMutation(PRIORITIZE_NOTE)
  const [updateStatus] = useMutation(UPDATE_STATUS)
  const [deleteNote] = useMutation(DELETE_NOTE)

  const [isDeleted, setIsDeleted] = useState(false)
  const [isInvisible, setIsInvisible] = useState(false)

  async function deleteNoteAndStartAnimation(options: MutationFunctionOptions) {
    setIsDeleted(true)
    setTimeout(() => {
      setIsInvisible(true)
    }, 500)
    await deleteNote(options)
  }

  return (
    <div className={classNames('border-[1px] flex flex-col gap-12 rounded-custom w-4/5 text-white pt-6 pl-6 pr-3 pb-2 max-h-80', {
      'border-light-primary': priority,
      'border-gray-custom': !priority,
      'line-through decoration-2': status === Status.FINISHED,
      'transition-all opacity-0 -translate-x-1/2 ease-out duration-500': isDeleted,
      'hidden': isInvisible
    })}>
      <div className='flex flex-col items-start w-full gap-6 overflow-auto scrollbar-custom pe-4'>
        <p className='text-2xl font-semibold'>{title}</p>
        <p className='text-xl italic mb-1 leading-6 whitespace-pre-line'>{body}</p>
      </div>
      <div className='flex justify-end w-full gap-2 pb-1'>
        <NoteButton mutationFunction={prioritizeNote} mutationVariables={{ id, priority: !priority }} icon={BookmarkSimple} active={priority} />
        <NoteButton mutationFunction={updateStatus} mutationVariables={{ status: status === Status.FINISHED ? Status.UNFINISHED : Status.FINISHED, id }} icon={Check} active={status === Status.FINISHED} />
        <NoteButton mutationFunction={deleteNoteAndStartAnimation} mutationVariables={{ id }} icon={TrashSimple} active={false} />
      </div>
    </div>
  )
}