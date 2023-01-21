import React, { Component } from "react";
import "./HomePageStyles.css";
import logo from "./logo.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
    <div className="Main">
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            <img src={logo} width="20%"></img>&nbsp;Pack Your Bags
          </h1>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Is it safe to travel to Kerala?</h2>
          <br></br>
          <p>
          Considering the current situation in Kerala,it’s perfectly 
          safe to travel to Kerala now.The Kerala situation now is quite 
          stable and you can confidently make your travel plans to this
          destination.If you’re a solo traveller, you don’t have to worry 
          since there are local-run homestays in Kerala where you can stay 
          during your travels.Keralites are some of the warmest people you’ll 
          meet who will also guide and assist you during your stay in the region.
          If you’re a female traveller, then also you don’t have to worry since 
          the law and order situation is very good here. Moreover, all state and
          government officials ensure that law and order are strictly followed 
          and that all tourist destinations are safe for travellers. Kerala is
          perfectly safe for foreigners from countries such as the USA, Europe,
          UK, Australia, and China and they are welcome to come and explore the state.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image1}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>
           Kerala government has expanded the safety of Keralas and
            especially foreigners
          </h2>
          <br></br>
          <p>
            It’s been six years since we have defeat terrorism from Kerala.
            But unfortunately, Sri Lanka had to face another most crucial moment
            again by terrorist attacks. But fortunately, the former president
            Maithripala Sirisena allows the military forces to take control of
            everything by giving them full power to defend against them, and the
            military authorities did their job very well. And after the hardest
            time, Again Sri Lanka back to the normal as previous days and you
            are most welcome to travel around anywhere.
          </p>
        </div>

        <div className="container text-left">
          <h2>The extra layer of security</h2>
          <br></br>
          <p>
            If you are a person who already visits Sri Lanka, you will see
            something has changed. Nowadays, you can see each public places
            covered up with Army forces to provide the maximum security for
            everyone. So you really don’t need to worry about safety anymore.
            Just have to enjoy your vacation.
          </p>
        </div>

        <div className="container text-left">
          <h2>Locals are delighted to help foreigners more than ever</h2>
          <br></br>
          <p>
            Every Sri Lankans know what happened to Sri Lankan’s tourism
            industry after the attack. So they want to get into that position
            that they were previously attained and wanted to develop the tourism
            industry more than ever. So when you arrived in Sri Lanka and
            willing to get help from a Sri Lankan, you have to ask, or they will
            help before you asked. That makes you feel good.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image2}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <h2>
            The opinion of some foreign travelers about the current situation in
            Sri Lanka
          </h2>
          <br></br>
          <p>
            If you still confused about your travel plan to Sri Lanka, these
            living proofs will make you feel so good. Harald Baldr: Harald Baldr
            is a Youtuber/traveler who has recently visited Sri Lanka and
            explain the current situation of the country by traveling so many
            places around Sri Lanka. And his YouTube channel contains vlogs he
            created when he was going around this beautiful country Sri Lanka.
            You can see their vlogs on YouTube about the current situation, and
            there are so many on YouTube from the foreigner who visited Sri
            Lanka recently. feel free to check.
          </p>
        </div>

        <br></br>
      </div>
    </div>
    );
  }
}

export default HomePage;
