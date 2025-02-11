import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav>
                <p>TrackFinder</p>
                <span className="nav-links">
                    <Link to={`/music?genre=${encodeURIComponent('country')}`}>Country</Link>
                    <Link to={`/music?genre=${encodeURIComponent('rock')}`}>Rock</Link>
                    <Link to={`/music?genre=${encodeURIComponent('pop')}`}>Pop</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar