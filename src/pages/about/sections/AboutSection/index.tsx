import { PhoneLink } from "@/components/PhoneLink";

export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[980px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        {/* Our Story Section with Images */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 mb-[50px] md:mb-[80px]">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[36px] mb-6 md:text-4xl md:leading-[48px]">
              Our Story - Ayrshire Fencing Group
            </h2>
            <div className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 space-y-5">
              <p>
                At Ayrshire Fencing Group, we understand the needs of our customers and we know that commercial and domestic customers want great quality and value. We are one of the best respected local fencing companies in Ayrshire and pride ourselves on the skills and quality that we bring to every job.
              </p>
              <p>
                All of our customers are different; for some, fencing is a matter of security, while for others, aesthetics is the main priority. We take the time to understand each client's priorities and needs, including function, look and budget to help them get the best possible value for money.
              </p>
              <p>
                Our professional team of fencing contractors are fully qualified and insured. We are proud of our fence fitters and of the service that they provide to every customer. Ayrshire Fencing Group's fitters are happy to quote for any job, no matter how big or small.
              </p>
              <p>
                Fully qualified and insured with 13+ years experience, we provide professional fencing & decking services across Ayrshire and Glasgow. We specialize in providing bespoke fencing, sheds & gates, trellis, decking, palisade fencing, and fencing repairs tailored to meet your needs throughout Ayrshire.
              </p>
            </div>
          </div>

          {/* Right Column - Images Stacked Vertically */}
          <div className="space-y-5 md:space-y-6">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/projects/project-4.webp"
                alt="Ayrshire Fencing Group professional fencing installation"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center justify-center p-6 md:p-8">
              <img
                src="/logo.webp"
                alt="Ayrshire Fencing Group Logo"
                className="max-w-[360px] md:max-w-[400px] h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/projects/project-5.webp"
                alt="Ayrshire Fencing Group decking and fencing project"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mb-[50px] md:mb-[80px]">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[36px] mb-6 md:text-4xl md:leading-[48px]">
            Who We Are
          </h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7">
            Ayrshire Fencing Group is a fully qualified and insured fencing and decking specialist serving Ayrshire and Glasgow. With over 13 years of experience, we deliver quality workmanship and value to both residential and commercial customers. We specialize in bespoke fencing, sheds & gates, trellis, decking, palisade fencing, and fencing repairs, bringing expertise and professionalism to every project.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="bg-gray-800 rounded-[20px] p-6 md:p-8 lg:p-10">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[36px] mb-8 md:text-4xl md:leading-[48px]">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Email Us:</h3>
                <a
                  href="mailto:ayrshirefencinggroup@gmail.com"
                  className="text-[#787e59] hover:text-[#9ba870] hover:underline text-base md:text-lg"
                >
                  ayrshirefencinggroup@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Call Us:</h3>
                <PhoneLink
                  variant="default"
                  showIcon={false}
                  className="text-[#787e59] hover:text-[#9ba870] hover:underline text-base md:text-lg"
                  trackingLocation="about"
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Address:</h3>
                <p className="text-gray-200 text-base md:text-lg">
                  Serving Ayrshire & Glasgow, Scotland
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Hours Of Operation</h3>
              <div className="space-y-2 text-gray-200 text-base md:text-lg">
                <p>Monday 8:00AM – 5:00PM</p>
                <p>Tuesday 8:00AM – 5:00PM</p>
                <p>Wednesday 8:00AM – 5:00PM</p>
                <p>Thursday 8:00AM – 5:00PM</p>
                <p>Friday 8:00AM – 5:00PM</p>
                <p>Saturday 8:00AM – 2:00PM</p>
                <p>Sunday – Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://www.trustatrader.com/traders/ayrshire-fencing-group-saltcoats-irvine-troon-and-prewick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#787e59] hover:text-[#9ba870] hover:underline text-base md:text-lg flex items-center gap-2"
              >
                TrustATrader
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089970103885"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#787e59] hover:text-[#9ba870] hover:underline text-base md:text-lg flex items-center gap-2"
              >
                <img
                  src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f58e375e253beb4db0e54_facebook.svg"
                  alt="Facebook"
                  className="box-border caret-transparent h-5 w-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(20%) saturate(500%) hue-rotate(60deg)' }}
                />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/ayrshirefencinggroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#787e59] hover:text-[#9ba870] hover:underline text-base md:text-lg flex items-center gap-2"
              >
                <img
                  src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/670f58e333797fd0eb9fa085_instagram.svg"
                  alt="Instagram"
                  className="box-border caret-transparent h-5 w-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(20%) saturate(500%) hue-rotate(60deg)' }}
                />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

