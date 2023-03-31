import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
        .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <SingleBlog blogs={blogs}/>
        </div>
    );
};

export default Blogs;