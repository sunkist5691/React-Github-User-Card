import React from 'react'
import './User.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';

class User extends React.Component {

   render() {

      return(

         <div className='user'>
            <h3>{this.props.eachUser.name === null ? this.props.eachUser.login : this.props.eachUser.name}</h3>
            <img src={this.props.eachUser.avatar_url} alt={`${this.props.eachUser.name} profile`}/>
            <p><AccountBoxIcon/>{this.props.eachUser.login}</p>
            <p><PeopleIcon/>{this.props.eachUser.followers} : {this.props.eachUser.following}</p>
            <p><LocationOnIcon/>{this.props.eachUser.location !== null ? this.props.eachUser.location : 'N/A' }</p>
            <a href={this.props.eachUser.html_url}>Visit Github</a>
         </div>

      )

   }

}

export default User