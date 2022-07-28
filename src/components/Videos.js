import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  // console.log("page number", page, hasMore);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h4>Fetching data...</h4>}>
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                key={video.youtubeID}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
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
