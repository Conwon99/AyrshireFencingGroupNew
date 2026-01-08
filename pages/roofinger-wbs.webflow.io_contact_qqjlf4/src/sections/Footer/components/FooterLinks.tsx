import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-2 md:gap-x-[60px] md:grid-cols-[1fr_1fr_1.5fr] md:gap-y-[60px]">
      <FooterColumn
        links={[
          {
            href: "/",
            text: "Home 1",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/home-2",
            text: "Home 2",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/about",
            text: "About",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/services",
            text: "Services",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/service-static",
            text: "Service Static",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/projects",
            text: "Projects",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/pricing",
            text: "Pricing",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
        ]}
      />
      <FooterColumn
        links={[
          {
            href: "/blog",
            text: "Blog",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/contact",
            text: "Contact",
            className: "text-yellow-500 box-border caret-transparent block",
          },
          {
            href: "/privacy-policy",
            text: "Privacy Policy",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/utility-pages/style-guide",
            text: "Style Guide",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/utility-pages/instructions",
            text: "Instructions",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/utility-pages/licenses",
            text: "Licenses",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/utility-pages/changelog",
            text: "Changelog",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
        ]}
        columnVariant="col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto"
      />
      <FooterColumn
        links={[
          {
            href: "/utility-pages/coming-soon",
            text: "Coming Soon",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "/utility-pages/link-in-bio",
            text: "Link in Bio",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "https://roofinger-wbs.webflow.io/401",
            text: "Password Protected",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
          {
            href: "https://roofinger-wbs.webflow.io/404",
            text: "Error 404",
            className:
              "text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500",
          },
        ]}
      />
    </div>
  );
};
