import React from 'react'

const addproperty = () => {
    return (

        <div className="wrapper">
  <div id="page" className="site-page">
    <main id="main" className="site-main">
      <section className="page-header page-banner section shadow-bottom">
        <div className="container">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Submit new Property</a></li>
            </ol>
          </nav>
          <h1 className="page-title">Submit new Property</h1>
        </div>
      </section>{/* #page-header */}
      <div id="new-property" className="container section">
        <form className="property-form">
          <aside className="row">
            <h4 className="col-12">General Property Info</h4>
            <p className="col-12">
              <label>Property Title</label>
              <input name="property-title" type="text" placeholder="Title here" />
            </p>
            <p className="col-md-4 col-sm-4 col-12">
              <label>Type</label>
              <select name="property-type">
                <option value>Select Type</option>
                <option value="plot">Plot</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="office">Office</option>
                <option value="apartment">Apartment</option>
              </select>
            </p>
            <p className="col-md-4 col-sm-4 col-12">
              <label>Status</label>
              <select name="status">
                <option value>Select Status</option>
                <option value="published">Published</option>
                <option value="pending">Pending</option>
              </select>
            </p>
            <p className="col-md-4 col-sm-4 col-12">
              <label>Label</label>
              <select name="label">
                <option value>Select Label</option>
              </select>
            </p>
            <p className="col-lg-7 col-md-8 col-sm-7 col-12">
              <label>location</label>
              <input type="text" name="location" placeholder="272 Alpa Rock Suite CA" />
            </p>
            <p className="col-md-4 col-sm-5 col-12">
              <label />
              <input name="direction" type="button" defaultValue="select on google" />
            </p>
            <p className="col-12 g-map">
              <img src="images/map-detail.jpg" alt="map-detail" />
            </p>
            <div className="col-md-11 row">
              <p className="col-sm-6 col-12">
                <label>Full Price</label>
                <input name="price" type="text" defaultValue placeholder="Price" />
              </p>
              <p className="col-sm-6 col-12">
                <label>Price per Sq.Ft</label>
                <input name="price-sqft" type="text" defaultValue placeholder="Price" />
              </p>
            </div>
          </aside>
          <aside className="row">
            <h4 className="col-12">Property Image</h4>
            <div className="image-upload col-12">
              <label htmlFor="property-image"><img alt="property-image" src="images/image-uploadbg.jpg" /></label>
              <input name="property-image" id="property-image" type="file" />
            </div>
            <div className="col-12">3 Images</div>
            <div className="col-12 upload-detail">
              <div className="uploaded col-md-4 col-sm-4 col-12">
                <img src="images/image-property.jpg" alt="Property" />
                <div className="upload-actions">
                  <a href="#" className="action add"><i className="fas fa-check" /></a>
                  <a href="#" className="action remove"><i className="fas fa-trash-alt" /></a>
                </div>
              </div>
              <div className="uploaded col-md-4 col-sm-4 col-12">
                <img src="images/image-property.jpg" alt="Property" />
                <div className="upload-actions">
                  <a href="#" className="action add"><i className="fas fa-check" /></a>
                  <a href="#" className="action remove"><i className="fas fa-trash-alt" /></a>
                </div>
              </div>
              <div className="uploading col-md-4 col-sm-4 col-12">
                <img src="images/image-property.jpg" alt="Property" />
                <div className="process-box">
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className="row">
            <h4 className="col-12">Descrioption</h4>
            <p className="col-12">
              <textarea name="descrioption" placeholder="Description" defaultValue={""} />
            </p>
          </aside>
          <aside className="row">
            <h4 className="col-12">Details</h4>
            <p className="col-md-12 col-sm-6 col-12">
              <label>Property ID</label>
              <input name="property-id" type="text" placeholder="Property ID" />
            </p>
            <p className="col-md-4 col-sm-6 col-12">
              <label>Area Size Sq.Ft (Only Digits)</label>
              <input id="area-size" name="area-size" type="number" placeholder="Area Size" min={1000} />
            </p>
            <p className="col-md-4 col-sm-6 col-12">
              <label>Land Area (Only Digits)</label>
              <input name="land-area" type="text" placeholder="Land Area" />
            </p>
            <p className="col-md-4 col-sm-6 col-12">
              <label>Additional Area Size</label>
              <input name="additional-area" type="text" placeholder="Additional Area Size" />
            </p>
            <p className="col-sm-3 col-6">
              <label>Year Built</label>
              <input name="year-built" type="text" placeholder="Year Built" />
            </p>
            <p className="col-sm-3 col-6">
              <label>Bedrooms</label>
              <input name="bedrooms" type="number" min={1} />
            </p>
            <p className="col-sm-3 col-6">
              <label>Bathrooms</label>
              <input name="bathrooms" type="number" min={1} />
            </p>
            <p className="col-sm-3 col-6">
              <label>Garages</label>
              <input name="garages" type="number" min={1} />
            </p>
          </aside>
          <aside className="row">
            <h4 className="col-12">Additional Details</h4>
            <div id="repeaterForm" className="repeater col-12">
              <div data-repeater-list="additional">
                <div className="row" data-repeater-item>
                  <input type="hidden" name="id" id="additional-id" />
                  <div className="col-sm-5 col-4">
                    <input type="text" name="additional-title" placeholder="Title" />
                  </div>
                  <div className="col-sm-5 col-4">
                    <input type="text" name="additional-value" placeholder="Value" />
                  </div>
                  <div className="col-sm-2 col-4">
                    <button className="remove" data-repeater-delete type="button"><i className="fas fa-trash-alt" /></button>
                  </div>
                </div>
              </div>
              <input className="add" data-repeater-create type="button" defaultValue="+ Add One More" />
            </div>
            {/*#repeatingForm*/}
          </aside>
          <aside className="row">
            <h4 className="col-12">Property Features</h4>
            <div className="col-12">
              <ul className="tag-filter">
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="air-conditioning" name="air-conditioning" defaultChecked />
                  <label className="custom-control-label" htmlFor="air-conditioning"> Air Conditioning</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="gym" name="gym" />
                  <label className="custom-control-label" htmlFor="gym"> Gym</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="refrigerator" name="refrigerator" defaultChecked />
                  <label className="custom-control-label" htmlFor="refrigerator"> Refrigerator</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="tv-cable" name="tv-cable" defaultChecked />
                  <label className="custom-control-label" htmlFor="tv-cable"> TV Cable</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="kitchen" name="kitchen" />
                  <label className="custom-control-label" htmlFor="kitchen"> Kitchen</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="basement" name="basement" />
                  <label className="custom-control-label" htmlFor="basement"> Basement</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="barbeque" name="barbeque" />
                  <label className="custom-control-label" htmlFor="barbeque"> Barbeque</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="laundry" name="laundry" />
                  <label className="custom-control-label" htmlFor="laundry"> Laundry</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="sauna" name="sauna" />
                  <label className="custom-control-label" htmlFor="sauna"> Sauna</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="washer" name="washer" />
                  <label className="custom-control-label" htmlFor="washer"> Washer</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="exterior" name="exterior" />
                  <label className="custom-control-label" htmlFor="exterior"> Exterior</label>
                </li>
                <li className="col-xl-2 col-lg-2 col-md-4 col-6 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="plumbing" name="plumbing" />
                  <label className="custom-control-label" htmlFor="plumbing"> Plumbing</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="dryer" name="dryer" />
                  <label className="custom-control-label" htmlFor="dryer"> Dryer</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="microwave" name="microwave" defaultChecked />
                  <label className="custom-control-label" htmlFor="microwave"> Microwave</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="swimming-pool" name="swimming-pool" />
                  <label className="custom-control-label" htmlFor="swimming-pool"> Swimming Pool</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="wifi" name="wifi" defaultChecked />
                  <label className="custom-control-label" htmlFor="wifi"> WiFi</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="landscaping" name="landscaping" />
                  <label className="custom-control-label" htmlFor="landscaping"> Landscaping</label>
                </li>
                <li className="col-lg-3 col-md-4 col-sm-6 col-12 custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="roof" name="roof" />
                  <label className="custom-control-label" htmlFor="roof"> Roof</label>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="row justify-content-end">
            <h4 className="col-12">Private Note</h4>
            <div className="col-12">
              <textarea name="private-note" placeholder="Note" defaultValue={""} />
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <button name="add-property" value="submit" className="button col-12">Submit Property</button>
            </div>
          </aside>
        </form>
      </div>
    </main>{/* #site-content */}
  </div>{/* #page */}
</div>


    )
}

export default addproperty
