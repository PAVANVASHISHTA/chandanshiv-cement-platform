import { useEffect, useState } from 'react'

const pages = ['home', 'about', 'products', 'services', 'inquiry', 'contact']
const products = [
  { id: '01', code: 'OPC', grade: '53', name: 'OPC 53 Grade', text: 'High-strength cement presentation for demanding structural construction.' },
  { id: '02', code: 'PPC', grade: '', name: 'PPC Cement', text: 'A dependable product category for durable, long-lasting construction.' },
  { id: '03', code: 'PSC', grade: '', name: 'PSC Cement', text: 'Performance-focused cement category for specialized construction needs.' },
  { id: '04', code: 'WC', grade: '', name: 'White Cement', text: 'A premium category for architectural and decorative applications.' },
]
const services = [
  ['01', 'Bulk Supply', 'Coordinated supply support for larger construction requirements.'],
  ['02', 'Technical Support', 'Clear product and application guidance for project conversations.'],
  ['03', 'Quality Focus', 'A presentation built around consistency, clarity and customer confidence.'],
  ['04', 'Logistics Support', 'Simple communication around dispatch and delivery requirements.'],
]

const go = page => { window.location.hash = page; window.scrollTo({ top: 0, behavior: 'smooth' }) }

function Brand() {
  return <button className="brand" onClick={() => go('home')} aria-label="Chandanshiv Cement home"><span className="brand-mark"><span>CS</span></span><span><strong>CHANDANSHIV</strong><small>CEMENT PRODUCTS</small></span></button>
}
function Button({ children, page = 'inquiry', variant = 'primary', onClick }) {
  return <button className={`btn ${variant}`} onClick={onClick || (() => go(page))}>{children}</button>
}
function Layout({ page, setPage, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => { const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? window.scrollY / max * 100 : 0) }; window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const navigate = target => { setMenuOpen(false); setPage(target); go(target) }
  return <>
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className="header"><Brand /><button className="menu" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}><span /><span /></button><nav className={menuOpen ? 'open' : ''}>{pages.map(item => <button key={item} className={page === item ? 'active' : ''} onClick={() => navigate(item)}>{item === 'home' ? 'Home' : item === 'about' ? 'About Us' : item[0].toUpperCase() + item.slice(1)}</button>)}<button className="nav-cta" onClick={() => navigate('inquiry')}>Send an Inquiry ↗</button></nav></header>
    <main>{children}</main>
    <footer><div className="footer-top"><Brand /><p>Stronger foundations.<br />Better tomorrow.</p><div className="footer-nav">{pages.slice(1).map(item => <button key={item} onClick={() => navigate(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}</div><Button variant="dark">Start a conversation ↗</Button></div><div className="footer-bottom">© {new Date().getFullYear()} Chandanshiv Cement Products <span>HTML5 · CSS3 · JavaScript · React</span></div></footer>
  </>
}

function Hero() {
  return <section className="hero page-enter"><div className="hero-bg" /><div className="hero-grid" /><div className="hero-copy"><p className="eyebrow">CHANDANSHIV CEMENT PRODUCTS</p><h1>Stronger foundations,<br /><em>better tomorrow.</em></h1><p className="hero-text">Premium cement product presentation for customers, contractors and project teams looking for dependable construction solutions.</p><div className="actions"><Button page="products">Explore Products <span>→</span></Button><Button variant="secondary">Send an Inquiry <span>↗</span></Button></div><div className="proof"><span>✓ Quality-focused supply</span><span>✓ Customer-first support</span><span>✓ Responsive experience</span></div></div><div className="hero-scene" aria-label="Construction illustration"><div className="sun" /><div className="crane"><i /><b /><span /></div><div className="building building-back"><i /><i /><i /><i /></div><div className="building building-front"><i /><i /><i /><i /><i /><i /></div><div className="cement-bag"><small>CHANDANSHIV</small><strong>CEMENT</strong><span>STRONGER<br />FOUNDATIONS</span><b>CS</b></div><div className="ground" /><div className="scene-card"><b>01</b><span>Built around<br />lasting work.</span></div></div></section>
}
function QualityStrip() {
  const items = [['✦', 'Premium Quality', 'Carefully presented product information'], ['◈', 'Advanced Technology', 'Modern digital experience'], ['♧', 'Customer Focused', 'Clear paths from discovery to enquiry'], ['◌', 'Timely Support', 'Responsive communication and coordination']]
  return <section className="quality-strip">{items.map(([icon, title, text]) => <article key={title}><span className="quality-icon">{icon}</span><div><strong>{title}</strong><small>{text}</small></div></article>)}</section>
}
function ProductCard({ product }) {
  return <article className={`product ${product.id === '02' ? 'dark' : ''}`}><span>{product.id}</span><div className="bag mini"><b>{product.code}</b><strong>{product.grade || '•'}</strong><small>CEMENT</small></div><small>{product.code}{product.grade ? `-${product.grade}` : ''}</small><h3>{product.name}</h3><p>{product.text}</p><button onClick={() => go('inquiry')}>Learn More →</button></article>
}
function Home({ setPage }) {
  return <><Hero /><QualityStrip /><section className="section products-home"><div className="section-head"><div><p className="label">Our Products</p><h2>Materials for <em>solid progress.</em></h2></div><button className="text-link" onClick={() => setPage('products')}>View all products →</button></div><div className="product-layout"><div className="cards">{products.map(p => <ProductCard key={p.id} product={p} />)}</div><div className="trust-panel"><p className="label">Why customers choose the platform</p><div><b>Clear</b><span>Product discovery</span></div><div><b>Simple</b><span>Enquiry workflow</span></div><div><b>Responsive</b><span>Across devices</span></div><div><b>Focused</b><span>Business presentation</span></div></div></div></section><section className="trust-band"><div><p className="label light">Building trust, delivering quality</p><h2>Designed to make a strong first impression.</h2><p>Every section is structured to help customers understand the business, explore products and move naturally toward a conversation.</p></div><div className="trust-items"><span>✓ Quality assured presentation</span><span>✓ Expert-led information</span><span>✓ Customer-focused journey</span><span>✓ Modern digital experience</span></div></section><section className="section split-cta"><div><p className="label">Start a conversation</p><h2>Have a project in mind?</h2></div><div><p className="lead">Tell us what you are building and what you need. This prototype is ready to connect to a real enquiry backend.</p><Button onClick={() => setPage('inquiry')}>Send an Inquiry ↗</Button></div></section></>
}
function About() {
  return <section className="section page-enter"><p className="label">01 — About Us</p><div className="split"><h2>A dependable digital front door for a <em>stronger business.</em></h2><div><p className="lead">Chandanshiv Cement Products is presented here through a clear, responsive business experience designed around product discovery and customer communication.</p><p>Replace the prototype copy with verified company history, certifications, manufacturing details and approved brand messaging before public launch.</p></div></div><div className="feature"><span>A</span><div><small>BUSINESS FOCUS</small><h3>Build confidence before the first conversation.</h3></div><ul><li>Professional presentation</li><li>Simple enquiry journey</li><li>Responsive experience</li></ul></div></section>
}
function Products({ setPage }) {
  const [selected, setSelected] = useState(null)
  return <section className="section page-enter"><div className="section-head"><div><p className="label">02 — Products</p><h2>Our cement <em>products.</em></h2></div><p>Product categories are presented for prototype discovery. Verify technical specifications, certifications and availability before launch.</p></div><div className="cards products-page">{products.map(p => <article className={`product ${p.id === '02' ? 'dark' : ''}`} key={p.id}><span>{p.id}</span><div className="bag mini"><b>{p.code}</b><strong>{p.grade || '•'}</strong><small>CEMENT</small></div><small>{p.code}{p.grade ? `-${p.grade}` : ''}</small><h3>{p.name}</h3><p>{p.text}</p><button onClick={() => setSelected(p)}>Ask about product ↗</button></article>)}</div>{selected && <div className="modal open" role="dialog" aria-modal="true"><div className="modal-box"><button className="close" onClick={() => setSelected(null)} aria-label="Close">×</button><p className="label">PRODUCT ENQUIRY</p><h2>{selected.name}</h2><p>{selected.text}</p><Button onClick={() => { setSelected(null); setPage('inquiry') }}>Continue to Inquiry ↗</Button></div></div>}</section>
}
function Services() {
  return <section className="section page-enter"><p className="label">03 — Services</p><div className="section-head"><h2>Simple service.<br /><em>Serious support.</em></h2><p>From product discovery to project conversations, the experience keeps service information easy to understand.</p></div><div className="service-list">{services.map(([n, title, text]) => <article className="service" key={n}><b>{n}</b><div><h3>{title}</h3><p>{text}</p></div><span>↗</span></article>)}</div></section>
}
function Inquiry() {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset() }
  return <section className="inquiry page-enter"><div className="inquiry-copy"><p className="label light">04 — Inquiry</p><h2>Tell us what you're <em>building.</em></h2><p>Start a product, supply or project conversation through the enquiry form.</p><div className="proof light-text"><span>✓ Direct follow-up</span><span>✓ Clear requirements</span><span>✓ Simple workflow</span></div></div><form className="form" onSubmit={submit}>{sent && <div className="message">Thank you — your enquiry has been captured in this demo. Connect a secure backend for real delivery.</div>}<label>Name<input required name="name" placeholder="Your full name" /></label><div className="row"><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone<input name="phone" placeholder="+91 ..." /></label></div><label>Requirement<select name="product"><option value="">Select a requirement</option>{products.map(p => <option key={p.name}>{p.name}</option>)}<option>General business enquiry</option></select></label><label>Message<textarea required name="message" placeholder="Tell us about your project..." /></label><Button variant="dark">Send Inquiry ↗</Button><small>Demo form only — connect a secure backend/email service for real submissions.</small></form></section>
}
function Contact() {
  return <section className="section page-enter"><p className="label">05 — Contact</p><div className="split"><h2>Let's make the next <em>build stronger.</em></h2><p className="lead">Replace the sample contact details below with verified company information before launch.</p></div><div className="contact-grid"><a className="contact-card" href="tel:+919999999999"><small>PHONE</small><strong>+91 99999 99999</strong><span>Sample contact — replace with verified number ↗</span></a><a className="contact-card" href="mailto:info@chandanshivcement.com"><small>EMAIL</small><strong>info@chandanshivcement.com</strong><span>Sample email — replace with verified address ↗</span></a><div className="contact-card"><small>ADDRESS</small><strong>Someshwar, Maharashtra</strong><span>Sample location — replace with verified address</span></div></div></section>
}
export default function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || 'home')
  useEffect(() => { const onHash = () => setPage(pages.includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'home'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash) }, [])
  useEffect(() => { document.title = page === 'home' ? 'Chandanshiv Cement Products' : `${page[0].toUpperCase()}${page.slice(1)} — Chandanshiv Cement Products` }, [page])
  const content = page === 'about' ? <About /> : page === 'products' ? <Products setPage={setPage} /> : page === 'services' ? <Services /> : page === 'inquiry' ? <Inquiry /> : page === 'contact' ? <Contact /> : <Home setPage={setPage} />
  return <Layout page={page} setPage={setPage}>{content}</Layout>
}
