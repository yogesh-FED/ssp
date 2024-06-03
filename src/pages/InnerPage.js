import React from "react";
import "../assets/js/main";

const InnerPage = () => {
  return (
    <div>
      <main id="main" data-aos="fade-up">
        {/* Breadcrumbs starts  */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Inner Page</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Inner Page</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* banner image starts  */}
        <section id="banner" className="d-flex align-items-center">
          <div
            className="container aos-init aos-animate"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <h1>
              Welcome to <span>Banner Section</span>
            </h1>
            <h2>We are team of lorem ipsum content lorem ipsum</h2>
            <p className="col-lg-6">
              Lorem ipsum content ipsum content loreum Lorem ipsum content ipsum
              content loreum Lorem ipsum content ipsum content loreum Lorem
              ipsum content ipsum content loreum
            </p>
          </div>
        </section>
        {/* banner image ends */}
        {/* content starts  */}
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h4>Content Info</h4>
              </div>
              <div className="col-xl-12">
                <div className="portfolio-description">
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* content ends  */}
        {/* table components starts  */}
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h4>Table Components</h4>
              </div>
              <div className="col-xl-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-violet"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="View Info"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </span>
                        </a>
                        <a href="/#" className="px-1">
                          <span
                            className="box-icon bg-gradient-light-green"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Edit Info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </span>
                        </a>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-red"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Delete Info"
                          >
                            <i className="bi bi-trash"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-violet"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="View Info"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </span>
                        </a>
                        <a href="/#" className="px-1">
                          <span
                            className="box-icon bg-gradient-light-green"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Edit Info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </span>
                        </a>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-red"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Delete Info"
                          >
                            <i className="bi bi-trash"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-violet"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="View Info"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </span>
                        </a>
                        <a href="/#" className="px-1">
                          <span
                            className="box-icon bg-gradient-light-green"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Edit Info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </span>
                        </a>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-red"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Delete Info"
                          >
                            <i className="bi bi-trash"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-violet"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="View Info"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </span>
                        </a>
                        <a href="/#" className="px-1">
                          <span
                            className="box-icon bg-gradient-light-green"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Edit Info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </span>
                        </a>
                        <a href="/#">
                          <span
                            className="box-icon bg-gradient-red"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Delete Info"
                          >
                            <i className="bi bi-trash"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* table components ends */}
        {/* offcanvas components starts  */}
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h4>Off Canvas and Modal</h4>
              </div>
              <div className="col-xl-3">
                <a
                  className="btn btn-primary"
                  data-bs-toggle="offcanvas"
                  href=".leftCanvas"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Left canvas
                </a>
              </div>
              <div className="col-xl-3">
                <span
                  className="btn btn-primary"
                  data-bs-toggle="offcanvas"
                  data-bs-target=".offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  Top canvas
                </span>
              </div>
              <div className="col-xl-3">
                <span
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target=".showModal"
                >
                  Modal
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* offcanvas components ends */}
      </main>
      <a
        href="/#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* left canvas starts */}
      <div
        className="offcanvas offcanvas-start leftCanvas"
        tabIndex="-1"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <i className="bi bi-stack"></i> Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            {/* accordion starts */}
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            {/* accordin ends */}
          </div>
        </div>
      </div>
      {/* left canvas ends */}
      {/* top canvas starts  */}
      <div
        className="offcanvas offcanvas-top offcanvasTop"
        tabIndex="-1"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasTopLabel">
            <i className="bi bi-stack"></i> Offcanvas top
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div
            className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Tabs */}
            <ul className="nav nav-pills mb-3" role="tablist">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="pill"
                  href="#tab1"
                  aria-selected="true"
                  role="tab"
                >
                  Saepe fuga
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  data-bs-toggle="pill"
                  href="#tab2"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  Voluptates
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  data-bs-toggle="pill"
                  href="#tab3"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  Corrupti
                </a>
              </li>
            </ul>
            {/* End Tabs */}
            {/* Tab Content */}
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="tab1"
                role="tabpanel"
              >
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* End Tab 1 Content */}
              <div className="tab-pane fade" id="tab2" role="tabpanel">
                <p className="fst-italic">
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
              </div>
              {/* End Tab 2 Content */}
              <div className="tab-pane fade" id="tab3" role="tabpanel">
                <p className="fst-italic">
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
              </div>
              {/* End Tab 3 Content */}
            </div>
          </div>
        </div>
      </div>
      {/* top canvas ends */}
      {/* modal starts  */}
      <div
        className="modal fade showModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Lorem ipsum content lorem ipsum</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal ends  */}
      {/* floating menu starts */}
      <nav class="float-menu">
        <ul class="p-0">
          <li>
            <a href="/#">
              <i class="bi bi-facebook"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-twitter"></i>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-linkedin"></i>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-github"></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-linkedin"></i>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* floating menu ends */}
    </div>
  );
};

export default InnerPage;
