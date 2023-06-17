interface InfoFieldProps {
  fieldName: string
  fieldValue?: string | number
}

export default function InfoField({ fieldName, fieldValue }: InfoFieldProps) {
  return (
    <div className='border-b-custom border-gray-custom flex justify-between items-center py-4 px-6 w-2/3 text-white text-2xl font-light'>
      <p>{fieldName}</p>
      <p>{fieldValue}</p>
    </div>
  )
}