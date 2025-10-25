interface FooterProps {
    text : string;
}

const FooterText = (footerText : FooterProps) => {
    return(<footer>{footerText.text}</footer>);
}

export default FooterText;