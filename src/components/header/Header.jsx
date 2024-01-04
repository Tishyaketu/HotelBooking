import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faCab, faPlaneArrival, faSquareH, faHeartMusicCameraBolt, faBed, faCalendarDays, faPersonShelter, faCarSide } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';
const Header = ({type}) => {
    const [openDate, setOpenDate]= useState(false);
    const [openOptions, setOpenOptions]=useState(false);
    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room: 1
    });
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [destination,setDestination] = useState("")

    const handleOption = (name,operation) => {
        setOptions(prev=>{return{
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
    }

    const navigate= useNavigate()

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }

  return (
    <div className="header">
        <div className={type==="List" ? "headerContainer listMode" : "headerContainer"}>
              <div className="headerList">
                  <div className="headerListItem active">
                      <FontAwesomeIcon icon={faSquareH}/>
                      <span>Stays</span>
                  </div>
                  <div className="headerListItem">
                      <FontAwesomeIcon icon={faPlaneArrival}/>
                      <span>Flights</span>
                  </div>
                  <div className="headerListItem">
                      <FontAwesomeIcon icon={faCab}/>
                      <span>Cabs</span>
                  </div>
                  <div className="headerListItem">
                      <FontAwesomeIcon icon={faHeartMusicCameraBolt}/>
                      <span>Attractions</span>
                  </div>
                  <div className="headerListItem">
                      <FontAwesomeIcon icon={faCarSide}/>
                      <span>Car Rentals</span>
                  </div>
              </div>
        {type !=="List" && <><h1 className="headerTitle">
            Find deals for any season
        </h1>
        <p className="headerDescription">
            From cozy bed & breakfasts to luxury hotels
        </p>
        <button className="headerButton">
            Sign in / Register
        </button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" 
                        placeholder="Where are you staying?" 
                        onChange={(e)=>setDestination(e.target.value)}
                        className="headerSearchInput"/>
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                        {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection]) }
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPersonShelter} className="headerIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
                        {`${options.adult} adult - ${options.children} children - ${options.room} Room`}
                    </span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">
                                Adult 
                            </span>
                            <div className="optionCounter">
                                  <button 
                                    disabled={options.adult<=1}
                                    className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                  <span className="optionCounterNum">{options.adult}</span>
                                  <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">
                                Children
                            </span>
                            <div className="optionCounter">
                                  <button className="optionCounterButton" 
                                    disabled={options.children<=0}
                                    onClick={() => handleOption("children", "d")}>-</button>
                                  <span className="optionCounterNum">{options.children}</span>
                                  <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">
                                Rooms
                            </span>
                              <div className="optionCounter">
                                  <button 
                                    disabled={options.room<=1}
                                    className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                  <span className="optionCounterNum">{options.room}</span>
                                  <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>}
            </div>
            <div className="headerSearchItem">
                <button className="headerButton" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div></>}
      </div>
    </div>
  )
}

export default Header
