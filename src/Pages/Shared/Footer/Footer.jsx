import footerImg from "../../../assets/AD_3.26_9-Time-Saving-Gadgets-for-the-Home.webp";
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex justify-evenly rounded-3xl my-20">
      <aside>
        <img className="w-56 h-28 rounded-4xl" src={footerImg} alt="" />
        <p className="text-xl font-light">
          Product Hunter Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
    </footer>
  );
};

export default Footer;
