//! Components
import SignInSignUp from "@/Components/SignInSignUp";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-135 from-blue-950 via-blue-900 to-blue-800 p-8 relative">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-radial from-yellow-400/40 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[15%] w-84 h-84 rounded-full bg-radial from-yellow-400/40 to-transparent blur-3xl animate-pulse-slow animation-3000"></div>
        <div className="absolute top-[45%] left-[50%] w-82 h-82 rounded-full bg-radial from-yellow-400/40 to-transparent blur-3xl animate-pulse-slow animation-2000"></div>
      </div>
      <SignInSignUp />
    </div>
  );
}
