import {useEffect} from "react";

import Comment from "./coment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {SET_COMMENTS} from "../../../redux/constsAction";
import {COMMENTS, URLJSON} from "../constElements/constElements";

function Comments(props) {
    const {comments} = useSelector((state) => state)
    const dispatch = useDispatch();

    const search = props.location.search;


    useEffect(() => {
        fetch(URLJSON + COMMENTS + search)
            .then(value => value.json())
            .then(value => dispatch({type: SET_COMMENTS, payload: value}))
    }, {});

    return (<div>
        {comments.map((value, index) => <Comment key = {index} comment = {value}/>)}
    </div>);
}

export default Comments;
