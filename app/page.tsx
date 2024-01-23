import Link from "next/link";

const Home = async () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lading page första sidan</h1>
      <Link href='/auth/login'>Login</Link>
      <Link href='/auth/signup'>Register</Link>
    </main>
  );
}

export default Home
