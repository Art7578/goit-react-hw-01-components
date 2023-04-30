import PropTypes from 'prop-types';
import FriendListItem from 'components/friends/FriendListItem';
import css from './FriendList.module.css';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;