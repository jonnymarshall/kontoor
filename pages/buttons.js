import Link from 'next/link'

export default function Buttons() {
  return (
    <>
      <h1>Buttons</h1>
      <button className="c-btn c-btn--primary">button</button>
      <button className="c-btn c-btn--primary" disabled>button</button>
      <button className="c-btn c-btn--white">button</button>
      <button className="c-btn c-btn--black">button</button>
      <h2>
      <Link href="/">
          <a className="c-btn c-btn--primary">Back to home</a>
        </Link>
      </h2>
    </>
  )
}