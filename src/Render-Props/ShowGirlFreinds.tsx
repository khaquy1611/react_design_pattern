const ShowGirlFreinds = ({ listGirlFriends, children }: any) => {
  return (
    <ul>
      {listGirlFriends.map((person: any, index: any) => {
        return children(person)
        // return <li key={person.id}>{person.name}</li>
      })}
    </ul>
  )
}

export default ShowGirlFreinds
