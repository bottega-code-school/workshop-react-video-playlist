import * as React from "react";
import ReactPlayer from "react-player";
import playlistData from "../playlistData";

const playIcon = require("../../static/assets/images/play.png");

type MediaType = {
  title: string;
  videoSrc: string;
  thumbnailSrc: string;
  id: string;
  description: string;
};

export default function VideoPlaylist() {
  const media: MediaType[] = playlistData;

  return (
    <div className="playlist">
      <div className="playlist-title">React Playlist</div>

      <div className="playlist-media-container">
        <pre>{JSON.stringify(playlistData, null, 2)}</pre>
      </div>
    </div>
  );
}
