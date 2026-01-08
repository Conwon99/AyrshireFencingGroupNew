import { FooterColumn } from "@/pages/projects/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-2 md:gap-x-[60px] md:grid-cols-[1fr_1fr_1.5fr] md:gap-y-[60px]">
      <FooterColumn
        links={[
          { href: "/", text: "Home 1" },
          { href: "/home-2", text: "Home 2" },
          { href: "/about", text: "About" },
          { href: "/services", text: "Services" },
          { href: "/service-static", text: "Service Static" },
          { href: "/projects", text: "Projects", isActive: true },
          { href: "/pricing", text: "Pricing" },
        ]}
      />
      <FooterColumn
        links={[
          { href: "/blog", text: "Blog" },
          { href: "/contact", text: "Contact" },
          { href: "/privacy-policy", text: "Privacy Policy" },
          { href: "/utility-pages/style-guide", text: "Style Guide" },
          { href: "/utility-pages/instructions", text: "Instructions" },
          { href: "/utility-pages/licenses", text: "Licenses" },
          { href: "/utility-pages/changelog", text: "Changelog" },
        ]}
      />
      <FooterColumn
        links={[
          { href: "/utility-pages/coming-soon", text: "Coming Soon" },
          { href: "/utility-pages/link-in-bio", text: "Link in Bio" },
          {
            href: "https://roofinger-wbs.webflow.io/401",
            text: "Password Protected",
          },
          { href: "https://roofinger-wbs.webflow.io/404", text: "Error 404" },
        ]}
      />
    </div>
  );
};

