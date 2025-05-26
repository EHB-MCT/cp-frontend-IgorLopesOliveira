import React from "react";
import PropTypes from "prop-types";

// component to embed a youtube video using an id
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`} // dynamic youtube embed url
      frameBorder="0" // no border around the video
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // allowed features
      allowFullScreen // allow fullscreen toggle
      title="embedded youtube" // accessible title for screen readers
    />
  </div>
);

// validate that embedId is required and is a string
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
