import React from 'react'

interface Props {
  items: any
}
const ItemList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item : any) => (
        <li key={item.id}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default ItemList
