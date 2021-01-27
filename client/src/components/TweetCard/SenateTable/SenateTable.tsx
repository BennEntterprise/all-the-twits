import React from 'react'

import senators from '../../../data/senators.json'
const SenateTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Senator</th>
            <th>Professional Twitter Handle</th>
            <th>Personal Twitter Handle</th>
          </tr>
        </thead>
        <tbody>
          {senators.map((senator) => {
            return (
              <tr>
                <td>
                  {senator.first_name} {senator.last_name}
                </td>
                <td>@{senator.social_handles.twitter_professional}</td>
                <td>@{senator.social_handles.twitter_personal}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SenateTable
