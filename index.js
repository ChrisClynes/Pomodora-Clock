
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sessionOrBreak: 'Session',
            currentTime: '25',
            breakLength: '5',
            sessionLength: '25'

        }
    }
    
    
    render() {
        const {currentTime, breakLength, sessionLength, sessionOrBreak} = this.state;
        return (
            <div id="center-container">
                <div id="clock-container">
                    <div id="app-header">Pomodora Clock</div>
                    <div className="timer-wrapper">
                        <div className="session-wrapper" id="timer-label">{sessionOrBreak}
                        <div id="time-left">{currentTime}</div>
                            <div className="grid-wrapper">
                                <button id="session-play" className="btn session-controls incrementLeft"><span className="fa fa-play fa-2x"></span></button>
                                <button id="session-pause" className="btn session-controls incrementCenter"><span className="fa fa-pause fa-2x"></span></button>
                                <button id="reset" className="btn session-controls incrementRight"><span className="fa fa-refresh fa-2x"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="controls-wrapper">
                        <div className="label-wrapper" id="break-label">Break Length
                            <div className="grid-wrapper">
                                <button type="button" id="break-increment" className="btn incrementLeft"><span className="fa fa-arrow-up fa-2x"></span></button>
                                    <div className="incrementCenter" id="break-length">{breakLength}</div>
                                <button id="break-decrement" className="btn incrementRight"><span className="fa fa-arrow-down fa-2x"></span></button>
                            </div>
                        </div>
                        <div className="label-wrapper" id="session-label">Session Length
                            <div className="grid-wrapper">
                                <button id="session-increment" className="btn incrementLeft"><span className="fa fa-arrow-up fa-2x"></span></button>
                                    <div className="incrementCenter" id="session-length">{sessionLength}</div>
                                <button id="session-decrement" className="btn incrementRight"><span className="fa fa-arrow-down fa-2x"></span></button>
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