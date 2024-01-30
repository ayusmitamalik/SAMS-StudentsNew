import React from "react";
import style from "../../common/css/department.module.css";
import { Grid } from "@mui/material"
import img1 from "../../Assets/image/img1.png"
import img2 from "../../Assets/image/img2.jpg"
import img3 from"../../Assets/image/img3.jfif"
import img4 from"../../Assets/image/img4.jfif"
import img8 from "../../Assets/image/img8.jfif"
function DepartmentPage() {
    return (
        <>

            <h2 className={style.pen} style={{color:'#004c4c'}}>Department</h2>
            <Grid className={style.book}>
            <Grid className={style.book}>
                <marquee className={style.image} direction="left"><h2 style={{color:'#a67c00'}}>All Departments</h2>
                    
                    <img src={img1} height="300px" width="400px" marigin-left="50%" padding-left="10%" />
                    <p>guwhfihfowihfuehfi

                    </p>
                </marquee>

            </Grid>
            <Grid className={style.book}>
                <marquee className={style.image} direction="left"><h2 style={{color:'#a67c00'}}>CSE/IT Dept.</h2>
                    <img src={img2} height="300px" width="400px" marigin-left="50%" padding-left="10%" />

                </marquee>

            </Grid>
            <Grid className={style.book}>
                <marquee className={style.image} direction="left"><h2 style={{color:'#a67c00'}}>Mechanical Dept.</h2>
                    <img src={img3} height="300px" width="400px" marigin-left="50%" padding-left="10%" />

                </marquee>

            </Grid>
            <Grid className={style.book}>
                <marquee className={style.image} direction="left"><h2 style={{color:'#a67c00'}}>Civil Dept.</h2>
                    <img src={img4} height="300px" width="400px" marigin-left="50%" padding-left="10%" />

                </marquee>

            </Grid>
            <Grid className={style.book}>
                <marquee className={style.image} direction="left"><h2 style={{color:'#a67c00'}}>Electrical dept. </h2>
                    <img src={img8} height="300px" width="400px" marigin-left="50%" padding-left="10%" />

                </marquee>

            </Grid>

            </Grid>
        </>

    )
};

export default DepartmentPage;



