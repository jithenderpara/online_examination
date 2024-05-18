import './buttons.css';
import React, { Component }  from 'react';
function Buttons({onClickCallback}) {
    return (
        <div class="buttons">
            <button class="grid-btn previous-btn" onClick={(event)=>onClickCallback(event,'Previous')}>
                Previous
            </button>
            <button class="grid-btn rev-btn" onClick={(event)=>onClickCallback(event,'Review')}>
                mark for Review and next
            </button><button class="grid-btn next-btn" onClick={(event)=>onClickCallback(event,'Next')}>
                Next
            </button><button class="grid-btn clear-ans" onClick={(event)=>onClickCallback(event,'clear')}>
                clear Answer
            </button><button class="grid-btn finish-btn" onClick={(event)=>onClickCallback(event,'Finish')}>
                Finish
            </button>
        </div>
    );
}

export default Buttons;
