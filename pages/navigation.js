import Breadcrumbs from './components/navigation/breadcrumbs.component'
import Accordion from './components/navigation/accordion.component'
import Subnavigation from './components/navigation/subnavigation.component'

export default function Navigation() {
  return (
    <>
      <h2>Breadcrumbs</h2>
      <Breadcrumbs />
      <h2>Accordion</h2>
      <Accordion />
      <h2>Subnavigation</h2>
      <Subnavigation />
    </>
  )
}