import React from "react";
import style from "../../../common/css/faculty/bse.module.css";
import FacultyPage from "../sidebar";
import ele1 from "../../../common/image/pritam1.jpg";
import ele2 from "../../../common/image/riti.jpg";
import ele3 from "../../../common/image/lulu.jpg";
import ele4 from "../../../common/image/smrutika.jpg";
import ele5 from "../../../common/image/rutu.jpg";

function BcaPage() {
    return (
        <>
            <FacultyPage />

            <div className={style.heading}><h2>BASIC SCIENCE AND HUMANITIES</h2></div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Mr. Pritam Nayak</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b> MTECH</p><br></br>
                    <p><b>DESIGNATION:</b> HOD</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Basic Electrical Engineering
                        Network Theory
                        Control System
                        Advanced Control System
                        Electromagnetic Theory
                        Digital Electronics Circuit
                        Electrical Measurement</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={ele1} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>

            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={ele2} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Miss. Ritismita Patra</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Electrical Machine
                        Control System
                        Basic Electrical Engineering
                        Power Electronics
                        Renewable Power Generation
                        System
                        Electrical Drives
                        Industrial Safety Engineering</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Mr. LaxmiKanta Das</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />BBasic Electrical Engineering
                        Network Theory
                        Control System
                        Electrical Machine
                        Smart Grid
                        Flexible AC Transmission System
                        Power Electronics
                        Power System Operation & Control</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={ele3} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={ele4} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Miss. Puja Jena</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Basic Electrical Engineering
                        Network Theory
                        Control System
                        Electrical Machine
                        Smart Grid
                        Electric Power Transmission &
                        Distribution
                        Power Electronics
                        Green Technology.</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Rutuparna </h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>MTECH</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Basic Electronics Engineering
                        Analog Electronics Circuit
                        Digital Electronics Circuit
                        Digital Signal Processing
                        Biomedical Instrumentation
                        Sensor and Transducers
                        Industrial Process Control
                        Green Technology
                    </p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={ele5} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default BcaPage;