import { useEffect, useState } from 'react'

const pages = ['home', 'about', 'products', 'services', 'inquiry', 'contact']

const products = [
  { id: '01', code: 'OPC', grade: '53', name: 'Premium OPC Cement', text: 'Performance-focused presentation for demanding structural applications.' },
  { id: '02', code: 'CPC', grade: '43', name: 'Standard Portland Cement', text: 'A dependable general-purpose option for residential and commercial construction.' },
  { id: '03', code: 'PQC', grade: '+', name: 'Premium Quality Cement', text: 'A performance-oriented presentation for durable building requirements.' }
]

function go(page) {
  window.location.hash = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Brand() {
  return <button className="brand" onClick={() => go('home')} aria-label="Chandanshiv Cement home"><span className="mark"><i /><b /></span><span><strong>CHANDANSHIV</strong><small>CEMENT PRODUCTS</small></span></button>
}

function Button({ children, page = 'inquiry', variant = 'primary', onClick }) {
  return <button className={`btn ${variant}`} onClick={onClick || (() => go(page))}>{children}</button>
}

function Layout({ page, setPage, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (target) => {
    setMenuOpen(false)
    setPage(target)
    window.location.hash = target
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <>
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className="header scrolled">
      <Brand />
      <button className="menu" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}><span /><span /></button>
      <nav className={menuOpen ? 'open' : ''}>
        {pages.map(item => <button key={item} className={page === item ? 'active' : ''} onClick={() => navigate(item)}>{item === 'home' ? 'Home' : item === 'about' ? 'About Us' : item[0].toUpperCase() + item.slice(1)}</button>)}
        <button className="nav-cta" onClick={() => navigate('inquiry')}>Get a Quote ↗</button>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <div className="footer-top"><Brand /><p>Stronger foundations.<br />Better tomorrow.</p><div className="footer-nav">{pages.slice(1).map(item => <button key={item} onClick={() => navigate(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}</div><Button variant="dark">Start a conversation ↗</Button></div>
      <div className="footer-bottom">© {new Date().getFullYear()} Chandanshiv Cement Products <span>React · HTML5 · CSS3 · JavaScript</span></div>
    </footer>
  </>
}

function Hero() {
  return <section className="hero page-enter"><div className="hero-bg" /><div className="hero-grid" /><div className="hero-copy"><p className="eyebrow"><span /> Reliable supply. Considered service.</p><h1>Stronger foundations,<br /><em>better tomorrow.</em></h1><p className="hero-text">A premium digital home for Chandanshiv Cement Products — designed to make products, services and enquiries simple to discover.</p><div className="actions"><Button>Explore Products ↗</Button><Button variant="secondary">Send an Inquiry</Button></div><div className="proof"><span>✓ Quality-focused supply</span><span>✓ Responsive support</span><span>✓ Delivery coordination</span></div></div><div className="hero-art"><div className="ring" /><div className="cement-bag"><span className="seal">CS</span><strong>CHANDANSHIV</strong><small>CEMENT<br />PRODUCTS</small><em>BUILD WITH CONFIDENCE</em></div><div className="float-card"><b>01</b><span>Built around<br />lasting work.</span></div></div></section>
}

function Home({ setPage }) {
  return <><Hero /><section className="stats reveal visible">{['Clear product discovery', 'Customer-first enquiries', 'Responsive by design', 'Built for long-term trust'].map((x, i) => <div key={x}><b>0{i + 1}</b><span>{x}</span></div>)}</section><section className="section compact"><p className="label">Explore the platform</p><div className="split"><h2>Everything customers need, <em>in one place.</em></h2><div><p className="lead">Explore company information, products, services and enquiries through a clean six-screen experience.</p><Button variant="secondary" onClick={() => setPage('about')}>Discover About Us ↗</Button></div></div></section></>
}

function About() {
  return <section className="section page-enter"><p className="label">01 — About Us</p><div className="split"><h2>A dependable digital front door for a <em>stronger business.</em></h2><div><p className="lead">A modern, accessible experience for discovering Chandanshiv Cement Products, services and contact information.</p><p>Clear information, focused calls-to-action and a calm architectural visual language move customers from first impression to meaningful enquiry.</p></div></div><div className="feature"><span>A</span><div><small>BUSINESS FOCUS</small><h3>Build confidence before the first conversation.</h3></div><ul><li>Professional presentation</li><li>Simple enquiry journey</li><li>Responsive experience</li></ul></div></section>
}

function Products({ setPage }) {
  const [selected, setSelected] = useState(null)
  return <section className="section page-enter"><div className="section-head"><div><p className="label">02 — Products</p><h2>Materials for <em>solid progress.</em></h2></div><p>Featured categories are presented for discovery. Verify technical specifications and certifications before public launch.</p></div><div className="cards">{products.map(p => <article className={`product ${p.id === '02' ? 'dark' : ''}`} key={p.id}><span>{p.id}</span><div className="bag mini"><b>{p.code}</b><strong>{p.grade}</strong></div><small>{p.code}-{p.grade}</small><h3>{p.name}</h3><p>{p.text}</p><button onClick={() => setSelected(p)}>Ask about product ↗</button></article>)}</div>{selected && <div className="modal open" role="dialog" aria-modal="true"><div className="modal-box"><button className="close" onClick={() => setSelected(null)} aria-label="Close">×</button><p className="label">PRODUCT ENQUIRY</p><h2>{selected.name}</h2><p>{selected.text}</p><Button onClick={() => { setSelected(null); setPage('inquiry') }}>Continue to Inquiry ↗</Button></div></div>}</section>
}

function Services() {
  const services = [['01', 'Quality Products', 'Focused product presentation for dependable construction supply.'], ['02', 'Timely Delivery', 'Clear communication around dispatch and delivery requirements.'], ['03', 'Customer Support', 'A straightforward route from enquiry to supply discussion.'], ['04', 'Build Supply', 'An experience designed around contractors and project needs.']]
  return <section className="section page-enter"><p className="label">03 — Services</p><div className="section-head"><h2>Simple service.<br /><em>Serious support.</em></h2><p>Everything around the product should feel as dependable as the product itself.</p></div><div className="service-list">{services.map(([n, title, text]) => <article className="service" key={n}><b>{n}</b><div><h3>{title}</h3><p>{text}</p></div><span>↗</span></article>)}</div></section>
}

function Inquiry() {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset() }
  return <section className="inquiry page-enter"><div className="inquiry-copy"><p className="label light">04 — Inquiry</p><h2>Tell us what you're <em>building.</em></h2><p>Start a product, supply or project conversation through the enquiry form.</p><div className="proof light-text"><span>✓ Direct follow-up</span><span>✓ Clear requirements</span><span>✓ Simple workflow</span></div></div><form className="form" onSubmit={submit}>{sent && <div className="message">Thank you — your enquiry has been captured in this demo. Connect a secure backend for real delivery.</div>}<label>Name<input required name="name" placeholder="Your full name" /></label><div className="row"><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone<input name="phone" placeholder="+91 ..." /></label></div><label>Requirement<select name="product"><option value="">Select a requirement</option>{products.map(p => <option key={p.name}>{p.name}</option>)}<option>General business enquiry</option></select></label><label>Message<textarea required name="message" placeholder="Tell us about your project..." /></label><Button variant="dark">Send Inquiry ↗</Button><small>Demo form only — connect a secure backend/email service for real submissions.</small></form></section>
}

function Contact() {
  return <section className="section page-enter"><p className="label">05 — Contact</p><div className="split"><h2>Let's make the next <em>build stronger.</em></h2><p className="lead">Replace sample details below with verified company information before launch.</p></div><div className="contact-grid"><a className="contact-card" href="tel:+919999999999"><small>PHONE</small><strong>+91 99999 99999</strong><span>Sample contact — replace with verified number ↗</span></a><a className="contact-card" href="mailto:info@chandanshivcement.com"><small>EMAIL</small><strong>info@chandanshivcement.com</strong><span>Sample email — replace with verified address ↗</span></a><div className="contact-card"><small>ADDRESS</small><strong>Someshwar, Maharashtra</strong><span>Sample location — replace with verified address</span></div></div></section>
}

export default function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || 'home')
  useEffect(() => { const onHash = () => setPage(pages.includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'home'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash) }, [])
  useEffect(() => { document.title = `${page === 'home' ? 'Chandanshiv Cement Products' : `${page[0].toUpperCase()}${page.slice(1)} — Chandanshiv Cement Products`}` }, [page])
  const content = page === 'about' ? <About /> : page === 'products' ? <Products setPage={setPage} /> : page === 'services' ? <Services /> : page === 'inquiry' ? <Inquiry /> : page === 'contact' ? <Contact /> : <Home setPage={setPage} />
  return <Layout page={page} setPage={setPage}>{content}</Layout>
}
