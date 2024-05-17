import './questions.css';
import Options from '../option';
import Buttons from '../buttons';
function Questions({ questionInfo = { question: "" }, clickCallback, saveOptions }) {
    console.log(questionInfo, '-------------------------question')
    // const{question}= questionInfo
    const options={"A": questionInfo.A, "B": questionInfo.B, "C": questionInfo.C, "D": questionInfo.D}
    // const qid = questionInfo.id
    const buttonClick = (e, value, id) => {
        console.log(value)
        clickCallback(value, id)
    }
    //  const q= JSON.parse(questionInfo)
    return (
        <div>
            <section>

                {/* {JSON.stringify(props)} */}
                {questionInfo && (
                    <div>
                        <p>{(questionInfo.id)+1}{". "}{questionInfo.question}</p>
                        <Options values={options} changeOptions={(e, value)=>saveOptions(e, {"id":questionInfo.id, "question":questionInfo.question, "ans":value, "value":questionInfo.answer})}/>
                        <Buttons onClickCallback={(e, value) => buttonClick(e, value)} />
                    </div>)}
            </section>
        </div>
    );
}

export default Questions;
