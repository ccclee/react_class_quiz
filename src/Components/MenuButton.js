import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Main component
const MenuButton = ({color, text, link}) => {
  return (
    <div className='menuButton'>
      <Link to={link} style={{color: color, textDecoration: "none"}}>{text}</Link>
    </div>
  )
}
export default MenuButton

// Prototypes
MenuButton.defaultProps = {
  color: 'black',
  text: 'Menu Option'
}
MenuButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
