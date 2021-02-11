import React from 'react'

const blog = () => {
    return (

        <div className="wrapper">
        <div id="page" className="site-page">
          <main id="main" className="site-main">
            <div className="container">
              <div className="row has-sidebar right-sidebar">
                <div id="primary" className="site-content col-xl-9 col-lg-8">
                  <article className="post">
                    <figure>
                      <a href="blog-detail.html"><img src="images/blog-1.jpg" alt="Jardiniere Restaurant" /></a>
                      <span className="date">22<small>Jun</small></span>
                    </figure>
                    <div className="entry-content">
                      <div className="entry-header">
                        <h2 className="entry-title"><a href="blog-detail.html" rel="bookmark">Jardiniere Restaurant</a></h2>
                        <div className="entry-meta">
                          <span className="author vcard"><i className="fas fa-user" /> <a href="#">Johan Larson</a></span>
                          <span className="cat-links"><i className="fas fa-folder" /> <a href="archive.html" rel="category tag">Travel</a></span>
                          <span className="comments-link"><i className="fas fa-comments" /> 0 Comment</span>
                        </div>{/* .entry-meta */}
                      </div>{/* .entry-header */}
                      <div className="entry-summary">
                        <p>Cras ex massa, consectetur sed posuere vel, consequat ac libero. In at metus ut libero pharetra
                          blandit id et felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                          cubilia Curae; Nulla congue erat at metus malesuada dapibus. Cras ex massa, consectetur sed
                          posuere vel, consequat ac libero.</p>
                        <a href="blog-detail.html" className="btn-readmore">Read More <i className="fas fa-arrow-right" /></a>
                      </div>{/* .entry-content */}
                      <div className="entry-footer" />{/* .entry-footer */}
                    </div> {/* entry-content #end */}
                  </article>
                  <article className="post">
                    <figure>
                      <a href="blog-detail.html"><img src="images/blog-2.jpg" alt="The most defining beauty moments of 2018" /></a>
                      <span className="date">04<small>Apr</small></span>
                    </figure>
                    <div className="entry-content">
                      <div className="entry-header">
                        <h2 className="entry-title"><a href="blog-detail.html" rel="bookmark">The most defining beauty moments
                            of 2018</a></h2>
                        <div className="entry-meta">
                          <span className="byline"> <span className="author vcard"><i className="fas fa-user" /> <a href="#">Johan
                                Larson</a></span> </span>
                          <span className="cat-links"><i className="fas fa-folder" /> <a href="archive.html" rel="category tag">Travel</a></span>
                          <span className="comments-link"><i className="fas fa-comments" /> 0 Comment</span>
                        </div>{/* .entry-meta */}
                      </div>{/* .entry-header */}
                      <div className="entry-summary">
                        <p>Aroin urna augue, cursus ac erat id, sodales placerat ex. Cras ex massa, consectetur sed posuere
                          vel, consequat ac libero. In at metus ut libero pharetra blandit id et felis. Vestibulum ante
                          ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla congue erat at metus
                          malesuada dapibus.</p>
                        <a href="blog-detail.html" className="btn-readmore">Read More <i className="fas fa-arrow-right" /></a>
                      </div>{/* .entry-content */}
                      <div className="entry-footer" />{/* .entry-footer */}
                    </div> {/* entry-content #end */}
                  </article>
                  <article className="post">
                    <figure>
                      <a href="blog-detail.html"><img src="images/blog-3.jpg" alt="15 Restaurants in London and New York" /></a>
                      <span className="date">26<small>Jan</small></span>
                    </figure>
                    <div className="entry-content">
                      <div className="entry-header">
                        <h2 className="entry-title"><a href="blog-detail.html" rel="bookmark">15 Restaurants in London and New
                            York</a></h2>
                        <div className="entry-meta">
                          <span className="byline"> <span className="author vcard"><i className="fas fa-user" /> <a href="#">Johan
                                Larson</a></span> </span>
                          <span className="cat-links"><i className="fas fa-folder" /> <a href="archive.html" rel="category tag">Uncategorized</a></span>
                          <span className="comments-link"><i className="fas fa-comments" /> 0 Comment</span>
                        </div>{/* .entry-meta */}
                      </div>{/* .entry-header */}
                      <div className="entry-summary">
                        <p>Proin urna augue, cursus ac erat id, sodales placerat ex. Cras ex massa, consectetur sed posuere
                          vel, consequat ac libero. In at metus ut libero pharetra blandit id et felis. Vestibulum ante
                          ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla congue erat at metus
                          malesuada dapibus.</p>
                        <a href="blog-detail.html" className="btn-readmore">Read More <i className="fas fa-arrow-right" /></a>
                      </div>{/* .entry-content */}
                      <div className="entry-footer" />{/* .entry-footer */}
                    </div> {/* entry-content #end */}
                  </article>
                  <nav aria-label="Page navigation" className="page-navigation">
                    <ul className="pagination d-flex">
                      <li className="page-item prev disabled mr-auto"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-arrow-left" /></a></li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item next ml-auto"><a className="page-link" href="#"><i className="fas fa-arrow-right" /></a></li>
                    </ul>
                  </nav>
                </div>
                <div id="secondary" className="site-sidebar sidebar-three col-xl-3 col-lg-4">
                  <aside id="search-2" className="widget widget_search">
                    <form method="get" id="searchform" action="/">
                      <div className="form-inline-one round">
                        <input type="text" className="field" name="s" defaultValue id="s" placeholder="Search" />
                        <button type="submit" className="submit" name="submit" id="searchsubmit"><i className="fas fa-search" /></button>
                      </div>
                    </form>
                  </aside>
                  <aside id="categories-2" className="widget widget_categories">
                    <h2 className="widget-title"><span><small /></span> Categories</h2>
                    <ul>
                      <li><a href="#">Coffee</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Tips &amp; Tricks</a></li>
                      <li><a href="#">Uncategorised</a></li>
                    </ul>
                  </aside>
                  <aside id="lattest-1" className="widget widget_news">
                    <h2 className="widget-title"><span><small /></span>Lattest News</h2>
                    <ul className="list-thumb list-thumb-one">
                      <li className="list-item">
                        <a className="thumb" href="blog-detail.html"><img src="images/blog-thumb-1.jpg" alt /></a>
                        <div className="detail"><a href="blog-detail.html">Jardiniere Restaurant</a><span>April 11, 2018</span>
                        </div>
                      </li>
                      <li className="list-item">
                        <a className="thumb" href="blog-detail.html"><img src="images/blog-thumb-2.jpg" alt /></a>
                        <div className="detail"><a href="blog-detail.html">The most defining beauty moments of
                            2018</a><span>April 11, 2018</span></div>
                      </li>
                      <li className="list-item">
                        <a className="thumb" href="blog-detail.html"><img src="images/blog-thumb-3.jpg" alt /></a>
                        <div className="detail"><a href="blog-detail.html">15 Restaurants in London and New York</a><span>April
                            11, 2018</span></div>
                      </li>
                    </ul>
                  </aside>
                  <aside id="newsletter-1" className="widget newsletter-widget">
                    <h2 className="widget-title"><span><small /></span>Newsletter</h2>
                    <p>Subscribe us and never miss our new articles</p>
                    <form className="newsletter">
                      <div className="form-inline-one">
                        <input name="email-address" type="text" placeholder="Email Address" />
                        <button type="button"><i className="fab fa-telegram-plane" /></button>
                      </div>
                    </form>
                  </aside>
                  <aside id="advertice-1" className="widget advertice-widget"> <img src="images/banner-344x522.jpg" alt />
                  </aside>
                </div> {/* .site-sidebar #end */}
              </div> {/* .row.has-sidebar #end */}
            </div> {/* .container #end */}
          </main>{/* #site-content */}
        </div>{/* #page */}
      </div>
      

    )
}

export default blog
