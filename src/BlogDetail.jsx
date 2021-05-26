import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const {
        data: blog,
        errorMessage,
        isPending,
    } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {errorMessage && <div>{errorMessage}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetail;
