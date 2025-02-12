async function searchByGenre(req, res) {
    try {
        const { genre } = req.query
        const response = await fetch(`https://itunes.apple.com/search?term=${genre}`)

        if (!response.ok) {
            throw new Error("Error fetching music")
        }

        const data = await response.json()

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

async function searchMusic(req, res) {
    try {
        const { searchTerm } = req.body

        const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}`)

        if (!response.ok) {
            throw new Error(error)
        }

        const data = await response.json()

        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ errorMessage: "Internal server error" })
    }
}


module.exports = { searchByGenre, searchMusic }