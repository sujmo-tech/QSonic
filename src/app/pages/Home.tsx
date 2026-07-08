import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import tulipImage from "figma:asset/7bdef920a9dcbefc9a215f2ccd82117b0ef4bc42.png";
import labImage from "../../imports/Labratory_Qsonic_98nvkf98nvkf98nv-1.png";
import vocalDJImage from "figma:asset/bd7c83986e089aa71812e6e1fb693f43507ca8fc.png";
import djPurpleImage from "figma:asset/33209d077508a0692d36dc7752c48db95deb83d0.png";
import vocalHologramImage from "figma:asset/2a3bdc4357a2413546b349200d4be32cbdd74981.png";
import glassSculptureImage from "figma:asset/83d8055a1de0f715d4273f1780813edcf8676533.png";

export function Home() {
  return (
    <div>
      {/* Hero Section - Clean and Spacious */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-6xl">
            <div className="mb-12">
              <div className="inline-block text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
                Sonic Laboratory
              </div>
            </div>
            <h1 className="text-[120px] leading-[0.9] font-light tracking-tight mb-12">
              QSONIC
            </h1>
            <p className="text-2xl font-light text-black/60 mb-16 max-w-2xl leading-relaxed">
              A creative space for music production, vocal exploration, light design, and the practice of "Vestimental Activism" — craftivism as material culture and collective crafting.
            </p>
            <div className="flex gap-4">
              <Link
                to="/workshops"
                className="px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors text-sm uppercase tracking-[0.15em] font-light inline-flex items-center gap-3"
              >
                View Programs <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-black/10 hover:border-black/30 transition-colors text-sm uppercase tracking-[0.15em] font-light"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tulip Image - Full Width */}
      <section className="mb-32">
        <div className="container mx-auto px-8">
          <img
            src={tulipImage}
            alt="Iridescent tulip"
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-32 max-w-7xl mx-auto">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">
                Our Approach
              </div>
              <h2 className="text-5xl font-light mb-8 leading-tight">
                Where precision meets experimentation
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-light text-black/60 leading-relaxed mb-6">
                QSONIC combines laboratory-level precision with creative freedom. A space designed for queer artists, allies, and new talents to explore sound, voice, light, and the practice of "Vestimental Activism" — craftivism as material culture and collective crafting.
              </p>
              <p className="text-lg font-light text-black/60 leading-relaxed">
                Safe environments. Professional tools. Zero judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Image */}
      <section className="bg-black/[0.02]">
        <div className="relative">
          <img
            src={labImage}
            alt="Laboratory workspace"
            className="w-full h-screen object-cover"
          />
          <div className="absolute bottom-8 left-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">
              Music Laboratory
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Minimal */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">
                Four Disciplines
              </div>
              <h2 className="text-5xl font-light">
                What We Do
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-1 border border-black/5">
              <div className="p-12 border-r border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  01
                </div>
                <h3 className="text-2xl font-light mb-6">Music Production</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Electronic music creation, synthesis, and sound design in a professional studio environment.
                </p>
              </div>

              <div className="p-12 border-r border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  02
                </div>
                <h3 className="text-2xl font-light mb-6">Vocal Performance</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Voice work, performance techniques, and authentic expression in a safe, inclusive space.
                </p>
              </div>

              <div className="p-12 border-r border-black/5 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  03
                </div>
                <h3 className="text-2xl font-light mb-6">Light Design</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Lighting systems, color theory, and atmospheric design for live performance.
                </p>
              </div>

              <div className="p-12 hover:bg-black/[0.02] transition-colors">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  04
                </div>
                <h3 className="text-2xl font-light mb-6">Vestimental Activism</h3>
                <p className="text-sm font-light text-black/50 leading-relaxed">
                  Textile processing of second-hand fabrics into vivid patchworks and subversive, contemporary coats of arms — craftivism as material culture and club aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-1 max-w-7xl mx-auto mb-1">
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src={djPurpleImage}
                alt="Studio space"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/80">
                  Studio Space
                </div>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src={vocalDJImage}
                alt="Creative Process"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/80">
                  Creative Process
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-1 max-w-7xl mx-auto">
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src={vocalHologramImage}
                alt="Artistic Vision"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/80 drop-shadow-lg">
                  Artistic Vision
                </div>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src={glassSculptureImage}
                alt="Iridescent Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/80 drop-shadow-lg">
                  Environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-px h-20 bg-black/10 mx-auto mb-12" />
            <h2 className="text-5xl font-light mb-12 leading-tight">
              Safe space for queer artists, allies and new talents.<br />
              Environment of curiosity and ease.<br />
              We create with love and respect.
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-light text-black/60 hover:text-black transition-colors"
            >
              Learn More <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 border-t border-black/5">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-light mb-4">500+</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-light mb-4">3</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Studios</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-light mb-4">24/7</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Access</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-light mb-4">100%</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">Inclusive</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-8">
              Ready to Start?
            </div>
            <h2 className="text-6xl font-light mb-12 leading-tight">
              Visit the lab
            </h2>
            <div className="flex gap-4 justify-center">
              <Link
                to="/workshops"
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors text-sm uppercase tracking-[0.15em] font-light"
              >
                View Workshops
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 transition-colors text-sm uppercase tracking-[0.15em] font-light"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}