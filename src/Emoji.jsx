import React,{useState} from 'react'
import EmojiItem from './EmojiItem'
import emojilist from './emojiList.json'
import "./Emoji.css"
export default function Emoji() {
  
  const[emoji,setEmoji] = useState("")

  const filterEmojies =(emj) => {
    return emj.title.includes(emoji.toLowerCase()) || emj.keywords.includes(emoji.toLowerCase())
  }

  return (
    <div className="cnt">
      <input onChange={(event)=>setEmoji(event.target.value)} className="input" type="text" value={emoji} />
      {emojilist.filter(filterEmojies).map((emj) => {
        return (
          <EmojiItem {...emj}/>
        )
      })}
    </div>
  )
}
