import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profileimage.jpg';
import Title from './Title';


class App extends Component{
    state = { displayBio: false };

    toggoleDisplayBio = () =>{
        this.setState({ displayBio:!this.state.displayBio });
    }

    render(){
        return (
            <div>
                <img src={profile} alt = 'profile' className = 'profile'></img>
                <h1>Hello!</h1>
                <p>My name is Enjie.</p>
                <Title />
                <p>I am always looking forward to working one meaningful projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Houston, and code every day</p>
                            <p>Love ReactJS</p>
                            <p>Love Snowboarding</p>
                            <button onClick ={this.toggoleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggoleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr></hr>
                <Projects />
                <hr></hr>
                <SocialProfiles />
            </div>
        )
    }
}
export default App;
