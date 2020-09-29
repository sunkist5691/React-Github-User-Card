import React from 'react'
import User from './User'
import axios from 'axios'
import './UserCards.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';

class UserCards extends React.Component {

   state = {
      myInfo: {},
   }

   componentDidMount(){
      axios
         .get('https://api.github.com/users/sunkist5691')
         .then(response => {
            console.log(response)
            this.setState({
               ...this.state,
               myInfo: response.data
            })
         })
   }

   render() {

      return (

         <div className='userCards'>
            <div className='myCard'>
               <h3>{this.state.myInfo.name === null ? this.state.myInfo.login : this.state.myInfo.name}</h3>
               <img src={this.state.myInfo.avatar_url} alt={`${this.state.myInfo.name} profile`}/>
               <p><AccountBoxIcon/>{this.state.myInfo.login}</p>
               <p><PeopleIcon/>{this.state.myInfo.followers} : {this.state.myInfo.following}</p>
               <p><LocationOnIcon/>{this.state.myInfo.location !== null ? this.state.myInfo.location : 'N/A' }</p>
               <a href={this.state.myInfo.html_url} target='_blank'>Visit Github</a>
            </div>
            {
               this.props.cards.map((eachUser => {
                  return <User key={eachUser.id} eachUser={eachUser}/>
               }))
            }
         </div>

      )
   }
}

export default UserCards