import './list.css'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import {format} from "date-fns";
import { DateRange } from 'react-date-range'
import SearchItems from '../../components/searchItems/SearchItems'

const List = () => {
  
  const location=useLocation();
  const [destination,setDestination]= useState(location.state.destination)
  const [date,setDate]= useState(location.state.date)
  const [options,setOptions]= useState(location.state.options)
  const [openDate,setOpenDate] = useState(false)
  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (<DateRange
                onChange={(item)=> setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
              />)}  
            </div>
            <div className="lsItem">
              <div className="lsOptions">
              <lable>Options</lable>
              <div className="lsOptionItme">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input min={0} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItme">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input min={0} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItme">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input min={1} type="number" className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItme">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input min={0} type="number" className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItme">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input min={1} type="number" className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>
              Search
            </button>
          </div>
          <div className="listResult">
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
          </div>
        </div>
  
    </div>
      </div>  

  )
}

export default List
