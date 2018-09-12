import React from 'react';

const Header = () => {
    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-4">
                    <img src="https://rgblog6.wpengine.com/wp-content/uploads/2017/11/rg.png" alt="logo" />
                </div>
                <div className="col-md-9 col-sm-8">
                    <span>RateGravity - Rate Quotes App</span>
                </div>
            </div>
        </div>
    </header>
}

export default Header;