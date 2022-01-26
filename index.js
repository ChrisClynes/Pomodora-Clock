
class App extends React.Component {
    constructor(props) {
        super(props);
        this.startClock = undefined;//used as setInterval to access globally in eventhandlers
        this.state = {
            sessionOrBreak: 'Session',
            breakLength: '5',
            sessionLength: '25',
            timer: '1500',
            isPlaying: false

        }
    }
  
    clockTime = () => {
        let minutes = Math.floor(this.state.timer / 60);//takes state's timer and divides by 60, round down to get the current minute (left side of clock)
        let seconds = this.state.timer - (minutes * 60);//takes state's timer and subtracts current minute converted to seconds to get remainder seconds (right side of clock)
        seconds = seconds < 10 ? '0' + seconds : seconds;//shorthand if else to add 0's to keep clock always at 4 didgits
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':' + seconds;
    }
    
    //---------------Play/Pause/Reset-----------
    //event handlers are arrow funtions so they dont need the this.bind(this) since arrow functions dont rescope "this" keyword.
    handlePlayPause = (props) => {
        if (this.state.isPlaying === false){
            document.getElementById("playPause").classList.remove('fa-play');//changes play/pause icon depending on isPlaying when handler activated
            document.getElementById("playPause").classList.add('fa-pause');
            document.getElementById("time-left").style.backgroundColor = "rgb(54, 196, 108)"; 
        }
        if (this.state.isPlaying === true) {
            clearInterval(this.startClock)
            document.getElementById("playPause").classList.remove('fa-pause');
            document.getElementById("playPause").classList.add('fa-play');
            document.getElementById("time-left").style.backgroundColor = "rgb(192, 230, 245)"; 
            this.setState({isPlaying: false});
        }else {
        this.setState({isPlaying: true});  
        this.startClock = setInterval(() => {
                const { timer, sessionOrBreak, sessionLength, breakLength} = this.state;
                if(timer == 0) {
                    if(sessionOrBreak == 'Session'){
                        this.beepSound.play();
                        this.setState({
                            sessionOrBreak: 'Break'                        
                            });
                        document.getElementById("time-left").style.backgroundColor = "tomato";   
                        }else if(sessionOrBreak == 'Break'){
                            this.beepSound.play();
                            this.setState({
                                sessionOrBreak: 'Session',
                            });
                            document.getElementById("time-left").style.backgroundColor = "rgb(54, 196, 108)";
                        }
                            else {
                                return
                             }
                    }         
                this.setState({
                    timer: timer > 0 ? timer - 1 : sessionOrBreak == 'Break' ? sessionLength * 60 : breakLength * 60
                }); 
            }, 1000);
        }
    }
 
    handleReset = () => { 
        clearInterval(this.startClock)
        document.getElementById("playPause").classList.remove('fa-pause');
        document.getElementById("playPause").classList.add('fa-play');
        document.getElementById("time-left").style.backgroundColor = "rgb(192, 230, 245)";
        this.beepSound.pause();
        this.beepSound.currentTime = 0;
        this.setState({
            sessionOrBreak: 'Session',
            breakLength: '5',
            sessionLength: '25',
            timer: '1500',
            isPlaying: false
        });
    }

    //------------Increment Handlers-------------
    handleBreakIncrease = () => {
        const breakVal = this.state.breakLength
        this.setState({
            breakLength: breakVal < 60 ? String(Number(breakVal) + 1) : breakVal
        });
    }
    handleBreakDecrease = () => {
        const breakVal = this.state.breakLength
        this.setState({
            breakLength: breakVal > 1 ? String(Number(breakVal) - 1) : breakVal
        });
    }
    handleSessionIncrease = () => {
        const sessionVal = this.state.sessionLength
        this.setState({
            sessionLength: sessionVal < 60 ? String(Number(sessionVal) + 1) : sessionVal,
            timer: sessionVal < 60 ? String(Number(sessionVal) + 1)  * 60 : this.state.timer//accurately update session val to timer
        });
    }
    handleSessionDecrease = () => {
        const sessionVal = this.state.sessionLength
        this.setState({
            sessionLength: sessionVal > 1 ? String(Number(sessionVal) - 1) : sessionVal,
            timer: sessionVal > 1 ? String(Number(sessionVal) - 1) * 60 : this.state.timer
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
                                <button id="start_stop" className="btn session-controls positionLeft" onClick={this.handlePlayPause}>
                                        <i id="playPause" className="fa fa-play fa-2x"></i>
                                        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                                            ref={(audio) => {this.beepSound = audio}}
                                        ></audio>
                                </button>
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
                                <button id="session-increment" className="btn incrementLeft" onClick={this.handleSessionIncrease}><i className="fa fa-arrow-up fa-2x"></i></button>
                                    <div id="session-length" className="incrementCenter">{sessionLength}</div>
                                <button id="session-decrement" className="btn incrementRight" onClick={this.handleSessionDecrease}><i className="fa fa-arrow-down fa-2x"></i></button>
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