import workshopImage1 from "../../imports/6yzqfy6yzqfy6yzq.png";
import workshopImage2 from "../../imports/qdus2eqdus2eqdu.png";

const workshops = [
  {
    id: 1,
    title: "Electronic Music Production",
    category: "Music",
    description: "Beat-making, synthesis, and sound design fundamentals.",
  },
  {
    id: 2,
    title: "Vocal Expression Workshop",
    category: "Vocals",
    description: "Voice techniques and authentic performance practice.",
  },
  {
    id: 3,
    title: "Stage Lighting Design",
    category: "Light",
    description: "Lighting systems and atmospheric visual creation.",
  },
  {
    id: 4,
    title: "Sound Experimentation",
    category: "Music",
    description: "Monthly collaborative sessions for sonic exploration.",
  },
  {
    id: 5,
    title: "DJ Fundamentals",
    category: "Music",
    description: "Mixing, beatmatching, and set construction.",
  },
  {
    id: 6,
    title: "Live Visual Performance",
    category: "Visual",
    description: "Real-time visual content creation for live events.",
  },
  {
    id: 7,
    title: "Vestimental Activism — Craftivism",
    category: "Craftivism",
    description: "Textile processing of second-hand fabrics into vivid patchworks and subversive, contemporary coats of arms. A hands-on practice at the intersection of material culture, club aesthetics, and collective making — led by Diane Esnault.",
  },
];

export function Workshops() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
              Education Programs
            </div>
            <h1 className="text-[100px] leading-[0.9] font-light tracking-tight mb-12">
              Workshops
            </h1>
            <p className="text-xl font-light text-black/60 max-w-2xl leading-relaxed">
              Structured learning in sound, voice, light, and Vestimental Activism — Craftivism. All programs include equipment, materials, and expert instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop List */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="space-y-px max-w-5xl mx-auto border border-black/5">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className="bg-white hover:bg-black/[0.02] transition-colors"
              >
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-black/20">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="md:col-span-11">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-3">
                        {workshop.category}
                      </div>
                      <h3 className="text-3xl font-light mb-4">{workshop.title}</h3>
                      <p className="text-sm font-light text-black/50 leading-relaxed max-w-2xl">
                        {workshop.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < workshops.length - 1 && (
                  <div className="h-px bg-black/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Images */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <img
              src={workshopImage1}
              alt="Creative collaboration"
              className="w-full aspect-video object-cover"
            />
            <img
              src={workshopImage2}
              alt="Workshop experience"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">
              Get Involved
            </div>
            <h2 className="text-5xl font-light mb-8 leading-tight">
              Join Our Community
            </h2>
            <p className="text-sm font-light text-black/60 leading-relaxed max-w-2xl mx-auto mb-16">
              Email or WhatsApp or DM us on Instagram to get the current workshop schedule, ask questions, and become part of the QSONIC community.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a
                href="mailto:helloqsonic@gmail.com"
                className="group p-12 bg-white border border-black/5 hover:border-black/20 hover:bg-white transition-all"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Email Us
                </div>
                <h3 className="text-2xl font-light mb-2 group-hover:text-black/80 transition-colors">Email</h3>
                <div className="text-sm font-light text-black/40">Get in touch</div>
              </a>

              <a
                href="https://wa.me/491638462659"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-12 bg-white border border-black/5 hover:border-black/20 hover:bg-white transition-all"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Message Us
                </div>
                <h3 className="text-2xl font-light mb-2 group-hover:text-black/80 transition-colors">WhatsApp</h3>
                <div className="text-sm font-light text-black/40">Get instant updates</div>
              </a>

              <a
                href="https://www.instagram.com/helloqsonic/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-12 bg-white border border-black/5 hover:border-black/20 hover:bg-white transition-all"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">
                  Follow Us
                </div>
                <h3 className="text-2xl font-light mb-2 group-hover:text-black/80 transition-colors">Instagram</h3>
                <div className="text-sm font-light text-black/40">Join the community</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12 text-center">
              Common Questions
            </div>

            <div className="space-y-px border border-black/5">
              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Prior experience required?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Most programs welcome beginners.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  What to bring?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Nothing. All equipment and materials provided.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Pricing?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Currently free. All workshops are funded and open to the community.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Safe space policy?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  QSONIC is an inclusive space for LGBTQ+ artists. All pronouns respected. Zero tolerance for discrimination.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
