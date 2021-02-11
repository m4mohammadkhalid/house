import React from 'react'

const listing = () => {
    return (

        <div className="wrapper">
  <div id="page" className="site-page">
    <main id="main" className="site-main">
      <div className="section shadow-top">
        <div className="container">
          <div className="row has-sidebar left-sidebar">
            <div id="primary" className="site-content col-xl-9 col-lg-8 col-sm-12">
              <aside className="properties">
                <div className="section-view">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">Short by :</div>
                    </div>
                    <select id="shortby" className="shortby">
                      <option value="price">Price</option>
                    </select>
                  </div>
                  <ul className="view-layout">
                    <li><a href="javascript:;" className="grid active"><i className="fas fa-th" /></a>
                    </li>
                    <li><a href="javascript:;" className="tiles"><i className="fas fa-th-list" /></a>
                    </li>
                    <li><a href="javascript:;" className="list"><i className="fas fa-align-justify" /></a></li>
                    {/*<i class="fas fa-list"></i><i class="fas fa-bars"></i> <i class="fas fa-th-large"></i> */}
                  </ul>
                </div>
                <div id="section-layout" className="section-layout grid-layout section">
                  <div className="list-heading box-meta">
                    <ul className="icons-inline">
                      <li className="title">
                        <h6>Properties</h6>
                      </li>
                      <li className="sqft" />
                      <li className="bed" />
                      <li className="bath" />
                      <li className="car" />
                      <li className="price"><span>Price</span>
                        <h6>$ Price</h6>
                      </li>
                      <li className="period">
                        <h6>Per Week</h6>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">House</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-2.jpg" alt="property-2" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission Viejo, CA
                            </p>
                            <h2><a href="/">Summer House with a pole</a></h2>
                          </div>
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="pool"><span>Pool</span>1</li>
                              <li className="price"><span>Price</span>26000</li>
                              <li className="price period"><span>Per Month</span>$800</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-sale">for sale</span>
                            <span className="type">office</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="propertyl-3" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los Angeles, CA
                            </p>
                            <h2><a href="#">Complete Corporate Office near that to
                                sabestian villa</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>1100 </li>
                              <li className="bed"><span>Bed</span>3</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>2</li>
                              <li className="price"><span>Price</span>$132000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">Apartment</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-4.jpg" alt="property-4" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly Hills, CA
                            </p>
                            <h2><a href="#">Modern apartment in the city</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="price"><span>Price</span>$160000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">House</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-2.jpg" alt="property-2" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission Viejo, CA
                            </p>
                            <h2><a href="/">Summer House with a pole</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="pool"><span>Pool</span>1</li>
                              <li className="price"><span>Price</span>26000</li>
                              <li className="price period"><span>Per Month</span>$800</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-sale">for sale</span>
                            <span className="type">office</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="propertyl-3" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los Angeles, CA
                            </p>
                            <h2><a href="#">Complete Corporate Office near that to
                                sabestian villa</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>1100 </li>
                              <li className="bed"><span>Bed</span>3</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>2</li>
                              <li className="price"><span>Price</span>$132000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">Apartment</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-4.jpg" alt="property-4" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly Hills, CA
                            </p>
                            <h2><a href="#">Modern apartment in the city</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="price"><span>Price</span>$160000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">House</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-2.jpg" alt="property-2" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission Viejo, CA
                            </p>
                            <h2><a href="/">Summer House with a pole</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="pool"><span>Pool</span>1</li>
                              <li className="price"><span>Price</span>26000</li>
                              <li className="price period"><span>Per Month</span>$800</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-sale">for sale</span>
                            <span className="type">office</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="propertyl-3" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los Angeles, CA
                            </p>
                            <h2><a href="#">Complete Corporate Office near that to
                                sabestian villa</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>1100 </li>
                              <li className="bed"><span>Bed</span>3</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>2</li>
                              <li className="price"><span>Price</span>$132000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">Apartment</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-4.jpg" alt="property-4" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly Hills, CA
                            </p>
                            <h2><a href="#">Modern apartment in the city</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="price"><span>Price</span>$160000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">House</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-2.jpg" alt="property-2" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission Viejo, CA
                            </p>
                            <h2><a href="/">Summer House with a pole</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="pool"><span>Pool</span>1</li>
                              <li className="price"><span>Price</span>26000</li>
                              <li className="price period"><span>Per Month</span>$800</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-sale">for sale</span>
                            <span className="type">office</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="propertyl-3" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los Angeles, CA
                            </p>
                            <h2><a href="#">Complete Corporate Office near that to
                                sabestian villa</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>1100 </li>
                              <li className="bed"><span>Bed</span>3</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>2</li>
                              <li className="price"><span>Price</span>$132000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">Apartment</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-4.jpg" alt="property-4" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly Hills, CA
                            </p>
                            <h2><a href="#">Modern apartment in the city</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="price"><span>Price</span>$160000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">House</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-2.jpg" alt="property-2" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Mission Viejo, CA
                            </p>
                            <h2><a href="/">Summer House with a pole</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="pool"><span>Pool</span>1</li>
                              <li className="price"><span>Price</span>26000</li>
                              <li className="price period"><span>Per Month</span>$800</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-2.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-sale">for sale</span>
                            <span className="type">office</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-3.jpg" alt="propertyl-3" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Los Angeles, CA
                            </p>
                            <h2><a href="#">Complete Corporate Office near that to
                                sabestian villa</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>1100 </li>
                              <li className="bed"><span>Bed</span>3</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>2</li>
                              <li className="price"><span>Price</span>$132000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-3.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                    <div className="col-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="listicle-box">
                        <figure>
                          <div className="star"><i className="fas fa-star" /></div>
                          <div className="info">
                            <span className="for-rent">for rent</span>
                            <span className="type">Apartment</span>
                          </div>
                          <a href="#" className="zoom-img"><img src="images/property-4.jpg" alt="property-4" /></a>
                        </figure>
                        <div className="box-content">
                          <div className="box-detail">
                            <p className="icon-fix location"><i className="fas fa-map-marker-alt" />Beverly Hills, CA
                            </p>
                            <h2><a href="#">Modern apartment in the city</a></h2>
                          </div>{/* .box-detail */}
                          <div className="box-meta">
                            <ul className="text-inline">
                              <li className="sqft"><span>Sq. Ft</span>2400 </li>
                              <li className="bed"><span>Bed</span>4</li>
                              <li className="bath"><span>Bath</span>2</li>
                              <li className="car"><span>Car</span>1</li>
                              <li className="price"><span>Price</span>$160000</li>
                            </ul>
                          </div>{/* .box-meta */}
                          <div className="box-links">
                            <a href="#" className="user-detail"><img src="images/author-4.jpg" alt="author" className="agent-pic" />author name</a>
                            <ul>
                              <li className="view"><a href="#"><i className="fas fa-file-alt" /><span>view
                                    detail</span></a></li>
                              <li className="map-marker"><a href="#"><i className="fas fa-map-marker-alt" /></a></li>
                              <li className="exchange"><a href="#"><i className="fas fa-exchange-alt" /></a></li>
                              <li className="favorite"><a href="#"><i className="fas fa-heart" /></a></li>
                            </ul>
                          </div>{/* .box-links */}
                        </div>{/* .box-content */}
                      </div>
                    </div>
                  </div>
                  {/*.row*/}
                </div>
                {/*.section-layout*/}
                <nav aria-label="Page navigation" className="page-navigation">
                  <ul className="pagination d-flex shadow-squre">
                    <li className="page-item prev disabled mr-auto"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-arrow-left" /></a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item next ml-auto"><a className="page-link" href="#"><i className="fas fa-arrow-right" /></a></li>
                  </ul>
                </nav>
              </aside>{/* .properties */}
            </div>{/* .site-content */}
            <div id="secondary" className="site-sidebar sidebar-one col-xl-3 col-lg-4 col-sm-12">
              <aside className="widget widget_property_search">
                <h2 className="widget-title">Property Search</h2>
                <form>
                  <div className="advanced-toggle">
                    <button type="button" className="btn-advance btn-toggle" data-toggle="button" aria-pressed="false">
                      <span className="handle" />
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label>ID or Keyword</label>
                      <input name="key-words-id" type="text" placeholder="ID or Keyword" />
                    </div>
                    <div className="col-12">
                      <label>Price : <strong>500k - 1000k</strong></label>
                      <input id="pprice" name="price" type="text" defaultValue data-slider-min={1000} data-slider-max={4500000  } data-slider-step={5} data-slider-value="[10000,1450000]" data-slider-tooltip="show" data-slider-handle="round" />
                    </div>
                    <div className="col-12">
                      <label>Property Type</label>
                      <select name="property-type">
                        <option value>All Property Type</option>
                        <option value="plot">Plot</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="office">Office</option>
                        <option value="apartment">Apartment</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label>Status</label>
                      <select name="status">
                        <option value="featured">Featured</option>
                        <option value="published">Published</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label>location</label>
                      <select name="location">
                        <option value>location</option>
                        <option value="london">London</option>
                        <option value="us">Us</option>
                        <option value="uk">Uk</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label>Country</label>
                      <select name="country">
                        <option value>Country</option>
                        <option value="london">London</option>
                        <option value="us">Us</option>
                        <option value="uk">Uk</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label>State</label>
                      <select name="state">
                        <option value>State</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label>Post Code</label>
                      <input name="post-code" type="text" placeholder="Post Code" />
                    </div>
                    <div id="advanced-search-box">
                      <div className="col-12">
                        <label>Bedrooms : <strong>2 - 4</strong></label>
                        <input id="bedrooms" name="bedrooms" type="text" defaultValue data-slider-min={1} data-slider-max={20} data-slider-step={1} data-slider-value="[2,4]" data-slider-tooltip="show" data-slider-handle="round" />
                      </div>
                      <div className="col-12">
                        <label>Bathrooms : <strong>1 - 3</strong></label>
                        <input id="bathrooms" name="bathrooms" type="text" defaultValue data-slider-min={1} data-slider-max={10} data-slider-step={1} data-slider-value="[1,3]" data-slider-tooltip="show" data-slider-handle="round" />
                      </div>
                      <div className="col-12">
                        <label>Garages : <strong>1 - 5</strong></label>
                        <input id="garages" name="garages" type="text" defaultValue data-slider-min={1} data-slider-max={5} data-slider-step={1} data-slider-value="[1,3]" data-slider-tooltip="show" data-slider-handle="round" />
                      </div>
                      <div className="col-12">
                        <label>Other Features : <strong>5</strong></label>
                        <ul className="tag-filter">
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="air-conditioning" name="air-conditioning" defaultChecked />
                            <label className="custom-control-label" htmlFor="air-conditioning">
                              Air Conditioning</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="gym" name="gym" />
                            <label className="custom-control-label" htmlFor="gym"> Gym</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="refrigerator" name="refrigerator" defaultChecked />
                            <label className="custom-control-label" htmlFor="refrigerator">
                              Refrigerator</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="tv-cable" name="tv-cable" defaultChecked />
                            <label className="custom-control-label" htmlFor="tv-cable"> TV
                              Cable</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="kitchen" name="kitchen" />
                            <label className="custom-control-label" htmlFor="kitchen">
                              Kitchen</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="washer" name="washer" />
                            <label className="custom-control-label" htmlFor="washer">
                              Washer</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="dryer" name="dryer" />
                            <label className="custom-control-label" htmlFor="dryer">
                              Dryer</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="microwave" name="microwave" defaultChecked />
                            <label className="custom-control-label" htmlFor="microwave">
                              Microwave</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="swimming-pool" name="swimming-pool" />
                            <label className="custom-control-label" htmlFor="swimming-pool">
                              Swimming Pool</label>
                          </li>
                          <li className="col-sm-6 custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="wifi" name="wifi" defaultChecked />
                            <label className="custom-control-label" htmlFor="wifi"> WiFi</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*#advanced-search-box*/}
                  </div>
                  {/*.row*/}
                  <div className="row no-gutters d-flex">
                    <div className="col-7">
                      <input type="submit" name="search" defaultValue="Find Property" className="button" />
                    </div>
                    <div className="col-4 ml-auto">
                      <input type="reset" name="clear" defaultValue="Clear" className="button btn-white reset" />
                    </div>
                  </div>
                </form>
              </aside>
              <aside className="widget widget_agents">
                <h2 className="widget-title">Top Agents</h2>
                <ul className="list-thumb list-sqr-thumb">
                  <li className="list-item">
                    <div className="thumb">
                      <img src="images/agent-thumb-1.jpg" alt="name" />
                    </div>
                    <div className="detail">
                      <span>Buying Agents</span>
                      <h5 className="title"><a href="#">Michael Fuller</a></h5>
                      <label>Listed : <strong>10 Properties</strong></label>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="thumb">
                      <img src="images/agent-thumb-2.jpg" alt="name" />
                    </div>
                    <div className="detail">
                      <span>Buying Agents</span>
                      <h5 className="title"><a href="#">Michael Fuller</a></h5>
                      <label>Listed : <strong>12 Properties</strong></label>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="thumb">
                      <img src="images/agent-thumb-3.jpg" alt="name" />
                    </div>
                    <div className="detail">
                      <span>Buying Agents</span>
                      <h5 className="title"><a href="#">Michael Fuller</a></h5>
                      <label>Listed : <strong>15 Properties</strong></label>
                    </div>
                  </li>
                </ul>
              </aside>
              <aside className="widget widget_calc">
                <h2 className="widget-title">Mortage Calculator</h2>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <input type="text" name="total-amount" placeholder="Total Amount" />
                    </div>
                    <div className="col-12">
                      <input type="text" name="down-payment" placeholder="Down Payment" />
                    </div>
                    <div className="col-12">
                      <input type="text" name="interest-rate" placeholder="Interest Rate" />
                    </div>
                    <div className="col-12">
                      <input type="text" name="years" placeholder="Loan Term(Years)" />
                    </div>
                    <div className="col-12">
                      <select name="payout-cycle">
                        <option value>Payout Cycle</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button name="calculate" value="calculate" className="button">Calculate
                        Mortage</button>
                    </div>
                  </div>
                </form>
              </aside>
              <aside className="widget widget_advertice">
                <img src="images/widget_advertice.jpg" alt="widget_advertice" />
              </aside>
              <aside className="widget widget_newslatter">
                <h2 className="widget-title">Newslatter</h2>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <label>Get information about new property</label>
                      <input type="text" name="emailid" placeholder="Your Email" />
                    </div>
                    <div className="col-12">
                      <button name="subscribe" value="subscribe" className="button rounded-0">Subscribe Now</button>
                    </div>
                  </div>
                </form>
              </aside>
            </div>{/* .site-sidebar */}
          </div> {/* .row.has-sidebar #end */}
        </div> {/* .container #end */}
      </div> {/* .section #end */}
    </main>{/* #site-content */}
  </div>{/* #page */}
</div>


    )
}

export default listing
