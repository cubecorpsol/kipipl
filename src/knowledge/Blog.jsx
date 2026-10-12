import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button, Card, Chip } from '@mui/material';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import computerVisionImg from "../Assests/blog-computer-vision-jaw.jpg";
import excavatorImg from "../Assests/escavator.png";
import greyMatterImg from "../Assests/Grey-Matter.png";
import thermalImg from "../Assests/Thermal.png";
import conveyorImg from "../Assests/M-sand-conveyor-automation.png";
import msandRiverImg from "../Assests/Msand-Rand.png";

// --- IMAGES -------------------------------------------------------------
// Reusing existing project assets as placeholders. Swap these for your
// real article thumbnails / hero collage whenever you have them.
import heroImg from '../Assests/banner.png';

const stats = [
  { icon: <DescriptionOutlinedIcon />, value: '50+', label: 'Articles' },
  { icon: <EmojiObjectsOutlinedIcon />, value: '5', label: 'Innovation Projects' },
  { icon: <WorkspacePremiumOutlinedIcon />, value: 'Since 1990', label: '' },
  { icon: <LocationOnOutlinedIcon />, value: '100+', label: 'Acre Mining Campus' },
];

// Combined + de-duplicated article list from the reference screenshots
const articles = [
  {
  tag: "Innovation",
  title: "Electric Excavator – The Future of Sustainable Mining",
  date: "2025 Year Book",
  readTime: "5 min read",
  img: excavatorImg,

  shortDesc:
    "KIPIPL introduces Electric Excavators to build a cleaner, smarter and zero-emission mining future with lower operating costs.",

  fullDesc: `
Redefining Sustainable Mining

Kannan Infra Projects India Pvt. Ltd. (KIPIPL) takes pride in introducing Electric Excavators for quarry and mining operations to minimize emissions and move towards a zero-defect, fully electrified mine.

Challenge:
• High diesel usage, operational costs and carbon emissions.
• Regular maintenance and noise pollution affected efficiency.
• Need for a cleaner, smarter and cost-effective mining solution.

Solution:
• Introduced Electric Excavators under DGMS norms.
• Powered by smart electric drive systems with high torque output.
• Integrated with real-time monitoring for performance tracking.
• Supported by solar energy plans for future electrified mines.

Results:
• 60% lower operating cost and zero fuel emissions.
• Reduced noise and vibration.
• Higher uptime and lower maintenance.
• Smaller carbon footprint.

Vision:
By 2030, KIPIPL aims to power its Blue Metal quarry operations through a 3 MW solar power plant, achieving zero diesel consumption.

Our Electric Excavator marks the beginning of a greener revolution in mining.
`,
},
  {
  tag: "Sustainability",
  title: "Grey Matter – A Concept Farmhouse",
  date: "2025 Year Book",
  readTime: "5 min read",
  img: greyMatterImg,

  shortDesc:
    "Grey Matter is a sustainable concept farmhouse that combines modern architecture, eco-friendly construction, and innovative engineering.",

  fullDesc: `
Grey Matter – A Concept Farmhouse

Grey Matter is KIPIPL's vision of a modern, sustainable farmhouse designed using innovative construction techniques and environmentally responsible materials.

Concept:
• A modern farmhouse that blends nature with contemporary architecture.
• Focused on sustainability, durability, and energy efficiency.

Key Features:
• Eco-friendly construction materials.
• Smart architectural planning.
• Better natural lighting and ventilation.
• Reduced environmental impact.

Benefits:
• Comfortable living spaces.
• Lower maintenance costs.
• Sustainable and long-lasting construction.
• Modern design with industrial strength.

Vision:
Grey Matter represents KIPIPL's commitment to building smarter, greener, and more sustainable spaces for the future.
`,
},
  {
  tag: "Automation",
  title: "Thermal & Sonic Sand Sieving Technology",
  date: "2025 Year Book",
  readTime: "5 min read",
  img: thermalImg,

  shortDesc:
    "KIPIPL enhances Tile Sand production using Thermal & Sonic Sand Sieving Technology to achieve ultra-fine, moisture-free, premium-quality M-Sand.",

  fullDesc: `
Thermal & Sonic Sand Sieving Technology

At Kannan Infra Projects India Pvt. Ltd., innovation meets precision with our Thermal & Sonic Sand Sieving Unit, specially enhanced for Tile Sand Sieving applications.

Technology:
• Uses a thermal dry method combined with ultrasonic vibration technology.
• Super-sieves M-Sand to achieve ultra-fine, moisture-free particles.
• Designed specifically for premium-quality tile sand production.

Benefits:
• Exceptional particle uniformity.
• Improved bonding strength.
• Reduced reprocessing.
• Premium-quality M-Sand for precision tile sand applications.

Innovation:
"Precision in every grain – delivering premium-quality M-Sand for modern construction."
`,
},
  {
  tag: "Innovation",
  title: "M-Sand Conveyor Automation – Efficiency in Motion",
  date: "2025 Year Book",
  readTime: "5 min read",
  img: conveyorImg,

  shortDesc:
    "KIPIPL's fully electric M-Sand Conveyor System transfers over 1,000 units seamlessly while reducing diesel usage, carbon emissions, and manual handling.",

  fullDesc: `
M-Sand Conveyor Automation – Efficiency in Motion

Efficiency isn't just about speed — it's about doing more with less.

Our newly developed M-Sand Conveyor System stands as a breakthrough in sustainable material handling.

Key Features:
• Transfers over 1,000 units seamlessly.
• Fully electric conveyor system.
• Replaces diesel-powered loaders.
• Reduces carbon emissions and manual dependency.

Benefits:
• Automates sand transfer from the blue metal crushing zone to the storage area.
• Improves safety and operational reliability.
• Saves energy and increases efficiency.
• Supports a zero-diesel, fully electrified mining ecosystem across our 100-acre campus.

Vision:
"When efficiency moves on electric power, sustainability follows."
`,
},
  {
  tag: "Innovation",
  title: "Computer Vision–Based Jaw Automation",
  date: "2025 Year Book",
  readTime: "5 min read",
  img: computerVisionImg,

  shortDesc:
    "Computer Vision–Based Jaw Automation transforms traditional crusher operations into a smart AI-driven process. It monitors feeder status in real time and reduces manual intervention.",

  fullDesc: `
At Kannan Infra Projects India Pvt. Ltd., innovation drives every step of our mining and manufacturing operations.

Challenge:
Jaw crusher feeding required continuous manual monitoring to avoid idle running and overloading. Human dependency resulted in inconsistent production and energy loss.

Innovation:
Integration of AI and Computer Vision through a CCTV system to monitor feeder status in real time by detecting empty or full feed conditions automatically.

KIPIPL Solution:
An AI model trained on live camera footage controls the crusher feed cycle. The system automatically pauses or resumes operations based on visual input without human intervention.

Impact:
This innovation introduces intelligent self-regulating mining automation, improving productivity, reducing downtime, and increasing operational efficiency.
`,
},
  {
  tag: "Construction Knowledge",
  title: "M-Sand vs River Sand",
  date: "2025 Year Book",
  readTime: "5 min read",
  img: msandRiverImg,

  shortDesc:
    "M-Sand offers consistent quality, higher strength, and an eco-friendly alternative to River Sand, making it ideal for modern construction.",

  fullDesc: `
M-Sand vs River Sand

Choosing the right type of sand is essential for building strength, durability, and sustainability.

M-Sand Advantages:
• Manufactured using advanced crushing and screening technology.
• Uniform particle size and consistent quality.
• Better compressive strength and bonding.
• Free from silt, clay, and organic impurities.
• Environmentally friendly by reducing river sand mining.

River Sand Limitations:
• Quality varies depending on the source.
• May contain silt and impurities.
• Increasing scarcity and higher cost.
• Environmental concerns due to excessive river mining.

Why Choose KIPIPL M-Sand?
• Produced in a modern 4-stage crushing plant.
• Meets IS standards for construction.
• Ideal for concrete, masonry, plastering, and infrastructure projects.
• Ensures reliable quality and long-term performance.

Build stronger, smarter, and more sustainably with KIPIPL Premium M-Sand.
`,
},
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = React.useState(null);
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#F8F9FA', py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        {/* ================= HERO SECTION ================= */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                color: '#F5A000',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.5px',
                mb: 1.5,
              }}
            >
              KIPIPL KNOWLEDGE – BLOG
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '30px', md: '40px' },
                lineHeight: 1.2,
                color: '#111111',
                mb: 2.5,
              }}
            >
              Construction Knowledge & Industry Insights
            </Typography>

            <Typography
              sx={{
                color: '#5A5A5A',
                fontSize: { xs: '14px', md: '15px' },
                lineHeight: '26px',
                mb: 3.5,
                maxWidth: '460px',
              }}
            >
              Discover the latest innovations, construction guides, sustainable
              mining practices, ready mix concrete solutions, blue metal
              expertise, AI-driven automation, and engineering excellence from
              KIPIPL.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<MenuBookOutlinedIcon />}
                onClick={() => {
    document.getElementById("featured-articles")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
                sx={{
                  backgroundColor: '#F5A000',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1.2,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#d98d00', boxShadow: 'none' },
                }}
              >
                Explore Articles
              </Button>

              <Button
                variant="outlined"
                startIcon={<SupportAgentOutlinedIcon />}
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: '#F5A000',
                  color: '#111111',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1.2,
                  '&:hover': { borderColor: '#d98d00', backgroundColor: '#FFF8EC' },
                }}
              >
                Contact Experts
              </Button>
            </Box>

            {/* Stats row */}
            <Grid container spacing={2}>
              {stats.map((s, i) => (
                <Grid item xs={6} sm={3} key={i}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ color: '#F5A000', mt: 0.3 }}>{s.icon}</Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '15px', color: '#111' }}>
                        {s.value}
                      </Typography>
                      {s.label && (
                        <Typography sx={{ fontSize: '12px', color: '#6B6B6B', lineHeight: 1.3 }}>
                          {s.label}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* RIGHT: HERO IMAGE */}
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src={heroImg}
              alt="Construction knowledge and industry insights"
              sx={{
                width: '100%',
                height: { xs: '260px', md: '380px' },
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0px 10px 28px rgba(0,0,0,0.08)',
              }}
            />
          </Grid>
        </Grid>

        {/* ================= FEATURED ARTICLES ================= */}
        <Box id="featured-articles">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              gap: 1.5,
              mb: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#F5A000',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.5px',
                  mb: 0.5,
                }}
              >
                FEATURED ARTICLES
              </Typography>
              <Typography
                sx={{ fontWeight: 700, fontSize: { xs: '22px', md: '26px' }, color: '#111' }}
              >
                Latest Insights & Industry Stories
              </Typography>
            </Box>

            <Typography
              sx={{
                color: '#F5A000',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: '#d98d00' },
              }}
            >
              View all articles <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {articles.map((a, i) => (
              <Grid item xs={12} sm={6} lg={4} key={i}>
                <Card
                  onClick={() => setSelectedBlog(a)}
                  sx={{
                    height: '100%',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    boxShadow: '0px 3px 14px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0px 8px 22px rgba(0,0,0,0.10)',
                    },
                  }}
                >
                  {/* Image + tag */}
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src={a.img}
                      alt={a.title}
                      sx={{ width: '100%', height: 170, objectFit: 'cover' }}
                    />
                    <Chip
                      label={a.tag}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: '#F5A000',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '10px',
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    

                    <Typography
                      sx={{ fontWeight: 700, fontSize: '15px', color: '#111', mb: 1, lineHeight: 1.35 }}
                    >
                      {a.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12.5px",
                        color: "#666",
                        lineHeight: 1.7,
                        whiteSpace: "pre-line",
                        mb: 2,
                        flex: 1,
                      }}
                    >
                      {a.shortDesc || a.desc}
                    </Typography>

                    <Button
                      variant="contained"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBlog(a);
                      }}
                      sx={{
                        mt: "auto",
                        alignSelf: "flex-start",
                        backgroundColor: "#F5A000",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "12px",
                        textTransform: "none",
                        borderRadius: "8px",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#D88A00",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Read Full Article
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= ARTICLE POPUP ================= */}
        <Dialog
          open={Boolean(selectedBlog)}
          onClose={() => setSelectedBlog(null)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ fontWeight: 700, pr: 6 }}>
            {selectedBlog?.title}

            <IconButton
              onClick={() => setSelectedBlog(null)}
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers>
            {selectedBlog && (
              <>
                <Box
                  component="img"
                  src={selectedBlog.img}
                  alt={selectedBlog.title}
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    mb: 2.5,
                    maxHeight: 320,
                    objectFit: "cover",
                  }}
                />

                

                <Typography
                  sx={{
                    whiteSpace: "pre-line",
                    lineHeight: 1.8,
                    color: "#555",
                    fontSize: "14px",
                  }}
                >
                  {selectedBlog.fullDesc}
                </Typography>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Blog;