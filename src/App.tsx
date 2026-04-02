/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tighter text-xl">OBSIDIAN LABZ</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-white/50">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#archive" className="hover:text-white transition-colors">Archive</a>
            <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          </div>

          <a 
            href="https://wa.me/918798572994" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all rounded-full inline-block"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase mb-8"
            >
              Architecture for the void
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
            >
              DIGITAL<br />
              <span className="text-accent">MONOLITHS</span><br />
              BUILT TO LAST.
            </motion.h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-md text-white/50 text-sm leading-relaxed"
              >
                We don't just build websites. We architect high-performance digital environments 
                for world-class brands that demand absolute precision and structural integrity.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-white/40"
              >
                Scroll to explore
                <div className="w-12 h-[1px] bg-white/20" />
              </motion.div>
            </div>
          </div>
          
          {/* Background Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full -z-10" />
        </section>

        {/* Stats Section */}
        <section className="px-6 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { label: "Uptime Reliability", value: "99.9%", icon: "⚡" },
                { label: "Avg. Page Response", value: "45ms", icon: "🔥" },
                { label: "Custom Deployments", value: "120+", icon: "📦" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="glass-card p-10 group hover:border-white/20 transition-colors"
                >
                  <div className="text-4xl font-black mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Expertise</h2>
              <div className="w-16 h-1 bg-accent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Systems */}
              <motion.div 
                {...fadeIn}
                className="group relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden glass-card flex flex-col"
              >
                <div className="p-12 flex-grow flex flex-col justify-end z-10">
                  <h3 className="text-2xl font-bold mb-4">Core Systems</h3>
                  <p className="text-white/50 text-sm max-w-xs mb-8 leading-relaxed">
                    Architectural foundations built for hyper-scale. We handle the complexity 
                    so you can focus on the vision.
                  </p>
                  <a href="#" className="flex items-center gap-2 text-accent text-[10px] font-bold tracking-widest uppercase group-hover:gap-3 transition-all">
                    View Case Study <ArrowUpRight size={14} />
                  </a>
                </div>
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
                    alt="Core Systems" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <div className="flex flex-col gap-8">
                {/* Interface Forge */}
                <motion.div 
                  {...fadeIn}
                  className="glass-card flex-grow overflow-hidden group"
                >
                  <div className="p-10">
                    <h3 className="text-xl font-bold mb-4">Interface Forge</h3>
                  </div>
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                      alt="Interface Forge" 
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Data Visuals */}
                  <motion.div 
                    {...fadeIn}
                    className="glass-card aspect-square flex flex-col justify-between p-8 group overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" 
                        alt="Data Visuals" 
                        className="w-full h-full object-cover grayscale"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-auto z-10">
                      <h3 className="text-lg font-bold">Data Visuals</h3>
                    </div>
                  </motion.div>

                  {/* Secure Flow */}
                  <motion.div 
                    {...fadeIn}
                    className="glass-card aspect-square p-8 flex flex-col justify-end group"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-2">Secure Flow</h3>
                      <p className="text-white/40 text-[10px] leading-relaxed">
                        Hardened digital perimeters and end-to-end encryption protocols.
                      </p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-accent text-[10px] font-bold tracking-widest uppercase">
                      Protocol Specs <ArrowUpRight size={12} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works */}
        <section id="work" className="px-6 py-32 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase opacity-10 leading-none mb-4">Selected Works</h2>
                <div className="w-24 h-1 bg-accent/20" />
              </div>
              <p className="max-w-xs text-white/40 text-xs leading-relaxed">
                A portfolio of high-fidelity digital platforms executed with surgical precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { title: "Global Nexus", sub: "Fintech Platform / 2024", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
                { title: "Enterprise Cloud", sub: "E-commerce Engine / 2023", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" }
              ].map((work, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden bg-card mb-6 border border-white/5">
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight">{work.title}</h4>
                      <p className="text-white/40 text-[10px] font-medium tracking-widest uppercase mt-1">{work.sub}</p>
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-accent transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Obsidian */}
        <section className="px-6 py-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Why Obsidian<br />
                <span className="opacity-20">Remains Singular.</span>
              </h2>
            </div>

            <div className="space-y-16">
              {[
                { id: "01", title: "Absolute Control", desc: "Every line of code is handwritten. No bloated frameworks, no visual builders—only pure, high-performance architecture tailored to your specific infrastructure requirements." },
                { id: "02", title: "Aesthetic Gravity", desc: "We believe in digital weight. Our designs command attention through scale, hierarchy, and a refusal to follow fleeting trends of softness and airiness." },
                { id: "03", title: "Permanent Scale", desc: "Your platform shouldn't just work today. It should be the foundation for the next decade. We build with modular permanence in mind." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  className="flex gap-8"
                >
                  <div className="text-accent font-mono text-xs pt-1">{item.id}.</div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white/60">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Velourea (Testimonials) */}
        <section className="px-6 py-32 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Velourea</h2>
              <div className="w-16 h-1 bg-accent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                {...fadeIn}
                className="glass-card p-12 relative"
              >
                <div className="text-accent mb-8">“</div>
                <p className="text-lg md:text-xl font-medium italic leading-relaxed mb-12 text-white/80">
                  Obsidian Labz delivered a platform that didn't just meet our specs—it redefined 
                  our entire digital identity. Their attention to structural detail is unparalleled.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-sm" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest">Marcus Thorne</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">CTO, Vertex Dynamics</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                className="glass-card p-12 relative md:mt-12"
              >
                <div className="text-accent mb-8">“</div>
                <p className="text-lg md:text-xl font-medium italic leading-relaxed mb-12 text-white/80">
                  A monolithic achievement. The speed and stability of the system they built for 
                  our global distribution network is frankly staggering.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-sm" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest">Elena Vance</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Director of Ops, Neoflow</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-48 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 
              {...fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12"
            >
              Initialize Your Project.
            </motion.h2>
            <motion.a 
              href="https://wa.me/918798572994" 
              target="_blank" 
              rel="noopener noreferrer"
              {...fadeIn}
              className="bg-accent hover:bg-accent/90 text-white px-10 py-5 text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-4 mx-auto group rounded-full w-fit"
            >
              Get in Touch <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg opacity-50" />
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <div className="font-black text-2xl tracking-tighter mb-8">OBSIDIAN LABZ</div>
              <p className="text-white/30 text-xs leading-relaxed max-w-[200px]">
                Architecting Digital Monoliths for those who demand the absolute peak of performance and aesthetic gravity.
              </p>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 mb-8">Navigation</h5>
              <ul className="space-y-4 text-xs font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expertise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Archive</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Studio</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 mb-8">Contact</h5>
              <ul className="space-y-4 text-xs font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 mb-8">Legal</h5>
              <ul className="space-y-4 text-xs font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
              <div className="mt-12 text-[10px] text-white/20 uppercase tracking-widest">
                © 2024 Obsidian Labz. Architecting Digital Monoliths.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
