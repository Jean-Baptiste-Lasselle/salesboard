import React from 'react'
import { Link } from 'react-router'

function NavBar () {
    return (
        <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
            <div>
                <div className="main">
                    <div className="title">Main</div>
                    <Link to="/" activeClassName="item active"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Dashboard</span></Link>
                    <Link to="locations" className="item"><span className="icon"><i className="fa fa-map-marker"></i></span><span className="name">Locations</span></Link>
                    <Link to="issues" className="item"><span className="icon"><i className="fa fa-th-list"></i></span><span className="name">Issues</span></Link>
                </div>
            </div>
        </aside>
    );
};

export default NavBar;