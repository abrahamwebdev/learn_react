import React from 'react'

function Count({text,count}) {
	console.log(`Rendering  ${text}`)
  return (
    <div className='App'>
     {text}-{count}
    </div>
  )
}
export default React.memo(Count)