import './option.css';

function Options({values, changeOptions}) {
    var tifOptions = Object.keys(values).map(function(key) {
        return <div class="option">
        <label for="answer-1">
            <input type="radio" id="answer-1" name="answer" value={key} onChange={(e, value) => changeOptions(e, key)} />
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
