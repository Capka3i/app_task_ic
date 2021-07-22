import {useEffect, useState} from "react";

import Post from "./Post/Post";

function Posts(props) {

    const {search} = props.location;
    const someSearch = search.split('?userId=').pop();

    console.log(someSearch)

    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);

    const [adder, setAdder] = useState(false);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    useEffect(() => {
        if (!show){
        fetch('https://jsonplaceholder.typicode.com/posts' + search)
            .then(value => value.json())
            .then(value => setPosts([...value]))}
    }, [])


       useEffect(() => {
           if (show)
               {  fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'POST', body: JSON.stringify({
                   title: title, body: body, userId: someSearch,
               }),
                   headers: {
                       'Content-type': 'application/json; charset=UTF-8',
                   },
           })
                   .then(value => value.json())
                   .then(value => setPosts([value]))
               setAdder(!adder)
               setShow(!show)
       }}, [adder])




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
        <div>
            {posts.map((value, index) => <Post post = {value} key = {index} search={search}/>)}
        </div>
        {show ? <form onSubmit={submit}>
            Title: <input type = "text" name='title'/><br/>
            Body: <input type = "text" name='body'/><br/>
            <button>Sent</button>
        </form> :<button onClick = {showForm}>Add Post</button>}



    </div>);
}

export default Posts;
