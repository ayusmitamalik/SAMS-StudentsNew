
import React from "react";
// import style from "../../common/css/placement.module.css";
import { Grid } from "@mui/material";
import image1 from "../../common/image/unnamed.jpg";
import image2 from "../../common/image/placement cell.jpg";
import image3 from "../../common/image/placement-stats.png";
import image4 from "../../common/image/3_b395fa97615429467a84a0b420c5ebbf.webp";
import image5 from "../../common/image/placement_upload_2022.png";
import { teal } from "@mui/material/colors";
import Style from "../../common/css/placement.module.css";
function placementpage() {

  return (
    <>


      <Grid>
        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40', textAlign: 'center' }}>About Training and Placement Cell</h1>

        <Grid class="image-container" xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image1} style={{ height: '30%', width: '50%' }} />
        </Grid>

        <p class="text2"  >At BCET, The Training & Placement cell is very dynamic part of the Institute which acts as nodal point for the placements of final year students of BCET. The Cell is headed by the Training & Placement Officer and supported by all the other placement faculty coordinators and student representatives. The cell also provides a platform to the recruiting organizations and graduating students so that the passing out students gets the job he/she deserves from different branches. The cell has maintained an outstanding placement record and tried to give maximum jobs to our students even during the recession and pandemic period which was really a difficult period for most of the companies across the country. The effective & consistent efforts are being made for
          developing interactive communication with the leading Industries,
          interested in recruiting our students.</p>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Vision</h1>

        <p class="text2" >To equip the students with necessary technical and conceptual skills and ensure employment through on and off campus.</p>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Mission</h1>

        <p class="text3" >To collaborate with leading organizations and industries in setting up of internship and training program of students.</p>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Message from TPO</h1>

        <Grid class="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image2} style={{ height: '20%', width: '50%' }} />
        </Grid>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Role of T & P cell</h1>

        <p class="text4" >The role of the Training and Placement Cell is bridging the space between industry and academia, through jointly exploring the opportunities for students, institutions, professionals and the corporate world at large towards better growth and development.</p>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Objective</h1>

        <Grid class="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image3} style={{ height: '30%', width: '50%' }} />
        </Grid>

        <p class="text5" >Training and Placement Cell is to guide students to choose right career and to give knowledge, skill, and aptitude and meet the manpower requirements of the Industry.</p>

        <p class="text6" > --&gt; To organize campus interviews for final year students.<br />
          --&gt; To create BCET as a preferred destination for companies to conduct their placement activities.<br />
          --&gt; To develop student's technical skills and soft skills to meet the corporate recruitment process.<br />
          --&gt; Providing requisite training to students in the area of Personality Development and Communication Skills.</p>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Internship</h1>

        <p class="text6" >Nowadays every companies is looking for the best candidate with work experience. To secure a good job student’s need industrial experience because a degree is not enough, here internship plays a important role for this. An internship is the phase of time for students when they are trained for their skill they are good at and it gives them a chance to apply their knowledge practically in industries. AICTE has also made 3 internship compulsory for engineering students.</p>



        <h1 class="text1" style={{ fontSize: '300%', paddingRight: '15%', paddingLeft: '5%', backgroundColor: 'teal', color: '#ffcf40' }}>Training Activities</h1>

        <Grid class="image-container" style={{ display: 'flex', justifyContent: 'center' }} >
          <img src={image4} style={{ height: '30%', width: '50%' }} />
        </Grid>

        <p class="text7" >--&gt; Training students on "Personality development".<br />
          --&gt; Visits to various companies.<br />
          --&gt; Inviting Industrial Experts to the college campus for seminar & conference.<br />
          --&gt; Conducting mock interviews.<br />
          --&gt; Soft Skills Training.<br />
          --&gt; Training the students in the areas of Quantitative Aptitude, Logical Reasoning and Verbal reasoning.</p>

        <Grid class="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image5} style={{ height: '30%', width: '50%' }} />
        </Grid>

      </Grid>

    </>

  )
}


export default placementpage;