export default function Images() {
  return (
    <div id="wd-images">
      <h4>Images</h4>

      <h5>Remote image</h5>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="wd-starship"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Starship_S24_and_Booster_7.jpg/640px-Starship_S24_and_Booster_7.jpg"
        alt="SpaceX Starship"
        width={300}
      />

      <h5>Local image</h5>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img id="wd-teslabot" src="/images/teslabot.jpg" alt="Tesla bot" width={300} />

      <h5>My image</h5>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="wd-your-image"
        src="/images/teslabot.jpg"
        alt="My personal image"
        width={300}
      />

      <h5>Sample AI image</h5>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png"
        alt="React logo"
        width={200}
      />
    </div>
  );
}
