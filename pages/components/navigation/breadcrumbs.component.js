const Breadcrumbs = () => {
  return (
    <>
      <ul className="c-breadcrumbs">
        <li className="c-breadcrumbs__visited">Home</li>
        <li className="c-breadcrumbs__divider">{'>'}</li>
        <li className="c-breadcrumbs__visited">Men</li>
        <li className="c-breadcrumbs__divider">{'>'}</li>
        <li className="c-breadcrumbs__visited">Men’s Jeans</li>
        <li className="c-breadcrumbs__divider">{'>'}</li>
        <li className="c-breadcrumbs__active">ClasicWestern</li>
      </ul>
    </>
  )
}

export default Breadcrumbs;