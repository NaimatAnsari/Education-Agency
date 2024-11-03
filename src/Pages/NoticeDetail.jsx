import React from 'react'

const NoticeDetail = () => {
  return (
    <>
    
{/* <!-- page title --> */}
<section className="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="list-inline custom-breadcrumb">
          <li className="list-inline-item"><a className="h2 text-primary font-secondary" href="notice.html">Notice</a></li>
          <li className="list-inline-item text-white h3 font-secondary nasted">Notice Details</li>
        </ul>
        <p className="text-lighten">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- /page title --> */}

{/* <!-- notice details --> */}
<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="d-flex">
          <div className="text-center mr-4">
            <div className="p-4 bg-primary text-white">
                <span className="h2 d-block">30</span> APR,2019
            </div>
          </div>
          {/* <!-- notice content --> */}
          <div>
            <h3 className="mb-4">Teaching Materials and Testing Methods</h3>
            <p>Lorem ipsum dolor sit amet, lectus molestie amet eget varius nulla ultricies, senectus vehicula wisi risus tellus nonummy. Urna volutpat, nunc doloremque risus felis lorem risus. Et suspendisse diam libero pulvinar, tristique ac cras luctus ornare. Quam justo. Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate et condimentum in felis, porttitor accumsan id bibendum diam varius, lorem diam molestie erat a amet urna, dolor pellentesque lectus justo adipiscing. Laoreet est velit vestibulum, laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin donec arcu lorem.</p>
            <p>Quam justo. Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate et condimentum in felis, porttitor accumsan id bibendum diam varius, lorem diam molestie erat a amet urna, dolor pellentesque lectus justo adipiscing. Laoreet est velit vestibulum, laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin donec arcu lorem.</p>
            <ul className="list-styled mb-5">
              <li>Digital Access to Scholarship at Smart</li>
              <li>institutes</li>
              <li>Smart-affiliated hospitals and research</li>
              <li>Smart Catalyst</li>
              <li>Smart Library Portal</li>
              <li>Smart research programs and departments</li>
            </ul>
            <a href="#" className="btn btn-primary">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /notice details --> */}
    </>
  )
}

export default NoticeDetail