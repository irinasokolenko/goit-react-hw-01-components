import PropTypes from "prop-types";
import {  } from "./Friendlist.styled.jsx";
import { FriendListItem } from "./Friendlist.styled.jsx";

export const FriendList = ({friends}) => {
    return (
        <FriendListWrapper>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
        </FriendListWrapper>);
}

FriendList.propTypes = {
    friends: PropTypes.array
}