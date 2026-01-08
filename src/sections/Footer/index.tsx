import { PhoneLink } from "@/components/PhoneLink";
import { HomepageContentSection } from "@/sections/HomepageContentSection";
import { ServiceAreasSection } from "@/sections/ServiceAreasSection";

export const Footer = () => {
  return (
    <section className="text-white bg-[#323232] box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-8 md:gap-y-8">
          <div className="box-border caret-transparent flex flex-col gap-y-4">
            <div className="text-white text-lg font-semibold box-border caret-transparent mb-2">
              Ayrshire Fencing Group
            </div>
            <p className="text-white/80 text-sm box-border caret-transparent max-w-xs leading-relaxed">
              Fully qualified and insured fencing contractors. Bespoke fencing, sheds & gates, trellis, decking, palisade fencing, and fencing repairs across Ayrshire.
            </p>
            <div className="box-border caret-transparent flex flex-col gap-3 mt-2">
              <div className="text-white text-sm font-semibold box-border caret-transparent">
                Follow Us
              </div>
              <div className="box-border caret-transparent flex gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/profile.php?id=100089970103885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#787e59] hover:decoration-transparent transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <img
                    src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f58e375e253beb4db0e54_facebook.svg"
                    alt="Facebook"
                    className="box-border caret-transparent h-5 max-w-full w-5"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ayrshirefencinggroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#787e59] hover:decoration-transparent transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <img
                    src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/670f58e333797fd0eb9fa085_instagram.svg"
                    alt="Instagram"
                    className="box-border caret-transparent h-5 max-w-full w-5"
                  />
                </a>
                <a
                  href="https://www.trustatrader.com/traders/ayrshire-fencing-group-saltcoats-irvine-troon-and-prewick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent flex items-center gap-2 transition-colors duration-300"
                  aria-label="TrustATrader"
                >
                  TrustATrader
                </a>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Quick Links
            </div>
            <a href="/" className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300">
              Home
            </a>
            <a href="/about" className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300">
              About
            </a>
            <a href="/services" className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300">
              Services
            </a>
            <a href="/projects" className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300">
              Projects
            </a>
            <a href="/contact" className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300">
              Contact
            </a>
          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Contact Us
            </div>
            <PhoneLink
              variant="footer"
              showIcon={false}
              className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300"
            />
            <a href="mailto:ayrshirefencinggroup@gmail.com" className="text-white/80 text-sm box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent transition-colors duration-300">
              ayrshirefencinggroup@gmail.com
            </a>

          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2 flex items-center gap-2">
              <svg
                className="box-border caret-transparent h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google Business Profile
            </div>
            <div className="box-border caret-transparent w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.1234567890123!2d-4.655!3d55.619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM3JzA4LjQiTiA0wrAzOScxOC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ayrshire Fencing Group - Google Business Profile"
                className="box-border caret-transparent w-full h-full"
              ></iframe>
            </div>
            <div className="box-border caret-transparent flex flex-col gap-2 mt-2">
              <a
                href="https://www.google.com/maps/place/Ayrshire+Fencing+Group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-xs box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent underline transition-colors duration-300"
              >
                View on Google Maps
              </a>
              <a
                href="https://www.google.com/maps/place/Ayrshire+Fencing+Group/@55.619,-4.655,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d55.619!4d-4.655!16s%2Fg%2F11c0x0x0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-xs box-border caret-transparent hover:text-[#8a9168] hover:decoration-transparent underline transition-colors duration-300"
              >
                Leave a Review
              </a>
            </div>
            <p className="text-white/80 text-sm box-border caret-transparent mt-1">
              Serving Irvine & Ayrshire, Scotland
            </p>
          </div>
        </div>
        
        {/* Dropdown Sections */}
        <div className="box-border caret-transparent mt-10 pt-10 border-t border-white/20">
          <HomepageContentSection />
          <ServiceAreasSection />
        </div>
        
        <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm box-border caret-transparent">
            © {new Date().getFullYear()} Ayrshire Fencing Group. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
