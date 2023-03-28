
import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const EmojiFinder = () => {

  const [searchItem, setsetSearchItem] = useState("");
  const [emoji, setEmoji] = useState([]);

  const inputValueHandler = (e) => {
    setsetSearchItem(e.target.value);
    // console.log(searchItem)
  }

  const onSubmitEmojiHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://emoji-api.com/emojis?search=${searchItem}&access_key=b8cafd81803de9c9944355ef82eff625ec48b9bb`);
      setEmoji(response.data)
    }
    
    console.log(emoji)
  return ( 
    <div className='App'>
      <form onSubmit={onSubmitEmojiHandler}>
        <label htmlFor="Search for Emoji">Search for Emoji: 
          <input type="text" value={searchItem} onChange={inputValueHandler} />
        </label>
        <button type='submit'>Search Emoji</button>
      </form>
      {emoji.map((emoji) => (
        <span key={emoji.code}>{emoji.character}</span>
      ))}
    </div>
  )
}

export default EmojiFinder