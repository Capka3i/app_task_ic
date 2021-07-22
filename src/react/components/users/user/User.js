import {Link} from 'react-router-dom';

function User(props) {
    const {
        user: {
            name, email, id
        }, url
    } = props;

    return (<div>
        <br/>
        <div>
            {name}
            <br/>
            {email}
        </div>

        <Link to = {url + '/' + id}>
            <button>Details</button>
        </Link>

    </div>);
}

export default User;
