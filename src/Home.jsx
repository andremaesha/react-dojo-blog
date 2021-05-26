import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, errorMessage } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {errorMessage && <div>{errorMessage}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
