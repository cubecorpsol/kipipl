import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Card,
  Divider,
} from '@mui/material';

import pdf1 from '../Assests/pdf.pdf';
import Address from '../Assests/Address.png';
import phone from '../Assests/phone.png';
import email from '../Assests/email.png';

const ContactUs = () => {
  const handleSubmit = async (e) => {

  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {

    name: formData.get("name"),

    email: formData.get("email"),

    message: formData.get("message"),
  };

  try {

    const response = await fetch("/api/send-email", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {

      alert("Email sent successfully");

    } else {

      alert(result.error || "Email failed");
    }

  } catch (error) {

    console.log(error);

    alert("Error sending email");
  }
};

  return (
    <Grid
      container
      sx={{
        background: '#ffffff',
        py: { xs: 4, md: 6 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '95%' }}>
          {/* ================= DOWNLOAD SECTION ================= */}

          <Card
            sx={{
              borderRadius: '20px',
              boxShadow: '0px 5px 20px rgb(218, 217, 217)',
              overflow: 'hidden',
              mb: 5,
            }}
          >
            <Box
              sx={{
                background: '#ffffff',
                px: { xs: 3, sm: 5, md: 6 },
                py: { xs: 3, md: 4 },

                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },

                justifyContent: 'space-between',
                alignItems: 'center',

                gap: 3,
              }}
            >
              {/* LEFT CONTENT */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: '26px',
                      sm: '34px',
                      md: '38px',
                    },
                    lineHeight: 1.2,
                    color: '#1A1A1A',
                  }}
                >
                  CLICK HERE TO VIEW OUR PRODUCTS PORTFOLIO
                </Typography>

                <Divider
                  sx={{
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#FEA515',
                    borderRadius: '10px',
                    mt: 2,
                  }}
                />
              </Box>

              {/* BUTTON */}
              <Button
                variant="contained"
                sx={{
                  width: '180px',
                  height: '48px',
                  background: '#FEA515',
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  boxShadow: 'none',

                  '&:hover': {
                    background: '#e8920d',
                    boxShadow: 'none',
                  },
                }}
              >
                <a
                  href={pdf1}
                  download
                  style={{
                    textDecoration: 'none',
                    color: '#ffffff',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 700,
                  }}
                >
                  Download PDF
                </a>
              </Button>
            </Box>
          </Card>

         
          {/* Contact Info Section */}
          <Box
            sx={{
              width: "100%",
              height: { xs: 'auto', md: '180px' },
              minHeight: { xs: 'auto', md: '180px' },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              gap: 2,
              py: 2,
            }}
          >
            {[
              {
                img: Address,
                title: "ADDRESS DETAILS",
                details: "Kannan Blue Metals, Murugantholuvu, Chennimalai, TamilNadu 638051"
              },
              {
                img: email,
                title: "EMAIL",
                details: "info@kipipl.com"
              },
              {
                img: phone,
                title: "CALL US",
                details: "+91 98428 30590<br />+91 99425 30590" // Add <br /> here
              },
            ].map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: { xs: "100%", sm: "auto" },
                  textAlign: { xs: "center", sm: "left" },
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Box>
                  <img src={info.img} alt={info.title} />
                </Box>
                <Box sx={{ width: "200px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Lato",
                      fontWeight: "700",
                      fontSize: { xs: "17px" },
                      color: "#000000",
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "13px" },
                      color: "#000000",
                    }}
                    dangerouslySetInnerHTML={{ __html: info.details }} // Render HTML
                  ></Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Contact Us Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              backgroundColor: "#EEEEEE",
              gap: 4,
              py: 4,
            }}
          >
            {/* Left Image Section */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.8316471816406!2d77.63352077504781!3d11.181547888992913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba973f15612601b%3A0xb9b7f23dca1abd60!2skannan%20blue%20metals!5e1!3m2!1sen!2sin!4v1732162210601!5m2!1sen!2sin"
                title="Location Map"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  maxHeight: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>

            {/* Right Form Section */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#EEEEEE",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#4B4E53",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>
              <form
 onSubmit={handleSubmit}
 style={{ width: "100%", maxWidth: "400px" }}
>
                {["Name", "Email", "Message"].map((label, index) => (
                  <TextField
                    key={index}
                    label={label}
                     name={label.toLowerCase()}
                    variant="standard"
                    margin="normal"
                    fullWidth
                  />
                ))}
                <Button
                  
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#FEA515",
                    "&:hover": {
                      backgroundColor: "#FEA515",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>

          {/* Footer Section */}
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "white",
              py: 2,
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: "11px", color: "#4B4E53" }}>
              2024 © All rights reserved to KIPIPL
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#4B4E53", mt: 4 }}>
              Developed By{" "}
              <Link
                 href="https://nithilinnovations.com/" 
                sx={{ color: ' #FEA515', textDecoration: "underline",fontWeight: 700 }}
              >
                Nithil Innovations
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;