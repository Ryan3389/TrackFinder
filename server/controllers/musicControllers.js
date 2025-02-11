
async function searchByGenre(req, res) {
    try {
        const { genre } = req.query
        const response = await fetch(`https://itunes.apple.com/search?term=${genre}`)

        if (!response.ok) {
            throw new Error("Error fetching music")
        }

        const data = await response.json()

        res.status(200).json({ results: data })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { searchByGenre }