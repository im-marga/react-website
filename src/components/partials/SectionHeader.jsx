import React from 'react'

const SectionHeader = ({tag, primary, secondary, IsInvert = false }) => {
  return (
    <>
      <span className="uppercase text-2xl ">{tag}</span>
      <h2 className={`${IsInvert ? "text-white" : "text-primary"}`}>
        {primary} &nbsp;
        <span className={`${IsInvert ? "text-primary" : "text-primary-dark"}`}>
          {secondary}
        </span>
      </h2>

    </>
  )
}

export default SectionHeader