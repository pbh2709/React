import { Alert } from "bootstrap-4-react/lib/components"
import { TwitterX,Instagram,Facebook } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Footer= () =>{
    return(
          <>
        <span class="col-7 d-flex align-items-center" style={{columnCount : 10}}>
        <span class="mx-3 mb-3 mb-md-0 text-muted" 
        style={{fontSize : 30,
                marginBlock : 3,  
                                               
        }}>
            Produed by 박병호 
       </span>
        </span>
        <span></span>
        <span>
    <ul  style={{columnCount : 7, display :"flex", justifyContent : "flex-end", marginLeft : 20, marginTop :15 }}>
            <Link to="http://x.com" >
             <li href="http://x.com" className="x" style={{display :"flex",
             cursor : "pointer"
             }}><TwitterX /></li></Link>
             <span>
            <Link to="https://www.instagram.com" >
             <li href="http://x.com" className="x" style={{display :"flex",
             cursor : "pointer"
             }}><Instagram/></li></Link>
             
             </span>
             <span>
  
            <Link to="http://www.facebook.com" >
             <li href="http://x.com" className="x" style={{display :"flex",
             cursor : "pointer"
             }}><Facebook/></li></Link>
             </span>
             </ul>
            
       </span>
       </>
  
   
    )
}

export default Footer