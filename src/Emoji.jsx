import React,{useState} from 'react'
import emojilist from './emojiList.json'

export default function Emoji() {
  
  const[emoji,setEmoji] = useState("")

  const filterEmojies =(emj) => {
    return emj.title.includes(emoji.toLowerCase()) || emj.keywords.includes(emoji.toLowerCase())
  }

  return (
    <div>
      <input onChange={(event)=>setEmoji(event.target.value)} type="text" value={emoji} />
      {emojilist.filter(filterEmojies).map((emj) => {
        return (
          <div>
            {emj.symbol} {emj.title}
          </div>
        )
      })}
    </div>
  )
}
