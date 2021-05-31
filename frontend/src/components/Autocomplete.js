import React, { useState } from 'react'
import axios from 'axios'
import './Autocomplete.css'

function Autocomplete() {
    const [searchValue, setSearchValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [apiDone, setApiDone] = useState(false)

    const handleSuggestionClick = (e) => {
        setSearchValue(e.target.dataset.name)
        setShowSuggestions(false)
    }

    const handleInputChange = (e) => {
        // console.log("start")
        setApiDone(false)
        setShowSuggestions(true)
        setSearchValue(e.target.value)

        if(e.target.value !== "") {
            axios.get('/students', { params: {
                search: e.target.value
            }})
            .then(resp => {
            const searchSuggestions = resp.data
            // console.log(resp.data)
            setSuggestions(searchSuggestions)
            setApiDone(true)
            })
        } else {
            setSuggestions([])
            setShowSuggestions(false)
        }
    }

    const getSuggestions = () => {
        return (
            <ul>
                {suggestions.map((suggestion, idx) => {
                    const firstName = suggestion.firstName
                    const lastName = suggestion.lastName
                    const fullName = firstName.concat(" ", lastName)
                    if(fullName.toLowerCase().indexOf(searchValue.toLowerCase()) === 0) {
                        // console.log(fullName)
                        return (
                            <li data-name={`${suggestion.firstName} ${suggestion.lastName}`} className="suggestion" key={`${suggestion.firstName}-${suggestion.id}`} onClick={handleSuggestionClick}>
                                <b>{fullName.slice(0, searchValue.length)}</b>{fullName.slice(searchValue.length)} <span className="grade">- {suggestion.grade}th grade</span>
                            </li>
                        )
                    }
                    else {
                        return (
                            <li data-name={`${suggestion.firstName} ${suggestion.lastName}`} className="suggestion" key={`${suggestion.firstName}-${suggestion.id}`} onClick={handleSuggestionClick}>
                                {firstName} <b>{lastName.slice(0, searchValue.length)}</b>{lastName.slice(searchValue.length)} <span className="grade">- {suggestion.grade}th grade</span>
                            </li>
                        )
                    }
                })}
            </ul>
        )
    }

    let renderedSuggestions

    if (showSuggestions && searchValue) {
        if (suggestions.length > 0) {
            renderedSuggestions = getSuggestions()
        }
        else if(suggestions.length === 0 && apiDone) {
            renderedSuggestions = (
                    <p>No Matches</p>
            )
        }
    }

    return (
        <div className="search-box">
            <h1 className="title">Student Search</h1>
            <input className='search-bar' type="search" value={searchValue} onChange={handleInputChange} placeholder="Search"></input>
            {renderedSuggestions}
        </div>
    )
}

export default Autocomplete