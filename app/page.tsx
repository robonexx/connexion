import Link from "next/link";
import Logo from "./_components/Logo";

const Home = async () => {

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-8 md:px-20">
      <h1>Lading page första sidan</h1>
      {/* <Link href='/auth/login'>Login</Link>
      <Link href='/auth/register'>Register</Link> */}
      <Logo
        
      />
    </main>
  );
}

export default Home
