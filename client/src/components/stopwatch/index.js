import './stopwatch.css';
import React, { Component }  from 'react';
function Stopwatch() {
    return (
        <div class="stopwatch">
        <h1 class="stopwatch-h">
            Time Status
        </h1>
        <span class="timer">00:00:00</span>
        <div class="total-time-h"><p>
            Total Time
            <span class="total-time">00:00:00</span>
        </p></div>
    </div>
    );
}

export default Stopwatch;
