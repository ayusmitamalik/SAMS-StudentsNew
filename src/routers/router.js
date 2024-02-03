import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/student/index";
import Feedback from "../components/Feedback/Feedback";
import Hometext from '../components/home/hometext'
import Gallery from "../components/gallery/gallerypg";
import NoticePage from "../components/notice/index";
import DepartmentPage from "../components/department/index";
import StudentAdmissionForm from "../components/Admission/admission";
import HorizontalScrollingAnnouncement from "../components/Announcement/announcement";
import TeacherContactInfo from "../components/Contact/cont";
import Facilities from "../components/facilities/facilities";

import InfoPage from "../components/faculty/branches/info";
import FacultyPage from "../components/faculty/sidebar";
import CsePage from "../components/faculty/branches/cse";
import CivilPage from "../components/faculty/branches/civil";
import ElePage from "../components/faculty/branches/ele";
import EtcPage from "../components/faculty/branches/etc";
import MePage from "../components/faculty/branches/me";
import MbaPage from "../components/faculty/branches/mba";
import McaPage from "../components/faculty/branches/mca";
import BcaPage from "../components/faculty/branches/bse";
import Placementpage from "../components/Placement/placement";


import StudentProfile from "../common/studentProfileIndex/studentProfileIndex";
import RegistrationForm from "../components/studentRedg/studentRedg"
// import Homenoticeboard from"../components/home/homeNoticeBoard";

// home page route 
import Courses from "../components/home/homeCoursesOffered";
// import Homenoticeboard from"../components/home/homenoticeboard";
import Aboutpage from "../components/About/About";
// import Homenoticeboard from "../components/home/homenoticeboard";

import ImageSlider from "../components/home/homeImageSlider";  // for homepage
//home
import Homenoticeboard from "../components/home/homenoticeboard";
//for home page
import Homeplacemntpage from "../components/home/HomePlacement";


//homepage
import HomeFaculty from "../components/home/homefaculty";

// for home pg
import Homenotice from "../components/home/homeNotice";

import Homeaboutpg from "../components/home/homeAboutVisionAim"; //for home pg

import Contact from "../components/home/homeContact";

import Signup from "../components/Signup/signup";
import Signin from "../components/Signup/signin";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/hometex" element={<Hometext />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/hometext" element={<Hometext />} /> */}
        {/* <Route path="/gallery" element={<Gallery />}/> */}

        <Route path="/notice" element={<NoticePage />} />
        <Route path="/department" element={<DepartmentPage />} />

        <Route path="/admission" element={<StudentAdmissionForm />} />
        <Route path="/announcement" element={<HorizontalScrollingAnnouncement />} />
        <Route path="/cont" element={<TeacherContactInfo />} />

        {/* Faculty Section */}
        {/* // <Route path="/faculty" element={<FacultyPage />} />
        // <Route path="/cse" element={<CsePage />} />
        // <Route path="/civil" element={<CivilPage />} />
        // <Route path="/ele" element={<ElePage />} />
        // <Route path="/etc" element={<EtcPage />} />
        // <Route path="/me" element={<MePage />} />
        // <Route path="/mba" element={<MbaPage />} />
        // <Route path="/mca" element={<McaPage />} />
        // <Route path="/bse" element={<BcaPage />} />

        // <Route path="/placement" element={<Placementpage />} />
        // <Route path="/profile" element={<StudentProfile />} />
        // <Route path="/studentRedg" element={<RegistrationForm />} />
        // <Route path="/homenotice" element={<Homenoticeboard />} /> */}
        <Route path="/homeImageSlider" element={<ImageSlider />} />
        <Route path="/facilities" element={<Facilities />} />
        {/* home */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/cse" element={<CsePage />} />
        <Route path="/civil" element={<CivilPage />} />
        <Route path="/ele" element={<ElePage />} />
        <Route path="/etc" element={<EtcPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/mba" element={<MbaPage />} />
        <Route path="/mca" element={<McaPage />} />
        <Route path="/bse" element={<BcaPage />} />
        <Route path="/placement" element={<Placementpage />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/studentRedg" element={<RegistrationForm />} />
        <Route path="/homenotice" element={<Homenoticeboard />} />

       
        <Route path="/faculty" element={<FacultyPage/>}/> 
        <Route path="/cse" element={<CsePage/>}/>
        <Route path="/civil" element={<CivilPage/>}/>
        <Route path="/ele" element={<ElePage/>}/>
        <Route path="/etc" element={<EtcPage/>}/>
        <Route path="/me" element={<MePage/>}/>
        <Route path="/mba" element={<MbaPage/>}/>
        <Route path="/mca" element={<McaPage/>}/>
        <Route path="/bse" element= {<BcaPage/>}/>
        <Route path="/placement" element={<Placementpage/>}/>
        <Route path="/profile" element={<StudentProfile />}/>
        <Route path="/studentRedg" element={<RegistrationForm />}/>
        <Route path = "/homenotice" element= {<Homenoticeboard/>}/>

        <Route path = "/homeplacement" element= {<Homeplacemntpage/>}/>
        <Route path="/info" element={<InfoPage/>}/>
        <Route path="/homefaculty" element={<HomeFaculty/>}/>
        
        {/* //for home pg */}
        <Route path = "/homeabout" element= {<Homeaboutpg/>}/> 
       
        {/* home page router */}
        <Route path = "/courses" element= {<Courses/>}/>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;

