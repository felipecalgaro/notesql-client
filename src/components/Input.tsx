import classNames from 'classnames'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  type: HTMLInputTypeAttribute
  label: string
  placeholder: string
  id: string
}

export default function Input({ label, placeholder, type, id }: InputProps) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='ml-2 mb-2 text-white text-2xl'>{label}</label>
      <input autoComplete='off' type={type} placeholder={placeholder} id={id} className={classNames('border-gray-custom border-custom rounded-custom text-2xl bg-transparent text-zinc-200 font-light pl-4 py-2 placeholder:font-light placeholder:text-gray-custom', {
        'font-[caption] text-[22.5px] placeholder:font-urbanist placeholder:text-2xl': type === 'password'
      })} />
    </div>
  )
}