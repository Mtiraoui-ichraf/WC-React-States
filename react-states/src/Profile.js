import React from "react";
import photo from "./image.jpg"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Ichraf Mtiraoui",
        bio: "Full Stack JS developer without experience, Versatile, I master the different technical stages of creating a site or a web application from understanding user needs to frontend and backend development",
        imgSrc: 'photo',
        profession: "Full Stack JS Developer",
      },
      shows: true,
      mountingTime:0
    };
  }

componentDidMount()
{
    setInterval(() => {
        this.setState({mountingTime:this.state.mountingTime+=1})
    },1000)
}


  change=()=> {
    this.setState ({shows: !this.state.shows });
    this.setState ({mountingTime:0});
  }
  render() {
    return (
      <div className="mido">
        {this.state.shows ?<> <h1> Hello I'm {this.state.Person.fullName}</h1>
            <h4> {this.state.Person.bio}</h4>
            <h2> I'm {this.state.Person.profession}</h2>
            <img src={photo} alt='ichraf'></img> 
            <p>Time:{this.state.mountingTime}</p>
            </> : 
            null
        }

       <button onClick={this.change}>Show</button>

      </div>
      
    );
  }
}

export default Profile;
