import './questions.css';
import Options from '../option';
import Buttons from '../buttons';
import React, { useState, useEffect } from 'react';
function Questions({ questionInfo = { question: "", id: 0, value: null }, clickCallback, saveOptions, userAns = { value: null } }) {
    // const value = userAns.value
    // console.log(value, '00000000000000000000000000000000000000')
    const [selected, setSelected] = useState(null);
    const [answer, setAnswer] = useState(null);
    useEffect(() => {
        setSelected()
    }, [questionInfo.id])
    console.log(questionInfo, '-------------------------question')
    // const{question}= questionInfo
    const options = { "A": questionInfo.A, "B": questionInfo.B, "C": questionInfo.C, "D": questionInfo.D }
    // const qid = questionInfo.id
    const buttonClick = (e, value) => {
        setSelected(null)
        clickCallback(e, value)
    }
    const selectedClick = (e, value) => {
        console.log(value)
        setSelected(e.target.value)
        saveOptions(e, { "id": questionInfo.id, "question": questionInfo.question, "ans": value, "value": questionInfo.answer })
    }
    const showAnswer = (questionInfo) => {
        const option = questionInfo['answer']
        setAnswer(questionInfo[option])
    }
    //  const q= JSON.parse(questionInfo)
    return (
        <div>
            <section className='questionInfo'>
                {/* {JSON.stringify(props)} */}
                {questionInfo && (
                    <div>
                        <p>{(questionInfo.id) + 1}{". "}{questionInfo.question}</p>
                        <Options values={options} selected={selected}
                            changeOptions={(e, value) => selectedClick(e, value)} />
                        <div className='showAnswer'>
                            <button className='checkanswer' onClick={(e) => showAnswer(questionInfo)}>Check Answer</button>
                            {answer && (<p>{answer}</p>)}
                        </div>
                        <Buttons onClickCallback={(e, value) => buttonClick(e, value)} />

                    </div>)}
            </section>
        </div>
    );
}

export default Questions;
