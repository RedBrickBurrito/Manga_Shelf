import React from "react";
import NavBar from "../../components/NavBar";

/**
 * Header Container
 * @extends {Component<Props>}
 */
class Header extends React.Component {
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <NavBar/>
        )
    }
}
 
export default Header;