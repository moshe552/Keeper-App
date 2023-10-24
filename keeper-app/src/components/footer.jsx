import React from "react";

const date = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>The current yeatr is {date}</p>
    </footer>
};

export default Footer;