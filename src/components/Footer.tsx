import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-blue-900">
      <div className="container mx-auto px-2 py-4 flex justify-end">
        <Link to="/" className=" inline-block">
          <Button variant="outline">Logo News</Button>
        </Link>
      </div>
    </footer>
  );
}
