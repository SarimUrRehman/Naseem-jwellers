/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Sparkles,
  Gem,
  Award,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Send,
  Eye,
  CheckCircle2,
} from 'lucide-react';

import heroImage from './assets/images/hero_luxury_jewellery_1791989175002.jpg';
import productBridalSetImage from './assets/images/product_bridal_set_1791989174589.jpg';
import productDiamondRingImage from './assets/images/product_diamond_ring_1791989177151.jpg';
import productGoldBanglesImage from './assets/images/product_gold_bangles_1791989176701.jpg';
import productBridalKundanSetImage from './assets/images/product_bridal_kundan_set_1791989213919.jpg';
import productJhumkaEarringsImage from './assets/images/product_jhumka_earrings_1791989177125.jpg';
import productGoldChokerImage from './assets/images/product_gold_choker_1791989211945.jpg';
import productEmeraldRingImage from './assets/images/product_emerald_ring_1791989213673.jpg';
import productTraditionalChainImage from './assets/images/product_traditional_chain_1791989212185.jpg';

// ============================================================================
// SITE CONFIGURATION & CONTENT (EASY TO EDIT)
// ============================================================================
export const SITE_CONFIG = {
  businessName: "Naseem Jeweller's",
  category: "Jeweler (Gold, Diamond & Fine Jewellery)",
  tagline: "Timeless Elegance, Crafted in Pure Gold",
  subTagline: "Handcrafted 21K & 22K Pakistani bridal jewellery, bespoke gold sets, and certified diamond rings. Trusted craftsmanship located in the heart of Orangi Town, Karachi.",
  phone: "03463210626",
  phoneFormatted: "0346-3210626",
  whatsappNumber: "923463210626",
  address: "Shop #26, Bhayani Shopping Centre, Pakistan Bazaar, Sector 11½, Phase 2, Orangi Town, Karachi, Pakistan",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shop+26+Bhayani+Shopping+Centre+Pakistan+Bazaar+Sector+11+Orangi+Town+Karachi",
  mapEmbedUrl: "https://maps.google.com/maps?q=Bhayani+Shopping+Centre+Pakistan+Bazaar+Sector+11+Orangi+Town+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleRating: {
    score: "5.0",
    reviewCount: "1 Google Review",
    url: "https://maps.google.com/?q=Shop+26+Bhayani+Shopping+Centre+Pakistan+Bazaar+Orangi+Town+Karachi",
  },
  openingHours: [
    { days: "Monday – Thursday", hours: "12:00 PM – 10:00 PM" },
    { days: "Friday", hours: "03:30 PM – 10:30 PM" },
    { days: "Saturday", hours: "12:00 PM – 10:30 PM" },
    { days: "Sunday", hours: "Open on Wedding Season / By Appointment" },
  ],
  whyChooseUs: [
    {
      icon: ShieldCheck,
      title: "Pure & Certified Gold",
      description: "Every piece is crafted in authentic 21K and 22K hallmarked gold with guaranteed purity and karat integrity."
    },
    {
      icon: Gem,
      title: "Custom Bespoke Designs",
      description: "Bring your dream bridal sketches or international inspirations to life through our master goldsmiths."
    },
    {
      icon: Award,
      title: "Fair & Transparent Pricing",
      description: "Honest daily market gold rates with competitive making charges and zero hidden costs."
    },
    {
      icon: Sparkles,
      title: "Trusted Local Jeweler",
      description: "Generations of families in Orangi Town and Karachi trust Naseem Jeweller's for their life's biggest milestones."
    }
  ],
  categories: ["All", "Bridal", "Necklaces", "Rings", "Bangles", "Earrings"],
  products: [
    {
      id: "prod-1",
      name: "Noor 22K Filigree Bridal Choker Set",
      category: "Bridal",
      purity: "22K Gold & Fine Pearls",
      image: productBridalSetImage,
      description: "Regal handcrafted choker with delicate jaali filigree, matched with royal chandelier jhumkas and South Sea pearl droplets."
    },
    {
      id: "prod-2",
      name: "Empress Solitaire Diamond Ring",
      category: "Rings",
      purity: "21K Gold & Certified Diamond",
      image: productDiamondRingImage,
      description: "Brilliant round-cut solitaire diamond mounted in a lustrous 21K yellow gold six-prong setting."
    },
    {
      id: "prod-3",
      name: "Royal Mughal Kangan & Kara Bangles",
      category: "Bangles",
      purity: "22K Solid Gold",
      image: productGoldBanglesImage,
      description: "Intricately hand-engraved traditional Pakistani gold kangan pair featuring antique floral motifs and safety clasp."
    },
    {
      id: "prod-4",
      name: "Nizam Polki & Kundan Royal Bridal Set",
      category: "Bridal",
      purity: "22K Gold, Polki & Rubies",
      image: productBridalKundanSetImage,
      description: "Grand wedding ensemble with uncut Polki stones, hand-enameled meenakari accents, matching jhumkas, and maang tikka."
    },
    {
      id: "prod-5",
      name: "Heritage Traditional Meenakari Jhumkas",
      category: "Earrings",
      purity: "22K Gold & Natural Pearls",
      image: productJhumkaEarringsImage,
      description: "Timeless bell-shaped Pakistani jhumkas featuring delicate filigree dome work, ruby highlights, and cascading pearls."
    },
    {
      id: "prod-6",
      name: "Lustre 22K Filigree Collar Choker",
      category: "Necklaces",
      purity: "22K Yellow Gold",
      image: productGoldChokerImage,
      description: "Delicate lattice collar choker with a central flower medallion, designed for contemporary festive wear."
    },
    {
      id: "prod-7",
      name: "Imperial Emerald & Diamond Cocktail Ring",
      category: "Rings",
      purity: "21K Gold, Emerald & Diamonds",
      image: productEmeraldRingImage,
      description: "A rich green cushion-cut emerald encircled by a halo of glittering diamonds in textured 21K yellow gold."
    },
    {
      id: "prod-8",
      name: "Dastkari 22K Gold Rope Haar Necklace",
      category: "Necklaces",
      purity: "22K Heavy Gold",
      image: productTraditionalChainImage,
      description: "Substantial multi-strand twisted gold rope chain joined by a traditional carved mughal pendant."
    },
    {
      id: "prod-9",
      name: "Zehra Antique Chandbali Earrings",
      category: "Earrings",
      purity: "22K Yellow Gold",
      image: productJhumkaEarringsImage,
      description: "Graceful crescent-moon drops with fine wire filigree, ruby accents, and dangling micro-pearls."
    }
  ]
};

// ============================================================================
// HELPER: WhatsApp URL Builder
// ============================================================================
function getProductWhatsAppUrl(productName: string): string {
  const message = `Assalamualaikum, I am interested in ${productName}. Please share details and price.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getGeneralWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || "Assalamualaikum, I would like to inquire about jewellery designs and current gold rates at Naseem Jeweller's.";
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof SITE_CONFIG.products[0] | null>(null);

  // Contact form state
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formInterest, setFormInterest] = useState("Bridal Jewellery");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll listener for sticky navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return SITE_CONFIG.products;
    return SITE_CONFIG.products.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalamualaikum, my name is ${formName || 'Customer'}. Phone: ${formPhone || 'Not provided'}. Interested in: ${formInterest}. Message: ${formMessage || 'Please share catalogue and details.'}`;
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setFormSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0B0F0E] text-[#FAF6EE] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#F5E6A8]">
      
      {/* -------------------------------------------------------------------- */}
      {/* 1. STICKY NAVBAR */}
      {/* -------------------------------------------------------------------- */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0F0E]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#0B0F0E]/95 via-[#0B0F0E]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-serif tracking-wide text-[#FAF6EE] hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 group flex items-center gap-2"
            >
              <span className="gold-text-gradient font-semibold">Naseem Jeweller's</span>
            </a>

            {/* Zone 2: Navigation Links (Clean single-line text links) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-[#FAF6EE]/80">
              <a
                href="#home"
                className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37] whitespace-nowrap shrink-0"
              >
                Home
              </a>
              <a
                href="#collection"
                className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37] whitespace-nowrap shrink-0"
              >
                Collection
              </a>
              <a
                href="#about"
                className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37] whitespace-nowrap shrink-0"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37] whitespace-nowrap shrink-0"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: Primary Action CTA Button */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-hover inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#AA820A] rounded-md shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-95 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#0B0F0E]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#D4AF37] hover:text-[#F5E6A8] transition-colors"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF6EE] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F0E]/98 border-b border-[#D4AF37]/30 px-6 py-6 mt-3 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-4 text-base font-medium tracking-wide">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FAF6EE] hover:text-[#D4AF37] transition-colors py-1"
              >
                Home
              </a>
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FAF6EE] hover:text-[#D4AF37] transition-colors py-1"
              >
                Collection
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FAF6EE] hover:text-[#D4AF37] transition-colors py-1"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FAF6EE] hover:text-[#D4AF37] transition-colors py-1"
              >
                Contact &amp; Location
              </a>
            </nav>
            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#AA820A] rounded-md"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#0B0F0E]" />
                <span>WhatsApp Us (0346-3210626)</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-[#FAF6EE] border border-[#D4AF37]/40 rounded-md hover:bg-[#D4AF37]/10"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* -------------------------------------------------------------------- */}
        {/* 2. HERO SECTION */}
        {/* -------------------------------------------------------------------- */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial from-[#0F2A22] via-[#0B0F0E] to-[#050706]"
        >
          {/* Subtle Ambient Particle / Sparkle Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#F5E6A8]/70 blur-[1px] animate-float-sparkle" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#D4AF37]/60 blur-[1px] animate-float-sparkle" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-[#F5E6A8]/80 blur-[1px] animate-float-sparkle" style={{ animationDelay: '4s' }} />
            <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 blur-[0.5px] animate-float-sparkle" style={{ animationDelay: '1.5s' }} />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0F2A22]/80 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
            {/* Left Column: Headlines, Trust Badge & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-6 sm:pt-0">
              
              {/* Google 5.0 Star Rating Trust Badge */}
              <a
                href={SITE_CONFIG.googleRating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2A22]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-colors shadow-sm group"
                title="View verified Google reviews"
              >
                <div className="flex items-center text-[#D4AF37]" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs font-medium text-[#FAF6EE]/90 group-hover:text-[#F5E6A8] tracking-wide">
                  <strong className="text-[#F5E6A8] font-semibold">{SITE_CONFIG.googleRating.score}</strong> · {SITE_CONFIG.googleRating.reviewCount}
                </span>
                <ChevronRight className="w-3 h-3 text-[#D4AF37]/70 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Main Headline with Luxury Serif */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#FAF6EE] leading-[1.12] text-balance">
                Timeless Elegance, <br className="hidden sm:inline" />
                <span className="gold-text-gradient">Crafted in Pure Gold</span>
              </h1>

              {/* Tagline & Subtext */}
              <p className="text-base sm:text-lg text-[#FAF6EE]/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Discover bespoke 21K and 22K Pakistani bridal jewelry, certified diamond rings, and pure gold heirlooms crafted for life's most cherished celebrations.
              </p>

              {/* Location Trust Note */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#FAF6EE]/60">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Shop #26, Bhayani Shopping Centre, Pakistan Bazaar, Orangi Town</span>
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#collection"
                  className="shimmer-hover w-full sm:w-auto px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#AA820A] rounded-md shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 text-center"
                >
                  View Collection
                </a>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#FAF6EE] border border-[#D4AF37]/50 rounded-md hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#FAF6EE]/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Hallmarked 21K &amp; 22K</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Direct Artisan Workshop</span>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Hero Luxury Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none group">
                {/* Gold Glow Backlight */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D4AF37]/40 via-[#F5E6A8]/20 to-[#0F2A22] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                
                {/* Card Container */}
                <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-[#0F2A22]/90 shadow-2xl">
                  <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#0F2A22]">
                   
<img
  src={heroImage}
  alt="Handcrafted luxury gold bridal jewellery set by Naseem Jeweller's"
  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
  loading="eager"
  onError={(e) => {
    console.error("Hero image failed to load:", heroImage);
  }}
/>

                  </div>

                  {/* Image Caption Footer Bar */}
                  <div className="p-4 bg-gradient-to-t from-[#0B0F0E] via-[#0F2A22] to-transparent border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">Bespoke Masterpiece</p>
                      <h2 className="text-base font-serif font-semibold text-[#FAF6EE]">Signature Bridal Choker Ensemble</h2>
                    </div>
                    <a
                      href={getProductWhatsAppUrl("Signature Bridal Choker Ensemble")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#D4AF37]/20 text-[#F5E6A8] hover:bg-[#D4AF37] hover:text-[#0B0F0E] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------- */}
        {/* 3. COLLECTION SECTION */}
        {/* -------------------------------------------------------------------- */}
        <section
          id="collection"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F0E] relative border-t border-[#D4AF37]/15"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Exclusive Showroom Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EE] text-balance">
                Our Signature Gold &amp; Diamond Collection
              </h2>
              <p className="text-sm sm:text-base text-[#FAF6EE]/75 leading-relaxed">
                Browse our curated pieces handcrafted in pure 21K and 22K gold. As daily gold rates fluctuate, click any item to request exact weight, live rates, and custom sizing on WhatsApp.
              </p>
            </div>

            {/* Category Filter Tabs (Zero-pill button segmented controls) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {SITE_CONFIG.categories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium tracking-wide uppercase rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0B0F0E] font-semibold shadow-md shadow-[#D4AF37]/20 scale-105'
                        : 'bg-[#0F2A22]/70 text-[#FAF6EE]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:text-[#F5E6A8]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Products Grid (9 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col rounded-xl overflow-hidden bg-[#0F2A22]/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  {/* Image Container with Smooth Zoom & Quick View */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#081511]">
                    <img
                      src={product.image}
                      alt={`${product.name} - Naseem Jeweller's Karachi`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Quick View Button overlay */}
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-[#0B0F0E]/80 border border-[#D4AF37]/40 text-[#F5E6A8] hover:bg-[#D4AF37] hover:text-[#0B0F0E] transition-all opacity-0 group-hover:opacity-100 shadow-md"
                      title="Quick View Details"
                      aria-label={`Quick view ${product.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Category Label (Quiet unboxed text) */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] font-medium uppercase tracking-widest text-[#F5E6A8] drop-shadow-md">
                        {product.category} · {product.purity}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-bold text-[#FAF6EE] group-hover:text-[#F5E6A8] transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#FAF6EE]/70 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price on WhatsApp & Order Button */}
                    <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#FAF6EE]/50 block">Pricing</span>
                        <span className="text-xs font-semibold text-[#D4AF37] tracking-wide">Price on WhatsApp</span>
                      </div>

                      <a
                        href={getProductWhatsAppUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shimmer-hover inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] to-[#AA820A] hover:from-[#F5E6A8] hover:to-[#D4AF37] rounded transition-all shadow-sm active:scale-95 whitespace-nowrap"
                        aria-label={`Order ${product.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current text-[#0B0F0E]" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Order Callout Strip */}
            <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#0F2A22] via-[#13241E] to-[#0F2A22] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-xl font-serif font-bold text-[#FAF6EE]">
                  Looking for a Custom Design or Specific Gram Weight?
                </h4>
                <p className="text-sm text-[#FAF6EE]/75">
                  Send us your favourite jewellery photos or visit our showroom with your wedding specifications.
                </p>
              </div>
              <a
                href={getGeneralWhatsAppUrl("Assalamualaikum, I have a custom jewellery design I would like to get made in gold. Please share process and estimate.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-hover px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#AA820A] rounded-md shadow-md whitespace-nowrap shrink-0 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                Send Custom Design
              </a>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------- */}
        {/* 4. ABOUT / WHY CHOOSE US SECTION */}
        {/* -------------------------------------------------------------------- */}
        <section
          id="about"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-radial from-[#0F2A22] via-[#0B0F0E] to-[#070B09] border-t border-[#D4AF37]/15 relative"
        >
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Story Paragraph */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Heritage &amp; Trust
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EE]">
                Why Choose Naseem Jeweller's
              </h2>
              <div className="space-y-4 text-base text-[#FAF6EE]/80 leading-relaxed font-light">
                <p>
                  Established at Bhayani Shopping Centre in Pakistan Bazaar, Orangi Town, <strong className="text-[#FAF6EE] font-medium">Naseem Jeweller's</strong> is built on an unwavering commitment to authenticity, master craftsmanship, and client trust.
                </p>
                <p>
                  Whether you are selecting a timeless wedding bridal set, investing in certified gold kangan, or choosing a brilliant diamond engagement ring, we guarantee transparent karats, fair daily rates, and meticulous artistry passed down through generations.
                </p>
              </div>
            </div>

            {/* 4 Icon Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SITE_CONFIG.whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl bg-[#0F2A22]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 space-y-4 group hover:-translate-y-1 shadow-md"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#AA820A] group-hover:text-[#0B0F0E] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#FAF6EE] group-hover:text-[#F5E6A8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF6EE]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------- */}
        {/* 5. CONTACT & LOCATION SECTION */}
        {/* -------------------------------------------------------------------- */}
        <section
          id="contact"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F0E] border-t border-[#D4AF37]/15 relative"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Visit Our Showroom
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EE]">
                Contact &amp; Store Location
              </h2>
              <p className="text-sm sm:text-base text-[#FAF6EE]/75">
                Visit our physical showroom in Pakistan Bazaar, Orangi Town, or get in touch immediately via phone or WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Address, Phone, WhatsApp, Opening Hours & Quick Inquiry */}
              <div className="lg:col-span-6 space-y-8">
                
                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Address Card */}
                  <div className="p-6 rounded-xl bg-[#0F2A22]/60 border border-[#D4AF37]/20 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm uppercase tracking-wider text-[#D4AF37] font-semibold">Store Address</h4>
                      <p className="text-sm text-[#FAF6EE]/90 leading-relaxed font-light">
                        {SITE_CONFIG.address}
                      </p>
                      <div className="pt-2">
                        <a
                          href={SITE_CONFIG.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5E6A8] hover:text-[#D4AF37] hover:underline"
                        >
                          <span>Get Directions on Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone & WhatsApp Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Click-to-call */}
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="p-5 rounded-xl bg-[#0F2A22]/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all flex items-center gap-3.5 group"
                    >
                      <div className="p-3 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0F0E] transition-colors shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#FAF6EE]/60 block font-medium">Click to Call</span>
                        <span className="text-sm font-semibold text-[#FAF6EE] group-hover:text-[#F5E6A8]">{SITE_CONFIG.phoneFormatted}</span>
                      </div>
                    </a>

                    {/* Direct WhatsApp */}
                    <a
                      href={getGeneralWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-xl bg-[#0F2A22]/60 border border-[#D4AF37]/20 hover:border-[#25D366]/70 transition-all flex items-center gap-3.5 group"
                    >
                      <div className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-[#0B0F0E] transition-colors shrink-0">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#FAF6EE]/60 block font-medium">WhatsApp Us</span>
                        <span className="text-sm font-semibold text-[#FAF6EE] group-hover:text-[#25D366]">{SITE_CONFIG.phoneFormatted}</span>
                      </div>
                    </a>
                  </div>

                  {/* Opening Hours Placeholder Card (Easy to edit) */}
                  <div className="p-6 rounded-xl bg-[#0F2A22]/60 border border-[#D4AF37]/20 space-y-3">
                    <div className="flex items-center gap-2.5 text-[#D4AF37]">
                      <Clock className="w-4 h-4" />
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">Opening Hours</h4>
                    </div>
                    <ul className="divide-y divide-[#D4AF37]/10 text-xs text-[#FAF6EE]/80">
                      {SITE_CONFIG.openingHours.map((slot, i) => (
                        <li key={i} className="py-2 flex items-center justify-between">
                          <span className="font-medium text-[#FAF6EE]">{slot.days}</span>
                          <span className="text-[#FAF6EE]/70 font-mono">{slot.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Fast-Loading Inquiry Form (WhatsApp Handoff) */}
                <div className="p-6 rounded-xl bg-[#0F2A22]/80 border border-[#D4AF37]/30 space-y-4">
                  <div className="border-b border-[#D4AF37]/20 pb-3">
                    <h4 className="text-base font-serif font-bold text-[#FAF6EE]">Quick WhatsApp Message</h4>
                    <p className="text-xs text-[#FAF6EE]/70">Send us a direct inquiry without saving our contact number.</p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-4 rounded-lg bg-[#0F2A22] border border-[#25D366]/40 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-[#25D366] mx-auto" />
                      <p className="text-sm font-semibold text-[#FAF6EE]">Opening WhatsApp with your inquiry...</p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-[#D4AF37] hover:underline cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#FAF6EE]/70 mb-1">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Fatima Ali"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full px-3.5 py-2 rounded bg-[#0B0F0E] border border-[#D4AF37]/30 text-sm text-[#FAF6EE] placeholder-[#FAF6EE]/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#FAF6EE]/70 mb-1">Your Phone / WhatsApp</label>
                          <input
                            type="tel"
                            placeholder="e.g. 0300-1234567"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            className="w-full px-3.5 py-2 rounded bg-[#0B0F0E] border border-[#D4AF37]/30 text-sm text-[#FAF6EE] placeholder-[#FAF6EE]/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#FAF6EE]/70 mb-1">Interested In</label>
                        <select
                          value={formInterest}
                          onChange={(e) => setFormInterest(e.target.value)}
                          className="w-full px-3.5 py-2 rounded bg-[#0B0F0E] border border-[#D4AF37]/30 text-sm text-[#FAF6EE] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        >
                          <option value="Bridal Jewellery Set">Bridal Jewellery Set</option>
                          <option value="Gold Bangles & Kangan">Gold Bangles &amp; Kangan</option>
                          <option value="Diamond Solitaire Ring">Diamond Solitaire Ring</option>
                          <option value="Gold Necklace or Chain">Gold Necklace or Chain</option>
                          <option value="Daily Gold Rate & Custom Order">Daily Gold Rate &amp; Custom Order</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#FAF6EE]/70 mb-1">Message / Requirements</label>
                        <textarea
                          rows={2}
                          placeholder="Tell us about the design, weight, or budget you have in mind..."
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          className="w-full px-3.5 py-2 rounded bg-[#0B0F0E] border border-[#D4AF37]/30 text-sm text-[#FAF6EE] placeholder-[#FAF6EE]/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="shimmer-hover w-full py-2.5 px-4 rounded font-semibold text-xs uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#AA820A] flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Embedded Google Map & Directions */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#0F2A22] shadow-2xl relative">
                  <div className="aspect-[4/3] sm:aspect-[16/11] w-full">
                    <iframe
                      title="Naseem Jeweller's Location - Bhayani Shopping Centre, Orangi Town"
                      src={SITE_CONFIG.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full filter saturate-[0.85] contrast-[1.1]"
                    />
                  </div>

                  <div className="p-5 bg-[#0F2A22] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Orangi Town Showroom</p>
                      <p className="text-xs text-[#FAF6EE]/80">Shop #26, Bhayani Shopping Centre, Pakistan Bazaar</p>
                    </div>
                    <a
                      href={SITE_CONFIG.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shimmer-hover inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] to-[#AA820A] rounded-md shadow hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all whitespace-nowrap"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0F2A22]/40 border border-[#D4AF37]/15 text-xs text-[#FAF6EE]/70 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>Secure showroom environment with personalized bridal consultations and private gold viewing.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------------------------------------------- */}
      {/* 6. FOOTER */}
      {/* -------------------------------------------------------------------- */}
      <footer className="bg-[#050706] border-t border-[#D4AF37]/20 py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Short Line */}
          <div className="space-y-2 text-center md:text-left">
            <span className="text-2xl font-serif font-bold gold-text-gradient tracking-wide block">
              {SITE_CONFIG.businessName}
            </span>
            <p className="text-xs text-[#FAF6EE]/70 max-w-sm">
              Authentic 21K &amp; 22K gold, certified diamonds, and bespoke Pakistani bridal jewellery in Orangi Town, Karachi.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-[#FAF6EE]/70 font-medium">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#collection" className="hover:text-[#D4AF37] transition-colors">Collection</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Copyright & Location Indicator */}
          <div className="text-xs text-[#FAF6EE]/50 text-center md:text-right space-y-1">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.</p>
            <p className="text-[11px] text-[#FAF6EE]/40">Shop #26, Bhayani Shopping Centre, Pakistan Bazaar, Karachi</p>
          </div>
        </div>
      </footer>

      {/* -------------------------------------------------------------------- */}
      {/* FLOATING WHATSAPP BUTTON (PULSING ANIMATION, BOTTOM-RIGHT) */}
      {/* -------------------------------------------------------------------- */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Naseem Jeweller's on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-[#0B0F0E] rounded-full font-semibold shadow-2xl animate-gentle-pulse hover:scale-105 active:scale-95 transition-transform duration-200 group"
      >
        <MessageCircle className="w-6 h-6 fill-current text-[#0B0F0E]" />
        <span className="text-xs uppercase tracking-wider font-bold hidden sm:inline text-[#0B0F0E]">
          WhatsApp Us
        </span>
      </a>

      {/* -------------------------------------------------------------------- */}
      {/* PRODUCT QUICK VIEW MODAL (LIGHTBOX) */}
      {/* -------------------------------------------------------------------- */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0F2A22] border border-[#D4AF37]/50 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 text-[#FAF6EE]/70 hover:text-[#FAF6EE] rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Product Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#D4AF37]/30 bg-black">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {selectedProduct.category} · {selectedProduct.purity}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#FAF6EE] mt-1">
                    {selectedProduct.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>

                <div className="p-3 rounded bg-[#0B0F0E]/60 border border-[#D4AF37]/20 text-xs space-y-1">
                  <p className="text-[#FAF6EE]/90">
                    <strong className="text-[#D4AF37]">Hallmark:</strong> Guaranteed 21K/22K Pure Gold
                  </p>
                  <p className="text-[#FAF6EE]/90">
                    <strong className="text-[#D4AF37]">Availability:</strong> Ready in Showroom &amp; Custom Sizing
                  </p>
                  <p className="text-[#FAF6EE]/70 italic">
                    Price determined by live Karachi Sarafa Bazar daily rate and final gram weight.
                  </p>
                </div>

                <a
                  href={getProductWhatsAppUrl(selectedProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-hover flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0F0E] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#AA820A] rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#0B0F0E]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
