import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from "@fortawesome/free-solid-svg-icons"

import './header.scss'


function Header(props: any) {
    return (
        <header className="app-header">
            <div className="logo-header">
                <FontAwesomeIcon icon={faBook} size="2x" />
            </div>
            <ul className="menu">
                {props.children}
            </ul>
        </header>
    )
}

export default Header