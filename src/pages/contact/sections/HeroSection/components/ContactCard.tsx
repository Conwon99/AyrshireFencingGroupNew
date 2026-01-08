import { PhoneLink } from "@/components/PhoneLink";

export type ContactCardProps = {
  variant: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  titleClassName?: string;
  content?: string;
  contentClassName?: string;
  isLink?: boolean;
  linkHref?: string;
  isPhone?: boolean;
};

export const ContactCard = (props: ContactCardProps) => {
  return (
    <div
      className={`relative text-gray-900 items-start box-border caret-transparent flex flex-col justify-start overflow-hidden p-5 rounded-r-[20px] rounded-b-[20px] ${props.variant}`}
    >
      <div className="relative box-border caret-transparent z-[2] mb-[30px]">
        <div
          className={`relative items-center box-border caret-transparent flex h-11 justify-center w-11 rounded-[50%] md:h-[54px] md:w-[54px] ${props.variant}`}
        >
          <img
            src={props.iconSrc}
            alt={props.iconAlt}
            className="box-border caret-transparent h-6 max-w-full w-6 md:h-[30px] md:w-[30px] brightness-0 invert"
          />
        </div>
      </div>
      <h2
        className={
          props.titleClassName ||
          "text-white text-xl font-bold box-border caret-transparent leading-6 mb-2.5 md:text-2xl md:leading-[28.8px]"
        }
      >
        {props.title}
      </h2>
      {props.isPhone ? (
        <PhoneLink
          variant="default"
          showIcon={false}
          className={props.contentClassName || "box-border caret-transparent block underline"}
        />
      ) : props.isLink ? (
        <a
          href={props.linkHref}
          className={
            props.contentClassName ||
            "box-border caret-transparent block underline"
          }
        >
          {props.content}
        </a>
      ) : (
        <div
          className={props.contentClassName || "text-white box-border caret-transparent"}
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

