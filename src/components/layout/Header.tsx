import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const {
    isAuthenticated,
    // user,
    logout,
  } = useAuth();

  return (
    <header className="bg-blue-900">
      <div className="container mx-auto px-4 py-8 flex justify-between">
        <Link to="/" className=" inline-block">
          <Button variant="outline">Logo News</Button>
        </Link>
        {isAuthenticated ? (
          <div className="flex justify-end gap-4">
            {/* <span>{user?.name || user?.email}</span> */}
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex justify-end gap-4">
            <Link to="/register" className=" inline-block">
              <Button variant="outline">Registration</Button>
            </Link>
            <Link to="/login" className=" inline-block">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
