import tulipImage from "figma:asset/fe2325de6c3a30a4ad53157911c85016dbaf6014.png";
import labImage from "figma:asset/1c02c3821ec52187a0ab8868fddee39ff7b2214c.png";
import dnaImage from "../../imports/dna_qsonic_glrtfnglrtfng.png";

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
              About QSONIC
            </div>
            <h1 className="text-[100px] leading-[0.9] font-light tracking-tight mb-12">
              Our Story
            </h1>
            <p className="text-xl font-light text-black/60 max-w-2xl leading-relaxed">
              A laboratory-style creative space where technical precision meets experimental freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 max-w-7xl mx-auto items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">
                Mission
              </div>
              <h2 className="text-4xl font-light mb-8 leading-tight">
                Safe space.<br />Creative freedom.
              </h2>
              <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed">
                <p>
                  QSONIC was created by LGBTQ+ artists who needed a professional creative environment without the traditional gatekeeping of music industry spaces.
                </p>
                <p>
                  We combine laboratory-level organization and professional equipment with complete creative freedom and inclusive values.
                </p>
                <p>
                  The result: a space where technical precision and experimental art coexist naturally.
                </p>
              </div>
            </div>
            <div>
              <img
                src={dnaImage}
                alt="QSONIC DNA"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">
                Core Values
              </div>
              <h2 className="text-4xl font-light">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-1 border border-black/5">
              <div className="bg-white p-12 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  01
                </div>
                <h3 className="text-xl font-light mb-4">Inclusive</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Safe space for LGBTQ+ artists. All humans welcomed and respected.
                </p>
              </div>

              <div className="bg-white p-12 border-l border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  02
                </div>
                <h3 className="text-xl font-light mb-4">Experimental</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Encourage risk-taking and boundary-pushing in all creative work.
                </p>
              </div>

              <div className="bg-white p-12 border-l border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  03
                </div>
                <h3 className="text-xl font-light mb-4">Professional</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  High-quality equipment and organized workflow systems.
                </p>
              </div>

              <div className="bg-white p-12 border-l border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  04
                </div>
                <h3 className="text-xl font-light mb-4">Community</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Building connections between artists across disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12">
              Services
            </div>
            
            <div className="grid md:grid-cols-2 gap-1 border border-black/5">
              <div className="p-12 bg-white hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Workshops
                </div>
                <h3 className="text-2xl font-light mb-4">Education Programs</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Structured classes in music production, vocal performance, and lighting design.
                </p>
              </div>

              <div className="p-12 bg-white border-l border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Studio Access
                </div>
                <h3 className="text-2xl font-light mb-4">Space Rental</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Book production studios by the hour. Professional equipment included.
                </p>
              </div>

              <div className="p-12 bg-white border-t border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Events
                </div>
                <h3 className="text-2xl font-light mb-4">Showcases</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Regular performance opportunities and listening sessions.
                </p>
              </div>

              <div className="p-12 bg-white border-t border-l border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Community
                </div>
                <h3 className="text-2xl font-light mb-4">Social Gatherings</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Networking events, collaborative sessions, and informal meetups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">
                Facility
              </div>
              <h2 className="text-4xl font-light mb-8 leading-tight">
                The Laboratory
              </h2>
              <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed mb-12 max-w-2xl">
                <p>
                  Dedicated space for music production, vocal recording, lighting lab, plus common areas for collaboration.
                </p>
                <p>
                  Organized spaces with professional-grade equipment. Everything labeled, accessible, and maintained with care.
                </p>
                <p>
                  A community space open to all artists. Join our collaborative sessions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 max-w-md">
                <div>
                  <div className="text-5xl font-light mb-2">Open</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Access</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">200+</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Tools</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">100%</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Inclusive</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">Love</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">& Respect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Statement */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-px h-20 bg-black/10 mx-auto mb-12" />
            <h2 className="text-4xl font-light mb-8 leading-tight">
              Created by LGBTQ+ artists<br />and Sujmo Ito.
            </h2>
            <p className="text-sm font-light text-black/60 leading-relaxed max-w-2xl mx-auto">
              Our team includes working DJs, producers, vocalists, lighting designers, sound engineers, and craftivists from across the LGBTQ+ spectrum & allies. We built the space we wish existed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-8">
              Join Us
            </div>
            <h2 className="text-5xl font-light mb-12 leading-tight">
              Visit the space
            </h2>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors text-sm uppercase tracking-[0.15em] font-light">
                View Workshops
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 transition-colors text-sm uppercase tracking-[0.15em] font-light">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}