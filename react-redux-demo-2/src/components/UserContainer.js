import { useEffect } from "react"
import { fetchUsers } from "../redux/user/userActions"
import { connect } from "react-redux"

const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <div>
            <h2>User List</h2>
            {userData.users.map(user => <h4 key={user.id}>{user.name}</h4>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)