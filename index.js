
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            session: 25,
            breakLength: 5,
            sessionLength: 25

        }
    }
    render() {
        const {session, breakLength, sessionLength} = this.state;
        return (
            <div id="container">
                <div className="label-wrapper" id="break-label">Break Length
                    <div className="grid-wrapper">
                        <button type="button" id="break-increment" className="btn btn-primary incrementLeft"><span className="fa fa-arrow-up fa-2x"></span></button>
                            <div className="incrementCenter" id="break-length">{breakLength}</div>
                        <button id="break-decrement" className="btn btn-primary incrementRight"><span className="fa fa-arrow-down fa-2x"></span></button>
                    </div>
                </div>
                <div className="label-wrapper" id="session-label">Session Length
                    <div className="grid-wrapper">
                        <button id="session-increment" className="btn btn-primary incrementLeft"><span className="fa fa-arrow-up fa-2x"></span></button>
                            <div className="incrementCenter" id="session-length">{sessionLength}</div>
                        <button id="session-decrement" className="btn btn-primary incrementRight"><span className="fa fa-arrow-down fa-2x"></span></button>
                    </div>
                </div>
            </div>
        );
    }    
}  

ReactDOM.render(<App/>, document.getElementById("root"));