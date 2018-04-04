import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component {
    //Axios req to get data from server. axios.get matches the app.get
    componentDidMount(){
        axios.get('http://localhost:9000/api/get-stuff').then(resp => {
            console.log('Axios server response ', resp);
        });
    }
    render(){
        return(
            <div>
                <h1>Get Stuff</h1>
            </div>
        )
    }
}

export default GetStuff