import React from 'react';

function Footer() {
    return (
        <footer className="bg-body-tertiary text-center bg-dark container">
            <div className="container p-4"></div>
            <div className="text-center p-3 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2020 Copyright:
                <a className="text-body text-white" href="https://mdbootstrap.com/">Your Website 2019</a>
            </div>
        </footer>
    );
}

export default Footer;
