export default function Friend({ friend }) {
  console.log(friend);
  const {name, email} = friend;
  return (
    <div style={{border: '1px solid gray'}}>
      <h3>name: {name}</h3>
      <p>Email: {email} </p>
    </div>
  );
}
