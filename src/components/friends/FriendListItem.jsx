import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  console.log(isOnline);
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friend_name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;