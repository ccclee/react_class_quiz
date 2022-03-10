import PropTypes from 'prop-types';

// Main component
const MyProgressBar = ({percentage}) => {

  return (
    <div className='progressBar'>
     <div class="progressBarComplete" style={{width: percentage+'%'}}>{percentage}%</div>
    </div>
  )
}
export default MyProgressBar

// Prototypes
MyProgressBar.defaultProps = {
  percentage: 0,
}
MyProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
}
