import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

function UserDetails(props) {
    const {params: {id}} = props.match;
    const {users: {[id]: {name, email, address}}} = useSelector((state) => state);


    return (<div>
        {name} <br/>
        {email} <br/>
        {address?.city} <br/>
        st. {address?.street} - {address?.suite} <br/>
        <Link to = {{pathname: '/posts', search: 'userId=' + id}}>
            <button>Show posts</button>
        </Link>
    </div>);
}

export default UserDetails;
