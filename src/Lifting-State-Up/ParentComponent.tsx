import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [data, setData] = useState("");
  const receiveData = (data : string) => {
    setData(data);
  }
  return (
    <>
        { data }
     <ChildComponent onReceiveData = {receiveData} /> 
    </>
  )
}

export default ParentComponent
