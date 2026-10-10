import React from "react";
import myImg from "../../Assets/fotoME-min.jpg";

const socials = [
  { name: "GitHub", handle: "zdienos", href: "https://github.com/zdienos" },
  { name: "Twitter", handle: "@zdienos", href: "https://twitter.com/zdienos" },
  { name: "LinkedIn", handle: "in/zdienos", href: "https://www.linkedin.com/in/zdienos/" },
  { name: "YouTube", handle: "/zdienos", href: "https://www.youtube.com/zdienos/" },
  { name: "WhatsApp", handle: "+62 852 9997 7945", href: "https://wa.me/+6285299977945/" },
  { name: "Telegram", handle: "t.me/zdienos", href: "https://t.me/zdienos" },
];

function HomeSecond() {
  return (
    <>
      <section className="grid grid-cols-12 gap-[2px] border-b-2 border-ink bg-ink">
        <div className="col-span-12 flex flex-col justify-between bg-paper p-4 md:col-span-2">
          <span className="text-[30vw] font-black leading-[0.8] text-signal font-condensed md:text-[10vw]">
            01
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest">
            Let me introduce myself
          </p>
        </div>

        <div className="col-span-12 bg-paper p-4 md:col-span-6 md:p-8">
          <p className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
            A hard-working{" "}
            <span className="bg-signal px-1 text-black">IT Administrator</span>,
            skilled at managing networking, maintaining security systems and
            databases.
          </p>
          <div className="mt-10 grid gap-4 text-[15px] leading-relaxed md:grid-cols-2 md:gap-8">
            <p>
              Effective communicator with great technological expertise and
              deep passion for technology.
            </p>
            <p>
              Also a <strong>Full Stack Developer</strong> with 5+ years of
              hands-on experience in developing scalable websites and
              applications using a wide range of front/back-end skills like
              HTML, CSS, JavaScript, jQuery and PHP, CodeIgniter, Laravel, I
              think… 🤷‍♂️
            </p>
          </div>
        </div>

        <figure className="relative col-span-12 min-h-[24rem] overflow-hidden bg-signal md:col-span-4">
          <img
            src={myImg}
            alt="Mardino Santosa"
            className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 mix-blend-multiply"
          />
          <figcaption className="absolute bottom-0 left-0 bg-black px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
            Fig. 01 — The author
          </figcaption>
        </figure>
      </section>

      <section className="bg-ink text-paper">
        <div className="flex items-end justify-between gap-4 border-b-2 border-paper/20 px-4 pb-3 pt-14 md:pt-20">
          <h2 className="text-6xl font-black uppercase leading-[0.8] tracking-tight font-condensed md:text-[8vw]">
            Find me on
          </h2>
          <p className="shrink-0 pb-1 text-right text-xs font-bold uppercase tracking-widest">
            <span className="text-signal">02</span>
            <br />
            Feel free to connect
          </p>
        </div>
        <ul>
          {socials.map(({ name, handle, href }, i) => (
            <li key={name} className="border-b border-paper/20">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-4 px-4 py-2 transition-colors hover:bg-signal hover:text-black md:grid-cols-[4rem_minmax(0,1fr)_16rem_auto]"
              >
                <span className="text-xs font-bold">0{i + 1}</span>
                <span className="truncate text-5xl font-black uppercase leading-none tracking-tight font-condensed md:text-8xl">
                  {name}
                </span>
                <span className="hidden text-sm font-semibold md:block">
                  {handle}
                </span>
                <span
                  aria-hidden="true"
                  className="text-3xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:text-5xl"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default HomeSecond;
