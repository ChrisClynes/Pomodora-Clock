
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sessionOrBreak: 'Session',
            breakLength: '5',
            sessionLength: '25',
            timer: '1500',
            isPlaying: false

        }
    }
    //event handlers are arrow funtions so they dont need the this.bind(this) since arrow functions dont rescope "this" keyword.
    handleReset = () => { 
        this.setState({
            sessionOrBreak: 'Session',
            breakLength: '5',
            sessionLength: '25',
            timer: '1500',
            isPlaying: false
        });
    }

    clockTime = () => {
        let minutes = Math.floor(this.state.timer / 60);//takes state's timer and divides by 60, round down to get the current minute (left side of clock)
        let seconds = this.state.timer - (minutes * 60);//takes state's timer and subtracts current minute converted to seconds to get remainder seconds (right side of clock)
        seconds = seconds < 10 ? '0' + seconds : seconds;//shorthand if else to add 0's to keep clock always at 4 didgits
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':' + seconds;
    }
    
    handlePlay = () => {
        this.setState ({
            timer: "1450"
        });
    }
    handlePause = () => {
        this.handlePlay(pause);
    }
    //------------Increment Handles-------------
    handleBreakIncrease = () => {
        const breakVal = this.state.breakLength
        this.setState({
            breakLength: breakVal < 60 ? String(Number(breakVal) + 1) : breakVal
        });
    }
    handleBreakDecrease = () => {
        const breakVal = this.state.breakLength
        this.setState({
            breakLength: breakVal > 0 ? String(Number(breakVal) - 1) : breakVal
        });
    }
    //------------------------------------------
    render() {
        const { 
                breakLength, 
                sessionLength, 
                sessionOrBreak
            } = this.state;
        return (
            <div id="center-container">
                <div id="clock-container">
                    <div id="app-header">Pomodora Clock</div>
                    <div className="timer-wrapper">
                        <div className="session-wrapper" id="timer-label">{sessionOrBreak}
                        <div id="time-left">{this.clockTime()}</div>
                            <div className="block-wrapper">
                                <button id="session-play" className="btn session-controls positionLeft" onClick={this.handlePlay}><i className="fa fa-play fa-2x"></i></button>
                                <button id="session-pause" className="btn session-controls positionCenter" onClick={this.handlePause}><i className="fa fa-pause fa-2x"></i></button>
                                <button id="reset" className="btn session-controls positionRight" onClick={this.handleReset}><i className="fa fa-refresh fa-2x"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="controls-wrapper">
                        <div className="label-wrapper" id="break-label">Break Length
                            <div className="block-wrapper">
                                <button type="button" id="break-increment" className="btn incrementLeft" onClick={this.handleBreakIncrease}><i className="fa fa-arrow-up fa-2x"></i></button>
                                    <div className="incrementCenter" id="break-length">{breakLength}</div>
                                <button id="break-decrement" className="btn incrementRight" onClick={this.handleBreakDecrease}><i className="fa fa-arrow-down fa-2x"></i></button>
                            </div>
                        </div>
                        <div className="label-wrapper" id="session-label">Session Length
                            <div className="block-wrapper">
                                <button id="session-increment" className="btn incrementLeft"><i className="fa fa-arrow-up fa-2x"></i></button>
                                    <div id="session-length" className="incrementCenter">{sessionLength}</div>
                                <button id="session-decrement" className="btn incrementRight"><i className="fa fa-arrow-down fa-2x"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="author">Created by Chris Clynes</div>
                </div>    
            </div>
        );
    }    
}  

ReactDOM.render(<App/>, document.getElementById("root"));