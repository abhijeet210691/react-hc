import { useState } from "react";
import BgChanger from "./BgChanger";
import Counter from "./Counter";
import InputBox from "./InputBox";
import Password from "./Password";
import Tailwind from "./Tailwind";

function App() {
  const[amount, setAmount] = useState(0);
  const[from, setFrom] = useState('usd');
  const[to, setTo] = useState('inr');
  const[convertedAmount, setconvertedAmount] = useState(0);
  
  return (
    <>
    {/* <h1>React Basic</h1>
    <Counter/>
    <Tailwind/> 
    <BgChanger/> */}
    {/* <Password/> */}
    <InputBox/>
    </>
  );
}

export default App;
