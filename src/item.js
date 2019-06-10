import React from 'react';
import {Link} from "react-router-dom"


class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: null
        }
        
      }
    
      componentDidMount(){
          console.log(this.props.location.id)
        fetch("https://sigmamalekseybackend.herokuapp.com/get_worker?_id="+this.props.location.id)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                users: data.user
            })
        })
      }

    
    render(){
        return(
            <div>
                {
                    this.state.users &&
                    <div>
                        <h1>{this.state.users.login}</h1>
                        <h5>{this.state.users.stage} Стаж</h5>
                        <Link
                             to={{pathname: "/"}}>
                            Вернуться обратно
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

export default Item;