
import {Link} from 'react-router-dom';
import {buttonStyle, styleUser} from "../../constElements/styleConst";

function User(props) {
    const {
        user: {
            name, email, id
        }, url
    } = props;



    return (<div style={styleUser}>
        <br/>
        <div>
            {name}
            <br/>
            {email}
        </div>

        <Link to = {url + '/' + id}>
            <button style={buttonStyle}>Details</button>
        </Link>

    </div>);
}

export default User;
