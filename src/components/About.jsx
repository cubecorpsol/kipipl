import { Grid, Box, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import aboutimg from '../Assests/aboutimg.png';

const About = () => {
  return (
    <Box
      component="section"
      aria-label="About Us"
      sx={{
        padding: { xs: 3, sm: 5, lg: 9 },
        backgroundColor: '#fff',
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        {/* Left Section: Image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={aboutimg}
            alt="30+ Years Industry Experience in Sand and Aggregates"
            sx={{
              width: { xs: '85%', sm: '70%', md: '100%' },
              maxWidth: '480px',
              display: 'block',
              borderRadius: '16px',
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Right Section: About Content */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              pt: { xs: 1, md: 0 },
              maxWidth: '680px',
            }}
          >
            {/* Title Section */}
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '34px', sm: '42px', lg: '54px' },
                color: '#111111',
                lineHeight: 1.1,
                letterSpacing: '0.5px',
                mb: 2,
              }}
            >
              About Us
            </Typography>

            {/* Divider */}
            <Divider
              sx={{
                width: '90px',
                height: '4px',
                backgroundColor: '#F5A000',
                borderRadius: '10px',
                border: 'none',
                mb: 4,
              }}
            />

            {/* Description Section */}
            <Typography
              variant="body1"
              sx={{
                color: '#4A4A4A',
                fontWeight: 400,
                fontSize: { xs: '14px', lg: '16px' },
                lineHeight: { xs: '24px', lg: '30px' },
                textAlign: { xs: 'left', sm: 'justify' },
                mb: 3,
                letterSpacing: '0.2px',
              }}
            >
              With a legacy dating back to 1990, we stand as pioneers in the sand
              and aggregates industry, driven by innovation and a steadfast
              commitment to quality. Operating from a 100-acre mining campus in
              Murungatholuvu, Chennimalai, home to 10 million tons of premium blue
              metal reserves, we redefine reliability in every order.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#4A4A4A',
                fontWeight: 400,
                fontSize: { xs: '14px', lg: '16px' },
                lineHeight: { xs: '24px', lg: '30px' },
                textAlign: { xs: 'left', sm: 'justify' },
                mb: 4,
                letterSpacing: '0.2px',
              }}
            >
              Our state-of-the-art 150 TPH 4-stage sand manufacturing plant,
              paired with advanced quality controls, ensures products that meet IS
              standards while minimizing our carbon footprint. Strategically
              located as the nearest blue metal quarry to Erode, we guarantee
              swift delivery within two hours, backed by exceptional service and
              sustainable practices.
            </Typography>

            {/* Button Section */}
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '12px', lg: '14px' },
                  padding: { xs: '10px 22px', lg: '14px 32px' },
                  backgroundColor: '#F5A000',
                  color: '#fff',
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#d98d00',
                    boxShadow: 'none',
                  },
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;