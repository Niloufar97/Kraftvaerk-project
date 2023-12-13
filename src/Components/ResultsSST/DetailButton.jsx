import React from "react";
import { useNavigate} from 'react-router-dom';

function DetailButton(){
    const navigate = useNavigate();

    return(
        <button 
        className="result-button detail-button"
        onClick={()=>navigate('/SST/details')}
        >Detail</button>
    )
};

export default DetailButton;