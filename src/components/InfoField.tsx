interface InfoFieldProps {
  fieldName: string
  fieldValue?: string | number
}

export default function InfoField({ fieldName, fieldValue }: InfoFieldProps) {
  return (
    <div className='border-b-custom border-gray-custom flex justify-between items-center py-4 px-6 gap-x-12 w-2/3 text-white xs:text-2xl text-lg font-light'>
      <p>{fieldName}</p>
      <p className='overflow-x-auto scrollbar-custom'>{fieldValue}</p>
    </div>
  )
}