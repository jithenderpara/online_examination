import './rightPannel.css';
import SummaryGrid from '../summaryGrid';
import Stopwatch from '../stopwatch';
import React, { Component }  from 'react';
function RightPannel({ count, selectedIndex, clickCallback }) {
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
    return (
        <aside class="right-panel">
            <Stopwatch clickCallback={(e, value)=>clickCallback(e, value)}/>
            <h1>Questions Summary</h1>
            <List value={selectedIndex} />
            {/* <SummaryGrid /> */}
        </aside>
    );
}

export default RightPannel;
