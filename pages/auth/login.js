import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Dashboard from "../dashboard";
import { async } from "@firebase/util";

export default function Login() {
  //Sign in with google

  const route = useRouter();
  const googleProvider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  //   Sign in with facebook
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      route.push("/dashboard");
      const credential = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credential.accessToken;
      let photoUrl = result.user.photoURL + "?height=500&access_token=' +token";
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      //   );
      console.log(result);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  //    checks if user is already logged in and ridirects them to the Dashboard ,
  //    otherwise we woukd login users over and over again, their

  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg  flex align-middle gap-2"
        >
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
        <button
          onClick={FacebookLogin}
          className="text-white bg-gray-700 p-4 w-64 font-medium rounded-lg flex align-middle gap-2"
        >
          <AiFillFacebook className="text-2xl text-blue-400" /> Sign in with
          Facebook
        </button>
      </div>
    </div>
  );
}
