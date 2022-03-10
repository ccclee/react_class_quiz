import PropTypes from 'prop-types';
import ControlButton from './ControlButton.js'

// Main component
const Questions = ({id, question, option1, option2, option3, selected, points1, points2, points3, onChange, handlePercentage}) => {
  const nextQuestionId = parseInt(id) + 1
  var nextQuestion = "question" + nextQuestionId;


  // Verify if an option is picked. If not verified, then don't apply Link
  const verifyChecked = (e) => {
    if (selected == "option0"){
      e.preventDefault()
      alert("Please make sure you have an option checked");
    }
    // Else force progress bar change
    else {
      handlePercentage();
    }
  }

  /* If question 6, show results */
  if (nextQuestionId == 6){
    nextQuestion = "summary";
  }
  return (
    <>
      <div className="questionList">
        <h1>{question}</h1>
        <label className="questions"><input name={'question'+id} className="questionRadio" onChange={(e) => onChange(id, e.target.value)} type="radio" checked={selected == "option1" ? true : false} value="option1"/>{option1}</label>
        <label className="questions"><input name={'question'+id} className="questionRadio" onChange={(e) => onChange(id, e.target.value)} type="radio" checked={selected == "option2" ? true : false} value="option2"/>{option2}</label>
        <label className="questions"><input name={'question'+id} className="questionRadio" onChange={(e) => onChange(id, e.target.value)} type="radio" checked={selected == "option3" ? true : false} value="option3"/>{option3}</label>
      </div>
      <ControlButton color='blue' onClick={e => verifyChecked(e)} link={nextQuestion} text="Next"/>
    </>
  )
}
export default Questions

// Prototypes
Questions.defaultProps = {
  id: 0,
  question: 'Placeholder question',
  option1: 'placeholder',
  option2: 'placeholder',
  option3: 'placeholder',
}
Questions.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  option3: PropTypes.string.isRequired,
}
