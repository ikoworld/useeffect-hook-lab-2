export default function UserCard({data, username}) {
  return (
    <div className="user-card">
      <div>
        <img alt="avatar" src={data.avatar_url}/>
      </div>
      <div>
        <h5> Name:{data.name}</h5>

        <p> Username: {username} </p>
      </div>
    </div>
  );
}
