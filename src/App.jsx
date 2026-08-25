import { useEffect, useState } from 'react'
import {
  ArrowRight, CheckCircle2, ChevronRight, Clock3, Factory, Facebook,
  Instagram, Linkedin, Mail, MapPin, Menu, MessageSquare, Phone,
  ShieldCheck, Truck, X
} from 'lucide-react'

const products = [
  { name: 'Standard Portland Cement', code: 'CPC-43', description: 'Reliable general-purpose cement for residential and commercial construction.', tags: ['Consistent', 'Versatile'] },
  { name: 'Premium OPC Cement', code: 'OPC-53', description: 'Higher early strength for demanding structural and infrastructure applications.', tags: ['High strength', 'Fast setting'] },
  { name: 'Premium Quality Cement', code: 'PQC-Plus', description: 'Performance-focused cement for durable foundations and long-life builds.', tags: ['Durable', 'Performance'] },
]

const services = [
  { icon: Factory, number: '01', title: 'Quality Products', text: 'Cement products presented with a clear, straightforward customer experience.' },
  { icon: Truck, number: '02', title: 'Timely Delivery', text: 'Delivery coordination designed around project requirements and supply conversations.' },
  { icon: MessageSquare, number: '03', title: 'Customer Support', text: 'Responsive communication from first enquiry through product and supply discussions.' },
  { icon: ShieldCheck, number: '04', title: 'Build Supply', text: 'A dependable digital entry point for customers, contractors and project enquiries.' },
]

const nav = [['Home', 'home'], ['About', 'about'], ['Products', 'products'], ['Services', 'services'], ['Inquiry', 'inquiry'], ['Contact', 'contact']]

function BrandMark() { return <div className="brand-mark" aria-hidden="true"><span className="brand-drop" /><span className="brand-ring" /></div> }
function CementBag({ variant = 1 }) { return <div className={`cement-bag bag-${variant}`}><div className="bag-fold" /><BrandMark /><strong>CHANDANSHIV</strong><small>CEMENT PRODUCTS</small><i /></div> }

function Header({ menuOpen, setMenuOpen, active }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <a className="logo" href="#home" onClick={() => setMenuOpen(false)}><BrandMark /><span><b>CHANDANSHIV</b><small>CEMENT PRODUCTS</small></span></a>
    <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
    <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">{nav.map(([label, id]) => <a className={active === id ? 'active' : ''} key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#inquiry" onClick={() => setMenuOpen(false)}>Start an Inquiry <ArrowRight size={15} /></a></nav>
  </header>
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-grid" /><div className="hero-copy reveal visible">
      <div className="eyebrow"><span /> Cement products • dependable supply</div>
      <h1>Stronger<br /><em>Foundations.</em><br />Better Tomorrow.</h1>
      <p>A premium digital experience for Chandanshiv Cement Products — making products, services and enquiries easier to discover.</p>
      <div className="hero-actions"><a className="button primary" href="#products">Explore Products <ArrowRight size={18} /></a><a className="button ghost" href="#inquiry">Send an Inquiry</a></div>
      <div className="hero-proof"><span><CheckCircle2 size={17} /> Clear product information</span><span><CheckCircle2 size={17} /> Customer-first support</span></div>
    </div>
    <div className="hero-art" aria-label="Cement product visual"><div className="sun-glow" /><div className="architectural-ring" /><div className="hero-floor" /><div className="hero-bag"><CementBag variant={2} /></div><div className="hero-bag small"><CementBag variant={1} /></div><div className="aggregate aggregate-one" /><div className="aggregate aggregate-two" /><div className="aggregate aggregate-three" /></div>
    <div className="hero-note"><span>01</span><p>Built around clarity, trust and the materials that shape everyday construction.</p></div>
  </section>
}

function About() { return <section id="about" className="section about reveal-section"><div className="section-label">01 — About Chandanshiv</div><div className="two-col"><div><h2>Materials for the structures that <span>define tomorrow.</span></h2><p className="lead">Chandanshiv Cement Products is presented through a calm, confident digital experience built around product discovery, service and direct enquiry.</p><p>Clear information and a focused customer journey put the business purpose first. The design uses an architectural visual language to communicate substance without clutter.</p></div><div className="about-visual"><div className="concrete-block block-a" /><div className="concrete-block block-b" /><div className="about-stamp"><Factory size={21} /><span>CHANDANSHIV<br /><b>CEMENT PRODUCTS</b></span></div></div></div></section> }

function ProductModal({ product, onClose }) {
  useEffect(() => { if (!product) return; const onKey = e => e.key === 'Escape' && onClose(); document.body.classList.add('modal-open'); window.addEventListener('keydown', onKey); return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', onKey) } }, [product, onClose])
  if (!product) return null
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-title"><button className="modal-close" aria-label="Close product details" onClick={onClose}><X /></button><div className="modal-visual"><CementBag variant={product.variant} /></div><div className="modal-content"><span className="product-code">{product.code}</span><h2 id="product-title">{product.name}</h2><p>{product.description}</p><div className="tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-rule" /><p className="modal-note">For exact technical specifications, availability and supply requirements, please send an enquiry.</p><a className="button primary" href="#inquiry" onClick={onClose}>Enquire about this product <ArrowRight size={17} /></a></div></div></div>
}

function Products() {
  const [selected, setSelected] = useState(null)
  return <section id="products" className="section products-section reveal-section"><div className="section-heading"><div><div className="section-label">02 — Products</div><h2>Made for <span>solid progress.</span></h2></div><p>Explore the featured range. Select a product for more information or start an enquiry for exact requirements.</p></div><div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.code} onClick={() => setSelected({ ...product, variant: index + 1 })}><div className="product-visual"><span className="product-index">0{index + 1}</span><CementBag variant={index + 1} /></div><div className="product-content"><span className="product-code">{product.code}</span><h3>{product.name}</h3><p>{product.description}</p><div className="tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="text-button">View Details <ChevronRight size={16} /></button></div></article>)}</div><ProductModal product={selected} onClose={() => setSelected(null)} /></section>
}

function Services() { return <section id="services" className="section services reveal-section"><div className="section-label">03 — Services</div><div className="section-heading"><h2>Simple service. <span>Serious support.</span></h2><p>Everything around the product should feel as dependable as the product itself.</p></div><div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={title}><div className="service-top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="service-arrow" size={18} /></article>)}</div></section> }

function Inquiry() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }
  return <section id="inquiry" className="section inquiry reveal-section"><div className="inquiry-panel"><div className="inquiry-copy"><div className="section-label light">04 — Inquiry</div><h2>Let's build something <span>strong.</span></h2><p>Tell us what you are building and what you need. This frontend validates the enquiry locally; connect your preferred backend or email service to receive real submissions.</p><div className="inquiry-points"><span><Clock3 size={17} /> Clear project details</span><span><MessageSquare size={17} /> Direct enquiry path</span><span><Phone size={17} /> Follow-up ready</span></div></div><form className="inquiry-form" onSubmit={handleSubmit}>{submitted && <div className="success"><CheckCircle2 size={18} /> Enquiry captured in the interface. Connect a backend to send it.</div>}<label>Name<input required name="name" placeholder="Your full name" /></label><div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone<input name="phone" inputMode="tel" placeholder="Phone number" /></label></div><label>Product / Requirement<select name="requirement" defaultValue=""><option value="" disabled>Select a requirement</option>{products.map(p => <option key={p.code}>{p.name}</option>)}<option>General enquiry</option></select></label><label>Message<textarea required name="message" rows="4" placeholder="Tell us about your project or requirement..." /></label><button className="button primary full" type="submit">Send Inquiry <ArrowRight size={18} /></button></form></div></section>
}

function Contact() { return <section id="contact" className="section contact reveal-section"><div><div className="section-label">05 — Contact</div><h2>Have a project in <span>mind?</span></h2><p className="lead">Start a conversation through the enquiry form. Verified business contact details can be added here when supplied by the company.</p><a className="button dark" href="#inquiry">Start a Conversation <ArrowRight size={17} /></a></div><div className="contact-grid"><a className="contact-card" href="#inquiry"><MessageSquare /><span>Inquiry</span><strong>Tell us what you need</strong><small>Product, quantity and project requirements</small></a><div className="contact-card"><MapPin /><span>Business information</span><strong>Details on request</strong><small>Use verified company information before publishing</small></div><a className="contact-card" href="#inquiry"><Mail /><span>Communication</span><strong>Send an enquiry</strong><small>Use the enquiry form for direct follow-up</small></a></div></section> }

function Footer() { return <footer className="footer"><div className="footer-brand"><a className="logo" href="#home"><BrandMark /><span><b>CHANDANSHIV</b><small>CEMENT PRODUCTS</small></span></a><p>Strong foundations.<br />Better tomorrow.</p></div><div className="footer-links"><div><b>Explore</b>{nav.slice(0, 5).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div><b>Connect</b><a href="#contact">Contact</a><a href="#inquiry">Start an inquiry</a></div></div><div className="socials"><a href="#contact" aria-label="Facebook"><Facebook size={17} /></a><a href="#contact" aria-label="Instagram"><Instagram size={17} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={17} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Chandanshiv Cement Products</span><span>Premium web experience</span></div></footer> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false); const [active, setActive] = useState('home'); const [progress, setProgress] = useState(0)
  useEffect(() => {
    const sections = nav.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) }), { rootMargin: '-30% 0px -55% 0px' })
    sections.forEach(s => observer.observe(s)); const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? (window.scrollY / max) * 100 : 0) }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  return <><div className="scroll-progress" style={{ width: `${progress}%` }} /><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} /><main><Hero /><About /><Products /><Services /><Inquiry /><Contact /></main><Footer /></>
}
