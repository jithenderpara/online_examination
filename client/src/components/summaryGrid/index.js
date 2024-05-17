import './summaryGrid.css';

function SummaryGrid() {
    return (
        <aside className='summaryGrid'>
            <p>Summary</p>
            <div className="summary-grid">
                <div className="grid-item-sumarry"></div>
                <p className="summary-text">Answered</p>
                <div className="grid-item-sumarry summary-text-M"></div>
                <p className="summary-text" >Marked</p>

                <div className="grid-item-sumarry"></div>
                <p className="summary-text">Answered</p>
                <div className="grid-item-sumarry"></div>
                <p className="summary-text">Answered</p>
            </div>
        </aside>
    );
}

export default SummaryGrid;
