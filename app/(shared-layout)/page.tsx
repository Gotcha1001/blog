import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Hello</h1>
      <Link href="/abc">Go to ABC</Link>
    </div>
  );
}
