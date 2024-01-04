import React, {Component} from 'react';
import PageOneStyle from "../Css/PageStyle.css"
import master from "../Css/master.css"
import {Link, Route, withRouter} from "react-router-dom";
import TableComp from "./TableComp";
import axios from "axios";

class Page extends Component {


    render() {
        const { match } = this.props;
        const { page_id = 1} = match.params;
        const next_page = parseInt(page_id) + 1
        const prev_page = parseInt(page_id) - 1
        return (
               <div className="main-container">
                   <div className="container-table">
                       <TableComp page_id={page_id} />
                   </div>
                   {
                       page_id == 1 ? <br/>:
                           <div className="container-btn">
                               <button className="btn-prev"><Link to={"/" + prev_page}>Previous Page</Link></button>
                           </div>
                   }
                   {
                       page_id == 5 ? <br/> :
                           <div className="container-btn">
                               <button className="btn-next"><Link to={"/" + next_page}>Next Page</Link></button>
                           </div>
                   }
               </div>
        );
    }
}

export default Page;