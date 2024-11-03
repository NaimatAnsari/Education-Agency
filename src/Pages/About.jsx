import React from 'react'

const About = () => {
  return (
    <>
    {/* <!-- about --> */}
<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <img className="img-fluid w-100 mb-4" src="images/about/about-page.jpg" alt="about image"/>
        <h2 className="section-title">ABOUT OUR JOURNY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa illo quod veritatis, magni debitis fugiat dolore voluptates! Consequatur, aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis sint optio similique. Et amet magni facilis vero corporis quos.</p>
        <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a, facere fugit error accusamus est officiis vero in, nostrum laboriosam corrupti explicabo, cumque repudiandae deleniti perspiciatis quae consectetur enim. Laboriosam!</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- /about --> */}

{/* <!-- funfacts --> */}
<section className="section-sm bg-primary">
  <div className="container">
    <div className="row">
      {/* <!-- funfacts item --> */}
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="60">0</h2>
          <h5 className="text-white">TEACHERS</h5>
        </div>
      </div>
      {/* <!-- funfacts item --> */}
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="50">0</h2>
          <h5 className="text-white">COURSES</h5>
        </div>
      </div>
      {/* <!-- funfacts item --> */}
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="1000">0</h2>
          <h5 className="text-white">STUDENTS</h5>
        </div>
      </div>
      {/* <!-- funfacts item --> */}
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="3737">0</h2>
          <h5 className="text-white">SATISFIED CLIENT</h5>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /funfacts --> */}

{/* <!-- success story --> */}
<section className="section bg-cover" data-background="images/backgrounds/success-story.jpg">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-4 position-relative success-video">
        <a className="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
          <i className="ti-control-play"></i>
        </a>
      </div>
      <div className="col-lg-6 col-sm-8">
        <div className="bg-white p-5">
          <h2 className="section-title">Success Stories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /success story --> */}

{/* <!-- teachers --> */}
<section className="section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="section-title">Our Teachers</h2>
        </div>
        {/* <!-- teacher --> */}
        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
          <div className="card border-0 rounded-0 hover-shadow">
            <img className="card-img-top rounded-0" src="images/teachers/teacher-1.jpg" alt="teacher"/>
            <div className="card-body">
              <a href="teacher-single.html">
                <h4 className="card-title">Jacke Masito</h4>
              </a>
              <div className="d-flex justify-content-between">
                <span>Teacher</span>
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
        {/* <!-- teacher --> */}
        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
          <div className="card border-0 rounded-0 hover-shadow">
            <img className="card-img-top rounded-0" src="images/teachers/teacher-2.jpg" alt="teacher"/>
            <div className="card-body">
              <a href="teacher-single.html">
                <h4 className="card-title">Clark Malik</h4>
              </a>
              <div className="d-flex justify-content-between">
                <span>Teacher</span>
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
        {/* <!-- teacher --> */}
        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
          <div className="card border-0 rounded-0 hover-shadow">
            <img className="card-img-top rounded-0" src="images/teachers/teacher-3.jpg" alt="teacher"/>
            <div className="card-body">
              <a href="teacher-single.html">
                <h4 className="card-title">John Doe</h4>
              </a>
              <div className="d-flex justify-content-between">
                <span>Teacher</span>
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
    </div>
  </section>
  {/* <!-- /teachers --> */}
    </>
  )
}

export default About