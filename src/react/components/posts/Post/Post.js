import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {DELETE, POSTS, PUT, URLJSON} from "../../constElements/constElements";
import {buttonStyle, inputStyle} from "../../constElements/styleConst";

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
            fetch(URLJSON + POSTS + '/' + id, {
                method: PUT, body: JSON.stringify({
                    userId: someSearch, id: id, title: newTitle, body: newBody,
                }), headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(value => value.json())
                .then(value => setPosts(value))

            setChange(!change)
            setShow(!show)

            } else
            {
            setPosts(props.post)
            }
    }, [change])

    useEffect(() => {
        if (remove)
            {
            fetch(URLJSON + POSTS + '/' + id, {
                method: DELETE
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

            <button onClick = {removeForm} style={buttonStyle}>Delete post</button>

            {show ? <form onSubmit = {submit}>
                Title: <input type = "text" name = 'title' style={inputStyle}/><br/>
                Body: <input type = "text" name = 'body' style={inputStyle}/><br/>
                <button style={buttonStyle}>Sent</button>
            </form> : <button onClick = {showForm} style={buttonStyle}>Change post</button>}

            <Link to = {{pathname: '/comments', search: 'postId=' + id}}>
                <button style={buttonStyle}>Show comments</button>
            </Link>

            <br/>
            <br/></div>}
    </div>);
}

export default Post;
