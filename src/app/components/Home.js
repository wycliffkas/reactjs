import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000);

        console.log("Constructor");
        
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should Component update", nextProps, nextState);
        // if(nextState.status === 1){
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component unmount");
    }
   
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <p>Hello World {this.props.name}</p>
                        <p>Age {this.state.age}</p>
                        <p>Score {this.state.status}</p>
                        <hr/>
                        {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older</button> */}
                        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me Older</button>
                        <hr/>
                        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                        <hr/>
                        <input type="text" value={this.state.homeLink} 
                            onChange={(event) => this.onHandleChange(event)}/>
                        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change</button>
                    </div>
                </div>
            </div>
       );
   }
}

Home.propTypes = {
    name: PropTypes.string,
    user: PropTypes.object,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}
