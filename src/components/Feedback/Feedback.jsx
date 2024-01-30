import { Grid, Box, Rating } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star'
import style from "../../common/css/feedback.module.css"//css
import poor from "../../common/image/poor.png";
import okey from "../../common/image/okey.png";
import good from "../../common/image/good.webp";
import better from "../../common/image/better.webp";
import best from "../../common/image/best.webp";



const labels = {
    1: 'POOR',
    2: 'OK',
    3: 'GOOD',
    4: 'BETTER',
    5: 'BEST',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}




export default function Feedback() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    return (
        <>
           
            <Grid className={style.feedbackform}>
                <section></section>
                <Grid className={style.container}>

                    <form>
                        <h2>GIVE YOUR FEEDBACK</h2>
                        <hr style={{ backgroundColor: ' rgb(217, 200, 101)', width: '315px', height: '3px', border: 'none',marginBottom:'10px' }} />

                        <Grid className={style.emoji}>
                        <img src={poor} alt='' />
                        <img src={okey} alt='' />
                        <img src={good} alt='' />
                        <img src={better} alt='' />
                        <img src={best} alt='' />

                    </Grid>
                        <Box
                        sx={{
                            width: 400,
                            display: 'flex',
                            alignItems: 'center',
                            // marginTop: '100px'
                            color:'rgb(217, 200, 101)'
                        }}

                    >

                        <Rating
                            style={{ marginLeft: '100px', marginTop: '7px' }}

                            name="hover-feedback"
                            value={value}
                            precision={1}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 2 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                        <Grid className={style.id}>
                            <input type='text' placeholder='Enter your Name' />
                            {/* <i className='far fa-user'></i> */}
                            {/* <i className='far fa-envelope'></i> */}

                        </Grid>
                        <Grid>
                            <input type='email' placeholder='Enter your Email' />

                        </Grid>
                        <Grid>
                        <textarea cols='15' rows='5' placeholder='Enter your opinions here' />
                       
                        </Grid>
                        <Grid><button style={{marginLeft:'-20px',fontSize:'18px'}}>Submit</button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>

        </>
    );
};



