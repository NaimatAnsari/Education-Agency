import React from 'react'

const BlogDetail = () => {
  return (
    <>
    {/* <!-- page title --> */}
<section className="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="list-inline custom-breadcrumb">
          <li className="list-inline-item"><a className="h2 text-primary font-secondary" href="blog.html">Our Blog</a></li>
          <li className="list-inline-item text-white h3 font-secondary nasted">Blog Details</li>
        </ul>
        <p className="text-lighten">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- /page title --> */}

{/* <!-- blog details --> */}
<section className="section-sm bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-4">
        <img src="images/blog/blog-single.jpg" alt="blog-thumb" className="img-fluid w-100"/>
      </div>
      <div className="col-12">
        <ul className="list-inline">
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><span className="font-weight-bold mr-2">Post:</span>Somrat</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light">August 28, 2017</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><i className="ti-book mr-2"></i>Read 289</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><i className="ti-share mr-2"></i>289</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><a className="text-light" href="#"><i className="ti-comments mr-2"></i>265</a></li>
        </ul>
      </div>
      {/* <!-- border --> */}
      <div className="col-12 mt-4">
        <div className="border-bottom border-primary"></div>
      </div>
      {/* <!-- blog contect --> */}
      <div className="col-12 mb-5">
        <h2>Lorem ipsum dolor amet, consectetur adipisicing eiusmod tempor </h2>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem s</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, </p>
      </div>
      {/* <!-- comment box --> */}
      <div className="col-12">
        <form action="#" className="row">
          <div className="col-sm-6">
            <input type="text" className="form-control mb-4" id="name" name="name" placeholder="Full Name"/>
          </div>
          <div className="col-sm-6">
            <input type="email" className="form-control mb-4" id="mail" name="mail" placeholder="Email Address"/>
          </div>
          <div className="col-12">
            <textarea name="comment" id="comment" className="form-control mb-4" placeholder="Comment Here..."></textarea>
          </div>
          <div className="col-12">
            <button type="submit" value="send" className="btn btn-primary">post comment</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* <!-- /blog details --> */}

{/* <!-- recommended post --> */}
<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">Recommended</h2>
      </div>
    </div>
    <div className="row justify-content-center">
  {/* <!-- blog post --> */}
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/blog/post-1.jpg" alt="Post thumb"/>
      <div className="card-body">
        {/* <!-- post meta --> */}
        <ul className="list-inline mb-3">
          {/* <!-- post date --> */}
          <li className="list-inline-item mr-3 ml-0">August 28, 2019</li>
          {/* <!-- author --> */}
          <li className="list-inline-item mr-3 ml-0">By Jonathon</li>
        </ul>
        <a href="blog-single.html">
          <h4 className="card-title">The Expenses You Are Thinking.</h4>
        </a>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
      </div>
    </div>
  </article>
  {/* <!-- blog post --> */}
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/blog/post-2.jpg" alt="Post thumb"/>
      <div className="card-body">
        {/* <!-- post meta --> */}
        <ul className="list-inline mb-3">
          {/* <!-- post date --> */}
          <li className="list-inline-item mr-3 ml-0">August 13, 2019</li>
          {/* <!-- author --> */}
          <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
        </ul>
        <a href="blog-single.html">
          <h4 className="card-title">Tips to Succeed in an Online Course</h4>
        </a>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
      </div>
    </div>
  </article>
  {/* <!-- blog post --> */}
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/blog/post-3.jpg" alt="Post thumb"/>
      <div className="card-body">
        {/* <!-- post meta --> */}
        <ul className="list-inline mb-3">
          {/* <!-- post date --> */}
          <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>
          {/* <!-- author --> */}
          <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
        </ul>
        <a href="blog-single.html">
          <h4 className="card-title">Orientation Program for the new students</h4>
        </a>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
      </div>
    </div>
  </article>
</div>
  </div>
</section>
{/* <!-- /recommended post --> */}

    </>
  )
}

export default BlogDetail