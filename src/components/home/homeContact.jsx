import React from "react";
import { Card, Grid } from "@mui/material";

// import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import campus2 from "../../common/image/campus2.avif";


import style from "../../common/css/home/homecontact.module.css"

export default function Contact() {
    const navigate = useNavigate();
    return (
        <>
            <Grid className={style.call} container lg={12} sm={12} direction="row">
                <h2>CONTACT US </h2><br></br>
                <Grid item lg={12} display="flex">
                    <CallIcon /> <h4 style={{ paddingLeft: "2%", fontSize: "1.5vw" }}>1234567890</h4><br></br>
                </Grid>
                <Grid item lg={6} display="flex" paddingTop="2%">
                    <EmailIcon /> <h4 style={{ paddingLeft: "3%", fontSize: "1.5vw" }}>college@gamil.com</h4>
                </Grid>
                <Grid item lg={4} sm={6} direction="column"  marginTop="-5%" >
                    <Card style={{ height: "100%", width: "100%", justifyContent: "center" }}>
                        <Grid item lg={12} style={{ display: "flex", justifyContent: "right" }}>
                            <img src={campus2} alt="" style={{width:"60%",borderRadius:"45%" ,border: "4px solid orange"}} />
                        </Grid>
                        <Grid item lg={12} style={{ textAlign: "right", paddingRight: "3%" }}>
                            <button
                                type="button"
                                style={{
                                    // marginTop: "30px",
                                    marginRight: "70px",
                                    backgroundColor: "orange",
                                    borderRadius: "20px",
                                    outline: "none",
                                    border: "none",
                                    width: "25%",
                                    fontSize: "1vw",
                                    textAlign: "center"
                                }}
                                onClick={() => navigate("/feedback")}
                            >
                                FEEDBACK
                            </button>
                        </Grid>

                    </Card>
                </Grid>
            </Grid>
        </>
    );
}