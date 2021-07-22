import {useEffect} from "react";
import User from "./user/User";
import {useDispatch, useSelector} from "react-redux";
import {SET_USERS} from "../../../redux/constsAction";


function Users(props) {
    const {users} = useSelector((state) => state)
    const dispatch = useDispatch();

    const {url} = props.match;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => dispatch({type: SET_USERS, payload: value}))
    }, {})

    return (<div>
        {users.map((value, index) => <User key = {index} user = {value} url = {url}/>)}
    </div>);
}

export default Users;
