type ButtonType = {
  text: string;
}

export const Button = (props: ButtonType) => {
  return (
    <button>{props.text}</button>
  )
}
