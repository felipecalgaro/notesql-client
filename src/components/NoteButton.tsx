import { MutationFunction, MutationFunctionOptions } from '@apollo/client'
import classNames from 'classnames'
import { Icon as IconType } from 'phosphor-react'
import { Status } from '../types/note'

interface NoteButtonProps {
  icon: IconType
  mutationFunction: MutationFunction | ((options: MutationFunctionOptions) => void)
  mutationVariables: {
    id: number
    priority?: boolean
    status?: Status
  }
  active: boolean
}

export default function NoteButton({ mutationFunction, mutationVariables, icon: Icon, active }: NoteButtonProps) {
  return (
    <div
      onClick={() => mutationFunction({
        variables: mutationVariables,
        context: { headers: { 'Authorization': localStorage.getItem('token') } }
      })}
      className={classNames('rounded-full w-9 aspect-square border-light-primary border-[1px] cursor-pointer transition-colors flex justify-center items-center active:scale-[0.98]', {
        'hover:bg-light-primary text-light-primary hover:text-black': !active,
        'text-black bg-light-primary': active,
      })}>
      <Icon size={26} />
    </div>
  )
}