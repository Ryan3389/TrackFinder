import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import SongCard from "../components/SongCard"

function MusicPage() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const genre = params.get('genre')
    console.log(genre)
    const [musicState, setMusicState] = useState([])
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`/api/music/genre?genre=${genre}`)

                if (!response.ok) {
                    throw new Error("Error fetching data")
                }

                const data = await response.json()
                const topResults = data.results.slice(0, 9)
                const updateMusicState = topResults.map(song => ({
                    artistName: song.artistName,
                    collectionName: song.collectionName,
                    img: song.artworkUrl100

                }))

                setMusicState(updateMusicState)
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [genre])
    return (
        <section className="music-section">
            <div className="music-container">
                {musicState.map((song, index) => (
                    <SongCard
                        artistName={song.artistName}
                        collectionName={song.collectionName}
                        img={song.img}
                        key={index}
                    />
                ))}

            </div>
        </section>
    )
}
export default MusicPage
