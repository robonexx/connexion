import Link from "next/link";
import Logo from "./_components/Logo";

const Home = async () => {

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-8 md:px-20">
      <h1>Välkommen till danscenter</h1>
      {/* <Link href='/auth/login'>Login</Link>
      <Link href='/auth/register'>Register</Link> */}
      <Logo />
      <p>Logga in på ditt konto <Link href='/auth/login' className="border-b border-[1px] px-3 py-2 rounded-md mx-1">här</Link></p>
    </main>
  );
}

export default Home
