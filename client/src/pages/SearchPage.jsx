function SearchPage() {
    return (
        <section className="music-section">
            <form>
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="Tim Mcgraw"
                />
                <input type="submit" value="Search" className="search-btn" />
            </form>
        </section>
    )
}

export default SearchPage