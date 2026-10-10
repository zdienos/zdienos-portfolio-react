import { Link } from "react-router";

function NotFound() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6">
      <title>Mardino Santosa — Misprint</title>
      <span
        aria-hidden="true"
        className="overprint absolute left-[30%] top-10 h-72 w-72 rounded-full bg-cyan"
      />
      <span
        aria-hidden="true"
        className="overprint absolute left-[38%] top-16 h-72 w-72 rounded-full bg-magenta"
      />
      <p className="relative text-[clamp(6rem,22vw,18rem)] font-black leading-[0.8] tracking-[-0.06em]">
        404
      </p>
      <p className="relative mt-8 text-2xl font-bold tracking-tight">
        Misprint — this page didn't make it to the press.{" "}
        <Link to="/" className="underline decoration-magenta decoration-4 underline-offset-4 hover:text-magenta">
          Back to the sheet
        </Link>
      </p>
    </section>
  );
}

export default NotFound;
