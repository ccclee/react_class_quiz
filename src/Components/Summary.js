import sillyIcons from './sillyicons.PNG';
import ControlButton from './ControlButton.js';

// Main component
const Summary = ({questions, onClick}) => {
  var totalPoints = 0;
  // For calculating the points
  const pointCalculation = (question) => {
    // If option1 chosen, add option1 points
    if (question.selected == "option1"){
      totalPoints = totalPoints + question.points1;
    }
    // If option2 chosen, add option2 points
    else if (question.selected == "option2"){
      totalPoints = totalPoints + question.points2;
    }
    // If option3 chosen, add option3 points
    else if (question.selected == "option3"){
      totalPoints = totalPoints + question.points3;
    }
  }

  // Calculate the points
  {questions.map((question) =>
    pointCalculation(question)
  )}
  var determinedClass = "";
  // Determine the class based on totalPoints
  const determineClass = (totalPoints) => {
    // Archer
    if (totalPoints >= -40 && totalPoints <= 40){
      determinedClass = "Archer";
    }
    // Warrior
    else if (totalPoints >= 60 ){
      determinedClass = "Warrior";
    }
    // Mage
    else if (totalPoints <= -60 ){
      determinedClass = "Mage";
    }
  }

  determineClass(totalPoints);

  console.log(totalPoints);

  return (
    <>
      <h1> Summary</h1>
      <img src={sillyIcons} alt="SillyIcons" />
      <h2> Your class is: {determinedClass} </h2>
      <br></br>
      <ControlButton color='blue' onClick={onClick} link="/" text="Restart"/>
    </>
  )
}
export default Summary
