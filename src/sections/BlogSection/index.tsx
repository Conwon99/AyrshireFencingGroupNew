import { BlogCard } from "@/sections/BlogSection/components/BlogCard";

export const BlogSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] mb-2.5 md:text-[56px] md:leading-[67.2px]">
            Our blog
          </h2>
        </div>
        <div className="box-border caret-transparent">
          <div
            role="list"
            className="box-border caret-transparent gap-x-10 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-[50px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[50px]"
          >
            <div role="listitem" className="box-border caret-transparent">
              <BlogCard
                href="/blog/choosing-the-right-roofing-material-for-your-home"
                imageUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67172ac0f8ca9fd5698d89b0_blog-01.avif"
                imageAlt=""
                category="Cost-Saving Tips"
                title="Choosing the right roofing material for your home"
                date="October 22, 2024"
              />
            </div>
            <div role="listitem" className="box-border caret-transparent">
              <BlogCard
                href="/blog/how-to-extend-the-life-of-your-roof"
                imageUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a81bcc766453464d8b98a_blog-02.avif"
                imageAlt=""
                category="Seasonal Tips"
                title="How to extend the life of your roof"
                date="December 24, 2024"
              />
            </div>
            <div role="listitem" className="box-border caret-transparent">
              <BlogCard
                href="/blog/5-warning-signs-your-roof-needs-repair"
                imageUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67172b0ea2d1e7ef5fb7b678_blog-03.avif"
                imageAlt=""
                category="Roof Repairs"
                title="5 Warning signs your roof needs repair"
                date="October 22, 2024"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
