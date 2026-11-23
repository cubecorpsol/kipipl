import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import banner from '../Assests/banner.png';
import About from './About';
import ContactUs from './ContactUs';
import KBlocks from './Kblocks';
import BlueMetals from './BlueMetals';
import ReadyMix from './ReadyMix';

const Home = () => {
  // Handle hash-based navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1); // remove the '#'
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Grid container>
      {/* Banner */}
      <Grid item xs={12}>
        {/* Page H1 for search engines and screen readers; the banner carries the visual headline */}
        <Typography
          component="h1"
          sx={{ position: 'absolute', width: 1, height: 1, m: -1, p: 0, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}
        >
          KIPIPL – M Sand, P Sand, Blue Metal and Ready Mix Concrete Supplier in Chennimalai
        </Typography>
        <img
          src={banner}
          alt="KIPIPL M Sand, P Sand, Blue Metal and Ready Mix Concrete supplier in Chennimalai"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Grid>
       
      {/* About Section */}
      <Grid item xs={12} id="about">
        <About />
      </Grid>

      {/* ReadyMix Section */}
      <Grid item xs={12} id="readymix" sx={{ mt: 5, padding: 2 }}>
        <ReadyMix />
      </Grid>

      {/* K Blocks Section */}
      <Grid item xs={12} id="kblocks" sx={{ mt: 5, padding: 2 }}>
        <KBlocks />
      </Grid>

      {/* Blue Metals Section */}
      <Grid item xs={12} id="bluemetals" sx={{ mt: 5, padding: 2 }}>
        <BlueMetals />
      </Grid>

      {/* Contact Us Section */}
      <Grid item xs={12} id="contact" sx={{ mt: 5, padding: 2 }}>
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Home;
