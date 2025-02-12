import { useState } from "react"
function SearchPage() {
    const [formState, setFormState] = useState({
        searchTerm: ""
    })
    // Grab value in input field
    //Send to backend

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
            console.log(topResults)


        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="music-section">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    onChange={handleChange}
                    placeholder="Tim Mcgraw"
                />
                <input type="submit" value="Search" className="search-btn" />
            </form>
        </section>
    )
}

export default SearchPage