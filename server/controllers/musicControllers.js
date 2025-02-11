async function searchByGenre(req, res) {
    const { genre } = req.query
    try {
        if (!genre) {
            return res.status(400).json({ error: "Genre is required" })
        }

        const url = `https://itunes.apple.com/search?term=${genre}&media=music`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Bad response: ${response.status}`)
        }

        const data = await response.json()
        res.status(200).json(data) // Return API data directly
    } catch (error) {
        console.error("Fetch Error:", error)
        res.status(500).json({ error: "Failed to fetch music data" })
    }
}

module.exports = { searchByGenre }

// async function searchByGenre(req, res) {
//     try {
//         const { genre } = req.query
//         const response = await fetch(`https://itunes.apple.com/search?term=${genre}`)

//         if (!response.ok) {
//             throw new Error("Error fetching music")
//         }

//         const data = await response.json()

//         res.status(200).json(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


module.exports = { searchByGenre }