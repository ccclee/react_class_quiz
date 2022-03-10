import sillyIcons from './sillyicons.PNG';
import ControlButton from './ControlButton.js';

// Main component
const StartPage = () => {
  return (
    <>
      <h1> Welcome to 3 Class Test.</h1>
      <h2>Are you a Warrior, Archer, or Mage type of person?</h2>
      <img src={sillyIcons} alt="SillyIcons" />
      <br></br>
      <ControlButton color='blue' link="question1" text="Start"/>
    </>
  )
}
export default StartPage
