import React from "react";


export default function Aboutuspage() {
  return (
    <>
    <div  container direction="row" lg={12} style={{marginTop: "1%", marginLeft: "5%",marginRight: "2%",display:"flex",justifycontain:"space" ,textAlign:"center"}}>
      <div className={'style.section'}>
      <div  container direction="row" lg={12} style={{marginTop: "1%", marginLeft: "2%",marginRight: "39%",display:"flex",justifycontain:"space",backgroundColor:"teal"}}>
        <h2>About us</h2></div>
        
        <div style={{ marginTop: "1%", marginLeft: "2%",marginRight: "18%" ,textAlign:"center"}}>
          <p>
            Balasore college of Engineering & Technology saw light in the year
            2001 at Balasore of Odisha. The institute aspires to play a pivotal
            role in imparting technical education while inculcating in the young
            minds a spirit of benevolence and tolerance with a view to generate
            sustainable human resource at par with international standard for
            the techno - fevered century.
          </p>
        </div>
        </div>
        <div className={'style.section'}>
        <div  container direction="row" lg={12} style={{marginTop: "1%", marginLeft: "%",marginRight: "20%",display:"flex",justifycontain:"space",backgroundColor:"teal", textAlign:"center"}}>
        <h2>Our Vision</h2></div>
        <div style={{ marginTop: "1%", marginLeft:"4%" ,marginRight:"12%" ,textAlign:"center"}}>
        <p>
          The college has been established with a moto to provide the best
          technical education and skill of international quality to the
          students, to provide global perspective in attitude and to build up
          leadership qualities within the students of BCET.
        </p>
        </div>
        </div>
        <div className={'style.section'}>
        <div  container direction="row" lg={12} style={{marginTop: "1%", marginLeft: "1%",marginRight: "10%",display:"flex",justifycontain:"space",backgroundColor:"teal",textAlign:"center"}}>
       
        <h2>Our Aim</h2></div>
        <div style={{ marginTop: "1%" , marginLeft:"12%", marginRight:"6%" , textAlign:"center"}}>
        <p>
          To offer industry specific certified educational programs that will
          blend the creativity, analytical skills and process oriented learning
          in the delivery mechanism with high degree of industrial interaction.
        </p>
        </div>
        </div>


    </div>  
    </>
  );
}
