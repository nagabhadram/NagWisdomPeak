import './BackButton.css'

const BackButton = ({onClick}) => (
  <button type="button" className="back-button" onClick={onClick}>
    Go Back
  </button>
)

export default BackButton
