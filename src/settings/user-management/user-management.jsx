import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../functions/fetchAllUsers';

import './user-management.scss';

export function UserManagement() {
    const [users, setUsers] = useState([]);

    const setAdmin = (isAdmin) => {

    }

    useEffect(() => { fetchAllUsers().then(users =>{ setUsers(users); console.log('users', users) }) }, []);

    return(
        <div style={{width: '100%', height: '100%'}}>
            <div>User Management</div>
            <table style={{ width: '100%' }}>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Admin</th>
                    <th>Booster Packs</th>
                    <th>Starter Packs</th>
                </tr>
                {users.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td><Switch onChange={(event) => setAdmin(event.target.checked)} defaultChecked={user.isAdmin} /></td>
                        <td>{user.boosterPacks.map(pack=> <span>
                            {pack.amount}
                        </span>)}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}