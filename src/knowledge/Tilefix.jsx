import React from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  IMAGE IMPORTS — replace these paths with your actual image files  */
/*  Keep the variable names as-is, just point them to your real files */
/* ------------------------------------------------------------------ */
import heroBagImage from "../Assests/hero-tile-fix-bag.png";
import productOverviewImage from "../Assests/product-overview-applying-adhesive.jpg";
import ceramicTilesImg from "../Assests/application-ceramic-tiles.jpg";
import vitrifiedTilesImg from "../Assests/application-vitrified-tiles.jpg";
import largeFormatTilesImg from "../Assests/application-large-format-tiles.jpg";
import floorTileImg from "../Assests/application-floor-tile.jpg";
import prepareSurfaceImg from "../Assests/step-01-prepare-surface.jpg";
import prepareAdhesiveImg from "../Assests/step-02-prepare-adhesive.jpg";
import applyEvenlyImg from "../Assests/step-03-apply-evenly.jpg";
import positionTileImg from "../Assests/step-04-position-tile.jpg";
import allowToSetImg from "../Assests/step-05-allow-to-set.jpg";
import ctaBannerImg from "../Assests/cta-banner-tile-floor.jpg";
import footerProductImg from "../Assests/footer-tile-fix-bag.png";

import {
  Link2,
  ShieldCheck,
  PaintBucket,
  Grid3x3,
  ArrowRight,
  Award,
  Gem,
  Settings2,
  BadgeCheck,
  Package,
  Weight,
  Droplet,
  Square,
  Grid2x2,
  Plus,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Small reusable bits                                               */
/* ------------------------------------------------------------------ */

const StatItem = ({ Icon, title, desc }) => (
  <div className="flex items-start gap-2">
    <Icon className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" strokeWidth={1.75} />
    <div>
      <p className="text-xs font-bold text-gray-900 leading-tight">{title}</p>
      <p className="text-[11px] text-gray-500 leading-tight">{desc}</p>
    </div>
  </div>
);

const FeatureCard = ({ Icon, title, desc }) => (
  <div className="flex-1 min-w-[180px] flex flex-col items-center text-center gap-3 px-4 py-2">
    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
      <Icon className="w-6 h-6 text-red-600" strokeWidth={1.75} />
    </div>
    <p className="text-sm font-bold text-gray-900">{title}</p>
    <p className="text-xs text-gray-500 leading-snug">{desc}</p>
  </div>
);

const OverviewFact = ({ Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-red-600" strokeWidth={1.75} />
    </div>
    <div>
      <p className="text-[11px] text-gray-500 leading-tight">{label}</p>
      <p className="text-xs font-bold text-gray-900 leading-tight">{value}</p>
    </div>
  </div>
);

const AppCard = ({ img, label }) => (
  <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
    <img
      src={img}
      alt={label}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    <span className="absolute bottom-3 left-3 text-white font-bold text-sm leading-tight">
      {label}
    </span>
  </div>
);

const SpecRow = ({ label, value, alt }) => (
  <div
    className={`flex justify-between px-4 py-2.5 text-xs ${
      alt ? "bg-gray-50" : "bg-white"
    }`}
  >
    <span className="font-bold text-gray-700">{label}</span>
    <span className="text-gray-500 text-right">{value}</span>
  </div>
);

const WhyItem = ({ Icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-md bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-yellow-400" strokeWidth={1.75} />
    </div>
    <div>
      <p className="text-sm font-bold text-white">{title}</p>
      <p className="text-xs text-gray-400 leading-snug">{desc}</p>
    </div>
  </div>
);

const ProcessStep = ({ num, title, img }) => (
  <div className="flex-1 min-w-[130px] bg-white border border-gray-100 rounded-xl shadow-sm p-3">
    <div className="flex items-center gap-2 mb-3">
      <span className="w-7 h-7 rounded-full border-2 border-red-600 text-red-600 bg-white text-[11px] font-bold flex items-center justify-center shrink-0">
        {num}
      </span>
      <p className="text-xs font-bold text-gray-900 leading-tight">
        {title}
      </p>
    </div>
    <div className="rounded-lg overflow-hidden aspect-[4/3] bg-gray-100">
      <img src={img} alt={title} className="w-full h-full object-cover md:object-fill" loading="lazy" />
    </div>
  </div>
);

const ProcessArrow = () => (
  <div className="hidden md:flex items-center justify-center shrink-0 px-1">
    <ChevronRight className="w-5 h-5 text-gray-300" strokeWidth={2} />
  </div>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left"
      >
        <span className="text-sm font-semibold text-gray-800">
          {q}
        </span>

        <Plus
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            {a}
          </p>
        </div>
      )}
    </div>
  );
};

const FooterCol = ({ title, links }) => (
  <div>
    <p className="text-white font-bold text-xs tracking-wider mb-4">
      {title}
    </p>

    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l}>
          <Link
            to={
              l === "HOME"
                ? "/"
                : l === "ABOUT US"
                ? "/about"
                : l === "READY MIX"
                ? "/readymix"
                : l === "K BLOCKS"
                ? "/kblocks"
                : l === "BLUE METALS"
                ? "/bluemetals"
                : "/contact"
            }
            className="text-gray-400 text-xs hover:text-yellow-400"
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main component (navbar NOT included — mount this below your own   */
/*  navbar component)                                                 */
/* ------------------------------------------------------------------ */
export default function TileFixPro() {
const [quoteOpen, setQuoteOpen] = React.useState(false);

const [quoteForm, setQuoteForm] = React.useState({
  name: "",
  phone: "",
  location: "",
  surface: "",
  bagCount: "",
  description: "",
});

const handleQuoteChange = (e) => {
  setQuoteForm({
    ...quoteForm,
    [e.target.name]: e.target.value,
  });
};

const handleGetQuote = () => {
  setQuoteOpen(true);
};

const handleQuoteSubmit = () => {
  const phoneNumber = "919842830590";

  const message = `Hello KIPIPL,

I am interested in Tile Fix Pro.

Name: ${quoteForm.name}
Phone: ${quoteForm.phone}
Location: ${quoteForm.location}
Surface: ${quoteForm.surface}
Bag Count: ${quoteForm.bagCount} bags (20 KG each)
Description: ${quoteForm.description || "Not specified"}`;

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setQuoteOpen(false);
};
  const applications = [
    { label: "Ceramic Tiles", img: ceramicTilesImg },
    { label: "Vitrified Tiles", img: vitrifiedTilesImg },
    { label: "Large-Format Tiles", img: largeFormatTilesImg },
    { label: "Floor Tile Applications", img: floorTileImg },
  ];

  const specs = [
    ["Product", "Latafix Floor Tile Adhesive 305"],
    ["Brand", "Tile Fix Pro"],
    ["Net Weight", "20 KG"],
    ["Color", "Grey"],
    ["Suitable Tiles", "Ceramic, Vitrified & Large-Format Tiles"],
    ["Open Time", "Approx. 20 Minutes"],
    ["Setting Time", "Approx. 24 Hours"],
    ["Coverage", "Approx. 50–60 sq. ft. per 20 KG"],
  ];

  const steps = [
    { num: "01", title: "Prepare the Surface", img: prepareSurfaceImg },
    { num: "02", title: "Prepare the Adhesive", img: prepareAdhesiveImg },
    { num: "03", title: "Apply Evenly", img: applyEvenlyImg },
    { num: "04", title: "Position the Tile", img: positionTileImg },
    { num: "05", title: "Allow to Set", img: allowToSetImg },
  ];

  const faqsLeft = [
  {
    q: "What is Tile Fix Pro?",
    a: "Tile Fix Pro is a high-performance cement-based tile adhesive designed for strong bonding, reliable holding strength, and easy application. It is suitable for modern tile installation requirements and is designed to provide a durable and dependable bond between the tile and the prepared surface.",
  },
  {
    q: "Which tiles can be installed using Tile Fix Pro?",
    a: "Tile Fix Pro is suitable for ceramic tiles, vitrified tiles, large-format tiles, and floor tile applications. The adhesive is designed to provide reliable bonding performance for different types of modern tile installations when applied according to the recommended installation procedure.",
  },
  {
    q: "What is the coverage of one 20 KG bag?",
    a: "One 20 KG bag of Tile Fix Pro provides approximately 50–60 sq. ft. of coverage. Actual coverage may vary depending on the tile size, substrate condition, surface evenness, adhesive thickness, application method, and site conditions.",
  },
];

const faqsRight = [
  {
    q: "What is the open time?",
    a: "Tile Fix Pro has an approximate open time of 20 minutes under suitable application conditions. This means the adhesive should be applied and the tile positioned within the recommended working period. Actual open time can vary depending on temperature, humidity, substrate condition, and site conditions.",
  },
  {
    q: "How long does Tile Fix Pro take to set?",
    a: "Tile Fix Pro has an approximate setting time of 24 hours under normal conditions. The actual setting and curing time may vary depending on temperature, humidity, substrate condition, tile type, adhesive thickness, and other site conditions.",
  },
  {
    q: "What color is Tile Fix Pro?",
    a: "Tile Fix Pro is available in Grey color. Its cement-based formulation is designed for reliable bonding performance while providing a practical solution for ceramic, vitrified, large-format, and floor tile installation applications.",
  },
];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900">
      {/* HERO */}
      {/* HERO */}
<section
  className="relative min-h-[560px] overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(
      90deg,
      rgba(255,255,255,0.98) 0%,
      rgba(255,255,255,0.90) 30%,
      rgba(255,255,255,0.45) 55%,
      rgba(255,255,255,0.05) 80%
    ), url(${heroBagImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

    <div className="max-w-xl">

      <p className="text-xs font-bold text-red-600 mb-3">
        KIPIPL KNOWLEDGE
        <span className="text-gray-400 mx-2">→</span>
        TILE FIX PRO
      </p>

      <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
        Tile Fix Pro
      </h1>

      <p className="text-2xl md:text-3xl font-extrabold text-red-600 mt-2">
        Engineered for Perfect Fix.
      </p>

      <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
        High-performance tile adhesive engineered for strong bonding,
        reliable holding strength, and easy application across modern
        tile installations.
      </p>

      <div className="flex flex-wrap gap-3 mt-7">

        <button
  onClick={handleGetQuote}
  className="flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-6 py-3 rounded-sm hover:bg-red-700 transition-colors"
>
  Get a Quote
  <ArrowRight className="w-4 h-4" />
</button>

        

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">

        <StatItem
          Icon={BadgeCheck}
          title="16+"
          desc="Years of Experience"
        />

        <StatItem
          Icon={Gem}
          title="Premium"
          desc="Quality Materials"
        />

        <StatItem
          Icon={Settings2}
          title="Advanced"
          desc="Manufacturing Process"
        />

        <StatItem
          Icon={Award}
          title="Trusted by"
          desc="Builders & Professionals"
        />

      </div>

    </div>

  </div>
</section>

      {/* FEATURE CARD STRIP (overlapping) */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 flex flex-wrap justify-around py-6">
          <FeatureCard
            Icon={Link2}
            title="High Bonding Strength"
            desc="Strong and dependable adhesion for reliable tile installation."
          />
          <FeatureCard
            Icon={ShieldCheck}
            title="Water Resistant"
            desc="Designed to provide water resistance for suitable applications."
          />
          <FeatureCard
            Icon={PaintBucket}
            title="Easy Application"
            desc="Convenient application for efficient tile-laying work."
          />
          <FeatureCard
            Icon={Grid3x3}
            title="Anti-Slip Formula"
            desc="Helps maintain tile positioning during installation."
          />
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-lg overflow-hidden aspect-[4/3]">
          <img
            src={productOverviewImage}
            alt="Applying tile adhesive"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold text-red-600 tracking-wide mb-2">
            PRODUCT OVERVIEW
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug">
            Strong Bond. Reliable Hold.
            <br /> Better Tile Installation.
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Tile Fix Pro – Latafix Floor Tile Adhesive 305 is a
            high-performance cement-based adhesive formulated for excellent
            bonding strength, water resistance, and ease of application.
            Designed for ceramic, vitrified, and large-format tiles, it
            ensures long-lasting and durable tile installations.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            <OverviewFact Icon={Package} label="Product" value="Latafix Floor Tile Adhesive 305" />
            <OverviewFact Icon={Weight} label="Net Weight" value="20 KG" />
            <OverviewFact Icon={Droplet} label="Color" value="Grey" />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold text-red-600 tracking-wide mb-6">
            BUILT FOR MODERN TILE INSTALLATION
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((a) => (
              <AppCard key={a.label} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* SPECS + WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-bold text-red-600 tracking-wide mb-4">
            TECHNICAL SPECIFICATIONS
          </p>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            {specs.map(([label, value], i) => (
              <SpecRow key={label} label={label} value={value} alt={i % 2 === 1} />
            ))}
          </div>
          <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
            Note: Coverage and setting time may vary depending on substrate
            condition, tile size, application thickness, temperature, and
            site conditions.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <p className="text-xs font-bold text-yellow-400 tracking-wide mb-6">
            WHY CHOOSE TILE FIX PRO?
          </p>
          <div className="space-y-6">
            <WhyItem
              Icon={Link2}
              title="Strong Adhesion"
              desc="Designed for a firm and reliable bond."
            />
            <WhyItem
              Icon={Grid2x2}
              title="Reliable Performance"
              desc="Consistent performance for professional tile-laying requirements."
            />
            <WhyItem
              Icon={PaintBucket}
              title="Easy to Apply"
              desc="Designed for practical and efficient application."
            />
            <WhyItem
              Icon={Square}
              title="Made for Modern Construction"
              desc="A dependable adhesive solution for today's tile installation needs."
            />
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap md:flex-nowrap items-stretch gap-3">
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <ProcessStep {...s} />
              {i < steps.length - 1 && <ProcessArrow />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* DARK CTA BANNER */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img
            src={ctaBannerImg}
            alt="Tile floor background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
            A Strong Foundation
            <br /> for Every Tile.
          </h2>
          <p className="text-gray-300 text-sm mt-4 max-w-xl mx-auto">
            From residential spaces to commercial projects, Tile Fix Pro is
            designed to help professionals achieve a secure, precise, and
            dependable tile installation.
          </p>
          <button
  onClick={handleGetQuote}
  className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-6 py-3 rounded-sm hover:bg-red-700 transition-colors"
>
  Get a Quote <ArrowRight className="w-4 h-4" />
</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xs font-bold text-red-600 tracking-wide mb-6">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <div className="grid md:grid-cols-2 gap-4 items-start">
  
  {/* LEFT FAQ */}
  <div className="space-y-3">
    {faqsLeft.map((faq) => (
      <FaqItem
        key={faq.q}
        q={faq.q}
        a={faq.a}
      />
    ))}
  </div>

  {/* RIGHT FAQ */}
  <div className="space-y-3">
    {faqsRight.map((faq) => (
      <FaqItem
        key={faq.q}
        q={faq.q}
        a={faq.a}
      />
    ))}
  </div>

</div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative bg-gray-900 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-8 justify-between">
          <div className="flex items-center gap-6 flex-1 min-w-[280px]">
            <div className="relative w-20 h-28 shrink-0 hidden sm:block">
              <img
                src={footerProductImg}
                alt="Tile Fix Pro bag"
                className="absolute left-0 top-2 w-16 h-24 object-cover rounded-sm shadow-lg -rotate-6"
              />
              <img
                src={footerProductImg}
                alt=""
                aria-hidden="true"
                className="absolute left-5 top-0 w-16 h-24 object-cover rounded-sm shadow-lg rotate-3"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white">
                Ready for a Perfect Fix?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-md">
                Choose Tile Fix Pro for strong bonding, reliable performance,
                and confident tile installation.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
  onClick={handleGetQuote}
  className="flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-6 py-3 rounded-sm hover:bg-red-700 transition-colors"
>
  Get a Quote <ArrowRight className="w-4 h-4" />
</button>
            
          </div>
        </div>
      </section>
{/* GET A QUOTE POPUP */}
{quoteOpen && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4">
    <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="bg-black px-6 py-5">
        <button
          type="button"
          onClick={() => setQuoteOpen(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ×
        </button>

        <p className="text-xs font-bold tracking-[3px] text-red-600">
          TILE FIX PRO
        </p>

        <h2 className="text-2xl font-black text-white mt-1">
          GET A <span className="text-red-600">QUOTE</span>
        </h2>

        <p className="text-xs text-gray-400 mt-2">
          Fill in your details and our team will contact you.
        </p>
      </div>

      {/* Form */}
      <div className="p-6 space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={quoteForm.name}
          onChange={handleQuoteChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm outline-none focus:border-red-600"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={quoteForm.phone}
          onChange={handleQuoteChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm outline-none focus:border-red-600"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location *"
          value={quoteForm.location}
          onChange={handleQuoteChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm outline-none focus:border-red-600"
        />

        {/* Surface */}
        <div>
          <p className="text-xs font-bold text-gray-700 mb-2">
            Surface *
          </p>

          <div className="grid grid-cols-3 gap-2">

            <label className="cursor-pointer">
              <input
                type="radio"
                name="surface"
                value="Floor"
                checked={quoteForm.surface === "Floor"}
                onChange={handleQuoteChange}
                className="hidden peer"
              />
              <div className="border border-gray-300 rounded-md px-3 py-3 text-center text-sm peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600">
                Floor
              </div>
            </label>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="surface"
                value="Wall"
                checked={quoteForm.surface === "Wall"}
                onChange={handleQuoteChange}
                className="hidden peer"
              />
              <div className="border border-gray-300 rounded-md px-3 py-3 text-center text-sm peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600">
                Wall
              </div>
            </label>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="surface"
                value="Ceiling"
                checked={quoteForm.surface === "Ceiling"}
                onChange={handleQuoteChange}
                className="hidden peer"
              />
              <div className="border border-gray-300 rounded-md px-3 py-3 text-center text-sm peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600">
                Ceiling
              </div>
            </label>

          </div>
        </div>

        {/* Bag Count */}
        <input
          type="number"
          min="1"
          name="bagCount"
          placeholder="Bag Count (20 KG per bag) *"
          value={quoteForm.bagCount}
          onChange={handleQuoteChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm outline-none focus:border-red-600"
        />

        {/* Description */}
        <textarea
          name="description"
          rows="3"
          placeholder="Description"
          value={quoteForm.description}
          onChange={handleQuoteChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm outline-none focus:border-red-600 resize-none"
        />

        {/* Submit */}
        <button
          type="button"
          onClick={handleQuoteSubmit}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3.5 rounded-md transition-colors"
        >
          Send Enquiry on WhatsApp
        </button>

      </div>
    </div>
  </div>
)}
      {/* FOOTER */}
      <footer className="bg-gray-900 pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Building strong foundations since 1990. KIPIPL is committed to
              delivering premium construction materials and innovative
              solutions for a better future.
            </p>
            <div className="flex gap-3 mt-5">
              <span className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Facebook</span>
              <span className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Instagram</span>
              <span className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">LinkedIn</span>
              <span className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Youtube</span>
            </div>
          </div>

          <FooterCol
            title="QUICK LINKS"
            links={["Home", "About Us", "Ready Mix", "K Blocks", "Blue Metals", "Contact Us"]}
          />
          <FooterCol
            title="PRODUCTS"
            links={["Ready Mix Concrete", "Solid Blocks", "M Sand", "P Sand",  "Blue Metal Aggregates"]}
          />
          <FooterCol
            title="KNOWLEDGE"
            links={["Blog", "Service Locations", "FAQs", "Tile Fix Pro"]}
          />
          <div>
            <p className="text-white font-bold text-xs tracking-wider mb-4">
              CONTACT US
            </p>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Murugathoosu Village, Chinnimatoor Taluk, Erode – 638051,
                  Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 999 444 8888</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@kipipl.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800 flex flex-wrap justify-between items-center gap-3">
          <p className="text-[11px] text-gray-500">
            © 2026 Kannan Infra Projects India Private Limited (KIPIPL). All
            rights reserved.
          </p>

          <div className="flex gap-4 text-[11px] text-gray-500">
            <span className="hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-yellow-400 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}