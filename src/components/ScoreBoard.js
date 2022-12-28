import React from 'react'
import'./ScoreBoard.css'

export const ScoreBoard = ({scores,xPlaying}) => {
  
    const{xScore,oScore}=scores
  return (
    <div className='ScoreBoard'>
      <div></div>
      {/* console.log(scores) */}
        <span className={`score x-score ${!xPlaying&&"inactive"}`}>X-{xScore}</span>
        <span className={`score o-score ${xPlaying&&"inactive"}`}>O-{oScore}</span>
        </div>
  )
}
