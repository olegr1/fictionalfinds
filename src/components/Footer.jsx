function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          © {new Date().getFullYear()}, Whatever{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
