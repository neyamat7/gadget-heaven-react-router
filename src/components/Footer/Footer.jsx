const Footer = () => {
  return (
    <div className="bg-white text-black w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center pt-12">
          <h1 className="text-4xl font-bold">Gadget Heaven</h1>
          <p className="text-base my-3">
            Leading the way to cutting-edge technology and Innovation
          </p>
        </div>
        <div className="w-4/5 mx-auto border-b-1 border-gray-400"></div>
        <footer className="footer text-base-content  p-10 flex justify-around flex-wrap">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a
              href="https://www.linkedin.com/in/istiaq-ahsan"
              className="link link-hover"
            >
              Contact
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
