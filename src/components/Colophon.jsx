const YEAR = new Date().getFullYear();

function Colophon() {
  return (
    <footer className="grid grid-cols-4 gap-x-5 border-t border-ink px-5 py-6 lg:grid-cols-7 lg:gap-x-6 lg:px-8">
      <p className="meta col-span-4 lg:col-span-2">Colophon</p>
      <p className="meta col-span-4 lg:col-span-3">
        Set in Geist and Geist Mono. Built with React 19 and Tailwind CSS 4 on a
        twelve-column grid — press <kbd className="text-ink">G</kbd> to show it.
      </p>
      <p className="meta col-span-4 mt-4 lg:col-span-2 lg:mt-0 lg:text-right">
        © {YEAR} zdienos
        <br />
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-blue"
        >
          Back to top ↑
        </button>
      </p>
    </footer>
  );
}

export default Colophon;
