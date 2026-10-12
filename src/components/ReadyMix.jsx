import React, { useRef } from 'react';
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import ReadyMiximg from '../Assests/Readymix2.jpg';
import KRM from '../Assests/KRM.jpeg';

import KRMC from '../Assests/KRMC.png';
import KRMC1 from '../Assests/KRMC1.png';
import KRMC2 from '../Assests/KRMC2.png';
import KRMC3 from '../Assests/KRMC3.png';
import KRMC4 from '../Assests/KRMC4.png';

import ReadyMixNext from '../Assests/redymix-next.jpeg';

const ReadyMix = () => {
  const productsRef = useRef(null);

  const handleScrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '95%',
            background: '#F8F9FA',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '16px',
            py: 3,
          }}
        >
          <Card
            sx={{
              width: '97%',
              background: '#ffffff',
              mt: 3,
              borderRadius: '16px',
              boxShadow: '0px 4px 18px rgba(0,0,0,0.05)',
              overflow: 'hidden',
            }}
          >
            {/* TOP SECTION */}
             <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                    gap: { xs: 5, md: 7, lg: 8 },
                    px: { xs: 3, md: 7, lg: 8 },
                    py: { xs: 5, md: 6 },
                  }}
              >
              {/* LEFT CONTENT */}
              <Box
                  sx={{
                    flex: '1 1 50%',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
              >
                {/* Main Heading */}
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '34px', lg: '52px' },
                    lineHeight: 1.15,
                    color: '#1A1A1A',
                    mb: 2,
                    letterSpacing: '0.2px',
                  }}
                >
                  <span style={{ color: '#F5A000' }}>Kannan</span>{' '}
                  <span style={{ color: '#111111' }}>Ready Mix</span>
                </Typography>

                {/* Divider */}
                <Divider
                  sx={{
                    width: '90px',
                    height: '4px',
                    backgroundColor: '#F5A000',
                    borderRadius: '10px',
                    mb: 3,
                  }}
                />

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: '#4A4A4A',
                    fontWeight: 400,
                    fontSize: { lg: '16px', xs: '14px' },
                    lineHeight: { lg: '28px', xs: '24px' },
                    textAlign: 'justify',
                    mb: 4,
                    maxWidth: '520px',
                    letterSpacing: '0.2px',
                  }}
                >
                  Our Twin Shaft RMC Plant delivers premium-quality concrete
                  using the VSI-processed aggregates and high-grade M-sand.
                  Engineered design mixes, efficient boom pump support, and
                  rapid delivery across Erode ensure reliable and precise
                  concrete solutions for projects of every scale.
                  <br />
                  <br />
                  Every pour is monitored by experienced professionals and site
                  coordinators to maintain superior strength, consistency, and
                  performance standards.
                </Typography>

                {/* BUTTONS */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    alignItems: { xs: 'start', sm: 'center' },
                  }}
                >
                  {/* View Products Button */}
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.4,
                      background: '#F5A000',
                      borderRadius: '12px',
                      fontWeight: 600,
                      fontSize: { lg: '14px', xs: '12px' },
                      textTransform: 'none',
                      letterSpacing: '0.2px',
                      boxShadow: 'none',

                      '&:hover': {
                        background: '#D88A00',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={handleScrollToProducts}
                  >
                    View Products
                  </Button>

                  {/* WhatsApp Button */}
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.4,
                      background: '#25D366',
                      borderRadius: '12px',
                      textTransform: 'none',
                      boxShadow: 'none',

                      '&:hover': {
                        background: '#1ebe5d',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() =>
                      window.open('https://wa.me/919942530590', '_blank')
                    }
                  >
                    <WhatsAppIcon />

                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '14px',
                        ml: 1,
                        color: '#fff',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Chat on WhatsApp
                    </Typography>
                  </Button>
                </Box>
              </Box>

             {/* RIGHT IMAGE */}
<Box
  sx={{
    flex: '1 1 50%',
    minWidth: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Box
    component="img"
    src={ReadyMiximg}
    alt="Kannan Ready Mix Concrete"
    sx={{
      width: '118%',
      height: 'auto',
      maxWidth: '118%',
      display: 'block',

      // IMPORTANT - FULL IMAGE, NO CROP
      objectFit: 'contain',

      borderRadius: '16px',
      boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
    }}
  />
</Box>
            </Box>

            {/* GALLERY SECTION */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 2.5 },
                width: '100%',
                boxSizing: { xs: 'border-box', md: 'content-box' },
                maxWidth: '1300px',
                mx: 'auto',
                mt: 5,
                px: 3,
              }}
            >
              {[
                KRM,
                ReadyMixNext,
                KRMC,
                KRMC1,
                KRMC2,
                KRMC3,
                KRMC4,
              ].map((image, index) => (
                <Box
                  component="img"
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  sx={{
                    width: { xs: '115px', md: '165px' },
                    height: { xs: '115px', md: '165px' },
                    objectFit: 'cover',
                    borderRadius: '12px',
                    background: '#fff',
                    boxShadow: '0px 4px 14px rgba(0,0,0,0.05)',
                    transition: '0.3s ease',

                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                />
              ))}
            </Box>

            {/* PRODUCTS SECTION */}
            <Box
              ref={productsRef}
              sx={{
                width: '100%',
                boxSizing: { xs: 'border-box', md: 'content-box' },
                mt: { xs: 6, md: 7 },
                px: { xs: 3, md: 4 },
                mb: { xs: 7, md: 9 },
              }}
            >
              {/* Heading */}
              <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '28px', md: '38px' },
                    color: '#1A1A1A',
                    lineHeight: 1.2,
                    letterSpacing: '0.2px',
                  }}
                >
                  Our Products
                </Typography>

                <Divider
                  sx={{
                    width: '90px',
                    height: '4px',
                    backgroundColor: '#F5A000',
                    borderRadius: '10px',
                    mx: 'auto',
                    mt: 2,
                  }}
                />
              </Box>

              {/* Product Tiles */}
              <Grid
                container
                spacing={2.5}
                justifyContent="center"
                sx={{
                  maxWidth: '950px',
                  mx: { md: 'auto' },
                }}
              >
                {[
                  'M10',
                  'M15',
                  'M20',
                  'M25',
                  'M30',
                  'M35',
                  'M40',
                ].map((item, index) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        background: '#fff',
                        border: '1.2px solid #e1dede',
                        borderRadius: '10px',
                        boxSizing: { xs: 'border-box', md: 'content-box' },

                        width: '100%',
                        maxWidth: '190px',

                        py: 2,
                        px: { xs: 1, md: 2 },

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                        textAlign: 'center',

                        boxShadow: '0px 3px 10px rgba(0,0,0,0.04)',
                        transition: '0.3s ease',

                        cursor: 'pointer',

                        '&:hover': {
                          backgroundColor: '#F5A000',
                          borderColor: '#F5A000',
                          transform: 'translateY(-3px)',
                          boxShadow: '0px 6px 16px rgba(0,0,0,0.08)',

                          '& .productText': {
                            color: '#ffffff',
                          },
                        },
                      }}
                    >
                      <Typography
                        className="productText"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '15px', md: '16px' },
                          color: '#1A1A1A',
                          letterSpacing: '0.2px',
                          transition: '0.3s ease',
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReadyMix;