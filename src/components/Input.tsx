import classNames from 'classnames'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  type: HTMLInputTypeAttribute
  label: string
  placeholder: string
  id: string
  name: string
}

export default function Input({ label, placeholder, type, id, name }: InputProps) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='ml-2 mb-2 text-white lg:text-2xl xs:text-xl text-lg'>{label}</label>
      <input name={name} autoComplete='off' type={type} placeholder={placeholder} id={id} className={classNames('border-gray-custom border-custom rounded-custom bg-transparent text-zinc-200 font-light pl-4 xs:pr-20 pr-4 py-2 placeholder:font-light placeholder:font-urbanist font-sans placeholder:text-gray-custom lg:text-2xl xs:text-xl text-lg')} />
    </div>
  )
}