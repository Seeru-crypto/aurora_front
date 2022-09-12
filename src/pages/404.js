import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  const timer = 5 * 1000;

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, timer);
  }, [router, timer]);

  return (
    <div className="not-found">
      <h1 id="oops">Ooops.. </h1>
      <h2>The page cannot be found</h2>
      <p>
        Go back to the main page{" "}
        <Link href="/">
          <a href="#oops">Homepage</a>
        </Link>
      </p>
    </div>
  );
}
