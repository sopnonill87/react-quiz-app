import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
// import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  // console.log("videos mounted", videos);

  return (
    <div>
      {videos.length && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading...."
          next={() => setPage(page + 10)}>
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && (
        <div className="error">No video found</div>
      )}
      {error && <div className="error">An error ocurred</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
