export function SiteAtmosphere() {
  return (
    <>
      <div className="home-lights" aria-hidden="true">
        <div className="light-wrap">
          <img
            src="/luna/hero-right.webp"
            alt=""
            width={760}
            className="light-right"
          />
          <img
            src="/luna/hero-left.webp"
            alt=""
            width={760}
            className="light-left"
          />
        </div>
      </div>
      <div className="noise" aria-hidden="true" />
    </>
  );
}
