import './exam.css';
import Questions from './components/questions';
import RightPannel from './components/rightPannel';
import React, { useState, useEffect } from 'react';
function Exam() {
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionId, setQuestionId] = useState(0);
  const [userAnsers, setuserAnsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/questions')
      .then(response => response.json())
      .then(json => {
        const newdata = json.map((item, idx) => ({
          ...item,
          id: idx
        }))
        setData(newdata)
        setQuestion(newdata[questionId])
      })
      .catch(error => console.error(error));
  }, []);
  const saveOptions=(e, value) => {
    console.log("user selected options", value)
    const allAns= userAnsers
    allAns.push(value)
    setuserAnsers(allAns)
    console.log(allAns)

  }
  const getQuestion = (e, value) => {
    console.log(value, "getQuestion----------- index")
    // setQuestion(data[1])

    if (value === "Previous") {
      setQuestionId(questionId - 1)
      setQuestion(data[questionId -  1])
    } else {
      setQuestionId(questionId + 1)
      setQuestion(data[questionId + 1])
    }

  }
  return (
    <div class="question-section">
      <section class="question">
        <Questions questionInfo={question} clickCallback={(e, value) => getQuestion(e, value)} saveOptions={(e, value) => saveOptions(e, value)}/>
        <RightPannel />
      </section>
    </div>
  );
}

export default Exam;
