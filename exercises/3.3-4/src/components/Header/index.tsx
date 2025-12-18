import "./Header.css";

interface HeaderProps {
  url: string;
  children: React.ReactNode;
  theme: "light" | "dark";
}

const Header = ({url, children, theme}: HeaderProps) => {
  return (
    <footer className="header" style={{
      backgroundColor: theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
    }}>
      <img src={url} alt="logo" className="logo" />
      <div>{children}</div>
    </footer>
  );
};

export default Header;
