export type LinkColumnProps = {
  links: Array<{
    href: string;
    text: string;
  }>;
  variant?: string;
};

export const LinkColumn = (props: LinkColumnProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5${props.variant ? ` ${props.variant}` : ""}`}
    >
      {props.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};
