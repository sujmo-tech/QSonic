import dianeImage from "../../imports/diane_pic_qsonic_website_.png";
import giovanniImage from "../../imports/gio_pic_qsonic.jpg";
import adomasImage from "../../imports/adomas_pic_qsonic.jpeg";
import saskiaImage from "../../imports/saskia_qsonic_pic.jpg";
import sujmoImage from "../../imports/Pic_CVSujmo__1_.jpg";

export function Mentors() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
              Our Team
            </div>
            <h1 className="text-[100px] leading-[0.9] font-light tracking-tight mb-12">
              Mentors
            </h1>
            <p className="text-xl font-light text-black/60 max-w-2xl leading-relaxed">
              Working artists and technical professionals bringing real-world experience to every session.
            </p>
          </div>
        </div>
      </section>

      {/* Sujmo Ito */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div>
              <h3 className="text-5xl font-light mb-4 leading-tight">
                Sujmo Ito
              </h3>
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12">
                Curator & Creative Producer — Founder of QSONIC
              </div>
              <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed max-w-3xl">
                <p>
                  Berlin-based curator and creative producer — and the founder of QSONIC. She works with artists, collectives, and cultural organisations to help them build structures that hold: funding, budgeting, project accounting, strategy — and the kind of clarity that lets creative work actually breathe.
                </p>
                <p>
                  Her mentoring work centres on transformation — both personal and structural: supporting practitioners across disciplines in navigating institutions with confidence, owning their vision, and moving through the industry on their own terms.
                </p>
                <p>
                  Her curatorial and production work spans Project Amplify Berlin, the Residency Berlin at ACUD, Heroines of Sound, Tanz im August, and Female Gaze — alongside collaborations with choreographers Jérôme Bel, Meg Stuart, and Kat Valastur, and institutions including the Bode Museum.
                </p>
                <p>
                  With QSONIC, production and curation become a living weave of sound and space — composed atmosphere, fused frequencies, collective free spaces as immersive resonance fields. A network that shares knowledge, strengthens marginalised perspectives, and makes the Berlin scene more resilient from within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giovanni Allegro */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-start">
              <div>
                <h3 className="text-5xl font-light mb-4 leading-tight">
                  Giovanni Allegro
                </h3>
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12">
                  Music Production & Lighting Design
                </div>
                <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed">
                  <p>
                    I'm a music producer and lighting designer working at the intersection of sound, technology, and live performance. I work with both Ableton Live and grandMA (grandMA2/3), and I like helping students understand how these tools are used together in real-world live and studio environments.
                  </p>
                  <p>
                    I have a Bachelor's degree in Music Production, where I built a strong foundation in sound design, audio engineering, and live performance. In my teaching, I focus on a hands-on approach, guiding students through making music, building live sets, and exploring how lighting and visuals can enhance a performance.
                  </p>
                  <p>
                    Alongside teaching, I work professionally in the live music industry, both as a lighting designer/operator and in live show design. I've worked with artists like Hania Rani, Celeste, Marlon Hoffstadt, and Oklou, and I've designed Ableton-based live shows for Dubfire, Kevin Saunderson, MRAK, and Francesca Lombardo.
                  </p>
                  <p>
                    I'm interested in helping students develop their own creative voice while giving them practical skills they can use in real projects and live situations.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={giovanniImage}
                  alt="Giovanni Allegro"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saskia Gebert */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-start">
              <div>
                <h3 className="text-5xl font-light mb-4 leading-tight">
                  Saskia Gebert
                </h3>
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12">
                  Project Management & Curation
                </div>
                <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed">
                  <p>
                    Berlin-based project manager, curator, and music industry professional with a background in artist booking and management. She has worked with agencies such as Meanwhile, Live From Earth, and Mamalovesya, where she managed artist rosters, coordinated international showcases and tours, and worked closely across releases and project development.
                  </p>
                  <p>
                    Her practice is rooted in Berlin's club culture, where she founded and ran the queer party series WET from 2017 to 2024. Alongside her agency work, she develops and leads independent cultural projects, including The Bliss, a platform for DJ recordings, and Q Sonic at ACUD MACHT NEU.
                  </p>
                  <p>
                    Across all her work, she combines a strong organisational approach with a deep connection to contemporary music culture.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={saskiaImage}
                  alt="Saskia Gebert"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adomas Laurinaitis */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-start">
              <div>
                <img
                  src={adomasImage}
                  alt="Adomas Laurinaitis"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-5xl font-light mb-4 leading-tight">
                  Adomas Laurinaitis
                </h3>
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12">
                  Vocal
                </div>
                <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed">
                  <p>
                    Lithuanian born singer-songwriter, that gathered music approaches and education from classical, jazz and electronic music - while living and studying voice in Lithuania / Belgium / New York and finally Berlin - Germany.
                  </p>
                  <p>
                    He worked close and was teaching not only solo artists but also choirs - therefore his educational approach varies from breath work / timing / improvisation / overtones - to work flow and listening / harmonization and balance in the group singing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diane Esnault */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-start">
              <div>
                <h3 className="text-5xl font-light mb-4 leading-tight">
                  Diane Esnault
                </h3>
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12">
                  Craftivism & Visuals
                </div>
                <div className="space-y-6 text-sm font-light text-black/60 leading-relaxed">
                  <p>
                    Diane Esnault is an artist and textile designer whose practice of "Vestimental Activism" forms the material foundation of the collective: the textile processing of second-hand fabrics into vivid patchworks and subversive, contemporary coats of arms. She has realised works for institutions including the Volksbühne, Trauma Bar und Kino, and HAU Hebbel am Ufer, as well as banner scenographies for artists such as Aïsha Devi, Petra Hermanova, and Jungstötter.
                  </p>
                  <p>
                    Drawing on years of experience at the intersection of international avant-garde and music scenes, she continues this practice consistently in the club context. Her visual and material transformations create the skins that turn a club night into a genuine, intimate refuge — her knowledge feeding directly into Q-Sonic's intergenerational laboratory work, generating lasting, reusable textile modules for Berlin's club culture.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={dianeImage}
                  alt="Diane Esnault"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}