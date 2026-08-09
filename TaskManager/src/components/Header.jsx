import { Link } from "react-router-dom"

let Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'><img src="src/assets/25694.png" alt="" /></Link></li>
                    <li><Link to='/about'><img src="src/assets/free-settings-icon-3110-thumb.png" alt="" /></Link></li>
                </ul>
                                    <img src="/src/assets/ChatGPT Image Aug 9, 2026, 11_33_10 PM.png" alt="" className="logo" />

            </nav>
        </header>
    )
}

export default Header