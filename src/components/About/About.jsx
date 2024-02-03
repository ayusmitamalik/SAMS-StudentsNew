import React from "react";
import { Grid } from "@mui/material";
//image
import kh from "../../common/image/kh.gif"
import s from "../../common/image/s.jpg"
import su from "../../common/image/su.gif"
import chairman from "../../common/image/chairman.png"
import director from "../../common/image/director.png"
import Deputydirector from "../../common/image/deputydirector.png";
import env from "../../common/image/env.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import styles from '../../common/css/about.module.css';



export default function Aboutuspage() {
    return (
        <>
            <Grid className={styles.component}>
                <Grid style={{ backgroundPosition: 'fixed' }}>
                    <Grid container style={{ direction: "row", justifyContent: "center", textAlign: "center", }}>
                        <grid>
                            <h1 style={{ border: "solid yellow 2px", paddingTop: "40px", backgroundColor: "teal", fontSize: "60px", textAlign: "center" }}>WELCOME TO OUR COLLAGE</h1>
                            <h4 style={{ border: "solid yellow 2px", paddingTop: "40px", backgroundColor: "lightyellow", fontSize: "30px", textAlign: "center" }} >HELLO WORLD WE R WAITING FOR YOU</h4>
                            <h2 style={{ border: "solid yellow 2px", paddingTop: "70px", backgroundColor: "teal", fontSize: "30px", textAlign: "center" }}> GIET University- An Amalgamation of Academics and Research Based Learning</h2>
                        </grid>
                    </Grid>
                    <Grid container style={{ marginTop: "5%" }}>
                        <grid>

                            <p style={{ marginLeft: '50px', marginRight: '50px' }}>GIET University, Gunupur (formerly known as Gandhi Institute of Engineering and Technology) was established by “Vidya Bharati Educational Trust,” Gunupur, Odisha, India in the year 1997. UGC approved GIET University is one of the leading universities in Odisha, located amongst the lush greenery and foothills of the Eastern Ghats of India with the scenic Bansadhara River flowing through its territory.

                                Since its establishment, GIET University has emerged at the forefront with its advanced technological developments and teaching methods. The University has made a mark in the global scenario with its state-of-the-art infrastructure, quality education and world-class facilities. The University strives to provide a disciplined and progressive education system to all.</p>
                        </grid>
                    </Grid>
                    <Grid container direction="row" lg={18} style={{ marginLeft: "5%", marginBottom: "7%", marginTop: '5%', backgroundColor: 'lightyellow' }} >
                        <Grid item lg={12} style={{ marginLeft: "2%", marginRight: "2%", width: "100%" }} >
                            <img src={kh} alt="" width="50%" padding="2%" />
                        </Grid>
                        <Grid item lg={6} style={{ marginLeft: "8%", marginRight: "1%", padding: "7%", width: "100%" }}>
                            <img src={s} alt="" width="70%" paddingLeft="10%" />
                        </Grid>
                        <Grid item lg={6} style={{ marginLeft: "50%", marginRight: "%" }}>
                            <img src={su} alt="" width="160%" padding="-14%" />
                        </Grid>
                    </Grid>







                    <Carousel>
                        <Grid style={{ display: "flex", marginLeft: "10%" }}>
                            <Grid>
                                <img src={chairman} alt="" />
                            </Grid>
                            <Grid style={{ marginTop: "10%" }}>
                                <p>" 20 years experience in the field of the electrical industy.Electrical engineer .visionary and expert in commercializing ideas."</p>
                                <h2> Devina Anahita </h2>
                                <h5 style={{ color: "orange" }}>Deputy Director of xyz collage</h5>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex", marginLeft: "10%" }}>
                            <Grid>
                                <img src={director} alt="" />
                            </Grid>
                            <Grid style={{ marginTop: "10%" }}>
                                <p>" 20 years experience in the field of the electrical industy.Electrical engineer .visionary and expert in commercializing ideas."</p>
                                <h2> Devina Anahita </h2>
                                <h5 style={{ color: "orange" }}>Deputy Director of xyz collage</h5>
                            </Grid>
                        </Grid>
                        
                        
                        <Grid style={{ display: "flex", marginLeft: "10%" }}>
                            <Grid>
                                <img src={Deputydirector} alt="" />
                            </Grid>
                            <Grid style={{ marginTop: "10%" }}>
                                <p>"Currently Dr.Pati is working as Assistant professor at IIT Bhubaneswar . He is responsible for the development of new and advanced materials for lithium batteries and fuel cell technology . He holds free patents and several research publications in the field of electrochemistry and energy storage . "</p>
                                <h2>SOOBHAMKAR PATI,PH.D</h2>
                                <h5 style={{ color: "orange" }}> Co-founder,Director,Research and Development</h5>
                            </Grid>
                        </Grid>
                    </Carousel>





                </Grid >
                <Grid>
                    <h1 style={{ margin: '5%' }}>The College Environment: Factors Influencing Student Transition and Their Impact on Academic Advising</h1>
                    <p style={{ margin: '6%' }}>In understanding the role played by the collegiate environment in the successful or unsuccessful transition of the incoming student, several questions must be addressed. These questions reflect the university's goals, mission statement, and its future direction. Furthermore, they provide an understanding of the college's views and vision about student learning. The development of students both academically and socially while they are members of the campus community is tantamount to the university's success. Therefore, these questions (What does the institution value? What is the institution's mission statement? What are the interactions between students and university officials?) must be investigated along with garnering a thorough understanding of the university's physical surroundings so as to best comprehend the impact a university has on its students, especially those making the transition to college. Thus, the campus environment and its effects on the student population can be addressed in three settings: peer interactions, classroom environment, and physical environment.</p>


                    <Grid>
                        <img src={env} alt="" style={{ marginLeft: '18%' }} />

                    </Grid>
                </Grid>
            </Grid>
            </>
            );
}

