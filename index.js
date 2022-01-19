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
                        <button  type="button" id="break-increment" className="btn btn-primary"><span class="bi bi-arrow-up-short"></span></button>
                            <div id="break-length">{breakLength}</div>
                            <button id="break-decrement" className="btn btn-primary"><span className="bi bi-arrow-down-short"></span></button>
                    </div>
                </div>
                <div className="label-wrapper" id="session-label">Session Length
                    <div className="grid-wrapper">
                        <button id="session-increment" className="btn btn-primary"><span className="bi bi-arrow-up-short"></span></button>
                            <div id="session-length">{sessionLength}</div>
                        <button id="session-decrement" className="btn btn-primary"><span className="bi bi-arrow-down-short"></span></button>
                    </div>
                </div>
            </div>
        );
    }    
}

ReactDOM.render(<App/>, document.getElementById("root"));