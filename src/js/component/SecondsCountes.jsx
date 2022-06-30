import React from "react";

import PropTypes from "prop-types";

import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SecondsCounter(props)
{
    return (<div className="contar">
        <div className="calendario"></div>
        <div className="six">{props.dig_seis}</div>
        <div className="five">{props.dig_cinco}</div>
        <div className="four">{props.dig_cuatro}</div>
        <div className="three">{props.dig_tres}</div>
        <div className="two">{props.dig_dos}</div>
        <div className="one">{props.dig_uno}</div>

    </div>);
}

SecondsCounter.propTypes={
    dig_uno: PropTypes.number,
    dig_dos: PropTypes.number,
    dig_tres: PropTypes.number,
    dig_cuatro: PropTypes.number,
    dig_cinco: PropTypes.number,
    dig_seis: PropTypes.number
}

export default SecondsCounter;