import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">NOT-FOUND</h2>
      <p>Go back to all <Link href="/brushes">brushes</Link>.</p>
    </main>
  )
}