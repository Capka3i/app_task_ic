import {useEffect, useState} from "react";

import Comment from "./coment/Comment";

function Comments(props) {

    const search = props.location.search;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments' + search)
            .then(value => value.json())
            .then(value => setComments([...value]))
    }, {});

    console.log(comments)
    return (<div>
        {comments.map((value, index) => <Comment key={index} comment={value}/>)}
    </div>);
}

export default Comments;
