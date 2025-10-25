import Name from "../Name";
import Age from "../Age";
import IsOnline from "../IsOnline";
function App() {
  const name1 = "Colin Téchy";
  const age1 = 12;
  const on = true;
  const name2 = "Lea criquillion";
  const age2 = 123;
  const off = false;
  return (
    <div>
      <div>
        <Name name={name1} />
        <Age age={age1} />
        <IsOnline isOnline={on} />
      </div>
      <div>
        <Name name={name2} />
        <Age age={age2} />
        <IsOnline isOnline={off} />
      </div>
    </div>
  );
}

export default App;
