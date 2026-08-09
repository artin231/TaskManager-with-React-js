import { Link } from "react-router-dom"

let Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>صفحه اصلی</Link></li>
                    <li><Link to='/about'>درباره ی ما</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header