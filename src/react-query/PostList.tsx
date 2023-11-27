import axios from "axios";
import { useEffect, useState } from "react";
import UsePosts from "./Hooks/UsePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = UsePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>wait please</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-primary"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default PostList;
