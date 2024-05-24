import Post from "./Post";

const Posts = ({ title, posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} title={post} name={title} />
      ))}
    </div>
  );
};

export default Posts;
