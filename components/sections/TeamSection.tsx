import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TeamCard from "@/components/ui/TeamCard";
import { teamMembers } from "@/lib/content";

export default function TeamSection() {
  return (
    <section className="bg-white py-24" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>Our Team</SectionLabel>
            <h2
              id="team-heading"
              className="text-4xl md:text-5xl font-semibold text-ink mt-2 leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              The People Behind the Mission
            </h2>
          </div>
        </AnimatedSection>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.08}>
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                initials={member.initials}
                image={member.image}
              />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
