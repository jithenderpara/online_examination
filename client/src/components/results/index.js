import './index.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {GET_RESULTS} from '../apiEndpoints';
function Results({ count, selectedIndex, clickCallback }) {
    const [message, setMessage] = useState('');
    const [data, setData] = useState('');
    let List = ({ value }) => {
        console.log(value)
        const getClass = (i, value) => {
            let classActive = "grid-item"
            if (i == value) {
                classActive = "grid-item active"
            } else if (i < value) {
                classActive = "grid-item selected"
            }
            return classActive
        }
        return <div className="grid-container">{Array.from(Array(count), (e, i) => {
            return <div className={getClass(i, value)} key={i}><span></span>{i + 1}</div>
        })}</div>
    }
    const getResults = async (email) => {
        try {
            const response = await axios.post(GET_RESULTS, { email: email });
            const data = response.data
            if (data.length > 0) {
                console.log('saved in DB successful:', data);
                setData(data[0])
                setMessage('sucess here');
            }
            else {
                console.error(data);
                setMessage('Error in get results');
            }
        } catch (error) {
            console.error(error);
            setMessage('Error in results');
        }
    }
    useEffect(() => {
        getResults('jithu@gmail.com')
    }, [message])
    return (
        <section>
            <div className="container-results">
                <div className="container-left">
                    <div className="title title-left white-color">Your Result</div>
                    <div className="circle">
                        <div className="circle-score white-color">{data.marks}</div>
                        <div className="circle-out-of white-color">of 100</div>
                    </div>
                    <div className="container-left-bottom">
                        <div className="container-left-bottom-compliment white-color">Great</div>
                        {/* <div className="container-left-bottom-description">
                            <p className='white-color'>
                                You scored
                            </p>
                        </div> */}
                    </div>
                </div>

                <div className="container-right-box"></div>
                <div className="container-right">
                    <div className="title title-right">Summary</div>
                    <div className="stat-box">
                    <div className="stat stat-memory">
                            <div className="stat-part-left yellow">
                                <img src="/assets/images/icon-memory.svg" alt="" />Name
                            </div>
                            <div className="stat-part-right">
                                <span className="blue">{data.name}</span>
                            </div>
                        </div>
                        <div className="stat stat-reaction">
                            <div className="stat-part-left red">
                                <img src="/assets/images/icon-reaction.svg" alt="" />Group
                            </div>
                            <div className="stat-part-right">
                                <span className="blue">{data.group}</span>
                            </div>
                        </div>
                        
                        <div className="stat stat-verbal">
                            <div className="stat-part-left green">
                                <img src="/assets/images/icon-verbal.svg" alt="" />Marks
                            </div>
                            <div className="stat-part-right">
                                <span className="blue">{data.marks}</span> / 100
                            </div>
                        </div>
                        <div className="stat stat-visual">
                            <div className="stat-part-left purple">
                                <img src="/assets/images/icon-visual.svg" alt="" />Final Status
                            </div>
                            <div className="stat-part-right">
                                <span className="blue">{data.finalStatus}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Results;
