import { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <>
            <input
                className="searchbar"
                type="text"
                placeholder="What would you like to see?"
                value={search}
                onChange={(evento) => setSearch(evento.target.value)}
            />
        </>
    );
}

export default SearchBar;
