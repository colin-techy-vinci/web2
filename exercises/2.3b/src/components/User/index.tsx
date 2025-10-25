interface UserProps {
  nom: string;
  age: number;
}

const User = ({ nom, age }: UserProps) => {
  return (
    <div>
      <h2>{nom}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default User;
