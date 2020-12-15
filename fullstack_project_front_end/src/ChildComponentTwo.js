import React, {Component} from "react";
import axios from "axios";

class ChildComponentTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }


    handleSubmit = (event) => {
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {user} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>
                        <input type="text"
                           name="fullName"
                           placeholder="Your full name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>
                    </p>
                </label>
                {/*<input type="submit" value="Submit"/>*/}
                {/*<label>*/}
                {/*    Email:*/}
                {/*    <input type="text" value={this.state.email} onChange={()=>this.emailChange}/>*/}
                {/*</label>*/}
                {/*<input type="submit" value="Submit"/>*/}
                {/*<label>*/}
                {/*    UserName:*/}
                {/*    <input type="text" value={this.state.username} onChange={()=>this.usernameChange}/>*/}
                {/*</label>*/}
                {/*<input type="submit" value="Submit"/>*/}
            </form>
        );
    }
}

export default ChildComponentTwo;