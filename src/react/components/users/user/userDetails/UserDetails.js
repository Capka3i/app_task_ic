import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";

function UserDetails(props) {
    const {params: {id}} = props.match;
    let [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(value => value.json())
            .then(value => setUserInfo(value[id]))

    }, [id])


    const {name, email, address} = userInfo;
    return (<div>
        {name} <br/>
        {email} <br/>
        {address?.city} <br/>
        st. {address?.street} - {address?.suite} <br/>
        <Link to = {{pathname:'/posts', search:'userId=' + id} }>
            <button>Show posts</button>
        </Link>
    </div>);
}

export default UserDetails;
