export const RatingDisplay = () => {
  return (
    <div className="text-gray-900 items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start gap-y-2.5 mb-5 md:items-center md:gap-x-[30px] md:flex-row md:gap-y-[30px] md:mb-[50px]">
      <div className="box-border caret-transparent flex items-center gap-x-3 md:gap-x-4">
        <a
          href="https://www.trustatrader.com/traders/ayrshire-fencing-group-saltcoats-irvine-troon-and-prewick"
          target="_blank"
          rel="noopener noreferrer"
          className="box-border caret-transparent hover:opacity-80"
          aria-label="Trust a Trader"
        >
          <img
            src="/trust.webp"
            alt="Trust a Trader"
            className="box-border caret-transparent h-10 w-auto md:h-12"
          />
        </a>
        <a
          href="https://www.facebook.com/100089970103885/"
          target="_blank"
          rel="noopener noreferrer"
          className="box-border caret-transparent hover:opacity-80"
          aria-label="Facebook Reviews"
        >
          <svg
            className="box-border caret-transparent h-10 w-10 md:h-12 md:w-12 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://www.google.com/maps/place/Ayrshire+Fencing+Group/@55.619,-4.655,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d55.619!4d-4.655!16s%2Fg%2F11c0x0x0"
          target="_blank"
          rel="noopener noreferrer"
          className="box-border caret-transparent hover:opacity-80"
          aria-label="Google Business Profile"
        >
          <svg
            className="box-border caret-transparent h-10 w-10 md:h-12 md:w-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </a>
      </div>
      <div className="box-border caret-transparent">
        <div className="text-white box-border caret-transparent">5/5 ratings (24+)</div>
        <div className="box-border caret-transparent flex items-center gap-x-1 mt-2.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="box-border caret-transparent h-5 w-5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
