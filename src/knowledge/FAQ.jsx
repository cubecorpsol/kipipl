import React, { useState } from "react";
import { Link } from "react-router-dom";
import faqData from "./faqs.json";
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
          {faqData.map((f, i) => (
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