interface ErrorMessageProps {
  message?: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className='h-4 px-4'>
      {message && (
        <p className='text-red-700'>{message}</p>
      )}
    </div>
  )
}