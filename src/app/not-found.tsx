import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 className="title">Page not found</h1>
      <Link href="/" className="button">
        Back to home
      </Link>
    </section>
  );
}
