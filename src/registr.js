import React from 'react';
import {Link} from "react-router-dom"

class Regist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           login: "",
           password: '',
           phone_number: '' ,
           test: ''
        }
        this.checking =  this.checking.bind(this)
        this.onChange =  this.onChange.bind(this)
      }
    onChange(e){
        var {name, value} = e.currentTarget;
        if(!parseInt(value[value.length-1], 10)){
            value = value.substring(0, value.length - 1);
            this.setState({test: value})
        }else{
            this.setState({test: value})
        }
    }

    checking (){
        console.log(this.state.login, this.state.password, this.state.phone_number)
        if(this.state.login === '' || this.state.password_1 === '' || this.state.password_2 === '' || this.state.phone_number === ''){
            alert('Please, fill all fields')
        } else{
            if(this.state.phone_number.indexOf('@') === -1){
                alert('Enter correct phone_number')
            }else{
                if(this.state.password_1 !== this.state.password_2){
                    alert('Please, enter same passwords')
                }else{
                        fetch('https://wishlistvk.ml/reg?login='+this.state.login+'&password='+this.state.password_1+"&phone_number="+this.state.phone_number)
                        .then(response => response.json())
                        .then(data => {
                          if(data.type === 'just_reg'){
                              alert('Такой пользователь уже есть')
                          } else {
                              alert("Ок")
                          }
                        })
                }            
            }
        }
    }
    render(){
        return(
            <div className="login_data">
            <h1>Or enter your data to create a new account</h1>
            <br />
            <input name="login" placeholder="Enter login" type="text" onChange={this.onChange}/>
            <br />
            <input name="phone_number" placeholder="Enter phone number" type="text" value={this.state.test} onChange={this.onChange}/>
            <br />
            <input name="password_1" placeholder="Enter password" type="password" onChange={this.onChange}/> 
            <br /> 
            <input name="password_2" placeholder="Reply password" type="password" onChange={this.onChange}/> 
            <br />  
            <button name='Registration' onClick={this.checking}>Create account</button>
            <Link
                to={{pathname: "/"}}>
                Вернуться на главную
            </Link>
            </div>
        )
    }
}

export default Regist;