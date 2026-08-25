import { useState } from 'react'
import {
  ArrowRight, CheckCircle2, ChevronRight, Clock3, Factory, Facebook,
  Instagram, Linkedin, Mail, MapPin, Menu, MessageSquare, Phone,
  ShieldCheck, Truck, X
} from 'lucide-react'

const products = [
  { name: 'Standard Portland Cement', code: 'CPC-43', description: 'Reliable general-purpose cement for residential and commercial construction.', tags: ['Consistent', 'Versatile'] },
  { name: 'Premium OPC Cement', code: 'OPC-53', description: 'Higher early strength for demanding structural and infrastructure applications.', tags: ['High strength', 'Fast setting'] },
  { name: 'Premium Quality Cement', code: 'PQC-Plus', description: 'Performance-focused formulation for durable foundations and long-life builds.', tags: ['Durable', 'Low variation'] },
]

const services = [
  { icon: Factory, title: 'Quality Products', text: 'Cement products selected for consistent performance and dependable results.' },
  { icon: Truck, title: 'Timely Delivery', text: 'Planned dispatch and delivery support for projects of different sizes.' },
  { icon: MessageSquare, title: 'Customer Support', text: 'Clear product guidance and responsive communication from enquiry to delivery.' },
  { icon: ShieldCheck, title: 'Build Supply', text: 'A straightforward supply experience designed around contractors and customers.' },
]

const nav = [['Home', 'home'], ['About', 'about'], ['Products', 'products'], ['Services', 'services'], ['Inquiry', 'inquiry'], ['Contact', 'contact']]

function BrandMark() {
  return <div className="brand-mark" aria-hidden="true"><span className="brand-drop" /><span className="brand-ring" /></div>
}

function CementBag({ label = 'CHANDANSHIV', variant = 1 }) {
  return <div className={`cement-bag bag-${variant}`} aria-label={`${label} cement bag illustration`}><div className="bag-fold" /><BrandMark /><strong>{label}</strong><small>CEMENT</small><i /></div>
}

function Header({ menuOpen, setMenuOpen }) {
  return <header className="site-header">
    <a className="logo" href="#home" onClick={() => setMenuOpen(false)}><BrandMark /><span><b>CHANDANSHIV</b><small>CEMENT PRODUCTS</small></span></a>
    <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
    <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#inquiry" onClick={() => setMenuOpen(false)}>Get a Quote <ArrowRight size={16} /></a></nav>
  </header>
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-grid" />
    <div className="hero-copy">
      <div className="eyebrow"><span /> Trusted cement supply for stronger builds</div>
      <h1>Stronger Foundations,<br /><em>Better Tomorrow.</em></h1>
      <p>Reliable cement products and responsive service for homes, commercial projects, infrastructure and everything built to last.</p>
      <div className="hero-actions"><a className="button primary" href="#products">Explore Products <ArrowRight size={18} /></a><a className="button ghost" href="#inquiry">Send an Inquiry</a></div>
      <div className="hero-proof"><span><CheckCircle2 size={18} /> Quality-focused supply</span><span><CheckCircle2 size={18} /> Responsive support</span><span><CheckCircle2 size={18} /> Delivery coordination</span></div>
    </div>
    <div className="hero-art" aria-label="Cement product showcase"><div className="sun-glow" /><div className="hero-floor" /><div className="hero-bag"><CementBag variant={2} /></div><div className="hero-bag small"><CementBag variant={1} /></div><div className="aggregate aggregate-one" /><div className="aggregate aggregate-two" /><div className="aggregate aggregate-three" /></div>
  </section>
}

function Stats() {
  return <section className="stats"><div><strong>24/7</strong><span>Access to business information</span></div><div><strong>3+</strong><span>Product categories showcased</span></div><div><strong>100%</strong><span>Responsive across devices</span></div><div><strong>1:1</strong><span>Customer-focused communication</span></div></section>
}

function About() {
  return <section id="about" className="section about"><div className="section-label">01 — About us</div><div className="two-col"><div><h2>A dependable digital front door for a <span>stronger business.</span></h2><p className="lead">Chandanshiv Cement Products is presented here as a modern, accessible business platform that makes products, services and contact information easy to discover.</p><p>The experience is designed to build trust quickly: clear product information, straightforward service details, prominent enquiry paths and a mobile-first interface keep the customer journey simple.</p></div><div className="about-card"><div className="about-card-top"><Factory size={28} /><span>Business focus</span></div><h3>Build confidence before the first conversation.</h3><ul><li><CheckCircle2 /> Professional online presence</li><li><CheckCircle2 /> Clear product showcase</li><li><CheckCircle2 /> Fast enquiry access</li><li><CheckCircle2 /> Responsive user experience</li></ul></div></div></section>
}

function Products() {
  return <section id="products" className="section products-section"><div className="section-heading"><div><div className="section-label">02 — Products</div><h2>Materials for <span>solid progress.</span></h2></div><p>Explore the featured cement range. Product information can be replaced with the company’s exact specifications, pack sizes and certifications.</p></div><div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.code}><div className="product-visual"><CementBag variant={index + 1} /></div><div className="product-content"><span className="product-code">{product.code}</span><h3>{product.name}</h3><p>{product.description}</p><div className="tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#inquiry">Ask about this product <ChevronRight size={16} /></a></div></article>)}</div></section>
}

function Services() {
  return <section id="services" className="section services"><div className="section-label">03 — Services</div><div className="section-heading"><h2>Simple service. <span>Serious support.</span></h2><p>Everything around the product should feel as dependable as the product itself.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="icon-box"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p><span className="service-arrow"><ArrowRight size={17} /></span></article>)}</div></section>
}

function Inquiry() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }
  return <section id="inquiry" className="section inquiry"><div className="inquiry-panel"><div className="inquiry-copy"><div className="section-label light">04 — Inquiry</div><h2>Tell us what you're <span>building.</span></h2><p>Use this form as the website’s enquiry entry point. Connect it to your preferred email service, CRM or backend when the project goes live.</p><div className="inquiry-points"><span><Clock3 size={17} /> Fast response workflow</span><span><MessageSquare size={17} /> Clear project details</span><span><Phone size={17} /> Direct follow-up</span></div></div><form className="inquiry-form" onSubmit={handleSubmit}>{submitted && <div className="success"><CheckCircle2 size={18} /> Demo enquiry captured. Connect your backend to receive real submissions.</div>}<label>Name<input required name="name" placeholder="Your full name" /></label><div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone<input name="phone" placeholder="+91 ..." /></label></div><label>Product / Requirement<select name="requirement" defaultValue=""><option value="" disabled>Select a requirement</option><option>Standard Portland Cement</option><option>Premium OPC Cement</option><option>Premium Quality Cement</option><option>General business inquiry</option></select></label><label>Message<textarea required name="message" rows="4" placeholder="Tell us about your project or quantity requirement..." /></label><button className="button primary full" type="submit">Send Inquiry <ArrowRight size={18} /></button></form></div></section>
}

function Contact() {
  return <section id="contact" className="section contact"><div><div className="section-label">05 — Contact</div><h2>Let's make the next <span>build stronger.</span></h2><p className="lead">Replace the sample details below with the company's verified address, phone, email and social links before publishing.</p></div><div className="contact-grid"><a className="contact-card" href="tel:+919999999999"><Phone /><span>Phone</span><strong>+91 99999 99999</strong><small>Call for product & supply enquiries</small></a><a className="contact-card" href="mailto:info@chandanshivcement.com"><Mail /><span>Email</span><strong>info@chandanshivcement.com</strong><small>Send a requirement or question</small></a><div className="contact-card"><MapPin /><span>Address</span><strong>Someshwar, Maharashtra</strong><small>Replace with the verified business address</small></div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="footer-brand"><a className="logo" href="#home"><BrandMark /><span><b>CHANDANSHIV</b><small>CEMENT PRODUCTS</small></span></a><p>Stronger foundations, better tomorrow.</p></div><div className="footer-links"><div><b>Explore</b>{nav.slice(0, 5).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div><b>Connect</b><a href="#contact">Contact us</a><a href="#inquiry">Send inquiry</a><a href="mailto:info@chandanshivcement.com">Email</a></div></div><div className="socials"><a href="#contact" aria-label="Facebook"><Facebook size={18} /></a><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={18} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Chandanshiv Cement Products. Demo website.</span><span>Built with React + Vite</span></div></footer>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><Stats /><About /><Products /><Services /><Inquiry /><Contact /></main><Footer /></>
}
