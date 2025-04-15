import { auth, signIn, signOut } from "@/app/auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaUser } from "react-icons/fa";

const MainNavbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header className="py-3 px-5 max-w-[1400px] mx-auto flex items-center justify-between">
      <Link href="/">
        <Image src={"/logo.svg"} width={100} height={50} priority alt="" />
      </Link>

      <nav className="flex items-center gap-5 font-semibold">
        {!session?.user?.name ? (
          <>
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/" });
              }}
            >
              <Button type="submit">Sign In</Button>
            </form>
          </>
        ) : (
          <>
            <Link href="/startup/create">Create</Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          </>
        )}

        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt=""
            width={50}
            height={50}
            priority
            className="rounded-full"
          />
        ) : (
          <FaUser />
        )}
      </nav>
    </header>
  );
};

export default MainNavbar;
