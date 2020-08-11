const Subnavigation = () => {
  return (
    <>
      <div className="c-subnav">
        <div class="row no-gutters justify-content-center">
          <div class="col-md-auto col-sm">
            <button className="c-subnav__btn c-btn c-btn--primary">Some long category</button>
          </div>
          <div class="col-md-auto col-sm">
            <button className="c-subnav__btn c-btn c-btn--primary">Shorter One</button>
          </div>
          <div class="col-md-auto col-sm">
            <button className="c-subnav__btn c-btn c-btn--primary">Tiny</button>
          </div>
        </div>
      </div>
      <div class="row  no-gutters justify-content-center">
        <div class="col-md-auto col-sm">
          <button className="c-subnav__btn c-btn c-btn--primary">I am a subcategory</button>
        </div>
        <div class="col-md-auto col-sm">
          <button className="c-subnav__btn c-btn c-btn--primary">So am I</button>
        </div>
        <div class="col-md-auto col-sm">
          <button className="c-subnav__btn c-btn c-btn--primary">Me too</button>
        </div>
        <div class="col-md-auto col-sm">
          <button className="c-subnav__btn c-btn c-btn--primary">And me!</button>
        </div>
      </div>
    </>
  )
}

export default Subnavigation;