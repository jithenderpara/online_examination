import './stopwatch.css';
import React, { Component, useState, useEffect } from 'react';
function Stopwatch({clickCallback}) {
    const initialTime = 0;
    const Totaltime = 10;
    const initial = Totaltime; // Initial time in seconds (1 hour)
    const [timeCount, setTimeLeft] = useState(initialTime);
    const [timeL, setTimeL] = useState(initial);
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / Totaltime);
        const minutes = Math.floor((seconds % Totaltime) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    useEffect(() => {
        const TtimerId = setInterval(() => {
            if (timeL > 0) {
                setTimeL(prevTimeL => Math.max(0, prevTimeL - 1));
            } else {
                clearInterval(TtimerId);
                // Handle timer completion (e.g., display message)
                clickCallback(null, 'Finish')
            }
        }, 1000);

        return () => clearInterval(TtimerId);
    }, []);
    useEffect(() => {
        const TotaltimerId = setInterval(() => {
            if (timeCount < Totaltime) {
                setTimeLeft(prevTimeLeft => Math.min(Totaltime, prevTimeLeft + 1));
            } else {
                clearInterval(TotaltimerId);
                // Handle timer completion 
            }
        }, 1000);
        return () => clearInterval(TotaltimerId);
    }, []);
    return (
        <div class="stopwatch">
            <div class="stopwatch">
                <h1 class="stopwatch-h">
                    Time Status
                </h1>
                {/* Display countdown */}
                <span class="timer">{formatTime(timeCount)}</span>
                <div class="total-time-h"><p>
                    Total Time
                    <span class="total-time">{formatTime(timeL)}</span>
                </p></div>
            </div>
        </div>
    );
}

export default Stopwatch;
