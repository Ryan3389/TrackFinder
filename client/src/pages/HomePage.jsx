import { Link } from "react-router-dom"
function HomePage() {
    return (
        <section className="hero-section">
            <h1>Discover Music Like Never Before</h1>
            <p>Search, explore, and listen to your favorite tracks, albums, and artists—all in one place</p>
            <Link to='/search' className="cta-btn">Search Music</Link>
        </section>
    )
}

export default HomePage