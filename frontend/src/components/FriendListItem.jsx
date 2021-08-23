import React from 'react';

function FriendListItem (props){
    return (
        <li>
            {props.friend.name}
        </li>
    )
}
export default FriendListItem;