import "../../styles/style.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Videos () {
  return (
    <div className="App">
      <h1>Youtube Embed demo</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
  );
}