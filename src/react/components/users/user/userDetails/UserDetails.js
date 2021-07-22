import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {buttonStyle, DetailsUser} from "../../../constElements/styleConst";

function UserDetails(props) {
    const {params: {id}} = props.match;
    const {users: {[id]: {name, email, address}}} = useSelector((state) => state);


    return (<div style = {DetailsUser}>
        {name} <br/>
        {email} <br/>
        {address?.city} <br/>
        st. {address?.street} - {address?.suite} <br/>
        <Link to = {{pathname: '/posts', search: 'userId=' + id}}>
            <button style={buttonStyle}>Show posts</button>
        </Link>
    </div>);
}

export default UserDetails;
