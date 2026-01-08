export type FooterColumnProps = {
  links: Array<{
    href: string;
    text: string;
    className: string;
  }>;
  columnVariant?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5 ${props.columnVariant || ""}`}
    >
      {props.links.map((link, index) => (
        <a key={index} href={link.href} className={link.className}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

