import React, { useState } from 'react'
import axios from 'axios'
import './Autocomplete.css'

function Autocomplete() {
    const [searchValue, setSearchValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [apiDone, setApiDone] = useState(false)


    //Handles when a suggestion is clicked
    const handleSuggestionClick = (e) => {
        setSearchValue(e.target.dataset.name)
        setShowSuggestions(false)
    }

    //Handles when input is supplied to the search bar
    const handleInputChange = (e) => {
        // console.log("start")

        //Before the API call is made, set search value to what is input and show suggestions
        setApiDone(false)
        setShowSuggestions(true)
        setSearchValue(e.target.value)

        //If the search is not an empty string, fetch API and set the response to suggestions
        if(e.target.value !== "") {
            axios.get('/students/', { params: {
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

    //With the suggestions from the API call, get the HTML list elements for each suggestion
    const getSuggestions = () => {
        return (
            <ul>
                {suggestions.map((suggestion, idx) => {
                    const firstName = suggestion.firstName
                    const lastName = suggestion.lastName
                    const fullName = firstName.concat(" ", lastName)

                    //This is where character bolding is done. If the search is done by firstname, bold the first name
                    if(fullName.toLowerCase().indexOf(searchValue.toLowerCase()) === 0) {
                        // console.log(fullName)
                        return (
                            <li data-name={`${suggestion.firstName} ${suggestion.lastName}`} className="suggestion" key={`${suggestion.firstName}-${suggestion.id}`} onClick={handleSuggestionClick}>
                                <b>{fullName.slice(0, searchValue.length)}</b>{fullName.slice(searchValue.length)} <span className="grade">- {suggestion.grade}th grade</span>
                            </li>
                        )
                    }
                    //This is where last name bolding is done
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


    //This is where the rendered suggestions are set
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