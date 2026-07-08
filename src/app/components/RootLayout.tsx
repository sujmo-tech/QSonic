import { Outlet, Link, useLocation } from "react-router";

export function RootLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <span className="text-2xl font-light tracking-tight text-black">
                QSONIC
              </span>
            </Link>

            <div className="flex gap-10">
              <Link
                to="/"
                className={`text-[13px] uppercase tracking-[0.15em] transition-colors font-light ${
                  isActive("/")
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                Home
              </Link>
              <Link
                to="/workshops"
                className={`text-[13px] uppercase tracking-[0.15em] transition-colors font-light ${
                  isActive("/workshops")
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                Workshops
              </Link>
              <Link
                to="/mentors"
                className={`text-[13px] uppercase tracking-[0.15em] transition-colors font-light ${
                  isActive("/mentors")
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                Mentors
              </Link>
              <Link
                to="/about"
                className={`text-[13px] uppercase tracking-[0.15em] transition-colors font-light ${
                  isActive("/about")
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-[13px] uppercase tracking-[0.15em] transition-colors font-light ${
                  isActive("/contact")
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-[73px]">
        <Outlet />
      </main>

      <footer className="border-t border-black/5 py-16 mt-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-xl font-light mb-3">QSONIC</div>
              <p className="text-sm text-black/50 leading-relaxed">
                Sonic laboratory for creative expression
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-black/40 mb-4">Navigate</div>
              <div className="space-y-2 text-sm text-black/60">
                <div><Link to="/" className="hover:text-black transition-colors">Home</Link></div>
                <div><Link to="/workshops" className="hover:text-black transition-colors">Workshops</Link></div>
                <div><Link to="/mentors" className="hover:text-black transition-colors">Mentors</Link></div>
                <div><Link to="/about" className="hover:text-black transition-colors">About</Link></div>
                <div><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></div>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-black/40 mb-4">Connect</div>
              <div className="space-y-2 text-sm text-black/60">
                <div><a href="https://www.instagram.com/helloqsonic/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></div>
                <div>SoundCloud</div>
                <div><a href="https://www.youtube.com/@theblissthebliss" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">YouTube</a></div>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-black/40 mb-4">Location</div>
              <div className="text-sm text-black/60">
                Mitte
              </div>
            </div>
          </div>
          <div className="text-xs text-black/30 text-center pt-12 mt-12 border-t border-black/5">
            © 2026 QSONIC
          </div>
        </div>
      </footer>
    </div>
  );
}