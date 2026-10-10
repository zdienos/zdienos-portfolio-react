import { Link } from "react-router";
import { Lead } from "../components/Section";

function NotFound() {
  return (
    <>
      <title>Mardino Santosa — Not found</title>
      <Lead>
        This page is not in the index.{" "}
        <Link to="/" className="text-blue underline decoration-1 underline-offset-4">
          Return to page 01
        </Link>
        .
      </Lead>
    </>
  );
}

export default NotFound;
