import "./Footer.css";
interface FooterProps {
  url: string;
  children: React.ReactNode;
  theme: "light" | "dark";
  handleThemeChange: () => void;
}

const Footer = ({ children, url, theme, handleThemeChange }: FooterProps) => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div>{children}</div>
      <img src={url} alt="logo" className="logo" />
      <button
        onClick={handleThemeChange}
        style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </footer>
  );
};

export default Footer;
