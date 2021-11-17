import React from 'react'
import './EmojiItem.css'

export default function EmojiItem(props) {
  const {title, symbol, keywords} = props
  return (
    <div className="cntemj">
      <div className="emojiBox">{symbol}</div>
      <div className="cntinner">
        <div className="title">{title}</div>
        <div className="keywords">{keywords}</div>
      </div>
    </div>
  )
}
