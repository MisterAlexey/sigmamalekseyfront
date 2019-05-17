import React from 'react';


class Regist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           login: "",
           password: '',
           email: '' 
        }
        this.checking =  this.checking.bind(this)
        this.onChange =  this.onChange.bind(this)
      }
    onChange(e){
        var {name, value} = e.currentTarget;
        this.setState({[name]: value})
    }
    checking (){
        console.log(this.state.login, this.state.password, this.state.email)
        if(this.state.login === '' || this.state.password_1 === '' || this.state.password_2 === '' || this.state.email === ''){
            alert('Please, fill all fields')
        } else{
            if(this.state.email.indexOf('@') === -1){
                alert('Enter correct Email')
            }else{
                if(this.state.password_1 !== this.state.password_2){
                    alert('Please, enter same passwords')
                }else{
                        fetch('https://wishlistvk.ml/reg?login='+this.state.login+'&password='+this.state.password_1+"&email="+this.state.email)
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
            <input name="email" placeholder="Enter email" type="text" onChange={this.onChange}/>
            <br />
            <input name="password_1" placeholder="Enter password" type="password" onChange={this.onChange}/> 
            <br /> 
            <input name="password_2" placeholder="Reply password" type="password" onChange={this.onChange}/> 
            <br />  
            <button name='Registration' onClick={this.checking}>Create account</button>
            <a onClick={() =>{this.props.go('login')}} href='#'>Логин</a>
            </div>
        )
    }
}

export default Regist;