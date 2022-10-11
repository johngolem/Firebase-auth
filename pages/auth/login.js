import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleAuthProvider, signInwithPopup } from "firebase/auth";

export default function Login() {
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
        <button className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <AiFillFacebook className="text-2xl text-blue-400" /> Sign in with
          Facebook
        </button>
      </div>
    </div>
  );
}