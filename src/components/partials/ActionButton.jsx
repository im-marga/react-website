import React from 'react'

const ActionButton = ({label}) => {
  return (
    <button className="py-2 px-8 bg-primary text-white rounded-4xl font-bold text-base">{label}</button>
  )
}

export default ActionButton