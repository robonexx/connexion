import Link from "next/link";
import Logo from "./_components/Logo";
<<<<<<< HEAD
=======


>>>>>>> main

const Home = async () => {

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-8 md:px-20">
<<<<<<< HEAD
      <h1>Lading page första sidan</h1>
      {/* <Link href='/auth/login'>Login</Link>
      <Link href='/auth/register'>Register</Link> */}
      <Logo
        
      />
=======
      <h1>Välkommen till danscenter</h1>
      {/* <Link href='/auth/login'>Login</Link>
      <Link href='/auth/register'>Register</Link> */}
      <Logo />
      <p>Logga in på ditt konto <Link href='/auth/login' className="border-b border-[1px] px-3 py-2 rounded-md mx-1">här</Link></p>
>>>>>>> main
    </main>
  );
}

export default Home
