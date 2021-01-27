import React, { useState } from 'react'
import './App.css'

import tweetBundle from './data/sampleTweets.json'
import senators from './data/senators.json'
import house from './data/house.json'
import TweetCard from './components/TweetCard/TweetCard'
import SenateTable from './components/TweetCard/SenateTable/SenateTable'

interface ITweet {
  author_id: string
  text: string
  created_at: string
  id: string
}
function App() {
  const [liveDataPull, setLiveDataPull] = useState(false)
  const [userToSearch, setUserToSearch] = useState('')

  // 1 Make Request to Twitter API to Obtain the ID Of the Target User
  const usernames = ['aoc', 'tedcruz']
  const getIdsQuery = `https://api.twitter.com/2/users/by?usernames=${usernames.join(
    ','
  )}`
  // 2 Get the latest tweets from each user
  console.log(getIdsQuery)
  console.log(senators)
  console.log(house)
  const getLatestTweets = () => {
    alert('Ok Searching for ' + userToSearch)
  }
  const tweets: ITweet[] = tweetBundle.data
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
      <SenateTable />

      {tweets.map((tweet: any) => {
        let date = tweet.created_at.split('_')
        return (
          <TweetCard
            key={tweet.id}
            userId={tweet.author_id}
            name={tweet.author_id}
            handle='@aoc'
            createDate={new Date().toString()}
            createTime={new Date().getTime()}
            body={tweet.text}
          />
        )
      })}
      <div style={{ position: 'relative' }}>
        <TweetCard
          userId='123'
          name='kyle'
          handle='@kyleBennett1123'
          createDate={new Date().toString()}
          createTime={new Date().getTime()}
          body='This is the body'
        />
      </div>
    </div>
  )
}

export default App
