import msandImg from '../Assests/msand.jpg';
import psandImg from '../Assests/psand.jpg';
import tileImg from '../Assests/product-overview-applying-adhesive.jpg';
import aggregateImg from '../Assests/Aggregate.jpg';
import blocksImg from '../Assests/solid_blocks.jpg';

export const ACCENT = '#F5A000';
export const ACCENT_TINT = '#FFF4DC';
export const INK = '#111111';
export const BODY = '#4A4A4A';
export const MUTED = '#8A8A8A';
export const LINE = '#E6E6E3';
export const SURFACE = '#FAFAF8';

export const productImages = {
  msand: msandImg,
  psand: psandImg,
  tile: tileImg,
  aggregates: aggregateImg,
  blocks: blocksImg,
};

// WhatsApp number that receives quote requests from these pages (country code + number, no symbols).
export const WHATSAPP_NUMBER = '918220624590';

export const quoteLink = (product, town) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello KIPIPL, I would like a quote for ${product}${town ? ` in ${town}` : ''}.`
  )}`;
