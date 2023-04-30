import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.stats_item}>Followers</span>
          <span className={css.stats_item}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.stats_item}>Views</span>
          <span className={css.stats_item}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.stats_item}>Likes</span>
          <span className={css.stats_item}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;

