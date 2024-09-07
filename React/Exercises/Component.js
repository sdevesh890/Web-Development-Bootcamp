import React from "react";


const CRM =({name , job , email})=>(
     <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
  <ul style={{
      textAlign:  "center" ,
     border : "solid black" ,
     width : "450px"}}>
 <li className="contact-card" style={{listStyleType : "none"}}>
 <h2 >{name}</h2>
 <dl >
 <dt style={{color : "sienna"}}>Job</dt>
 <dd>{job}</dd>
 <dt style={{color : "sienna"}}>Email</dt>
 <dd>{email}</dd>
 </dl>
 </li>
 </ul>
     </div>
);

export default CRM;