import "./searchItems.css"

const SearchItems = () => {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">
                Tower Street Apartments
            </h1>
            <span className="siDistance">
                500m from Center
            </span>
            <span className="siTaxiOp">
                50$ for Airport Taxi
            </span>
            <span className="siSubtitle">
                Studio Apartment with Air Conditioning
            </span>
            <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">
                Free cancellation
            </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>

        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>7.4</button>
            </div>
            <div className="siDetailText">
                <span className="siPrice">
                    $199
                </span>
                <span className="siTaxOp">
                    Includes Taxes and fees
                </span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
        {/* <div className="siClassDetails">
            details
        </div> */}
    </div>
  )
}

export default SearchItems
