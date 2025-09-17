import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto px-4 py-8 flex justify-between">
        <Link to="/" className="mt-6 inline-block">
          <Button variant="outline">Logo News</Button>
        </Link>
        <div className="flex justify-end gap-4">
          <Link to="/register" className="mt-6 inline-block">
            <Button variant="outline">Registration</Button>
          </Link>
          <Link to="/login" className="mt-6 inline-block">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
