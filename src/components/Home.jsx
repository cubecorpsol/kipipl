import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';

import banner from '../Assests/banner.png';
import About from './About';
import ContactUs from './ContactUs';
import KBlocks from './Kblocks';
import BlueMetals from './BlueMetals';
import ReadyMix from './ReadyMix';

const Home = () => {
  // Handle hash-based navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash) {
      const section = document.getElementById(hash);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, []);

  return (
    <Grid container>

      {/* =========================
          HERO / BANNER SECTION
          ========================= */}
      <Grid item xs={12}>
        <img
          src={banner}
          alt="KIPIPL construction materials including M-Sand, P-Sand, Blue Metal and Ready Mix in Chennimalai"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Grid>

      {/* =========================
          SEO INTRODUCTION SECTION
          ========================= */}
      <Grid item xs={12}>
        <Box
          component="section"
          sx={{
            textAlign: 'center',
            padding: {
              xs: '30px 20px',
              sm: '40px 40px',
              md: '50px 80px',
            },
            backgroundColor: '#fff',
          }}
        >

          {/* Main SEO Heading */}
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '28px',
                sm: '34px',
                md: '42px',
              },
              lineHeight: 1.2,
              color: '#111111',
              mb: 2,
            }}
          >
            Construction Material Supplier in Chennimalai &amp; Perundurai
          </Typography>

          {/* SEO Introduction */}
          <Typography
            component="p"
            sx={{
              maxWidth: '1000px',
              margin: '0 auto',
              color: '#4A4A4A',
              fontSize: {
                xs: '15px',
                sm: '16px',
                md: '17px',
              },
              lineHeight: 1.8,
            }}
          >
            With more than 30 years of experience, KIPIPL provides quality
            construction materials including Ready Mix, K Blocks, Blue Metals,
            M-Sand, P-Sand, 6 mm, 12 mm, 20 mm, 40 mm and 53 mm aggregates,
            Rough Stone, Dust and Tile Fix Pro. Serving customers in
            Chennimalai, Perundurai and surrounding areas, we are committed
            to quality, reliability and timely service.
          </Typography>

        </Box>
      </Grid>

      {/* =========================
          ABOUT SECTION
          ========================= */}
      <Grid item xs={12} id="about">
        <About />
      </Grid>

      {/* =========================
          READY MIX SECTION
          ========================= */}
      <Grid
        item
        xs={12}
        id="readymix"
        sx={{
          mt: 5,
          padding: 2,
        }}
      >
        <ReadyMix />
      </Grid>

      {/* =========================
          K BLOCKS SECTION
          ========================= */}
      <Grid
        item
        xs={12}
        id="kblocks"
        sx={{
          mt: 5,
          padding: 2,
        }}
      >
        <KBlocks />
      </Grid>

      {/* =========================
          BLUE METALS SECTION
          ========================= */}
      <Grid
        item
        xs={12}
        id="bluemetals"
        sx={{
          mt: 5,
          padding: 2,
        }}
      >
        <BlueMetals />
      </Grid>

      {/* =========================
          CONTACT SECTION
          ========================= */}
      <Grid
        item
        xs={12}
        id="contact"
        sx={{
          mt: 5,
          padding: 2,
        }}
      >
        <ContactUs />
      </Grid>

    </Grid>
  );
};

export default Home;