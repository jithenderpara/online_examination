import './rightPannel.css';
import SummaryGrid from '../summaryGrid';
import Stopwatch from '../stopwatch';
function RightPannel() {
    return (
        <aside class="right-panel">
           <Stopwatch/>
            <h1>REASONING</h1>
            <div class="grid-container">
                <div class="grid-item"><span></span>1</div>
                <div class="grid-item"><span></span>2</div>
                <div class="grid-item"><span></span>3</div>
                <div class="grid-item"><span></span>4</div>
                <div class="grid-item"><span></span>5</div>
                <div class="grid-item"><span></span>6</div>
                <div class="grid-item"><span></span>7</div>
                <div class="grid-item"><span></span>8</div>
                <div class="grid-item"><span></span>9</div>
                <div class="grid-item"><span></span>10</div>
                <div class="grid-item"><span></span>11</div>
                <div class="grid-item"><span></span>12</div>
                <div class="grid-item"><span></span>13</div>
                <div class="grid-item"><span></span>14</div>
                <div class="grid-item"><span></span>15</div>
                <div class="grid-item"><span></span>16</div>
                <div class="grid-item"><span></span>17</div>
                <div class="grid-item"><span></span>18</div>
            </div>
            <SummaryGrid />
        </aside>
    );
}

export default RightPannel;
