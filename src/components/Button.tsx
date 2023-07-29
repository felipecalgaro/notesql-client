import classNames from 'classnames'

interface ButtonProps {
  isOutline: boolean
  palette: 'primary' | 'secondary',
  text: string
  loading?: boolean
}

export default function Button({ isOutline, palette, text, loading }: ButtonProps) {
  const baseClasses = 'shadow-custom rounded-custom px-5 py-1 sm:text-xl xs:text-lg text-base transition-colors duration-300 active:shadow-none active:scale-[0.98]'

  return (
    isOutline ? (
      <button className={classNames(baseClasses, {
        'border-light-primary border-custom text-light-primary hover:text-black hover:bg-light-primary active:border-dark-primary active:bg-dark-primary shadow-light-primary/25': palette === 'primary',
        'border-light-secondary border-custom text-light-secondary hover:text-white hover:bg-light-secondary active:border-dark-secondary active:bg-dark-secondary shadow-light-secondary/25': palette === 'secondary',
      })}>{text}</button>
    ) : (
      <button className={classNames(baseClasses, {
        'border-light-primary border-custom text-black bg-light-primary active:border-dark-primary active:bg-dark-primary shadow-light-primary/25': palette === 'primary',
        'border-light-secondary border-custom text-white bg-light-secondary active:border-dark-secondary active:bg-dark-secondary shadow-light-secondary/25': palette === 'secondary',
        'opacity-75 cursor-default': loading
      })}>{text}</button>
    )
  )
}