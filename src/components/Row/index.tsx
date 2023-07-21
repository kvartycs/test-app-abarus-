import React from 'react'

interface RowProps {
  id: number
  title: string
  description: string
}

const Row = ({ id, title, description }: RowProps) => {
  return (
    <>
      <div className="">{id}</div>
      <div className="">{title}</div>
      <div className="">{description}</div>
    </>
  )
}

export default Row
