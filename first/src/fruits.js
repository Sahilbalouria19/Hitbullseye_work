import React from 'react'

export default function fruits({items}) {
    console.log(items, "<----yoooo");
  return (
    <div>fruits
       <p>This is {items[0]}</p>
       <p>This is {items[1]}</p>
       <p>This is {items[2]}</p>
       <p>This is {items[3]}</p>
       <p>This is {items[4]}</p>
    </div>
  )
}
