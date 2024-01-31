import React from "react";
import style from "../../../common/css/faculty/cse.module.css";
import FacultyPage from "../sidebar";
import Hod from "../../../common/image/lizum2.jpg";
import cs2 from "../../../common/image/saisriya.jpg";
import cs3 from "../../../common/image/kanha.jpg";
import cs4 from "../../../common/image/jass.jpg";
import cs5 from "../../../common/image/sunetra.jpg";

function CsePage() {
    return (
        <>
            <FacultyPage />

            <div className={style.heading}><h2>COMPUTER SCIENCE ENGINEERING</h2></div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Lizum Bala</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b> MCA, MTECH</p><br></br>
                    <p><b>DESIGNATION:</b> HOD</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Algorithm Design & Analysis,Theory of Computation,FLAT,Soft Computing,PPSUC</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={Hod} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>

            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={cs2} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Miss. Saisriya Pattnayakk</h2>
                    <div className={style.line}>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Internet and Web Technology,
                        Software Project
                        Management,
                        Software Engineering,
                        PPSUC,
                        JAVA</p>
                        </div>
                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Mr. kanha padhi</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />OOPJAVA,
                        DATA STRUCTURE,
                        IOT,
                        IT&ERP</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={cs3} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={cs4} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Miss. Jasmine pal</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> IOT,
                        C,
                        Java,
                        Python,
                        Data Structure,
                        Computer Networks,
                        WSN,
                        Operating System,
                        Software Engineering,
                        Software Testing,
                        SPM.</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. sunetra Nayak </h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH, PHD Cont...</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Algorithm Design & Analysis,Theory of Computation,FLAT,Soft Computing,PPSUC</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={cs5} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default CsePage;