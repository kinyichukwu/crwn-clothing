import './button.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

function Button({children, buttonType, click, ...otherProps}) {
  return (
    <button onClick={click} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
    {children}
    </button>
  )
}

export default Button