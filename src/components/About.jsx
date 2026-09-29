import SectionTitle from "./SectionTitle";
import { getSection } from "./WebsiteTexts";

function About({ isWebsiteEnglish }) {
  const { title, text } = getSection(isWebsiteEnglish, "about");
  const facts = getSection(isWebsiteEnglish, "aboutFacts").text;

  return (
    <section id="about" className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title={title} />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="scroll-animation max-w-prose space-y-5 text-lg leading-relaxed">
            {text.map((paragraph, id) => (
              <p key={id}>{paragraph}</p>
            ))}
          </div>
          <dl className="scroll-animation h-fit rounded-2xl border border-line bg-white p-6 shadow-sm">
            {facts.map((fact, id) => (
              <div
                key={id}
                className="border-line py-4 first:pt-0 last:pb-0 [&:not(:first-child)]:border-t"
              >
                <dt className="text-sm text-body">{fact.label}</dt>
                <dd className="mt-0.5 font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
