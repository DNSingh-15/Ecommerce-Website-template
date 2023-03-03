
function Footer() {

  var date = new Date().getFullYear()

  return (
    <footer className="mt-auto py-5 bg-info">
      <div className="container d-flex justify-content-center">
        <span className="text-muted">Copyright &copy; Ecommerce Web Template with React &nbsp;
          {date}</span>
      </div>
    </footer>
  );
}

export default Footer;
