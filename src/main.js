import React from 'react';
import {Redirect} from "react-router-dom"
import Card from './Card';

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          users: '',
          auth: false ,
          to: '/login'
        }
        
      }
    componentDidMount(){
            fetch("https://sigmamalekseybackend.herokuapp.com/users")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    users: data
                })
            })
    }
    render(){
        if(this.state.auth){
            return <Redirect to={this.state.to} />
        }
        return(
        <div>
            Hello
            <button onClick={() => this.setState({auth: true, to: '/login'})} >
                Войти в личный кабинет
            </button>
            <button onClick={() => this.setState({auth: true, to: '/reg'})} >
                Зарегистрироваться
            </button>
            <br />

            {
                this.state.users && this.state.users.map((user, i) =>
                <Card 
                    key={i}
                    login={user.login}
                    age={user.age}
                    price_hour={user.price_hour}
                    price_day={user.price_day}
                    id={user._id}
                />
                )
            }
        </div>
        )
    }
}

export default Main;