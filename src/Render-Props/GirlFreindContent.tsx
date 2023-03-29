import ShowGirlFreinds from './ShowGirlFreinds';

const GirlFreindContent = () => {
  //Object chứa thông tin của người iwww :))
  const myGirlFriends = [
    {
      id: 1,
      name: "Khanh Huyen",
      email: "khanhhuyen123@freetuts.net",
    },
    {
      id: 2,
      name: "Nguyen Hang",
      email: "nguyenhang3dzas@freetuts.net",
    },
    {
      id: 3,
      name: "Pham Uyen",
      email: "phamuyenz@freetuts.net",
    },
  ];
 
  return (
    <ShowGirlFreinds listGirlFriends={myGirlFriends}>
      {(data : any) => {
        //Nhận data từ component ShowGirlFriends khi nó trả về 
        //bằng đoạn props.children(person)
        return (
            <li key={data.id}>{data.name}</li>    
        )
      }}
    </ShowGirlFreinds>
  );
}

export default GirlFreindContent