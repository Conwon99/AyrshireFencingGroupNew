export type FooterColumnProps = {
  variant?: string;
  links: Array<{
    href: string;
    text: string;
    isActive?: boolean;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={
        props.variant === "variant2"
          ? "items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5 col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto"
          : "items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5"
      }
    >
      {props.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={
            link.isActive
              ? "box-border caret-transparent block text-yellow-500"
              : "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
          }
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};
