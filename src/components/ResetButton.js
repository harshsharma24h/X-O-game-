import React from 'react'

export const ResetButton = ({resetBord}) => {
  return (
    <>
    <button  type="button" className="btn btn-info Button d-grid gap-7 col-2 mx-auto " onClick={resetBord} >Reset</button>
    </>
  )
}


