import {styleComments} from "../../constElements/styleConst";

function Comment({comment}) {

    return (<div style={styleComments}>
        <br/>
        Name: {comment.name} <br/>
        Email: {comment.email} <br/>
        Body: {comment.body} <br/>
        </div>);
}

export default Comment;
