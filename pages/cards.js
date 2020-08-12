export default function Cards() {
  return (
    <>
      <div class="row no-gutters">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="c-card">
            <div class="c-card__image"></div>
            <div class="c-card__info">
              <h5 class="c-card__title">Some product name</h5>
              <p class="c-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p class="t-price t-price--old">£0.00</p>
              <p class="t-price t-price--new">£0.00</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="c-card">
            <div class="c-card__image"></div>
            <div class="c-card__info">
              <h5 class="c-card__title">Some product name</h5>
              <p class="c-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="t-price t-price--old">£0.00</p>
              <p class="t-price t-price--new">£0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}