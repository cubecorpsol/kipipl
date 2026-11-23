import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import site from '../seo/site.json';
import { LOCATIONS_PATH, locationSlug } from '../seo/pages.mjs';

import mdImg from '../Assests/leaders/chandravathani-govindasamy.png';
import edImg from '../Assests/leaders/sowmesh-nithil-govindasamy.png';
import dirImg from '../Assests/leaders/rohith-nithil-govindasamy.png';

const ACCENT = '#F5A000';
const INK = '#111111';
const BODY = '#4A4A4A';
const MUTED = '#8A8A8A';
const LINE = '#E6E6E3';

const photos = { md: mdImg, ed: edImg, dir: dirImg };

const facts = [
  { value: '1990', label: 'Established' },
  { value: '100 acres', label: 'Mining campus' },
  { value: '10 M tons', label: 'Blue metal reserves' },
  { value: '150 TPH', label: 'Sand plant capacity' },
  { value: '2 hours', label: 'Delivery to Erode' },
];

const companyData = [
  ['Company', 'Kannan Infra Projects India Pvt. Ltd. (KIPIPL)'],
  ['Also known as', 'Kannan Blue Metals'],
  ['Established', '1990'],
  ['Quarry & plant', 'Murugantholuvu, Chennimalai, Erode District, Tamil Nadu 638051'],
  ['Operations', '100-acre mining campus with 10 million tons of blue metal reserves'],
  ['Sand plant', '150 TPH, 4-stage M Sand manufacturing plant; produce meets IS standards'],
  ['Products', 'M Sand, P Sand, Blue Metal aggregates, K Blocks solid blocks, Ready Mix Concrete, Tile Fix Pro'],
  ['Delivery', 'Within two hours of Erode, the nearest blue metal quarry to the city'],
  ['Phone', '+91 98428 30590, +91 99425 30590'],
  ['Email', 'info@kipipl.com'],
];

const Overline = ({ children }) => (
  <Typography
    sx={{
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: ACCENT,
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

const SectionHeading = ({ overline, title }) => (
  <Box sx={{ mb: { xs: 4, md: 6 } }}>
    <Overline>{overline}</Overline>
    <Typography
      component="h2"
      sx={{
        fontSize: { xs: '26px', md: '34px' },
        fontWeight: 600,
        color: INK,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      }}
    >
      {title}
    </Typography>
  </Box>
);

const Section = ({ children, id, tint }) => (
  <Box
    component="section"
    id={id}
    sx={{
      backgroundColor: tint ? '#FAFAF8' : '#fff',
      borderTop: `1px solid ${LINE}`,
      py: { xs: 7, md: 11 },
    }}
  >
    <Box sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 3, md: 5 } }}>{children}</Box>
  </Box>
);

const bodySx = {
  color: BODY,
  fontSize: { xs: '15px', md: '16px' },
  lineHeight: 1.85,
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box component="main" sx={{ backgroundColor: '#fff' }}>
      {/* ---------- Intro ---------- */}
      <Box sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 3, md: 5 }, pt: { xs: 7, md: 12 }, pb: { xs: 6, md: 9 } }}>
        <Overline>About us</Overline>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '30px', sm: '40px', md: '52px' },
            fontWeight: 600,
            color: INK,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            maxWidth: '860px',
          }}
        >
          About KIPIPL – Construction Materials Supplier in Chennimalai &amp; Erode
        </Typography>
        <Typography sx={{ ...bodySx, maxWidth: '680px', mt: 3, fontSize: { xs: '16px', md: '18px' } }}>
          Since 1990, we have supplied sand, blue metal, solid blocks and Ready Mix Concrete from our own
          quarry in Chennimalai to builders across Erode, Tiruppur and Namakkal districts.
        </Typography>

        {/* Key facts */}
        <Box
          component="dl"
          sx={{
            m: 0,
            mt: { xs: 5, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
            borderTop: `1px solid ${LINE}`,
          }}
        >
          {facts.map((f, i) => (
            <Box
              key={f.label}
              sx={{
                py: 3,
                pr: 2,
                pl: { xs: 0, md: i === 0 ? 0 : 3 },
                borderLeft: { xs: 'none', md: i === 0 ? 'none' : `1px solid ${LINE}` },
                borderBottom: { xs: `1px solid ${LINE}`, md: 'none' },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <Typography component="dt" sx={{ fontSize: '13px', color: MUTED, mt: 0.5 }}>
                  {f.label}
                </Typography>
                <Typography component="dd" sx={{ m: 0, fontSize: { xs: '22px', md: '26px' }, fontWeight: 600, color: INK }}>
                  {f.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ---------- Company overview ---------- */}
      <Section id="company">
        <Grid container spacing={{ xs: 3, md: 8 }}>
          <Grid item xs={12} md={4}>
            <SectionHeading overline="Our company" title="Quarry to delivery, under one roof" />
          </Grid>
          <Grid item xs={12} md={8}>
            {site.pages['/about'].content.slice(0, 2).map((para) => (
              <Typography key={para} sx={{ ...bodySx, mb: 3 }}>
                {para}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Section>

      {/* ---------- Leadership ---------- */}
      <Section id="leadership" tint>
        <SectionHeading overline="Leadership" title="The people behind KIPIPL" />
        <Box>
          {site.people.map((p, i) => (
            <Box
              key={p.key}
              component="article"
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
                gap: { xs: 3, md: 8 },
                py: { xs: 4, md: 6 },
                borderTop: `1px solid ${LINE}`,
                ...(i === site.people.length - 1 ? { borderBottom: `1px solid ${LINE}` } : {}),
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: { xs: 'center', md: 'flex-start' }, gap: { xs: 2.5, md: 2.5 } }}>
                <Box
                  component="img"
                  src={photos[p.key]}
                  alt={`${p.name}, ${p.jobTitle} of KIPIPL`}
                  loading="lazy"
                  sx={{
                    width: { xs: 88, md: 140 },
                    height: { xs: 88, md: 168 },
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '4px',
                    backgroundColor: '#F1F1EE',
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography component="h3" sx={{ fontSize: '18px', fontWeight: 600, color: INK, lineHeight: 1.3 }}>
                    {p.name}
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: MUTED, mt: 0.5 }}>{p.jobTitle}</Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  component="h4"
                  sx={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}
                >
                  {p.heading}
                </Typography>
                {p.message.map((para) => (
                  <Typography key={para.slice(0, 24)} sx={{ ...bodySx, mb: 2, maxWidth: '720px' }}>
                    {para}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ---------- Company data ---------- */}
      <Section id="company-data">
        <Grid container spacing={{ xs: 3, md: 8 }}>
          <Grid item xs={12} md={4}>
            <SectionHeading overline="Company data" title="At a glance" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box component="dl" sx={{ m: 0 }}>
              {companyData.map(([k, v]) => (
                <Box
                  key={k}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '180px 1fr' },
                    gap: { xs: 0.5, sm: 3 },
                    py: 2,
                    borderBottom: `1px solid ${LINE}`,
                    '&:first-of-type': { borderTop: `1px solid ${LINE}` },
                  }}
                >
                  <Typography component="dt" sx={{ fontSize: '14px', color: MUTED }}>
                    {k}
                  </Typography>
                  <Typography component="dd" sx={{ m: 0, fontSize: '15px', color: INK, lineHeight: 1.6 }}>
                    {k === 'Email' ? (
                      <a href="mailto:info@kipipl.com" style={{ color: 'inherit' }}>{v}</a>
                    ) : (
                      v
                    )}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* ---------- Service locations ---------- */}
      <Section id="service-locations" tint>
        <SectionHeading overline="Service locations" title="Where we deliver across Tamil Nadu" />
        <Typography sx={{ ...bodySx, maxWidth: '680px', mb: { xs: 4, md: 6 }, mt: { xs: -2, md: -3 } }}>
          M Sand, P Sand, Tile Adhesive, Aggregates and Solid Blocks, delivered to {site.serviceAreas.reduce((n, d) => n + d.locations.length, 0)} locations
          across three districts.
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {site.serviceAreas.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.district}>
              <Box sx={{ borderTop: `2px solid ${INK}`, pt: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 2 }}>
                  <Typography component="h3" sx={{ fontSize: '18px', fontWeight: 600, color: INK }}>
                    {area.district}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: MUTED }}>{area.locations.length} locations</Typography>
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                  {area.locations.map((loc) => (
                    <Box
                      component="li"
                      key={loc}
                      sx={{ borderBottom: `1px solid ${LINE}` }}
                    >
                      <Box
                        component={RouterLink}
                        to={`${LOCATIONS_PATH}/${locationSlug(loc)}`}
                        sx={{ display: 'block', py: 1.1, fontSize: '15px', color: BODY, textDecoration: 'none', '&:hover': { color: INK } }}
                      >
                        {loc}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 5, md: 7 }, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: ACCENT,
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '14px',
              borderRadius: '8px',
              px: 3.5,
              py: 1.4,
              '&:hover': { backgroundColor: '#d98d00' },
            }}
          >
            Request a quote
          </Button>
          <Button
            component={RouterLink}
            to="/knowledge/service-locations"
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '14px',
              borderRadius: '8px',
              px: 3.5,
              py: 1.4,
              color: INK,
              borderColor: '#CFCFCB',
              '&:hover': { borderColor: INK, backgroundColor: 'transparent' },
            }}
          >
            Full coverage details
          </Button>
        </Box>
      </Section>
    </Box>
  );
};

export default AboutPage;
