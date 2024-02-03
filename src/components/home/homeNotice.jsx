import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Grid, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AlignHorizontalCenter } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function useHomeCoursesOffered() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardStyles = {
    maxWidth: 345,
    width:'300px',
    height: '300px',
    background: 'white', // Background color for the card
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: '0 0 auto',
  };

  const headerStyles = {
    background: 'grey',
    borderBottom: '1px solid #ddd',
  };

  const contentStyles = {
    padding: '16px',

  };

  return (
    <Box sx={{ backgroundColor: 'lightgrey', minHeight: '50vh', paddingTop: '50px' , paddingLeft: '50px' , paddingBottom: '30px', backgroundImage:`url( "https://images.assetsdelivery.com/compings_v2/motizova/motizova1608/motizova160800001.jpg")`,backgroundSize: 'cover'  }}>
      <Grid container justifyContent="left">
       
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <Card sx={cardStyles}>
            <CardHeader title="notice" sx={headerStyles} />
            <CardContent sx={contentStyles }>
              <Typography variant="body2" color="text.secondary">
                <marquee direction="up" scrollamount="1" my-animination="60s linear infinite">
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor="#fff4f3" width="800" valign="top">
                      <span>31-01-2024</span>
                    </td>
                    <td align="left" bgcolor="#fff4f3" width="600">
                      <a href="https://drive.google.com/file/d/1exNLsc8Q5HKBW2DI2a3qi_A5c6mHMvnq/view?usp=sharing" target="_blank" class="link1">
                        Ph.D viva
                      </a>
                    </td>
                  </tr>
                 
                  {/* Rest of your content */}
                </marquee>
              </Typography>
            </CardContent>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Card>
          { <p style={{ textAlign: 'center',display: 'flex', justifyContent: 'left', alignItems: 'center',marginLeft:'70px'  }}>One important aspect of communication is business communication,<br/> also known as formal communication. Formal letters, memos, circulars etc<br/> are all forms of business communication.<br/> Another important tool of the same is a notice. Let us learn the<br/> meaning of notices and details of notice-writing.</p> }
        </Box> 
      </Grid>
    </Box>
  );
}








// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import CardContent from '@mui/material/CardContent';

// export default function SimplePaper() {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         '& > :not(style)': {
//           m: 1,
//           width: 328,
//           height: 328,
//         },
//       }}
//     >
//       <Paper elevation={0}>
//         <CardContent sx={{ maxWidth: 328, mt: 3 }}>
//           <Typography variant="h5" color="primary" gutterBottom>
//             Notice
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {/* This is a sample message inside the Paper component. */}
//           </Typography>
//           {!expanded && (
//             <Typography variant="body2" color="text.secondary">
//               {/* Additional content here */}
//             </Typography>
//           )}
//         </CardContent>
//         {expanded && (
//           <CardContent sx={{ maxWidth: 328, mt: 3 }}>
//             <Typography variant="body2" color="text.secondary">
//               {/* Additional text when expanded */}
//             </Typography>
//           </CardContent>
//         )}
//       </Paper>
//       <Paper elevation={3} />
//     </Box>
//   );
// }




// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// function Notice({ title, content }) {
//   return (
//     <Paper elevation={3} style={{ marginBottom: '30px',marginLeft:'30%',marginRight:'20%',maxWidth: '500px'  }}>
//       <Typography variant="h5" color="primary" gutterBottom>
//         {title}
//       </Typography>
//       <Typography variant="body1" color="text.secondary">
//         {content}
//       </Typography>
//     </Paper>
//   );
// }

// export default function NoticeBoard() {
//   const [notices, setNotices] = useState([
    
//     { title: 'notice1', content: 'This is the content of Notice 1.' },
//      { title: 'Notice 2', content: 'This is the content of Notice 2.' },
//      { title :'Notice 3', content: 'This is the content of Notice 3.' },
//      { title :'Notice 4', content: 'This is the content of Notice 4.' },
//      { title :'Notice 5', content: 'This is the content of Notice 5.' },
//   ]);

//   const addNotice = () => {
//     const newNotice = {
//       title: `Notice ${notices.length + 1}`,
//       content: `This is the content of Notice ${notices.length + 1}.`,
//     };
//     setNotices([...notices, newNotice]);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '20px',
//         pl:'20px'
//       }}
//     >
//       {/* <Typography variant="h4" gutterBottom>
//         Notice Board
//       </Typography> */}
//       <Button variant="contained" color="primary" onClick={addNotice} style={{ marginBottom: '30px',marginLeft:'20%',marginRight:'20%',maxWidth: '500px',margintop:'50px' }}>
//         Add Notice
//       </Button>
//       <Box style={{ width: '100%'}}>
//         {notices.map((notice, index) => (
//           <Notice key={index} title={notice.title} content={notice.content} />
//         ))}
//       </Box>
//     </Box>
//   );
// }


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMoreIcon

// function Notice({ title, content }) {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Paper elevation={3} className="notice" style={{ marginBottom: '30px', marginLeft: '30%', marginRight: '20%', maxWidth: '500px' }}>
//       <Typography variant="h5" color="primary" gutterBottom>
//         {title}
//       </Typography>
//       <Typography variant="body1" color="text.secondary">
//         {expanded ? content : `${content.slice(0, 100)}...`} {/* Show only first 100 characters when not expanded */}
//         {!expanded && (
//           <Button size="small" color="primary" onClick={toggleExpand}>
//             <ExpandMoreIcon />
//           </Button>
//         )}
//       </Typography>
//     </Paper>
//   );
// }

// export default function NoticeBoard() {
//   const [notices, setNotices] = useState([
//     { title: 'notice1', content: 'This is the content of Notice 1.' },
   
    
//   ]);

//   const addNotice = () => {
//     const newNotice = {
//       title: `Notice ${notices.length + 1}`,
//       content: `This is the content of Notice ${notices.length + 1}.`,
//     };
//     setNotices([...notices, newNotice]);
//   };

//   return (
//     <Box
//     sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       pl: '20px',
//       backgroundColor: 'grey',// Specify your background image URL here
//       backgroundSize: 'cover', // Make sure the background covers the entire area
//     }}
//     >
//       <Button variant="contained" color="primary" onClick={addNotice} style={{ marginBottom: '30px', marginLeft: '20%', marginRight: '20%', maxWidth: '500px', marginTop: '50px' }}>
//         Add Notice
//       </Button>
//       <Box style={{ width: '100%' }}>
//         {notices.map((notice, index) => (
//           <Notice key={index} title={notice.title} content={notice.content} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMoreIcon

// function Notice({ title, content }) {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Paper elevation={3} className="notice" style={{ marginBottom: '30px', marginLeft: '30%', marginRight: '20%', maxWidth: '500px' }}>
//       <Typography variant="h5" color="primary" gutterBottom>
//         {title}
//       </Typography>
//       <Typography variant="body1" color="text.secondary">
//         {expanded ? content : `${content.slice(0, 100)}...`} {/* Show only first 100 characters when not expanded */}
//         {!expanded && (
//           <Button size="small" color="primary" onClick={toggleExpand}>
//             <ExpandMoreIcon />
//           </Button>
//         )}
//       </Typography>
//     </Paper>
//   );
// }

// export default function NoticeBoard() {
//   const [notices, setNotices] = useState([
//     { title: 'notice1', content: 'This is the content of Notice 1.' },
//   ]);

//   const addNotice = () => {
//     const newNotice = {
//       title: `Notice ${notices.length + 1}`,
//       content: `This is the content of Notice ${notices.length + 1}.`,
//     };
//     setNotices([...notices, newNotice]);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '20px',
//         pl: '20px',
//         backgroundImage: `url('your-background-image-url.jpg')`, // Specify your background image URL here
//         backgroundSize: 'cover', // Make sure the background covers the entire area
//       }}
//       style={{ backgroundColor: 'lightblue', minHeight: '100vh', paddingTop: '50px' }} // Inline CSS applied to the Box component
//     >
//       <Button variant="contained" color="primary" onClick={addNotice} style={{ marginBottom: '30px', marginLeft: '20%', marginRight: '20%', maxWidth: '500px', marginTop: '50px' }}>
//         Add Notice
//       </Button>
//       <Box style={{ width: '100%' }}>
//         {notices.map((notice, index) => (
//           <Notice key={index} title={notice.title} content={notice.content} />
//         ))}
//       </Box>
//       {/* Add the SimplePaper component here */}
//       <SimplePaper />
//     </Box>
//   );
// }

// // Your SimplePaper component
// function SimplePaper() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={0} />
//       <Paper />
//       <Paper elevation={3} />
//     </Box>
//   );
// }
