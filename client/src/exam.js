import './exam.css';
import axios from 'axios';
import Questions from './components/questions';
import RightPannel from './components/rightPannel';
import {SAVE_RESULTS, QUESTIONS} from './components/apiEndpoints';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
function Exam() {
  const [data, setData] = useState(null);
  const [userData, setuserData] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionId, setQuestionId] = useState(0);
  const [userAnsers, setuserAnsers] = useState([]);
  const [userSelected, setuserSelected] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    fetch(QUESTIONS)
      .then(response => response.json())
      .then(json => {
        const newdata = json
        setData(newdata)
        setQuestion(newdata[questionId])
      })
      .catch(error => console.error(error));
  }, []);
  const addOrReplace = (array, element) => {
    const i = array.findIndex(e => e.id === element.id);
    if (i > -1) array[i] = element; // (2)
    else array.push(element);
    return array
  }
  const saveOptions = (e, value) => {
    console.log("user selected options", value)
    const allAns = addOrReplace(userAnsers, value)
    setuserAnsers(allAns)
    console.log(allAns)

  }
  const saveResults = async (results) => {
    try {
      const response = await axios.post(SAVE_RESULTS, { results: results, email:'jithu@gmail.com', id:1 });
      // Handle successful login (e.g., redirect to dashboard)
      const data = response.data
      if (data.length > 0) {
        console.log('saved in DB successful:', response.data);
        navigate(`/login`)
      }
      else {
        console.error(data);
        setMessage('Error in saving');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error in saving');
    }
  }
  const getQuestion = (e, value) => {
    console.log(value, "getQuestion----------- index")
    // setQuestion(data[1])

    if (value === "Previous") {
      setQuestionId(questionId - 1)
      setQuestion(data[questionId - 1])
    } else if (value === 'clear') {
      setQuestionId(questionId)
      setQuestion(data[questionId])
    }
    else if (value === 'Review') {
      setQuestionId(questionId + 1)
      setQuestion(data[questionId + 1])
    }
    else if (value === 'Finish') {
      saveResults(userAnsers)
      navigate(`/results`)
    }
    else {
      setQuestionId(questionId + 1)
      setQuestion(data[questionId + 1])
    }
    // findUserAns(question)
  }
  const findUserAns = (element) => {
    const userSelected = userAnsers.find(o => o.id === element.id);
    console.log(userSelected, '-userSelected')
    if (userSelected) {
      setuserSelected(userSelected.value)
    } else {
      setuserSelected(null)
    }
  }
  return (
    <div>
      <div class="question-section">
        <section class="question">
          <Questions userAns={userAnsers.find(o => o.id === questionId)}
            questionInfo={question}
            clickCallback={(e, value) => getQuestion(e, value)}
            saveOptions={(e, value) => saveOptions(e, value)} />
          {data && <RightPannel count={data.length} selectedIndex={question.id} clickCallback={(e, value) => getQuestion(e, value)}/>}
        </section>
      </div>
    </div>

  );
}

export default Exam;
