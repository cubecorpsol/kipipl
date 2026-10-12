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

import kblocks from '../Assests/K-Blocks.png';
import Kblockslogo from '../Assests/kblock.jpeg';

import Kblocks1 from '../Assests/Kblock1.png';
import Kblocks2 from '../Assests/Kblock2.png';
import Kblocks3 from '../Assests/Kblock3.png';
import Kblocks4 from '../Assests/Kblock4.png';

import kblock1 from '../Assests/kblock1.jpeg';
import kblock2 from '../Assests/kblock2.jpeg';
import kblock3 from '../Assests/kblock3.jpeg';

const KBlocks = () => {
  const productSectionRef = useRef(null);

  const handlekblocksScroll = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({
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
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: { xs: 5, md: 12, lg: 14 },
                px: { xs: 3, md: 7, lg: 8 },
                py: { xs: 5, md: 7 },
              }}
            >
              {/* LEFT IMAGE */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={kblocks}
                  alt="K Blocks"
                  sx={{
                    width: '100%',
                    maxWidth: '620px',
                    height: { xs: '260px', md: '420px' },
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
                  }}
                />
              </Box>

              {/* RIGHT CONTENT */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  pt: { md: 1 },
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
                  <span style={{ color: '#F5A000' }}>K</span>{' '}
                  <span style={{ color: '#111111' }}> Blocks</span>
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
                  We take pride in manufacturing premium-quality solid blocks
                  designed for durability, strength, and sustainable
                  construction. Our fully automated production plant ensures
                  precision, consistency, and high performance in every block
                  delivered.
                  <br />
                  <br />
                  Advanced high-pressure machinery, crane-supported delivery,
                  and rigorous compression testing guarantee reliable products
                  for residential, commercial, and infrastructure projects.
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
                    onClick={handlekblocksScroll}
                  >
                    View Products
                  </Button>

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
                Kblockslogo,
                kblock1,
                kblock2,
                Kblocks1,
                Kblocks2,
                Kblocks3,
                kblock3,
                Kblocks4,
              ].map((image, index) => (
                <Box
                  component="img"
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  sx={{
                    width: { xs: '115px', md: '145px' },
                    height: { xs: '115px', md: '145px' },
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
              ref={productSectionRef}
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
                  maxWidth: '850px',
                  mx: { md: 'auto' },
                }}
              >
                {[
                  '8” Solid Block',
                  '6” Solid Block',
                  '4” Solid Block',
                ].map((item, index) => (
                  <Grid
                    item
                    xs={10}
                    sm={6}
                    md={4}
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
                        maxWidth: '210px',

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

export default KBlocks;