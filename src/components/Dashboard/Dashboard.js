import React, { Component } from "react";
import "./DashboardStyles.css";
import loader from "./loader.gif";
import Travel from "./Travel.jpg";
import Travel1 from "./Travel1.jpg";
import sigiriya3 from "./sigiriya3.jpg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">About Us</h1>
            <br></br>
            <div className="container text-center">
              <img src={Travel} width="50%"></img>
            </div>
            <br></br>
            <br></br>
            <p>
               	
              Kerala, located on the south-western tip of India, enjoys unique
               geographical features that have made it one of the most sought-after 
               tourist destinations in Asia. Fondly referred to as ‘God’s Own Country’,
              Kerala was selected by the National Geographic Traveller as one 
              of the 50 destinations of a lifetime and one of the thirteen paradises in the world.
              <br></br>
              <br></br>
              Popularly referred to as 'God's Own Country', Kerala in southwestern India is
              arguably one of the most beautiful states in the country. Home to colourful festivals,
              traditions, attires and sumptuous food, the state is among the top tourist 
              destinations in India. Lush with tropical vegetation, pristine beaches,
              serene backwaters and a variety of flora and fauna, Kerala is an ideal destination
              for honeymooners and families.
              <br></br>
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={Travel1} width="50%"></img>
              </div>
              <br></br>
              <br></br>
              Located on the Malabar coast of Southern India, the state's capital is Kochi (also Cochin).
               Serviced by international and domestic airports, which are further connected by roads
                and rail, Kerala ensures that every corner of it is well accessible by travellers.
                 The highlight of this state for many are the brackish lagoons called backwaters,
                  notably in Alleppey, which are best enjoyed in houseboats. Also famous here are the
                   practices of Ayurveda which have been hailed far and wide for their healing and cleansing attributes.
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={sigiriya3}></img>
              </div>
              <br></br>
              The traditional food, festivals and artforms are enticing to the beholder.
               Onam is the most important festival celebrated with participation from people
                within and outside the state. Kathakali, an essential traditional Indian dance form,
                 is perhaps a significant testament to the colourful and graceful nature of the traditions of Kerala.

              <br></br>
              <br></br>
              Kerala is also sprawling with wildlife sanctuaries, vast tea gardens and quaint hill stations. 
              These places are flocked by tourists throughout the year and have played a significant part
               in Kerala being awarded by the National Geographic Traveller as one of the top 50 destinations in the world..
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
