type VerticalLineProps = {
  heightValue?: string
}

const VerticalLine = (props: VerticalLineProps) => {
  return (
    <div
      className={`w-px bg-(--neutral3)`}
      style={{ height: props.heightValue ?? '15px' }}
    ></div>
  )
}

export default VerticalLine
