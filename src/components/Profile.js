import React, { Component } from 'react';
import ImgProfile from '../Image/minh.jpg'
import {HashLink as Link} from 'react-router-hash-link'
class Profile extends Component {
    render() {
        return (
            <div>
                <div className = 'card'>
                    <div className = 'card-image'>
                        <img className = 'activator' src = {ImgProfile} alt = "Cap Minh"/>
                     </div>
                     <div className = "card-content">
                         <span className = "card-title activator grey-text text-darken-4">Cáp Minh</span>
                         <p>17CNTT1</p>
                     </div>
                </div>
            </div>
        );
    }
}

export default Profile;

