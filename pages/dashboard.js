import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>still loading..........</h1>;
  //   if (!user)
  return (
    <div>
      <h1>
        Welcome to your dashboard
        {user.displayName}
      </h1>
      <button
        className="mt-20 py-2 px-4 text-lg bg-red-500 text-white rounded-lg font-medium ml-8"
        onClick={() => auth.signOut()}
      >
        Signout
      </button>
    </div>
  );
}
