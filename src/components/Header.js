import React from 'react';

function Header(){
    return(<>
    <div className="header">
    <div class="header_links">
    <a href="https://brilliant.org/" className="brilliant_link"><img src="https://hydeparkangels.com/wp-content/uploads/2016/05/Brilliant_Logo1.png" alt="loading" className="brilliant"></img></a>
    <a href="/" class="hdr-link" >Today</a>
    <a href="/" class="hdr-link">Courses</a>
    <a href="/" class="hdr-link">Practise</a>
    <div className="header_buttons">
    <a className="btn1" href="/">Log in</a>
    <a className="btn2" href="/">Sign up</a>
    </div>
    </div>
    </div>

    </>)
}
export default Header;