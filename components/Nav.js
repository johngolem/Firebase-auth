import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link className="text-3xl font-large" href={"/"}>
        Logo
      </Link>
      <ul>
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div>
            {/* <h2>{user.displayName}</h2>
            <h3>{user.email}</h3> */}
            <Link href={"/dashboard"}>
              <img
                src={user.photoURL}
                alt="user photo"
                referrerPolicy="no-referrer"
                className="w-16 rounded-full"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
