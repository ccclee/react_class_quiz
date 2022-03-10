import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Main component
const ControlButton = ({onClick, color, text, link}) => {

  return (
    <div className='controlButton'>
      <Link to={link} onClick={onClick} style={{color: color, textDecoration: "none"}}>{text}</Link>
    </div>
  )
}
export default ControlButton

// Prototypes
ControlButton.defaultProps = {
  color: 'black',
  text: 'Next'
}
ControlButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
