import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {logDOM} from "@testing-library/react";

function Post(props) {
    const {search} = props;
    const {id} = props.post;

    const someSearch = search.split('?userId=').pop();

    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState([]);
    const [change, setChange] = useState(false);
    const [remove, setRemove] = useState(false);
    const [newTitle, setNewTitle] = useState(null);
    const [newBody, setNewBody] = useState(null);

    useEffect(() => {
        if (change)
            {
            ;fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'PUT', body: JSON.stringify({
                    userId: someSearch, id: id, title: newTitle, body: newBody,
                }), headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(value => value.json())
                .then(value => setPosts(value))
            setChange(!change)
            setShow(!show)
            console.log(posts)
            } else
            {
            setPosts(props.post)
            }
    }, [change])

    useEffect(() => {
        if (remove)
            {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'DELETE'
            })

            }
    }, [remove])

    function removeForm() {
        setRemove(!remove)
    }


    function submit(e) {
        e.preventDefault()
        setNewTitle(e.target.title.value);
        setNewBody(e.target.body.value);
        console.log(e.target.title.value)
        console.log(e.target.body.value)
        setChange(!change)
    }


    function showForm() {
        setShow(!show)
    }

    return (<div>
        {remove ? <div>
            <div>Post Remove</div>
            <br/></div> : <div>
            post ID: {posts.id} <br/>
            Title: {posts.title} <br/>
            Body: {posts.body} <br/>

            <button onClick = {removeForm}>Delete post</button>

            {show ?
                <form onSubmit = {submit}>
                Title: <input type = "text" name = 'title'/><br/>
                Body: <input type = "text" name = 'body'/><br/>
                <button>Sent</button>
            </form> :
                <button onClick = {showForm}>Change post</button>}

            <Link to = {{pathname: '/comments', search: 'postId=' + id}}>
                <button>Show comments</button>
            </Link>

            <br/>
            <br/></div>}
    </div>);
}

export default Post;
