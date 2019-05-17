import React from 'react';
import {Link} from "react-router-dom"
import Card from './Card';



class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          users: ''
        }
        
      }
    componentDidMount(){
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                users: data
            })
        })
    }
    render(){
        return(
        <div>
            Hello
            {
                this.state.users && this.state.users.map((user, i) =>
                <Card 
                    key={i}
                    login={user.login}
                    age={user.age}
                    price_hour={user.price_hour}
                    price_night={user.price_night}
                    id={user._id}
                />
                )
            }
        </div>
        )
    }
}

export default Main;