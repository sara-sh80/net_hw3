import React from "react";
import ReactDOM from "react-dom";
// import Page from "./Components/Page";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render( <BrowserRouter>
                        <App/>
                 </BrowserRouter>, document.getElementById("root"))
