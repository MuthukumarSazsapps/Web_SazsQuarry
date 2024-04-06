import Link from 'next/link';
import footerData from '@data/Saas/footer.json';

const Footer = () => {
  return (
    <footer className="style-5 border-top brd-gray">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">
                <strong>Sazs Apps-Smart Solutions, Endless Integration</strong>
              </div>
              <small className="text">
                Founded 2021, Sazs Apps has emerged
                as a leader in the ERP software domain. Our team consists of
                passionate professionals with a collective vision to
                revolutionize how businesses manage their resources, processes,
                and data.
              </small>
              {/* <div className="socail-icons">
                <a
                  href="https://twitter.com/"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://facebook.com/"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com/"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title">Information</div>
              <small className="text mb-10 d-block">
                {footerData.address.address1} <br />{" "}
                {footerData.address.address2}
              </small>
              <small className="text mb-10 d-block">{footerData.phone}</small>
              <small className="text d-block">{footerData.email}</small>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">Useful Links</div>
              <ul>
                {footerData.usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link href="#">
                      <a>{link.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">Resource</div>
              <ul>
                {footerData.resources.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer