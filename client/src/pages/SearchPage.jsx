import { useState } from "react"
import SongCard from '../components/SongCard'
function SearchPage() {
    const [formState, setFormState] = useState({
        searchTerm: ""
    })
    const [searchState, setSearchState] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/music/search', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState)
            })

            if (!response.ok) {
                throw new Error('Error searching for music')
            }

            const data = await response.json()

            const topResults = data.results.slice(0, 9)

            const updateSearchState = topResults.map(song => ({
                artistName: song.artistName,
                collectionName: song.collectionName,
                img: song.artworkUrl100
            }))

            setSearchState(updateSearchState)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} className="search-form">
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    onChange={handleChange}
                    placeholder="Tim Mcgraw"
                />
                <input type="submit" value="Search" className="search-btn" />
            </form>
            <section className="music-section">
                <div className="music-container">
                    {searchState.map((song, index) => (
                        <SongCard
                            artistName={song.artistName}
                            collectionName={song.collectionName}
                            img={song.img}
                            key={index}
                        />
                    ))}
                </div>
            </section>
        </>



    )
}

export default SearchPage