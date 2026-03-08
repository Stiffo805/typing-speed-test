type ButtonProps = {
  text: string
}

const Button = (props: ButtonProps) => {
  return (
    <button className='p-1 px-2 text-[12px] text-(--neutral1) leading-3 border border-(--neutral2) rounded-md'>
      {props.text}
    </button>
  )
}

export default Button
