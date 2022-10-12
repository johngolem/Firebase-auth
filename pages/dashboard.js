import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  //   conditionalrendering

  if (loading) return <h1>still loading..........</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <div>
        <h1 className="mt-25 ">
          Welcome to your dashboard
          <h2 className="mt-20 text-red text-lg">{user.displayName}</h2>
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
