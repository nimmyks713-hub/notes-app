import Image from "next/image";
import Header from './Components/Header'
export default function Home() {
  return (
    <div>
      <Header/>
      <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1 style={{fontFamily:"cursive"}}>Welcome to your notes app</h1>
      <Image src="/notes.jpg" height={400} width={400} alt="Notes"/>
      </div>
    </div>
  );
}
