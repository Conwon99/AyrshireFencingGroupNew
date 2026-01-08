export const GoogleBusinessProfileSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px] bg-[#323232]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Find Us on Google
          </h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent mt-4 max-w-2xl mx-auto">
            View our Google Business Profile to see reviews, photos, and get directions to our location.
          </p>
        </div>

        <div className="box-border caret-transparent grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Google Business Profile Embed/Widget */}
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent bg-gray-800 rounded-lg p-6 md:p-8 h-full">
              <div className="box-border caret-transparent flex items-center gap-3 mb-4">
                <svg
                  className="box-border caret-transparent h-8 w-8 md:h-10 md:w-10"
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
                <h3 className="text-white text-xl font-bold box-border caret-transparent md:text-2xl">
                  Google Business Profile
                </h3>
              </div>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg box-border caret-transparent mb-6">
                Ayrshire Fencing Group - Professional fencing and decking services in Ayrshire and Glasgow. View our location, read customer reviews, and see our work.
              </p>
              <div className="box-border caret-transparent flex flex-col gap-3">
                <a
                  href="https://share.google/I5rodIQo9AWkx7xTp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#4285F4] hover:bg-[#357ae8] box-border caret-transparent inline-flex items-center justify-center gap-2 text-center px-6 py-3 rounded-lg font-semibold transition-colors hover:decoration-transparent"
                >
                  <svg
                    className="box-border caret-transparent h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  View on Google Maps
                </a>
                <a
                  href="https://share.google/I5rodIQo9AWkx7xTp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-600 box-border caret-transparent inline-flex items-center justify-center gap-2 text-center px-6 py-3 rounded-lg font-semibold transition-colors hover:decoration-transparent"
                >
                  <svg
                    className="box-border caret-transparent h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Leave a Review
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent bg-gray-800 rounded-lg overflow-hidden h-full">
              <iframe
                width="100%"
                height="650px"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ayrshire%20Fencing%20Group%2C%20Bonnyton%20Place%2C%20Girdle%20Toll%2C%20Irvine%2C%20UK&maptype=roadmap"
                allowFullScreen
                title="Ayrshire Fencing Group Location - Irvine, Scotland"
                className="box-border caret-transparent w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="box-border caret-transparent text-center mt-8 md:mt-10">
          <p className="text-gray-200 text-sm sm:text-base md:text-lg box-border caret-transparent mb-4">
            Follow us on Google to stay updated with our latest projects and services
          </p>
          <a
            href="https://share.google/I5rodIQo9AWkx7xTp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#787e59] hover:bg-[#8a9168] box-border caret-transparent inline-flex items-center justify-center gap-2 text-center px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-colors hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)]"
          >
            Visit Our Google Business Profile
          </a>
        </div>
      </div>
    </section>
  );
};


