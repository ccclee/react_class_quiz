import React from 'react';
import MenuButton from './Components/MenuButton.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import StartPage from './Components/StartPage.js';
import Questions from './Components/Questions.js';
import Summary from './Components/Summary.js';
import {useState, useEffect} from 'react';
import MyProgressBar from './Components/MyProgressBar.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

// MAIN PROGRAM
// Component
const App = () => {
  /*
  id: id of a question
  option1 : first radio choice
  option2: second radio choice
  option3: third radio choice
  link: a link for mapping in app.js for Route
  selected: selected option
  points1: points for option1
  points2: points for option2
  points3: points for option3

  */
  const defaultQuestions = [
    {
      id: 1,
      question: 'What is your preferred method of defeating the opponents in a medieval battlefield?',
      option1: 'Direct Assault',
      option2: 'Stay back and cause disruption to the enemy',
      option3: 'Study your opponent for weaknesses',
      link: '/question1',
      selected: "option0",
      points1: 20,
      points2: 0,
      points3: -20,
    },
    {
      id: 2,
      question: 'Your group of light cavalry are up against heavily armored cavalry. What do you do?',
      option1: 'Charge and engage',
      option2: 'Feign Retreat',
      option3: 'Full retreat to a better position.',
      link: '/question2',
      selected: "option0",
      points1: 20,
      points2: 0,
      points3: -20,
    },
    {
      id: 3,
      question: 'How would you like to use a bow?',
      option1: 'Bow and quiver.',
      option2: 'Arrows on your hands in front of bow.',
      option3: 'Crossbows',
      link: '/question3',
      selected: "option0",
      points1: 20,
      points2: 0,
      points3: -20,
    },
    {
      id: 4,
      question: 'What melee weapons do you prefer?',
      option1: 'Sword, Axes, Maces, Shields',
      option2: 'Flail',
      option3: 'Spear',
      link: '/question4',
      selected: "option0",
      points1: 20,
      points2: -20,
      points3: 0,
    },
    {
      id: 5,
      question: 'Now in 1700s, what position would you prefer?',
      option1: 'Frontline musketeer',
      option2: 'Artillery/Cannons',
      option3: 'Cavalry',
      link: '/question5',
      selected: "option0",
      points1: -20,
      points2: 0,
      points3: 20,
    },

  ]
  const [questions, setQuestions] = useState(defaultQuestions);

  // progress bar
  const defaultProgressBar = 0;
  const [progressBar, setProgressBar] = useState(defaultProgressBar);

  /* Handles progress bar*/
  const handlePercentage = (e) => {
    // Get current question based on URL
    const currentURL = window.location.href;
    const currentQuestionArray = currentURL.split('/');
    const currentQuestion = currentQuestionArray[currentQuestionArray.length - 1];

    // Get total number of questions
    const totalQuestions = defaultQuestions.length;

    // Split question
    const questionNumberArray = currentQuestion.split('question');
    const questionsAnswered= questionNumberArray[questionNumberArray.length - 1];
  //  console.log(questionsAnswered);

    const percentage = (questionsAnswered/totalQuestions) * 100;
  //  console.log(percentage);
    setProgressBar(percentage);
    //console.log(currentQuestion[currentQuestion.length -1]);
  }

  // Function to detect changes to a question
  const handleQuestionChoice = (id, e) =>{
      // Get new selected value
      const selected = e;
      // Change it
      setQuestions(questions.map((question) =>
        question.id === id ? {
          ...question, selected: selected} : question
        )
      )
  }
  // Restart at summary and reset all data back to default
  const restart = () => {
    setQuestions(defaultQuestions);
    setProgressBar(defaultProgressBar);
  }


    //  console.log(questions)
  return (
    <Router>
    {/* Top Menu Bar */}
    <div className='menuBar'>
      <>
        <MenuButton color='black' link="/" text="Title"/>
        <MenuButton color='black' link="question1" text='# 1'/>
        <MenuButton color='black' link="question2" text="# 2"/>
        <MenuButton color='black' link="question3" text='# 3'/>
        <MenuButton color='black' link="question4" text="# 4"/>
        <MenuButton color='black' link="question5" text='# 5'/>
      </>
    </div>
    {/* Questionare*/}
    <div className='questionareContainer'>
      <div className="questionareDiv">

        {/* Title Page: Show StartPage Component */}
          <Route path='/' exact render={(props) => (
              <StartPage/>
          )} />
        {/* Render questions per path */}
          {questions.map((question) =>
            <Route path={question.link} key={question.id} exact render={(props) => (
              <Questions onChange={handleQuestionChoice} handlePercentage={handlePercentage} {...question}/>
            )} />
          )}

          {/* Title Page: Show Summary Component */}
            <Route path='/summary' exact render={(props) => (
                <Summary onClick={restart} questions={questions}/>
            )} />

      </div>
    </div>
    {/*  Progress Bar */ }
    <div className='bottomBar'>
      <>
      <MyProgressBar percentage={progressBar}/>
      </>
    </div>
    </Router>

  )

}

export default App;
