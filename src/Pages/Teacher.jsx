import React from 'react'

const Teacher = () => {
  return (
    <>
    {/* <!-- page title --> */}
<section className="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="list-inline custom-breadcrumb">
          <li className="list-inline-item"><a className="h2 text-primary font-secondary" href="@@page-link">Our teacher</a></li>
          <li className="list-inline-item text-white h3 font-secondary @@nasted"></li>
        </ul>
        <p className="text-lighten">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- /page title --> */}

{/* <!-- teachers --> */}
<section className="section">
  <div data-ref="mixitup-target" className="container">
    <div className="row">
      <div className="col-12">
        {/* <!-- teacher category list --> */}
        <ul className="list-inline text-center filter-controls mb-5">
          <li className="list-inline-item m-3 text-uppercase" data-filter=".arts">arts</li>
          <li className="list-inline-item m-3 text-uppercase" data-filter=".bio-science">biological science</li>
          <li className="list-inline-item m-3 text-uppercase" data-filter=".business-study">business studies</li>
          <li className="list-inline-item m-3 text-uppercase" data-filter=".law">law</li>
          <li className="list-inline-item m-3 text-uppercase" data-filter=".pharmacy">pharmacy</li>
          <li className="list-inline-item m-3 text-uppercase" data-filter=".science">science</li>
          <li className="list-inline-item m-3 text-uppercase" data-filter=".social-science">social science</li>
        </ul>
      </div>
    </div>
    {/* <!-- teacher list --> */}
    <div className="row" data-ref="mixitup-container">
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 arts law">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-1.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Jacke Masito</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 bio-science">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-2.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Clark Malik</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 business-study">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-3.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">John Doe</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 bio-science science arts">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-1.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Alex Rook</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 law">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-2.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Din Martin</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 science">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-3.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Raka Jim</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 bio-science">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-1.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Devid Luis</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 pharmacy social-science arts">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-2.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Zim Cook</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div data-ref="mixitup-target" className="col-lg-4 col-sm-6 mb-5 business-study">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-3.jpg" alt="teacher"/>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Duis Riu</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /teachers --> */}
    </>
  )
}

export default Teacher