function SongCard({ artistName, collectionName, img, index }) {
    return (
        <article key={index}>
            <h3>{artistName}</h3>
            <p>{collectionName}</p>
            <img src={img} alt={collectionName} className="music-img" />
        </article>
    )
}

export default SongCard