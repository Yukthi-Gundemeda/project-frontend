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
          <h2>Kerala</h2>
          <br></br>
          <p>
          Kerala is a state on the Malabar Coast of India. It was formed on 1 November 1956, 
          following the passage of the States Reorganisation Act, by combining Malayalam-speaking
           regions of the erstwhile regions of Cochin, Malabar, South Canara, and Thiruvithamkoor. Spread over 38,863 km2
           (15,005 sq mi), Kerala is the 21st largest Indian state by area. It is bordered by Karnataka to the north
           and northeast, Tamil Nadu to the east and south, and the Lakshadweep Sea to the west.
          With 33 million inhabitants as per the 2011 census, Kerala is the 13th-largest Indian state by population. 
          It is divided into 14 districts with the capital being Thiruvananthapuram. Malayalam is the most widely
           spoken language and is also the official language of the state.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image1}></img>
        </div>
        <br></br>
        <div className="container text-left">
         
          <br></br>
          <p>
        Kerala has the lowest positive population growth rate in India, 3.44%;
        the highest Human Development Index (HDI), 0.784 in 2018 (0.712 in 2015);
        the highest literacy rate, 96.2% in the 2018 literacy survey conducted by the National Statistical Office,
        India;[8] the highest life expectancy, 77.3 years; and the highest sex ratio, 1,084 women per 1,000 men.
        Kerala is the second-least impoverished state in India according to the Annual Report of
        Reserve Bank of India published in 2013.Kerala is the second-most urbanised major state                                           
        in the country with 47.7% urban population according to the 2011 Census of India. The state topped
        in the country to achieve the Sustainable Development Goals according to the annual report of NITI 
         Aayog published in 2019.[21] The state has the highest media exposure in India with newspapers publishin
       in nine languages, mainly Malayalam and sometimes English. Hinduism is practised by more than
        half of the population, followed by Islam and Christianity.
          </p>
        </div>

        <div className="container text-left">
          
          <br></br>
          <p>
          The economy of Kerala is the 8th-largest in India with ₹8.55 trillion (US$110 billion) in
           gross state domestic product (GSDP) and a per capita net state domestic product of ₹222,000 (US$2,800).
            The tertiary sector contributes around 65% to state's GSVA, while the primary sector contributes only 8%.         
             The state has witnessed significant emigration, especially to the Arab states of the Persian Gulf during
         the Gulf Boom of the 1970s and early 1980s, and its economy depends significantly on remittances
         from a large Malayali expatriate community.
          </p>
        </div>

        <div className="container text-left">
         
          <br></br>
          <p>
          The production of pepper and natural rubber contributes significantly to the total national output.
           In the agricultural sector, coconut, tea, coffee, cashew and spices are important. 
           The state is situated between Arabian Sea to the west and Western Ghats mountain ranges to the east.
          The state's coastline extends for 595 kilometres (370 mi), and around 1.1 million people
          in the state are dependent on the fishery industry which contributes 3% to the state's income.
           Named as one of the ten paradises of the world by National Geographic Traveler,Kerala is one of the
           prominent tourist destinations of India, with coconut-lined sandy beaches, backwaters, hill stations,
           Ayurvedic tourism and tropical greenery as its major attractions.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image2}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <h2>which is the best time to visit Kerala?</h2>
          <br></br>
          <p>
          September to February is the best time to visit Kerala when the weather is relatively cooler.
           While summers (March to May) make the state too hot and the monsoons (June - August) 
           can receiver downpour that can heavier than imagined and is not entirely advisable to all tourists.
            But for some, it can be a beautiful amalgamation of festivals, scenic views and the much talked 
            about Ayurvedic treatments.
          </p>
        </div>

        <br></br>
      </div>
    </div>
    );
  }
}

export default HomePage;
