import React from 'react';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           login: "",
           password: ''
        }
        this.go_enter =  this.go_enter.bind(this)
        this.onChange = this.onChange.bind(this)
      }
    
      onChange(e){
        var {name, value} = e.currentTarget;
        this.setState({[name]: value})
      }

    go_enter(){
        fetch('https://wishlistvk.ml/login?login='+this.state.login+'&password='+this.state.password)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                          if(data.type === 'bad_pass'){
                              alert('invalid pass')
                          } else {
                              if(data.type === 'bad'){
                                alert("invalid login")
                              }else{
                                  alert('welcome')
                                  localStorage.setItem('user', JSON.stringify(data.user))
                                  this.props.go('profile')
                              }

                          }
                        })
    }
    render(){
        return(
            <div className="login_data">
            <h1>Enter login and password</h1>
            <br />
            <input name="login" onChange={this.onChange} placeholder="Enter login" type="text"/>
            <br />
            <input name="password" onChange={this.onChange} placeholder="Enter password" type="password"/> 
            <br />   
            <button onClick={this.go_enter}>Enter</button>
            <a  onClick={() =>{this.props.go('reg')}} href='#'>Регистрация</a>
            </div>
        )
    }
}

export default Login;