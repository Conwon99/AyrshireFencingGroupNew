import { TeamMember } from "@/sections/TeamSection/components/TeamMember";

export const TeamSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Meet the experts
          </h2>
        </div>
        <div className="box-border caret-transparent">
          <div
            role="list"
            className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-10 md:grid-cols-[1fr_1fr_1fr_1fr]"
          >
            <TeamMember
              name="Judy Nguyen"
              role="Roofing Supervisor"
              imageUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/67172816819d1b9993c0a29c_team-01.avif"
              profileUrl="/team/judy-nguyen"
              facebookUrl="https://facebook.com/"
              twitterUrl="https://www.twitter.com/"
              linkedinUrl="https://www.linkedin.com/"
            />
            <TeamMember
              name="Billy Vasquez"
              role="Installation Specialist"
              imageUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/67a4462637d8e483e7dd9249_team-02.avif"
              profileUrl="/team/billy-vasquez"
              facebookUrl="https://facebook.com/"
              twitterUrl="https://www.twitter.com/"
              linkedinUrl="https://www.linkedin.com/"
            />
            <TeamMember
              name="Amanda Reed"
              role="Roofing Technician"
              imageUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/671729a2c6301611b58f211a_team-03.avif"
              profileUrl="/team/amanda-reed"
              facebookUrl="#"
              twitterUrl="https://www.twitter.com/"
              linkedinUrl="https://www.linkedin.com/"
            />
            <TeamMember
              name="Dennis Barrett"
              role="Roofing Foreman"
              imageUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/67172a2197444b0f7c68b48d_team-04.avif"
              profileUrl="/team/dennis-barrett"
              facebookUrl="https://facebook.com/"
              twitterUrl="https://www.twitter.com/"
              linkedinUrl="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
