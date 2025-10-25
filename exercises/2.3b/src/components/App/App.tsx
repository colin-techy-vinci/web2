import FooterText from "../Footer";
import TitlePage from "../TitlePage";
import User from "../User";
const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;
  const footerText = "© 2023 My App";

  return (
    <div>
      <TitlePage title={title} />
      <User nom={name1} age={age1}/>
      <User nom={name2} age={age2}/>
      <User nom={name3} age={age3}/>
      <FooterText text={footerText}/>
    </div>
  );
};

export default App;
