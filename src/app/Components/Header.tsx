import Link from "next/link"
export default function Header()
{
    return(
        <div className="container-fluid" style={{backgroundColor:"#20B2AA",height:"40px"}}>
           <div className="row">
            <div className="col"><span style={{fontFamily:"cursive",fontWeight:"bold",fontSize:"20px"}}>Notes app</span></div>
            <div className="col"><Link href={"/"} style={{textDecoration:"none",color:"black",fontWeight:"bold",fontSize:"20px"}}>Home</Link></div>
            <div className="col"><Link href={"/notes"} style={{textDecoration:"none",color:"black",fontWeight:"bold",fontSize:"20px"}}>Notes</Link></div>
           </div>
        </div>
    )
}