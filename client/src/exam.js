import './exam.css';
import Questions from './components/questions';
import RightPannel from './components/rightPannel';
import React, { useState, useEffect } from 'react';
function Exam() {
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionId, setQuestionId] = useState(0);
  const [userAnsers, setuserAnsers] = useState([]);
  const [userSelected, setuserSelected] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:3000/api/questions')
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
          {data && <RightPannel count={data.length} selectedIndex={question.id} />}
        </section>
      </div>
    </div>

  );
}

export default Exam;
