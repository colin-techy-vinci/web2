import "./Footer.css"
interface FooterProps {
  url: string;
  children: React.ReactNode;
}

const Footer = (foot: FooterProps) => {
  return (
    <footer className="footer">
      <div>{foot.children}</div>
      <img src={foot.url} alt="logo" className="logo"/>
    </footer>
  );
};

export default Footer;
