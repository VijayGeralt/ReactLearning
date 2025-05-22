import React from 'react'

export const AnotherComponent = ({data, fn}) => {
  return (
    <div>
        <div>Another component displaying data using props = {data}</div>
        <button onClick={() => {fn(data + 10)}}>Another component Click to add 10</button>
    </div>
  )
}
