interface UserProps {
  name: string;
  age: number;
}

const UserCards = (props: UserProps) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <p>Age : {props.age}</p>
    </>
  );
};

export default UserCards;
