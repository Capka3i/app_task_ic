import {useEffect, useState} from "react";

import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {SET_POSTS} from "../../../redux/constsAction";
import {POST, POSTS, URLJSON} from "../constElements/constElements";
import {buttonStyle} from "../constElements/styleConst";

function Posts(props) {

    const {posts} = useSelector((state) => state)
    const dispatch = useDispatch();

    const {search} = props.location;
    const someSearch = search.split('?userId=').pop();

    const [show, setShow] = useState(false);
    // const [change, setChange] = useState([]);
    const [adder, setAdder] = useState(false);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    useEffect(() => {
        if (!show)
            {
            fetch(URLJSON + POSTS + search)
                .then(value => value.json())
                .then(value => dispatch({type: SET_POSTS, payload: value}))
            }
    }, [])

    console.log(show);
    useEffect(() => {
        if (show)
            {
            fetch(URLJSON + POSTS, {
                method: POST, body: JSON.stringify({
                    title: title, body: body, userId: someSearch,
                }), headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(value => value.json())
                .then(value => dispatch({type: SET_POSTS, payload: [value]}))
            // .then(value => setChange())
            setAdder(!adder)
            setShow(!show)
            }
    }, [adder])


    function showForm() {
        setShow(!show)
    }

    function submit(e) {
        e.preventDefault()
        setTitle(e.target.title.value);
        setBody(e.target.body.value);
        console.log(e.target.title.value)
        console.log(e.target.body.value)
        setAdder(!adder)

    }

    return (<div>
        {show ? <form onSubmit = {submit}>
            Title: <input type = "text" name = 'title'/><br/>
            Body: <input type = "text" name = 'body'/><br/>
            <button style = {buttonStyle}>Sent</button>
        </form> : <button onClick = {showForm} style = {buttonStyle}>Add Post</button>}
        <div>
            {posts.map((value, index) => <Post post = {value} key = {index} search = {search}/>)}
        </div>




    </div>);
}

export default Posts;
