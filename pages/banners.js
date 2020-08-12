export default function Banners() {
  return (
    <>
      <h2>Banner Fullwidth</h2>
      <h3>Color: white</h3>
      <div className="c-banner c-banner--fullwidth">
        <div class="c-banner__text c-banner--white c-banner__text c-banner__text--left">
          <div class="content">
            <h3>Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="c-btn c-btn--primary">button</button>
          </div>
        </div>
        <div class="c-banner--fullwidth__image"></div>
      </div>
      <h3>Color: white</h3>
      <div className="c-banner c-banner--fullwidth">
        <div class="c-banner__text c-banner--white c-banner__text c-banner__text--left c-banner__text--middle">
          <div class="content">
            <h3>Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="c-btn c-btn--primary">button</button>
          </div>
        </div>
        <div class="c-banner--fullwidth__image"></div>
      </div>
    </>
  )
}