import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home
                    </Link>
                </li>
                <li>
                    <Link to="greeting">Greeting
                    </Link>
                </li>
                <li>
                    <Link to="images">Images
                    </Link>
                </li>


            </ul>


        </div>
    )
}

export default Navbar
