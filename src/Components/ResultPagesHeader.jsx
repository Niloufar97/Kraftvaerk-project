import React from "react";
import Search from "./Search/Search"
import DateRange from "./DateRange/DateRange"
import Button from "./Button";

function ResultPagesHeader(){
    return(
       <div className="mainBtn">
         <Search />
         <DateRange />
         <div className="reload-btn-dev">
            <Button btnName="Reload tests" color="#009688" />
            
          </div>
       </div>
    )
};

export default ResultPagesHeader;