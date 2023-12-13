import './DateRange.css'

function DateRange(){
    return(
        <div className="selectDiv">
           <p className="select-p">Select an option</p>
            <select className="search-inputs options">
              <option className="select-options" value="1">1 day</option>
              <option className="select-options" value="7">7 day</option>
              <option className="select-options" value="14">14 day</option>
              <option className="select-options" value="90">90 day</option>
              <option className="select-options" value="365">365 day</option>
            </select>
          </div>
    )
}
export default DateRange