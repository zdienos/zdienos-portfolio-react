import Section, { Lead, TableHead } from "../components/Section";
import CropMarks from "../components/CropMarks";
import { roles, socials } from "../data/content";
import portrait from "../Assets/fotoME-min.jpg";

const pad = (n) => String(n).padStart(2, "0");

function Home() {
  return (
    <>
      <title>Mardino Santosa — Index</title>

      <Lead>
        Mardino Santosa is a hard-working{" "}
        <span className="text-blue">IT Administrator</span> and{" "}
        <span className="text-blue">Full Stack Developer</span> from Makassar,
        Indonesia.
      </Lead>

      <Section id="1.1" label="Roles">
        <TableHead cols={["Ref.", "Role"]} className="grid-cols-[3.5rem_1fr]" />
        <ol>
          {roles.map((role, i) => (
            <li
              key={role}
              className="grid grid-cols-[3.5rem_1fr] items-baseline border-b border-line py-2.5"
            >
              <span className="font-mono text-xs text-mute">R.{pad(i + 1)}</span>
              <span className="text-xl font-light tracking-tight lg:text-2xl">{role}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="1.2" label="Introduction">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
          <figure className="lg:col-span-2">
            <div className="relative p-3">
              <CropMarks />
              <img
                src={portrait}
                alt="Portrait of Mardino Santosa"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="meta mt-1 flex justify-between gap-4 whitespace-nowrap px-3">
              <span>Fig. 1</span>
              <span>The author, Makassar</span>
            </figcaption>
          </figure>

          <div className="space-y-4 lg:col-span-3 lg:pt-3">
            <p className="text-xl font-light leading-snug tracking-tight">
              Skilled at managing networking, maintaining security systems and
              databases. An effective communicator with great technological
              expertise and a deep passion for technology.
            </p>
            <p className="max-w-[34em]">
              Also a Full Stack Developer with 5+ years of hands-on experience
              in developing scalable websites and applications, using a wide
              range of front- and back-end skills like HTML, CSS, JavaScript,
              jQuery and PHP, CodeIgniter, Laravel — I think… 🤷‍♂️
            </p>
          </div>
        </div>
      </Section>

      <Section id="1.3" label="Contact">
        <TableHead
          cols={["No.", "Channel", "Address", ""]}
          className="grid-cols-[2.5rem_1fr_auto] [&>*:nth-child(3)]:hidden md:grid-cols-[2.5rem_9rem_1fr_auto] md:[&>*:nth-child(3)]:block"
        />
        <ul>
          {socials.map(({ name, handle, href }, i) => (
            <li key={name} className="border-b border-line">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="-mx-2 grid grid-cols-[2.5rem_1fr_auto] items-baseline px-2 py-2.5 transition-colors hover:bg-blue hover:text-paper md:grid-cols-[2.5rem_9rem_1fr_auto]"
              >
                <span className="font-mono text-xs">{pad(i + 1)}</span>
                <span className="text-lg">{name}</span>
                <span className="hidden font-mono text-xs md:block">{handle}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export default Home;
