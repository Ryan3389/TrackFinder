function SongCard({ artistName, collectionName, img }) {
    return (
        <article>
            <h3>{artistName}</h3>
            <p>{collectionName}</p>
            <img src={img} alt={collectionName} />
        </article>
    )
}

export default SongCard