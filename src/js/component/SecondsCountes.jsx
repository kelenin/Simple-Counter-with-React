import React from "react";

import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SecondsCounter(props)
{
    return (<div className="contar">
        <div className="calendario"><FontAwesomeIcon icon="faCalendar" /></div>
        <div className="one">0</div>
        <div className="two">0</div>
        <div className="three">0</div>
        <div className="four">0</div>
        <div className="five">0</div>
        <div className="six">0</div>

    </div>);
}

export default SecondsCounter;