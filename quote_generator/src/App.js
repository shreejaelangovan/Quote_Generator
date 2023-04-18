// import logo from './logo.svg';
import background from './Assets/bc6.png';
import './App.css';
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const quoteUrl="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw";
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  
  useEffect(() => {
    return () => {
      generateQuote();
    };
  },[]);

  function generateQuote(){
    let x=Math.floor((Math.random()*100));

    axios.get(quoteUrl).then((res)=>{
      setQuote(res.data.quotes[x].quote);
      setAuthor(res.data.quotes[x].author);
      console.log(res);
    });
  }
  const body={backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',width:'100%' ,height:'820px',color:'white',}
  return (
    <div className='wrap' style={body}>
      <div className='inner-wrap'>
        {/* <h1>Random Quote Generator</h1> */}
        <div className='quotes'>
          <div className='box'>
        <h2 className='quote'>"     {quote}..     "</h2>
        <h3 className='author'>-{author}</h3>
        <div className='but'>
        <button onClick={generateQuote}>Tap Here!!!</button></div>
        </div><br/></div>
      </div>
    </div>
  );
}

export default App;
