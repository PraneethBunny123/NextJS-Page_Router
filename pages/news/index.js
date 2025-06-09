import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News</h1>
      <Link href='/news/page1'>Link 1</Link>
      <Link href='/news/page2'>Link 2</Link>
    </>
  )
}