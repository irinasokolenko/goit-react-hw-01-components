import user from 'path/to/user.json;
const Profile = ({ username, tag, location, avatar, stats }) => {
  return(
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt = {username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ListItem>
          <Label>Followers</Label>
          <Quanyity>{stats.followers}</Quanyity>
        </ListItem>
        <ListItem>
          <label>Likes</label>
          <Quanyity>{stats.likes}</Quanyity>
        </ListItem>
      </Stats>
      </ProfileWrap>
  );
  };
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };
  
  export default Profile;