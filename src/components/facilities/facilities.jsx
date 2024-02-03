import React from "react";
import { Grid } from "@mui/material";
// import Style from "../../common/css/facilities.module.css";
import campus from "../../common/image/campus.jpg";
import library from "../../common/image/library.webp";
import sports from "../../common/image/sports.webp";
import hostel from "../../common/image/hostel.png";
import canteen from "../../common/image/canteen.webp";
import indoor from "../../common/image/indoor.jpg";
import campus2 from "../../common/image/campus2.avif";
import library2 from "../../common/image/library2.jpg";
import Hostel2 from "../../common/image/Hostel2.jpg";
import canteen2 from "../../common/image/canteen2.webp";
export default function Facilities() {
    return (
        <>
            <Grid textAlign={"center"}>
                <h1 style={{ border: "solid teal 2px", paddingTop: "50px", backgroundColor: "rgb(37, 91, 91)", fontSize: "40px", textAlign: "center", color: "white",boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}>FACILITIES</h1><br></br>
                <hr style={{ padding: "2px", backgroundColor: "goldenrod" }}></hr>
            </Grid>
            <Grid >
                <h1 style={{ margin: "1.3vw", backgroundColor: "teal", color: "gold",textAlign:"center",boxShadow: "0px 10px 10px rgba(0,0,0,1)",fontSize:"1.6vw" }}>OUR CAMPUS</h1>
                <Grid container direction="row" alignItems="center"
                    paddingLeft="2%" paddingRight="2%" lg={12} >
                    <Grid container direction="row" alignItems="center" backgroundColor="rgb(158, 191, 191)">
                        <Grid item lg={6} textAlign="left">
                            <ol style={{ fontSize: "1.1vw", listStyleType: "none", fontStyle: "italic",paddingLeft:"5%" }}><li> Hello everyone to our unkown university.</li> <br></br>
                                <li>A lush green, eco-friendly, solitary, highly educative environment having the state-of-art features.</li><br></br>
                                <li>Need-based and curricula designed fully equipped laboratories, workshops and computer centre.</li><br></br>
                                <li>Experienced faculties with innovative teaching skills. Audio-visual aided Demonstrative classes for improving communication skill & personality development.</li></ol>
                        </Grid>
                        <Grid item lg={6} width="100%" textAlign="right" paddingBottom="1%" paddingRight="10%" paddingTop="1%" >
                            <img src={campus} alt="" style={{ width: "45%", border: "4px solid orange", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}  ></img>
                            <Grid item lg={6} width="100%" textAlign="center" paddingTop="1%" paddingBottom="2%" >
                                <img src={campus2} alt="" style={{ width: "150%", border: "4px solid orange", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12}>
                        <hr style={{ padding: "1px", backgroundColor: "goldenrod" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <h1 style={{  margin: "1.3vw", backgroundColor: "teal", color: "gold",textAlign:"center",boxShadow: "0px 10px 10px rgba(0,0,0,1)",fontSize:"1.6vw"   }}>LIBRARY</h1>
                <Grid container direction="row" alignItems="center" lg={12}
                    paddingLeft="6%" paddingRight="6%">
                    <Grid item lg={6} width="100%" paddingBottom="1%" paddingLeft="2%" >
                        <img src={library} alt="" style={{ width: "45%", border: "4px solid gold", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                        <Grid item lg={6} width="100%" textAlign="center" paddingTop="2%" paddingBottom="2%" paddingLeft="5%" >
                            <img src={library2} alt="" style={{ width: "180%", paddingLeft: "2%", paddingRight: "2%", border: "4px solid orange", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} textAlign="left" >
                        <ol style={{ fontSize: "1.1vw", fontStyle: "italic",listStyleType:"none" }}><li>The College has 2 storied Central library which is one of the largest library in North Odisha. The library is well ventilated and well illuminated.</li><br></br>
                            <li>The library has 30,000 books that covers all the faculties being taught in BCET.</li><br></br>
                            <li>The College subscribes to various National and International journals of repute.</li><br></br>
                            <li>Our Central library & reading hall is present in a separate building with two floors an area of 9000 sqft with more than 25,000 books, large volume of journals and periodicals that immense value to students</li><br></br>
                            <li>The library functions from 8.00AM to 5.00PM in all working days.</li></ol>
                    </Grid>
                    <Grid item lg={12}>
                        <hr style={{ padding: "1.2px", backgroundColor: "goldenrod" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <h1 style={{ textAlign:"center", margin: "1.3vw", backgroundColor: "teal", color: "gold",boxShadow: "0px 10px 10px rgba(0,0,0,1)",fontSize:"1.6vw"  }}>SPORTS</h1>
                <Grid container direction="row" alignItems="center" lg={12}
                    paddingLeft="2%" paddingRight="2%">
                    <Grid container direction="row" alignItems="center" backgroundColor="rgb(158, 191, 191)">
                        <Grid item lg={6} textAlign="left">
                            <ol style={{ fontSize: "1.1vw", fontStyle: "italic", listStyleType: "none",paddingLeft:"5%" }}><li>It is our constant endeavour to see the students grow intellectually and physically.</li><br></br>
                                <li>To provide this we have sports grounds for Volley Ball, Lawn Tennis, Badminton, Table Tennis, Cricket etc. for the students.</li><br></br>
                                <li>Efforts are on to develop grounds for games like Cricket. Our College is one of the best College in sports amongst private Colleges in Odisha.</li><br></br>
                                <li>The management board of College also have great celebrities of CRICKET, Volley Ball, Kabbadi & Athletics. In All Odisha Inter College Cricket Championship our College stood at 2nd place.</li></ol>
                        </Grid>

                        <Grid item lg={6} width="100%" textAlign="right" paddingBottom="1%" paddingRight="10%" paddingTop="1%" >
                            <img src={sports} alt="" style={{ width: "50%", border: "4px solid gold", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                            <Grid item lg={6} width="100%" textAlign="center" paddingTop="1%" paddingBottom="2%">
                                <img src={indoor} alt="" style={{ width: "200%", border: "4px solid gold", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12}>
                        <hr style={{ padding: "1.2px", backgroundColor: "goldenrod" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <h1 style={{  margin: "1.3vw", backgroundColor: "teal", color: "gold",textAlign:"center",boxShadow: "0px 10px 10px rgba(0,0,0,1)" ,fontSize:"1.6vw" }}>HOSTEL</h1>
                <Grid container direction="row" alignItems="center" lg={12}
                    paddingLeft="6%" paddingRight="6%" >
                    <Grid item lg={6} width="100%" paddingBottom="2%" paddingLeft="2%"  >
                        <img src={Hostel2} alt="" style={{ width: "38%", border: "4px solid gold", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                        <Grid item lg={6} width="100%" textAlign="center" paddingTop="2%" paddingBottom="2%" paddingLeft="5%"  >
                            <img src={hostel} alt="" style={{ width: "190%", paddingLeft: "2%", paddingRight: "2%", border: "4px solid orange", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} textAlign="left">
                        <ol style={{ fontSize: "1.1vw",fontStyle: "italic", listStyleType: "none"  }}><li>The College provides separate Hostel accomodation for both boys and girls with all modern amenities.</li><br></br>
                            <li>Both the boys and girls hostels are located inside the campus and provide a home-like atmosphere.</li><br></br>
                            <li>The boarders are given extra attention by the teachers beyond college hours for thorough understanding on the subjects.</li></ol>
                    </Grid>
                    <Grid item lg={12}>
                        <hr style={{ padding: "1.2px", backgroundColor: "goldenrod" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <h1 style={{ margin: "1.3vw", backgroundColor: "teal", color: "gold",textAlign:"center",boxShadow: "0px 10px 10px rgba(0,0,0,1)",fontSize:"1.6vw"  }}>CANTEEN</h1>
                <Grid container direction="row" alignItems="center" lg={12}
                    paddingLeft="2%" paddingRight="2%">
                    <Grid container direction="row" alignItems="center" backgroundColor="rgb(158, 191, 191)">
                        <Grid item lg={6} textAlign="left"  >
                            <p style={{ fontSize: "1.1vw" ,fontStyle:"italic",paddingLeft:"5%"}}>A favorite haunt of students during off hours is the spacious and well-designed canteen with a suitable aesthetic touch. The canteen has a modern kitchen with the latest appliances to provide for Indian and Chinese cuisine. The interior is tastefully crafted to provide the much needed relief and soothing environment.</p><br></br>
                            <Grid>
                                <h4 style={{paddingLeft:"5%"}}>Features of Canteen</h4>
                                <ul><li style={{paddingLeft:"6%"}}>Adequate & Well-furnished Canteen with proper Ventilation</li>
                                <li style={{paddingLeft:"6%"}}>50 Nos. Square Table with 200 seating capacity</li>
                                <li style={{paddingLeft:"6%"}}>Chillers& Freezer Facilities</li></ul>
                            </Grid>
                            <Grid>
                                <h4 style={{paddingLeft:"5%"}}>Facilities Provided</h4>
                                <ul><li style={{paddingLeft:"6%"}}>CCTV Surveillance</li>
                                <li style={{paddingLeft:"6%"}}>Fire Extinguishers</li>
                                <li style={{paddingLeft:"6%"}}>Fully Wi-Fi Connected</li>
                                <li style={{paddingLeft:"6%"}}>Laptop & Mobile Charging Point</li></ul>
                            </Grid>
                            <Grid>
                                <h4 style={{paddingLeft:"5%"}}>Types of Food</h4>
                                <ul><li style={{paddingLeft:"6%"}}>All types of Snacks (Maharashtrian, South Indian, Panjabi, and Chinese)</li>
                                <li style={{paddingLeft:"6%"}}>Juices& Beverages</li>
                                <li style={{paddingLeft:"6%"}}>Chat Centre</li></ul>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} width="100%" textAlign="right" paddingBottom="1%"  paddingRight="10%" paddingTop="1%" >
                            <img src={canteen} alt="" style={{ width: "45%", border: "4px solid gold", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                            <Grid item lg={6} width="100%" textAlign="center" paddingTop="1%" paddingBottom="2%">
                                <img src={canteen2} alt="" style={{ width: "100%", border: "4px solid gold", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12}>
                        <hr style={{ padding: "1.2px", backgroundColor: "goldenrod" }}></hr>
                    </Grid>
                </Grid>
            </Grid>
            <Grid textAlign={"center"} lg={12} paddingLeft="10%" paddingRight="10%" paddingTop="1%">
                <h1 style={{ border:"solid teal 2px", paddingTop: "30px", backgroundColor: "rgb(37, 91, 91)", fontSize: "50px", textAlign: "center", color: "white",border: "4px solid gold" ,boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}>THANK YOU</h1><br></br>
                <hr style={{ padding: "1.5px", backgroundColor: "orange" , width:"100%"}}></hr>
            </Grid>
        </>
    )
}