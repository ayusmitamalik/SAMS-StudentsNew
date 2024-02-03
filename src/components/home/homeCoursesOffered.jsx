import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const [expanded, setExpanded] = React.useState(Array(5).fill(false));
    

    const handleExpandClick = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const cardContainerStyles = {
        overflowX: 'auto', // Allow horizontal scrolling
        display: 'flex', // Use Flexbox
        justifyContent: 'flex-start', // Adjust as needed
        gap: '10px', // Adjust gap between cards
        padding: '10px', // Adjust padding
        transition: 'transform 0.5s ease', // Smooth scrolling transition
    };

    const cardStyles = {
        maxWidth: 345,
        // margin: '10px', // Adjust margin as needed
        background: ' #ffdc73', // Background color
        border: '1px solid #ddd', // Border color
        borderRadius: '8px', // Border radius
        boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', // Box shadow
        flex: '0 0 auto', // Prevent cards from growing
    };

    const headerStyles = {
        background: '#006666', // Header background color
        borderBottom: '1px solid #ddd', // Header border color
    };

    const contentStyles = {
        padding: '16px', // Content padding
    };

    return (
        <>
            <Grid style={cardContainerStyles}>
                {/* btech */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="B.Tech"
                        sx={headerStyles}
                    />
                    {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Fuel your ambition, embark on a journey of innovation,
                            and sculpt the future with our dynamic B.Tech programs – where
                            passion meets education, and dreams take flight!
                        </Typography>
                    </CardContent>
                    <ExpandMore
                        expand={expanded[0]}
                        onClick={() => handleExpandClick(0)}
                        aria-expanded={expanded[0]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                    <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                        <CardContent sx={contentStyles}>
                            <Typography paragraph style={{ fontWeight: 'bold' }}>
                                Courses Offered
                            </Typography>
                            <Typography paragraph>
                                <ul>
                                    <li>CSE</li>
                                    <li>CIVIL</li>
                                    <li>ME</li>
                                    <li>EEE</li>
                                    <li>ETC</li>
                                    <li>EE</li>

                                </ul>
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>

                {/* mtech */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="M.Tech"
                        sx={headerStyles}
                    />
                    {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Elevate your expertise with our M.Tech
                            programs – a gateway to advanced knowledge, cutting-edge research,
                            and a future defined by innovation. Join us in shaping tomorrow's technology leaders
                        </Typography>
                    </CardContent>
                    <ExpandMore
                        expand={expanded[1]}
                        onClick={() => handleExpandClick(1)}
                        aria-expanded={expanded[1]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                    <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
                        <CardContent sx={contentStyles}>
                            <Typography paragraph style={{ fontWeight: 'bold' }}>
                                Courses Offered
                            </Typography>
                            <Typography paragraph>
                                <ul>
                                    <li>CSE</li>
                                    <li>CIVIL</li>
                                    <li>ME</li>
                                    <li>EEE</li>
                                    <li>ETC</li>
                                    <li>EE</li>

                                </ul>
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>

                {/* mba */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="MBA"
                        sx={headerStyles}
                    />
                    
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Unlock new career horizons with our MBA programs. Empower your leadership, cultivate business acumen, and embrace
                            a transformative journey toward success. Start your MBA, where excellence meets opportunity.
                        </Typography>
                    </CardContent>
                    <ExpandMore
                        expand={expanded[2]}
                        onClick={() => handleExpandClick(2)}
                        aria-expanded={expanded[2]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                    <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
                        <CardContent sx={contentStyles}>
                            <Typography paragraph style={{ fontWeight: 'bold' }}>
                                Courses Offered
                            </Typography>
                            <Typography paragraph>
                                <ul>
                                    <li>Financial management</li>
                                    <li>Entrepreneurship</li>
                                    <li>Bussiness Economics</li>
                                    <li>Marketing Management</li>
                                    <li>Bussiness Management</li>
                                    <li>Human Resource Management</li>
                                    <li>Operation</li>
                                    <li>Coperate Finance</li>

                                </ul>
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>

                {/* mca */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="MCA"
                        sx={headerStyles}
                    />
                    {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Embark on a journey of innovation and excellence with our MCA program.
                            Shape your future in the dynamic world of technology, computing,
                            and innovation. Join us to explore the boundless possibilities of the digital realm.
                        </Typography>
                    </CardContent>
                    <ExpandMore
                        expand={expanded[3]}
                        onClick={() => handleExpandClick(3)}
                        aria-expanded={expanded[3]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                    <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
                        <CardContent sx={contentStyles}>
                            <Typography paragraph style={{ fontWeight: 'bold' }}>
                                Courses Offered
                            </Typography>
                            <Typography paragraph>
                                <ul>
                                    <li>Angular Artery</li>
                                    <li>M2</li>
                                    <li>Mobile Computing</li>
                                    <li>Cloud Computing</li>
                                    <li>Cybersecurity</li>
                                    <li>Networking</li>
                                    <li>Infromation System</li>
                                    <li>Software Development</li>

                                </ul>
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>

                {/* bse */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="B.Se"
                        sx={headerStyles}
                    />
                    {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Elevate your understanding of science and engineering with our BSE program.
                            Unleash your potential to innovate, create,
                            and contribute to the ever-evolving world of technology.
                            Begin your transformative journey with us!"
                        </Typography>
                    </CardContent>
                    <ExpandMore
                        expand={expanded[4]}
                        onClick={() => handleExpandClick(4)}
                        aria-expanded={expanded[4]}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                    <Collapse in={expanded[4]} timeout="auto" unmountOnExit>
                        <CardContent sx={contentStyles}>
                            <Typography paragraph style={{ fontWeight: 'bold' }}>
                                Courses Offered
                            </Typography>
                            <Typography paragraph>
                                <ul>
                                    <li>BioChemistry</li>
                                    <li>Botany</li>
                                    <li>Zoology</li>
                                    <li>Nurshing</li>
                                    <li>BioTech</li>

                                </ul>
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </>
    );
}



{/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}