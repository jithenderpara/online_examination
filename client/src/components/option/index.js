import './option.css';
import React, { useState, useEffect } from 'react';
function Options({values, changeOptions, selected}) {
    // const [selected, setSelected] = useState(null);
    const handleChange=(e, key)=>{
        // setSelected(key)
        changeOptions(e, key)
    }
    var tifOptions = Object.keys(values).map(function(key) {
        return <div class="option">
        <label htmlFor={key}>
            <input type="radio" id={key} checked={key===selected} name="answer" value={key} onChange={(e, value) => {handleChange(e, key)}} />
            {values[key]}
        </label>
    </div>
    });
    return (
        <section class="answer-options">
             {tifOptions}
        </section>
    );
}

export default Options;
