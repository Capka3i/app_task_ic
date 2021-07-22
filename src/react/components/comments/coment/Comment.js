
function Comment({comment}) {

    return (<div>
        <br/>
        Name: {comment.name} <br/>
        Email: {comment.email} <br/>
        Body: {comment.body} <br/>
        </div>);
}

export default Comment;
