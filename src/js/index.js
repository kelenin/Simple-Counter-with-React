//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCountes.jsx";

//render your react application
const counter=0;
setInterval(function() {
    ReactDOM.render(
        <SecondsCounter digito={counter} />, document.querySelector("#app")
    );
}, 1000);
