function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt={username} />
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
}