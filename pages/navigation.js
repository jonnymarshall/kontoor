import Link from 'next/link'
import Breadcrumbs from './components/navigation/breadcrumbs.component'

export default function Navigation() {
  return (
    <>
      <Breadcrumbs />
      <Link href="/">
          <a className="c-btn c-btn--primary">Back to home</a>
      </Link>
    </>
  )
}