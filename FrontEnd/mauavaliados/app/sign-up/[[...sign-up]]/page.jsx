import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-svh justify-center items-center">
      <SignUp />
    </div>
  );
}
