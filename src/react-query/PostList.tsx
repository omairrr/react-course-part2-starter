import axios from "axios";
import { useEffect, useState } from "react";
import UsePosts from "./Hooks/UsePosts";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = UsePosts({ pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>wait please</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((page) => (
          <React.Fragment>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
