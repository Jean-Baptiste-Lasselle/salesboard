import React from 'react';

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div className="has-text-centered">
                    <p>
                        <strong>SALESBOARD</strong> by <a href="http://untheme.com">Winfred Selwyn</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                    </p>
                    <p>
                        <a className="icon" href="https://github.com/winfredselwyn/salesboard">
                        <i className="fa fa-github"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;