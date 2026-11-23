import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

import site from '../seo/site.json';
import { LOCATIONS_PATH, locationSlug, findLocation } from '../seo/pages.mjs';
import { ACCENT, ACCENT_TINT, INK, BODY, MUTED, LINE, SURFACE, productImages, quoteLink } from './locationShared';

const Overline = ({ children }) => (
  <Typography sx={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
    {children}
  </Typography>
);

const H2 = ({ children }) => (
  <Typography component="h2" sx={{ fontSize: { xs: '24px', md: '30px' }, fontWeight: 600, color: INK, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
    {children}
  </Typography>
);

const ProductCard = ({ product, town }) => (
  <Box
    component="article"
    sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', border: `1px solid ${LINE}`, borderRadius: '14px', overflow: 'hidden' }}
  >
    <Box
      component="img"
      src={productImages[product.key]}
      alt={`${product.name} supplied in ${town}`}
      loading="lazy"
      sx={{ width: '100%', height: 130, objectFit: 'cover', display: 'block', backgroundColor: SURFACE }}
    />
    <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Typography component="h3" sx={{ fontSize: '17px', fontWeight: 600, color: INK }}>
        {product.name}
      </Typography>
      <Typography sx={{ fontSize: '13px', color: BODY, lineHeight: 1.65, mt: 1 }}>{product.desc}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1.75, mb: 2.5 }}>
        {product.uses.map((u) => (
          <Box key={u} component="span" sx={{ fontSize: '11.5px', color: MUTED, border: `1px solid ${LINE}`, borderRadius: '999px', px: 1.1, py: 0.25 }}>
            {u}
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Button
          component="a"
          href={quoteLink(product.name, town)}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          disableElevation
          startIcon={<WhatsAppIcon sx={{ fontSize: '16px !important' }} />}
          sx={{ backgroundColor: ACCENT, color: '#fff', textTransform: 'none', fontWeight: 600, fontSize: '13px', borderRadius: '8px', py: 0.9, '&:hover': { backgroundColor: '#d98d00' } }}
        >
          Get a quote
        </Button>
        <Button
          component={RouterLink}
          to={product.link}
          endIcon={<ArrowForwardIcon sx={{ fontSize: '14px !important' }} />}
          sx={{ textTransform: 'none', fontWeight: 600, fontSize: '13px', color: INK, borderRadius: '8px', py: 0.7, '&:hover': { backgroundColor: SURFACE } }}
        >
          Learn more
        </Button>
      </Box>
    </Box>
  </Box>
);

const features = [
  { icon: FactoryOutlinedIcon, title: 'Own quarry and plant', desc: 'Materials come straight from our 100-acre quarry and manufacturing units in Chennimalai.' },
  { icon: HistoryOutlinedIcon, title: 'Supplying since 1990', desc: 'More than three decades of supply to builders across Erode, Tiruppur and Namakkal districts.' },
  { icon: VerifiedOutlinedIcon, title: 'Quality-controlled sand', desc: 'M Sand from our 150 TPH, 4-stage plant is produced to IS standards.' },
];

const LocationPage = () => {
  const { slug } = useParams();
  const loc = findLocation(site, slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!loc) {
    return (
      <Box component="main" sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 3, md: 5 }, py: 12 }}>
        <Typography component="h1" sx={{ fontSize: '32px', fontWeight: 600, color: INK }}>
          Location not found
        </Typography>
        <Button component={RouterLink} to={LOCATIONS_PATH} sx={{ mt: 3, textTransform: 'none', color: INK, fontWeight: 600 }}>
          View all service locations
        </Button>
      </Box>
    );
  }

  const { town, district, nearby } = loc;
  const note = site.locationNotes?.[town];

  return (
    <Box component="main" sx={{ backgroundColor: '#fff' }}>
      {/* Hero */}
      <Box sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 3, md: 5 }, pt: { xs: 5, md: 7 }, pb: { xs: 6, md: 8 } }}>
        <Box component="nav" aria-label="Breadcrumb" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.75, fontSize: '13px', color: MUTED, mb: { xs: 4, md: 6 } }}>
          <Box component={RouterLink} to={LOCATIONS_PATH} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: INK } }}>
            Service locations
          </Box>
          <ChevronRightIcon sx={{ fontSize: 16 }} />
          <span>{district}</span>
          <ChevronRightIcon sx={{ fontSize: 16 }} />
          <Box component="span" sx={{ color: INK }}>{town}</Box>
        </Box>

        <Overline>{district}</Overline>
        <Typography
          component="h1"
          sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, fontWeight: 600, color: INK, lineHeight: 1.12, letterSpacing: '-0.02em', maxWidth: '820px' }}
        >
          Construction Materials Supplier in {town}
        </Typography>
        <Typography sx={{ color: BODY, fontSize: { xs: '16px', md: '18px' }, lineHeight: 1.8, maxWidth: '680px', mt: 3 }}>
          M Sand, P Sand, Tile Adhesive, Aggregates and Solid Blocks delivered to {town}, straight from our own quarry
          and plant in Chennimalai. {note}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
          <Button
            component="a"
            href={quoteLink('construction materials', town)}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            disableElevation
            startIcon={<WhatsAppIcon />}
            sx={{ backgroundColor: ACCENT, color: '#fff', textTransform: 'none', fontWeight: 600, fontSize: '14px', borderRadius: '8px', px: 3, py: 1.3, '&:hover': { backgroundColor: '#d98d00' } }}
          >
            Get a quote
          </Button>
          <Button
            component="a"
            href="tel:+919842830590"
            variant="outlined"
            startIcon={<PhoneOutlinedIcon />}
            sx={{ textTransform: 'none', fontWeight: 600, fontSize: '14px', borderRadius: '8px', px: 3, py: 1.3, color: INK, borderColor: '#CFCFCB', '&:hover': { borderColor: INK, backgroundColor: 'transparent' } }}
          >
            +91 98428 30590
          </Button>
        </Box>
      </Box>

      {/* Products */}
      <Box component="section" sx={{ backgroundColor: SURFACE, borderTop: `1px solid ${LINE}`, py: { xs: 6, md: 9 } }}>
        <Box sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 3, md: 5 } }}>
          <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Overline>Products</Overline>
            <H2>Products delivered to {town}</H2>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
              gap: 2.5,
            }}
          >
            {site.products.map((p) => (
              <ProductCard key={p.key} product={p} town={town} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Why + nearby */}
      <Box component="section" sx={{ borderTop: `1px solid ${LINE}`, py: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            maxWidth: '1120px',
            mx: 'auto',
            px: { xs: 3, md: 5 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
            gap: { xs: 6, md: 9 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Overline>Why KIPIPL</Overline>
            <H2>Why KIPIPL in {town}?</H2>
            <Typography sx={{ color: BODY, fontSize: '15px', lineHeight: 1.8, mt: 2, mb: 3.5 }}>
              Builders in {town} buy from the quarry directly, so the material you order is the material we make.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {features.map(({ icon: Icon, title, desc }) => (
                <Box key={title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', p: 2.25, border: `1px solid ${LINE}`, borderRadius: '14px' }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: ACCENT_TINT, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '15px', fontWeight: 600, color: INK }}>{title}</Typography>
                    <Typography sx={{ fontSize: '13.5px', color: BODY, lineHeight: 1.65, mt: 0.4 }}>{desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ border: `1px solid ${LINE}`, borderRadius: '14px', p: { xs: 2.5, md: 3.5 }, backgroundColor: '#fff' }}>
            <Typography component="h2" sx={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: INK, mb: 2.5 }}>
              Also serving nearby areas
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {nearby.map((n) => (
                <li key={n}>
                  <Box
                    component={RouterLink}
                    to={`${LOCATIONS_PATH}/${locationSlug(n)}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      px: 1.75,
                      py: 1.25,
                      border: `1px solid ${LINE}`,
                      borderRadius: '10px',
                      textDecoration: 'none',
                      color: BODY,
                      fontSize: '14px',
                      '&:hover': { borderColor: ACCENT, color: INK },
                    }}
                  >
                    <LocationOnOutlinedIcon sx={{ fontSize: 17, color: MUTED }} />
                    <span style={{ flex: 1 }}>{n}</span>
                    <Box component="span" sx={{ fontSize: '12px', color: MUTED }}>{district.replace(' District', '')}</Box>
                  </Box>
                </li>
              ))}
            </Box>
            <Button
              component={RouterLink}
              to={LOCATIONS_PATH}
              fullWidth
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: '15px !important' }} />}
              sx={{ mt: 2.5, textTransform: 'none', fontWeight: 600, fontSize: '13.5px', borderRadius: '10px', py: 1.1, color: INK, borderColor: LINE, '&:hover': { borderColor: INK, backgroundColor: 'transparent' } }}
            >
              View all locations
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationPage;
