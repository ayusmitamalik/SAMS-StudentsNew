import React from 'react';
import { Grid } from '@mui/material';
import style from '../../common/css/hometext.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import chairman from '../../common/image/homechr.jpg';
import director from '../../common/image/homedr.webp';
import classroom from '../../common/image/classroom.jpg';
import canteen from '../../common/image/canteen.jpg';
import library from '../../common/image/library.jpg';
import placement from '../../common/image/place.jpeg';
import transportation from '../../common/image/transportation.jpg';
import hostel from '../../common/image/hostel.jpg'

export default function hometext() {
  return (
    <>

      <Grid className={style.components}>



        <Grid >
          <h1 style={{ paddingLeft: "40%", margin: "1.3vw", backgroundColor: "teal", color: "rgb(217, 200, 101)" }}>ABOUT US</h1>
          <Grid item lg={10}>
            <hr style={{ padding: "1px", backgroundColor: "goldenrod", marginLeft: '15%', marginRight: '15%' }}></hr>
          </Grid>
          <Grid container direction="row" alignItems="center"
            paddingLeft="15%" paddingRight="15%" lg={12}>
            <Grid container direction="row" alignItems="center" backgroundColor="rgb(158, 191, 191)">
              <Grid item lg={11} textAlign="left" marginTop='20px'>
                <p style={{ fontSize: "1.25vw", fontStyle: "italic", paddingLeft: '3%' }}>
                  Balasore college of Engineering & Technology saw light in the year 2001 at Balasore of Odisha. The institute aspires to play a pivotal role in imparting technical education while inculcating in the young minds a spirit of benevolence and tolerance with a view to generate sustainable human resource at par with international standard for the techno - fevered century
                </p>
              </Grid>
              <Grid marginTop='10px'>
                <h2 style={{ marginLeft: '3%', color: 'teal' }}>|  OUR VISION</h2>
                <p style={{ fontSize: "1.25vw", fontStyle: "italic", paddingLeft: '3%' }}>
                  The college has been established with a moto to provide the best technical education and skill of international quality to the students, to provide global perspective in attitude and to build up leadership qualities within the students of UNKNOWN UNIVERSITY.
                </p>
              </Grid>
              <Grid marginTop='10px' marginBottom='20px'>
                <h2 style={{ marginLeft: '3%', color: 'teal' }}>|  OUR MISSION</h2>
                <p style={{ fontSize: "1.25vw", fontStyle: "italic", paddingLeft: '3%' }}>
                  To offer industry specific certified educational programs that will blend the creativity, analytical skills and process oriented learning in the delivery mechanism with high degree of industrial interaction.
                </p>
              </Grid>

            </Grid>
            <Grid item lg={12}>
              <hr style={{ padding: "1px", backgroundColor: "goldenrod" }}></hr>
            </Grid>
          </Grid>
        </Grid>



        <Grid >
          <h1 style={{ paddingLeft: "40%", margin: "1.3vw", backgroundColor: "teal", color: "rgb(217, 200, 101)" }}>OUR CHAIRMAN</h1>
          <Grid item lg={10}>
            <hr style={{ padding: "1px", backgroundColor: "goldenrod", marginLeft: '15%', marginRight: '15%' }}></hr>
          </Grid>
          <Grid container direction="row" alignItems="center"
            paddingLeft="15%" paddingRight="15%" lg={12}>
            <Grid container direction="row" alignItems="center" backgroundColor="rgb(158, 191, 191)">
              <Grid item lg={6} textAlign="left">
                <p style={{ fontSize: "1.25vw", listStyleType: "none", fontStyle: "italic", paddingLeft: '3%' }}>
                  MS Dhoni, a popular Indian cricketer, was born on July 7, 1981 in Ranchi, Bihar. He is a wicket-keeper and batsman in professional international cricket. MS Dhoni made his ODI debut on December 23, 2004 against Bangladesh in Chittagong. He served India as a captain in all three cricket formats from 2007 to 2017.
                </p>
              </Grid>
              <Grid item lg={6} width="100%" textAlign="right" paddingBottom="1%" paddingRight="15%" paddingTop="1%" >
                <img src={chairman} alt="" style={{ width: "50%", border: "4px solid orange", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}  ></img>

              </Grid>
            </Grid>
            <Grid item lg={12}>
              <hr style={{ padding: "1px", backgroundColor: "goldenrod" }}></hr>
            </Grid>
          </Grid>
        </Grid>
        <Grid >
          <h1 style={{ paddingLeft: "40%", margin: "1.3vw", backgroundColor: "teal", color: "rgb(217, 200, 101)" }}>OUR DIRECTOR</h1>
          <Grid item lg={10}>
            <hr style={{ padding: "1px", backgroundColor: "goldenrod", marginLeft: '15%', marginRight: '15%' }}></hr>
          </Grid>
          <Grid container direction="row" alignItems="center"
            paddingLeft="15%" paddingRight="15%" lg={12}>
            <Grid container direction="row" alignItems="center" backgroundColor="rgb(158, 191, 191)">
              <Grid item lg={6} textAlign="left">
                <p style={{ fontSize: "1.25vw", listStyleType: "none", fontStyle: "italic", paddingLeft: '3%' }}>
                  Virat Kohli was born on November 5, 1988, in Delhi, India. He grew up in Delhi and was one of the first to train at the West Delhi Cricket Academy, created in 1998. In 2002 he played for the Delhi Under-15 team and was the highest run scorer in the 2003–04 Vijay Merchant Trophy, playing for the Delhi Under-17 team.
                </p>
              </Grid>
              <Grid item lg={6} width="100%" textAlign="right" paddingBottom="1%" paddingRight="15%" paddingTop="1%" >
                <img src={director} alt="" style={{ width: "50%", border: "4px solid orange", boxShadow: "0px 10px 10px rgba(0,0,0,1)" }}  ></img>

              </Grid>
            </Grid>
            <Grid item lg={12}>
              <hr style={{ padding: "1px", backgroundColor: "goldenrod" }}></hr>
            </Grid>
          </Grid>
        </Grid>



        <Grid >
          <h1 style={{ paddingLeft: "40%", margin: "1.3vw", backgroundColor: "teal", color: "rgb(217, 200, 101)" }}>WHY UNKNOWN UNIVERSITY</h1>

          <Grid container direction="row" alignItems="center"
            paddingLeft="15%" paddingRight="15%" lg={12}>
            <Carousel>
              <Grid style={{ display: "flex", marginLeft: "10%" }}>
                <Grid style={{marginLeft:'-100px'}}>
                  <img src={classroom} alt="" />

                </Grid>
                <Grid style={{ margin: "5%",backgroundColor:'rgb(158, 191, 191)'}}>
                <h2>OUR CLASSROOM</h2>
                  <p style={{padding:'20px'}}>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                 
                  {/* <h5 style={{ color: "orange" }}>CEO, Co-founder</h5> */}


                </Grid>
              </Grid>
              <Grid style={{ display: "flex", marginLeft: "10%" }}>
                <Grid>
                  <img src={canteen} alt="" style={{height:'35vh',width:'100%'}} />

                </Grid>
                <Grid style={{  margin: "5%",backgroundColor:'rgb(158, 191, 191)'}}>
                <h2> OUR CANTEEN</h2>
                  <p style={{padding:'20px'}}>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                
                  {/* <h5 style={{ color: "orange" }}>CEO, Co-founder</h5> */}


                </Grid>
              </Grid>
              <Grid style={{ display: "flex", marginLeft: "10%" }}>
                <Grid>
                  <img src={hostel} alt="" style={{height:'35vh',width:'100%'}} />

                </Grid>
                <Grid style={{  margin: "5%",backgroundColor:'rgb(158, 191, 191)'}}>
                <h2>HOSTEL</h2>
                  <p style={{padding:'20px'}}>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                 
                  {/* <h5 style={{ color: "orange" }}>CEO, Co-founder</h5> */}


                </Grid>
              </Grid>
              <Grid style={{ display: "flex", marginLeft: "10%" }}>
                <Grid>
                  <img src={library} alt="" />

                </Grid>
                <Grid style={{  margin: "5%",backgroundColor:'rgb(158, 191, 191)'}}>
                <h2>LIBRARY</h2>
                  <p style={{padding:'20px'}}>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                 
                  {/* <h5 style={{ color: "orange" }}>CEO, Co-founder</h5> */}


                </Grid>
              </Grid>
              <Grid style={{ display: "flex", marginLeft: "10%" }}>
                <Grid>
                  <img src={placement} alt="" style={{height:'35vh',width:'100%'}}/>

                </Grid>
                <Grid style={{  margin: "5%",backgroundColor:'rgb(158, 191, 191)'}}>
                <h2> PLACEMENT</h2>
                  <p style={{padding:'20px'}}>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                
                  {/* <h5 style={{ color: "orange" }}>CEO, Co-founder</h5> */}


                </Grid>
              </Grid>
              <Grid style={{ display: "flex", marginLeft: "10%" }}>
                <Grid>
                  <img src={transportation} alt="" style={{height:'35vh',width:'100%'}}/>

                </Grid>
                <Grid style={{  margin: "5%",backgroundColor:'rgb(158, 191, 191)'}}>
                <h2> TRANSPORTATION</h2>
                  <p style={{padding:'20px'}}>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                
                  {/* <h5 style={{ color: "orange" }}>CEO, Co-founder</h5> */}


                </Grid>
              </Grid>
              
              
            </Carousel>
            <Grid item lg={12}>
              <hr style={{ padding: "1px", backgroundColor: "goldenrod" }}></hr>
            </Grid>
          </Grid>
        </Grid>



      </Grid>


    </>
  );
};

