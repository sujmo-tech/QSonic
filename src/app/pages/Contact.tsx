import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
              Get in Touch
            </div>
            <h1 className="text-[100px] leading-[0.9] font-light tracking-tight mb-12">
              Contact
            </h1>
            <p className="text-xl font-light text-black/60 max-w-2xl leading-relaxed">
              Questions about programs, studio access, or visiting the space? We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-16 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
                Information
              </div>
              
              <div className="space-y-8">
                <div className="pb-8 border-b border-black/5">
                  <div className="flex items-start gap-4 mb-3">
                    <Mail className="size-5 text-black/30 mt-1" />
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-2">Email</div>
                      <p className="font-light">helloqsonic@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="pb-8 border-b border-black/5">
                  <div className="flex items-start gap-4 mb-3">
                    <Phone className="size-5 text-black/30 mt-1" />
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-2">Phone</div>
                      <p className="font-light">+49 163 8462659</p>
                    </div>
                  </div>
                </div>

                <div className="pb-8 border-b border-black/5">
                  <div className="flex items-start gap-4 mb-3">
                    <MapPin className="size-5 text-black/30 mt-1" />
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-2">Location</div>
                      <p className="font-light">
                        Veteranenstraße 21<br />
                        10119 Berlin-Mitte
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <Clock className="size-5 text-black/30 mt-1" />
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">Hours</div>
                      <div className="space-y-2 text-sm font-light">
                        <div className="flex justify-between gap-8">
                          <span className="text-black/40">Any day of the week</span>
                          <span>By appointment</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-black/40">Weekend</span>
                          <span>By appointment</span>
                        </div>
                      </div>
                      <p className="text-xs text-black/40 mt-4">Schedule via WhatsApp by workshop schedule</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-black/5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">Social</div>
                <div className="space-y-2 text-sm font-light text-black/60">
                  <div><a href="https://www.instagram.com/helloqsonic/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></div>
                  <div>SoundCloud</div>
                  <div><a href="https://www.youtube.com/@theblissthebliss" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">YouTube</a></div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="border border-black/5 p-12">
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-8">
                  Send Message
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-black/40 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-0 py-3 border-b border-black/10 focus:border-black/30 focus:outline-none transition-colors bg-transparent font-light"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-black/40 mb-3">
                        Pronouns
                      </label>
                      <input
                        type="text"
                        className="w-full px-0 py-3 border-b border-black/10 focus:border-black/30 focus:outline-none transition-colors bg-transparent font-light"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-black/40 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-0 py-3 border-b border-black/10 focus:border-black/30 focus:outline-none transition-colors bg-transparent font-light"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-black/40 mb-3">
                      Subject *
                    </label>
                    <select className="w-full px-0 py-3 border-b border-black/10 focus:border-black/30 focus:outline-none transition-colors bg-transparent font-light">
                      <option>Workshop Registration</option>
                      <option>Studio Booking</option>
                      <option>Membership</option>
                      <option>Partnership</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-black/40 mb-3">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-0 py-3 border-b border-black/10 focus:border-black/30 focus:outline-none transition-colors resize-none bg-transparent font-light"
                      placeholder="Your message..."
                    />
                  </div>

                  <div className="pt-6">
                    <label className="flex items-start gap-3 text-xs font-light text-black/50">
                      <input
                        type="checkbox"
                        className="mt-1"
                      />
                      <span>
                        I consent to data processing for response purposes only.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white hover:bg-black/80 transition-colors text-sm uppercase tracking-[0.15em] font-light flex items-center justify-center gap-3"
                  >
                    Send <Send className="size-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-black/[0.02]">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12 text-center">
              Frequently Asked
            </div>
            
            <div className="space-y-px border border-black/5">
              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  How can I get in touch?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Email, WhatsApp, or DM us on Instagram. We respond within 24 hours.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Can I visit before registering?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Yes. Drop by during open hours or email to schedule a tour.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Response time?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Within 24 hours. For urgent studio bookings, call directly.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  LGBTQ+ only?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Allies welcome. Space prioritizes LGBTQ+ safety and inclusion.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Exact location?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Veteranenstraße 21, 10119 Berlin-Mitte
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Accessibility?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Fully wheelchair accessible. Contact us for specific needs.
                </div>
              </details>

              <div className="h-px bg-black/5" />

              <details className="group bg-white">
                <summary className="px-8 py-6 cursor-pointer font-light text-lg flex items-center justify-between hover:bg-black/[0.02] transition-colors">
                  Can I rent the space?
                  <span className="text-black/20 text-xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-sm font-light text-black/50 leading-relaxed border-t border-black/5">
                  Yes. Club rental and Studio is available. Contact us via WhatsApp, Instagram, or email.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-px h-20 bg-black/10 mx-auto mb-12" />
            <h2 className="text-5xl font-light mb-8 leading-tight">
              Visit the lab
            </h2>
            <p className="text-sm font-light text-black/60 mb-12">
              Interested in seeing the space? Schedule a tour or drop by during open hours.
            </p>
            <button className="px-8 py-4 border border-black/10 hover:border-black/30 hover:bg-black hover:text-white transition-all text-sm uppercase tracking-[0.15em] font-light">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
