import React from 'react';


import './styles/Badge.css'
import confLogo from '../images/logo_gmail.png';


class Badge extends React.Component {
  render() {


    const firstName = "Brayton"
    const lastName = "Samayoa"
        

    return <div className = "Badge">
      <div className = "Badge__header">
        <img src ={confLogo} alt="Logo empresa"/>
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" 
        src="https://www.gravatar.com/avatar?d=identicon" 
        alt="Avatar " />
        <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
      </div>
      
      <div className="Badge__section-info">
        <h3>Fronted Enigeer</h3>
        <div>@Samayoa</div>
      </div>

      <div className="Badge__footer">
        @SamConferencia
      </div>

    </div>
    
  }
}

export default Badge;