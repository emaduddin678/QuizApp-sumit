import React, { useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div style={{height: "100vh"}}>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {/* {console.log(videos[0].title)} */}
          {videos.map((video, i) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={i}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                key={i}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <h1 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Loading...</h1>}
    </div>
  );
}

export default Videos;
