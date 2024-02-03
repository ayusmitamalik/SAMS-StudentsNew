import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import chairman from "../../common/image/homechr.jpg";
import director from "../../common/image/homedr.webp";
import principal from "../../common/image/place.jpeg";
import dd from "../../common/image/saisruti.jpg";
import vprincipal from "../../common/image/pritam1.jpg";

export default function useHomeFaculty() {
    const [expanded, setExpanded] = React.useState(Array(5).fill(false));

    const handleExpandClick = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const cardContainerStyles = {
        overflowX: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '10px',
        padding: '10px',
        transition: 'transform 0.5s ease',
    };
    const cardMediaStyles = {
        // Add your custom CSS styles for CardMedia here
        // For example:
        height: '260px',  // Rounded corners at the top
        
        
    };

    const cardStyles = {
        maxWidth: 345,
        background: ' #ffdc73',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        flex: '0 0 auto',
    };

    const headerStyles = {
        background: '#006666',
        borderBottom: '1px solid #ddd',
    };

    const contentStyles = {
        padding: '16px',
    };

    return (
        <>
            <Grid style={cardContainerStyles}>
                {/* btech */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="CHAIRMAN"
                        sx={headerStyles}
                    />
                    <CardMedia
                        component="img"
                        // height="50px"
                        image={chairman}
                        alt="MS DHONI"
                        sx={cardMediaStyles}
                    />
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary"> so that the students becomes good citizens, and capable of utilizing their talents for the development of our Nation.
                        </Typography>
                    </CardContent>

                </Card>

                {/* mtech */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="DIRECTOR"
                        sx={headerStyles}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={director}
                        alt="Paella dish"
                    />
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                        Established in the year 2001 in the majestic Sand City of Balasore, BCET has been growing from strength to strength in imparting quality technical education to budding aspirants to harness and explore the vast opportunities available from time to time. 
                        </Typography>
                    </CardContent>

                </Card>

                {/* mba */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="DD"
                        sx={headerStyles}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={dd}
                        alt="Paella dish"
                    />
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Unlock new career horizons with our MBA programs. Empower your leadership, cultivate business acumen, and embrace
                            a transformative journey toward success. Start your MBA, where excellence meets opportunity.
                        </Typography>
                    </CardContent>

                </Card>

                {/* mca */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="PRINCIPAL"
                        sx={headerStyles}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={principal}
                        alt="Paella dish"
                    />
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Embark on a journey of innovation and excellence with our MCA program.
                            Shape your future in the dynamic world of technology, computing,
                            and innovation. Join us to explore the boundless possibilities of the digital realm.
                        </Typography>
                    </CardContent>

                </Card>

                {/* bse */}
                <Card sx={cardStyles}>
                    <CardHeader
                        title="VICE PRINCIPAL"
                        sx={headerStyles}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={vprincipal}
                        alt="Paella dish"
                    />
                    <CardContent sx={contentStyles}>
                        <Typography variant="body2" color="text.secondary">
                            Elevate your understanding of science and engineering with our BSE program.
                            Unleash your potential to innovate, create,
                            and contribute to the ever-evolving world of technology.
                            Begin your transformative journey with us!"
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </>
    );
}
