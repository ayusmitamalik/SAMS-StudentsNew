import React from "react";
import style from "../../../common/css/faculty/etc.module.css";
import FacultyPage from "../sidebar";
import etc1 from "../../../common/image/jass1.jpg";
import etc2 from "../../../common/image/himansu.jpg";
import etc3 from "../../../common/image/ayusmita1.jpg";
import etc4 from "../../../common/image/krishnakanta.jpg";
import etc5 from "../../../common/image/laxmi.jpg";

function EtcPage() {
    return (
        <>
            <FacultyPage />

            <div className={style.heading}><h2>ELECTRONICS AND TELECOMMUNICATION ENGG</h2></div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Jasmine Pal</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b> M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> HOD</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Digital Electronics
                        Microprocessor &
                        Microcontroller
                        Sensor & Transducer
                        Industrial Press Control &
                        Dynamics
                        Industrial Instrumentation
                        VLSI
                        Digital Logic Design</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={etc1} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>

            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={etc2} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Mr. Himansu Behera</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Electromagnetic theory
                        Signal & System
                        Digital System processing
                        Analog Communication
                        Digital communication
                        Antenna Theory
                        Digital Electronics</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Ayusmita Malik</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Data Communication
                        Digital Logic Design
                        Digital Electronics
                        Basic Electronics
                        Digital signal Processing
                        Micro ware Engineering</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={etc3} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={etc4} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Mr. Krushna Kanta</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> DVSLI
                        Digital Signal Processing
                        Basic Electronics
                        Signal & System</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Mr. Laxmidhar Das </h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Digital Image Processing
                        Digital Signal Processing
                        Analog Communication
                        Digital Communication
                        Wireless Communication
                        Signal & System
                        Analog electronic circuit
                        Digital electronic circuit
                    </p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={etc5} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default EtcPage;