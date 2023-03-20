import React from 'react'

const Container = (props) => {
  return (
    <div className="w-4/5 m-auto h-full">
        {props.children}
    </div>
  )
}

export default Container