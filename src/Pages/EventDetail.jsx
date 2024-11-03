import React from 'react'

const EventDetail = () => {
  return (
    <>
    {/* <!-- page title --> */}
<section className="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="list-inline custom-breadcrumb">
          <li className="list-inline-item"><a className="h2 text-primary font-secondary" href="events.html">Upcoming Events</a></li>
          <li className="list-inline-item text-white h3 font-secondary nasted">Event Details</li>
        </ul>
        <p className="text-lighten">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- /page title --> */}

{/* <!-- event single --> */}
<section className="section-sm">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">English Spoken</h2>
      </div>
      {/* <!-- event image --> */}
      <div className="col-12 mb-4">
        <img src="images/events/event-single.jpg" alt="event thumb" className="img-fluid w-100"/>
      </div>
    </div>
    {/* <!-- event info --> */}
    <div className="row align-items-center mb-5">
      <div className="col-lg-9">
        <ul className="list-inline">
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-location-pin text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">LOCATION</h6>
                <p className="mb-0">Dhanmondi, Dhaka</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-calendar text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">DATE</h6>
                <p className="mb-0">December-12-18</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-time text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">TIME</h6>
                <p className="mb-0">04: 00 pm</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-wallet text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">ENTRY FEE</h6>
                <p className="mb-0">From: $699</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 text-lg-right text-left">
        <a href="#" className="btn btn-primary">Apply now</a>
      </div>
      {/* <!-- border --> */}
      <div className="col-12 mt-4 order-4">
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
    {/* <!-- event details --> */}
    <div className="row">
      <div className="col-12 mb-50">
        <h3>About Event</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>
    {/* <!-- event speakers --> */}
    <div className="row">
      <div className="col-12">
        <h3 className="mb-4">Event Speakers</h3>
      </div>
      {/* <!-- speakers --> */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img className="mr-3 img-fluid" src="images/event-speakers/speaker-1.jpg" alt="speaker"/>
          <div className="media-body">
            <h4 className="mt-0">Jack Mastio</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* <!-- speakers --> */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img className="mr-3 img-fluid" src="images/event-speakers/speaker-2.jpg" alt="speaker"/>
          <div className="media-body">
            <h4 className="mt-0">John Doe</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* <!-- speakers --> */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img className="mr-3 img-fluid" src="images/event-speakers/speaker-3.jpg" alt="speaker"/>
          <div className="media-body">
            <h4 className="mt-0">Randy Luis</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* <!-- speakers --> */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img className="mr-3 img-fluid" src="images/event-speakers/speaker-4.jpg" alt="speaker"/>
          <div className="media-body">
            <h4 className="mt-0">Alfred Jin</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* <!-- border --> */}
      <div className="col-12 mt-4 order-4">
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /event single --> */}

{/* <!-- more event --> */}
<section className="section pt-0">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">More Events</h2>
      </div>
    </div>
    <div className="row justify-content-center">
  {/* <!-- event --> */}
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb"/>
        <div className="card-date"><span>18</span><br/>December</div>
      </div>
      <div className="card-body">
        {/* <!-- location --> */}
        <p><i className="ti-location-pin text-primary mr-2"></i>Harvard, Usa</p>
        <a href="event-single.html"><h4 className="card-title">Toward a public philosophy of justice</h4></a>
      </div>
    </div>
  </div>
  {/* <!-- event --> */}
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="images/events/event-2.jpg" alt="event thumb"/>
        <div className="card-date"><span>21</span><br/>December</div>
      </div>
      <div className="card-body">
        {/* <!-- location --> */}
        <p><i className="ti-location-pin text-primary mr-2"></i>Cambridge, USA</p>
        <a href="event-single.html"><h4 className="card-title">Research seminar in clinical science.</h4></a>
      </div>
    </div>
  </div>
  {/* <!-- event --> */}
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="images/events/event-3.jpg" alt="event thumb"/>
        <div className="card-date"><span>23</span><br/>December</div>
      </div>
      <div className="card-body">
        {/* <!-- location --> */}
        <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Firefly training in trauma-informed yoga</h4></a>
      </div>
    </div>
  </div>
</div>
  </div>
</section>
{/* <!-- /more event --> */}

    </>
  )
}

export default EventDetail