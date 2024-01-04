import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from "../../components/footer/Footer"
import { useState } from 'react'


const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0);
  const [openSlider,setOpenSlider] = useState(false);
  
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  }

  const handleSlide = (m) => {
    let newSlideNumber;

    if (m==="l"){
      newSlideNumber=slideNumber === 0 ? 5 : slideNumber-1;
    }else{
      newSlideNumber=slideNumber === 5 ? 0 : slideNumber+1;
    }
    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar/>
      {/* fa-solid fa-circle-xmark
      fa-solid fa-angles-left */}
      <Header type="List"/>
      <div className="hotelContainer">
        {openSlider && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpenSlider(false)} />
          <FontAwesomeIcon icon={faAnglesLeft} className='arrow' onClick={()=>handleSlide("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faAnglesRight} className='arrow' onClick={()=>handleSlide("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or Book Now !
          </button>
          <h1 className="hotelTitle">
            Caesers Palace
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>
              3570 Las Vegas Boulevard South, Las Vegas Strip, Las Vegas, NV 89109, United States of America
            </span>
          </div>
          <span className="hotelDistance">
            Located in the real heart of Las Vegas, this property has an 
            excellent location score of 9.0!
          </span>
          <span className="hotelPriceHighlights">
            This luxury hotel and casino on the Las Vegas Strip features celebrity-owned restaurants, 
            The Forum Shops, an upscale spa and 7 swimming pools. All guest rooms offer a flat-screen cable TV.
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(<div className='hotelImageWrapper'>
              <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotleImage'/>
            </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <p className="hotelDesc"> 
              Caesars Palace rooms include an private bathroom with free toiletries. Room service is offered 24 hours a day.

              Dining options include Gordon Ramsay's Pub & Grill, Gordon Ramsay Hell's Kitchen, 
              Mr. Chow, Restaurant Guy Savoy, Nobu, and Bobby Flay's Mesa Grill. The famous 500-item Bacchanal Buffet and casual dining choices like Beijing Noodle No. 9 are located on site.

              The Palace casino features poker, slot machines and table games. The casino also offers a 
              race & sports book. Guests can enjoy specialty cocktails at Cleopatra’s Barge floating 
              lounge or visit the Omnia nightclub.

              The Qua Baths & Spa offers an extensive menu of massage, facials and body treatments. 
              Unique spa experiences such as a Roman Bath hydrotherapy circuit and an Arctic Ice Room 
              where man-made snow falls on spa guests as they relax on heated benches are also available 
              for guest relaxation.

              Couples in particular like the location – they rated it 9.1 for a two-person trip.

              Hotel chain/brand: Caesars Entertainment</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>
                Perfect 1 night stay!
              </h1>
              <span>
                Want a great night's sleep? This property was highly rated for its very comfy beds.
              </span>
              <h2><b>$199 </b>(1 night)</h2>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default Hotel
