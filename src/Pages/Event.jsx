import React from 'react'

const Event = () => {
  return (
    <>
    {/* <!-- page title --> */}
<section className="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="list-inline custom-breadcrumb">
          <li className="list-inline-item"><a className="h2 text-primary font-secondary" href="@@page-link">Upcoming Events</a></li>
          <li className="list-inline-item text-white h3 font-secondary @@nasted"></li>
        </ul>
        <p className="text-lighten">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- /page title --> */}

{/* <!-- courses --> */}
<section className="section">
  <div className="container">
    <div className="row">
      {/* <!-- event --> */}
      <div className="col-lg-4 col-sm-6 mb-5">
        <div className="card border-0 rounded-0 hover-shadow">
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb"/>
            <div className="card-date"><span>18</span><br/>December</div>
          </div>
          <div className="card-body">
            {/* <!-- location --> */}
            <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="event-single.html">
              <h4 className="card-title">Firefly training in trauma-informed yoga</h4>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- event --> */}
      <div className="col-lg-4 col-sm-6 mb-5">
        <div className="card border-0 rounded-0 hover-shadow">
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src="images/events/event-2.jpg" alt="event thumb"/>
            <div className="card-date"><span>21</span><br/>December</div>
          </div>
          <div className="card-body">
            {/* <!-- location --> */}
            <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="event-single.html">
              <h4 className="card-title">Research seminar in clinical science.</h4>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- event --> */}
      <div className="col-lg-4 col-sm-6 mb-5">
        <div className="card border-0 rounded-0 hover-shadow">
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src="images/events/event-3.jpg" alt="event thumb"/>
            <div className="card-date"><span>23</span><br/>December</div>
          </div>
          <div className="card-body">
            {/* <!-- location --> */}
            <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="event-single.html">
              <h4 className="card-title">Toward a public philosophy of justice</h4>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- event --> */}
      <div className="col-lg-4 col-sm-6 mb-5">
        <div className="card border-0 rounded-0 hover-shadow">
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb"/>
            <div className="card-date"><span>18</span><br/>December</div>
          </div>
          <div className="card-body">
            {/* <!-- location --> */}
            <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="event-single.html">
              <h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- event --> */}
      <div className="col-lg-4 col-sm-6 mb-5">
        <div className="card border-0 rounded-0 hover-shadow">
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src="images/events/event-2.jpg" alt="event thumb"/>
            <div className="card-date"><span>21</span><br/>December</div>
          </div>
          <div className="card-body">
            {/* <!-- location --> */}
            <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="event-single.html">
              <h4 className="card-title">Inequality seminar returns spring term</h4>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- event --> */}
      <div className="col-lg-4 col-sm-6 mb-5">
        <div className="card border-0 rounded-0 hover-shadow">
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src="images/events/event-3.jpg" alt="event thumb"/>
            <div className="card-date"><span>23</span><br/>December</div>
          </div>
          <div className="card-body">
            {/* <!-- location --> */}
            <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="event-single.html">
              <h4 className="card-title">Social media and behavior economics conference</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /courses --> */}

    </>
  )
}

export default Event