export type TeamMemberProps = {
  name: string;
  role: string;
  imageUrl: string;
  profileUrl: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
};

export const TeamMember = (props: TeamMemberProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent">
      <div className="box-border caret-transparent overflow-hidden rounded-[20px]">
        <div className="relative box-border caret-transparent h-auto overflow-hidden rounded-[20px] md:h-[330px]">
          <a
            aria-label="Link"
            href={props.profileUrl}
            className="box-border caret-transparent inline-block h-full max-w-full underline w-full hover:decoration-transparent"
          >
            <img
              src={props.imageUrl}
              alt=""
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </a>
          <div className="absolute items-start box-border caret-transparent gap-x-[15px] flex justify-center gap-y-[15px] transform-none mx-auto bottom-5 inset-x-5 md:gap-x-5 md:gap-y-5 md:translate-y-[200.0%]">
            {props.facebookUrl && (
              <a
                href={props.facebookUrl}
                className={`items-center bg-white box-border caret-transparent ${props.facebookUrl === "#" ? "hidden" : "flex"} shrink-0 h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:decoration-transparent`}
              >
                <img
                  src="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/670f58e375e253beb4db0e54_facebook.svg"
                  alt="Social Icon"
                  className={`box-border caret-transparent ${props.facebookUrl === "#" ? "inline-block" : ""} h-5 max-w-full w-5`}
                />
              </a>
            )}
            {props.twitterUrl && (
              <a
                href={props.twitterUrl}
                className="items-center bg-white box-border caret-transparent flex shrink-0 h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:decoration-transparent"
              >
                <img
                  src="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/670f58e3c0bab665af9c269a_twitter-x.svg"
                  alt="Social Icon"
                  className="box-border caret-transparent h-5 max-w-full w-5"
                />
              </a>
            )}
            {props.linkedinUrl && (
              <a
                href={props.linkedinUrl}
                className={`items-center bg-white box-border caret-transparent ${props.linkedinUrl === "#" ? "hidden" : "flex"} shrink-0 h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:decoration-transparent`}
              >
                <img
                  src="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/670f58e35ca0dd1a3d5a6b3d_linkedin.svg"
                  alt="Social Icon"
                  className={`box-border caret-transparent ${props.linkedinUrl === "#" ? "inline-block" : ""} h-5 max-w-full w-5`}
                />
              </a>
            )}
          </div>
        </div>
        <a
          aria-label="Link"
          href={props.profileUrl}
          className="items-center box-border caret-transparent flex flex-col justify-start max-w-full text-center pt-2.5 hover:decoration-transparent"
        >
          <h3 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[28.6px] mb-1.5 md:text-2xl md:leading-[31.2px]">
            {props.name}
          </h3>
          <div className="box-border caret-transparent">{props.role}</div>
        </a>
      </div>
    </div>
  );
};
