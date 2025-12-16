import "./Header.css";

interface HeaderProps {
  url: string;
  children: React.ReactNode;
}

const Header = (head: HeaderProps) => {
  return (
    <footer className="head-test">
      <div>{head.children}</div>
      <img src={head.url} alt="logo" className="logo"/>
    </footer>
  );
};

export default Header;
