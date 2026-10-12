import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Plus,
  ShieldCheck,
  Truck,
  Headphones,
  Phone,
  MapPin,
  Award,
  ShieldCheck as ShieldIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  IMAGE — free-license hosted photo, swap for your own plant photo   */
/*  whenever you're ready                                             */
/* ------------------------------------------------------------------ */
const plantImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80";

/* ------------------------------------------------------------------ */
/*  Small reusable bits                                               */
/* ------------------------------------------------------------------ */

const TrustBadge = ({ Icon, title, desc }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-full border border-yellow-400 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-yellow-500" strokeWidth={1.75} />
    </div>
    <div>
      <p className="text-sm font-bold text-gray-900 leading-tight">{title}</p>
      <p className="text-xs text-gray-500 leading-tight">{desc}</p>
    </div>
  </div>
);

const FaqAccordionItem = ({ q, a, isOpen, onToggle }) => (
  <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
    >
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center shrink-0">
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
        <span className="text-sm font-bold text-gray-900">{q}</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="px-5 pb-4 pl-14">
        <p className="text-xs text-gray-500 leading-relaxed">{a}</p>
      </div>
    )}
  </div>
);

const StripItem = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center gap-2 px-4">
    <div className="w-11 h-11 rounded-full border border-yellow-400 flex items-center justify-center">
      <Icon className="w-5 h-5 text-yellow-500" strokeWidth={1.75} />
    </div>
    <p className="text-xs font-bold text-gray-900">{title}</p>
    <p className="text-[11px] text-gray-500 leading-snug max-w-[9rem]">
      {desc}
    </p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main component (logo only — no full navbar)                       */
/* ------------------------------------------------------------------ */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    q: "Where can I buy M Sand in Chennimalai?",
    a: "KIPIPL supplies quality M Sand in Chennimalai and across its service locations in Erode, Tiruppur and Namakkal districts. Our M Sand is suitable for a wide range of construction applications including concrete work, masonry, plastering and infrastructure projects. Customers in Chennimalai can contact our team to enquire about the required quantity, current availability, pricing and delivery options for their construction project.",
  },

  {
    q: "Who supplies P Sand in Chennimalai?",
    a: "KIPIPL supplies P Sand in Chennimalai as part of its construction material range. P Sand is suitable for plastering and other applications where a finer and consistent sand material is required. We also serve customers across selected locations in Erode, Tiruppur and Namakkal districts. Contact our team with your project requirements to check P Sand availability, quantity, pricing and delivery options.",
  },

  {
    q: "Where can I get Jally / Blue Metal in Chennimalai?",
    a: "KIPIPL supplies quality Jally and Blue Metal aggregates for construction requirements in Chennimalai and surrounding areas. Blue Metal is commonly used for concreting, foundations, road works and other infrastructure applications. Customers can contact KIPIPL to enquire about suitable aggregate sizes, required quantities, pricing and availability based on their project requirements and site location.",
  },

  {
    q: "What sizes of Blue Metal / Jally are available?",
    a: "KIPIPL supplies Blue Metal and Jally in different sizes to meet various construction and infrastructure requirements. The suitable size depends on the type of work, such as concrete production, foundation work, road construction or other aggregate applications. Our team can help customers identify the appropriate material based on their project requirements. Contact us to enquire about currently available sizes, quantities and pricing.",
  },

  {
    q: "Who supplies Ready Mix Concrete in Chennimalai?",
    a: "KIPIPL supplies Ready Mix Concrete for construction projects in Chennimalai and its service areas. Ready Mix Concrete provides a convenient solution for projects that require consistent concrete supply for residential, commercial and infrastructure construction. Customers can contact our team with their site location, concrete requirement and approximate quantity to enquire about availability, pricing and delivery arrangements.",
  },

  {
    q: "Do you supply Solid Blocks in Chennimalai?",
    a: "Yes. KIPIPL supplies Solid Blocks for residential, commercial and other construction requirements in Chennimalai and across its service locations. Solid Blocks are suitable for various masonry and building applications. Customers can contact our team to enquire about available quantities, pricing and delivery options based on their construction site and project requirements.",
  },

  {
    q: "Do you deliver construction materials to nearby areas?",
    a: "KIPIPL serves customers across selected locations in Erode, Tiruppur and Namakkal districts with its range of construction materials. The available products include Ready Mix Concrete, Solid Blocks, M Sand and P Sand. Service availability can depend on the exact location and project requirements. Customers can contact our team with their site location and required material to confirm the available service and delivery options.",
  },

  {
    q: "What areas are covered within 40 KM radius of Chennimalai?",
    a: "KIPIPL serves Chennimalai and multiple locations across Erode, Tiruppur and Namakkal districts. Our listed service locations include Erode, Perundurai, Gobichettipalayam, Bhavani, Anthiyur, Chennimalai, Modakurichi, Kodumudi, Sivagiri and Arachalur in Erode District; Tiruppur, Kangeyam, Dharapuram and Uthukuli in Tiruppur District; and Namakkal, Tiruchengode and Kumarapalayam in Namakkal District. For a specific site location, customers can contact our team to confirm service availability.",
  },

  {
    q: "Which locations does KIPIPL serve in Erode District?",
    a: "KIPIPL serves 10 listed locations in Erode District: Erode, Perundurai, Gobichettipalayam, Bhavani, Anthiyur, Chennimalai, Modakurichi, Kodumudi, Sivagiri and Arachalur. The products available across these service locations include Ready Mix Concrete, Solid Blocks, M Sand and P Sand. Customers can contact our team to confirm product availability and service options for their specific location.",
  },

  {
    q: "Which locations does KIPIPL serve in Tiruppur District?",
    a: "KIPIPL serves 4 listed locations in Tiruppur District: Tiruppur, Kangeyam, Dharapuram and Uthukuli. Ready Mix Concrete, Solid Blocks, M Sand and P Sand are available as part of the listed product range. Customers can contact KIPIPL with their project location and material requirements to enquire about availability and service options.",
  },

  

  {
    q: "What construction materials does KIPIPL supply?",
    a: "KIPIPL supplies a range of construction materials including Ready Mix Concrete, Solid Blocks, M Sand and P Sand across its listed service locations. These products are intended to support different residential, commercial and construction requirements. Customers can contact our team to enquire about the material best suited to their project, required quantity, pricing and service availability.",
  },

  {
    q: "How can I place an order?",
    a: "To place an order with KIPIPL, customers can contact our team directly or submit an enquiry through the Contact Us section of the website. When enquiring, it is helpful to provide the required product, approximate quantity and construction site location. Our team can then assist with product availability, pricing and the available service or delivery options for the project.",
  },

  {
    q: "What is your contact number?",
    a: "For product enquiries, orders, pricing and service-related questions, you can contact KIPIPL at +91 82206 24590 or +91 72008 30590. Our team can assist with enquiries related to M Sand, P Sand, Ready Mix Concrete, Solid Blocks and other construction material requirements across our listed service locations.",
  },
];
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900">
      {/* BREADCRUMB + HERO */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-10">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/knowledge" className="hover:text-yellow-500">Knowledge</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-gray-900">FAQ</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-none">
                FAQ
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
                Construction Materials in Chennimalai
              </p>
              <p className="text-sm text-gray-600 mt-3 max-w-md leading-relaxed">
                Find answers about M Sand, P Sand, Jally, Blue Metal, Ready
                Mix Concrete &amp; Solid Blocks. We are here to help!
              </p>

              <div className="flex flex-wrap gap-6 mt-8">
                <TrustBadge
                  Icon={ShieldCheck}
                  title="Quality Assured"
                  desc="Premium Materials"
                />
                <TrustBadge
                  Icon={Truck}
                  title="Timely Delivery"
                  desc="On-time, Every time"
                />
                <TrustBadge
                  Icon={Headphones}
                  title="Customer Support"
                  desc="We're here to help"
                />
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={plantImage}
                alt="KIPIPL concrete batching plant and trucks"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ LIST + CONTACT CARD */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-8 items-start">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FaqAccordionItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center sticky top-6">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6 text-white" strokeWidth={1.75} />
          </div>
          <h3 className="text-lg font-black text-gray-900 mt-4 leading-snug">
            Need Construction Materials?
          </h3>
          <div className="w-10 h-1 bg-yellow-400 rounded-full mx-auto my-3" />
          <p className="text-xs text-gray-500 leading-relaxed">
            We supply M Sand, P Sand, Jally, Blue Metal, Ready Mix Concrete
            &amp; Solid Blocks in Chennimalai and surrounding areas.
          </p>

          <div className="mt-5 space-y-3 text-left">
            <a
              href="tel:+918220624590"
              className="flex items-center gap-3 text-sm font-bold text-gray-900 hover:text-yellow-500"
            >
              <Phone className="w-4 h-4 text-yellow-500 shrink-0" />
              +91 82206 24590 - Crusher
            </a>
            <a
              href="tel:+917200830590"
              className="flex items-center gap-3 text-sm font-bold text-gray-900 hover:text-yellow-500"
            >
              <Phone className="w-4 h-4 text-yellow-500 shrink-0" />
              +91 72008 30590 - RMC
            </a>
          </div>

          <a
  href="https://wa.me/918220624590"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 w-full flex items-center justify-center gap-2 bg-yellow-400 text-white text-xs font-bold px-5 py-3 rounded-sm hover:bg-yellow-500 transition-colors"
>
  Contact Us Now <ChevronRight className="w-4 h-4" />
</a>
          <p className="text-[11px] text-gray-500 mt-3 flex items-center justify-center gap-1.5">
            <Headphones className="w-3.5 h-3.5" /> We're here to help you!
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8">
          <StripItem
            Icon={MapPin}
            title="Local Presence"
            desc="Serving Chennimalai & surrounding areas within 20 KM radius"
          />
          <StripItem
            Icon={Award}
            title="Quality Materials"
            desc="M Sand, P Sand, Blue Metal, Jally, RMC & Solid Blocks of the highest quality"
          />
          <StripItem
            Icon={Truck}
            title="Reliable Delivery"
            desc="Timely delivery with our own fleet for your convenience"
          />
          <StripItem
            Icon={ShieldIcon}
            title="Trust & Transparency"
            desc="Built on trust, ensuring transparency in quality and service"
          />
          <StripItem
            Icon={Headphones}
            title="Customer Support"
            desc="Dedicated support for all your queries and requirements"
          />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-lg">
            <p className="text-xs font-bold text-yellow-400 tracking-widest mb-2">
              LET'S BUILD TOGETHER
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
              Quality Materials.
              <br /> Stronger Foundations.
            </h2>
            <p className="text-sm text-gray-400 mt-3">
              KIPIPL is your trusted partner for all construction material
              needs in Chennimalai and nearby areas.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <a
                href="tel:+918220624590"
                className="flex items-center gap-2 bg-white text-gray-900 text-xs font-bold px-5 py-3 rounded-sm hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-500" />
                +91 82206 24590
              </a>
              <a
                href="tel:+917200830590"
                className="flex items-center gap-2 bg-white text-gray-900 text-xs font-bold px-5 py-3 rounded-sm hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-500" />
                +91 72008 30590
              </a>
            </div>
            <a
  href="https://wa.me/918220624590"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 border border-yellow-400 text-yellow-400 text-xs font-bold px-5 py-3 rounded-sm hover:bg-yellow-400 hover:text-gray-900 transition-colors"
>
  Contact Us <ChevronRight className="w-4 h-4" />
</a>
          </div>
        </div>
      </section>
    </div>
  );
}