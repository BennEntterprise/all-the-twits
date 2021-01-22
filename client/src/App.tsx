import React, { useState } from 'react'
import './App.css'

import sampleData from './data/sampleTweets.json'

function App() {
  const [liveDataPull, setLiveDataPull] = useState(false)
  const [userToSearch, setUserToSearch] = useState('')

  // 1 Make Request to Twitter API to Obtain the ID Of the Target User
  // 2 Get the latest tweets from each user

  const getLatestTweets = () => {
    alert('Ok Searching for ' + userToSearch)
  }

  console.log(sampleData.data)
  const tweets = sampleData.data

  return (
    <div className='App'>
      <p>Type the User to Search (without @ sign)</p>
      <div>
        <input
          value={userToSearch}
          onChange={(e) => setUserToSearch(e.target.value)}
        />
        <button onClick={getLatestTweets}>Search</button>
      </div>

      {tweets.map((tweet: any) => {
        return (
          <p>
            {tweet.created_at}:{tweet.text}
          </p>
        )
      })}
    </div>
  )
}

export default App
