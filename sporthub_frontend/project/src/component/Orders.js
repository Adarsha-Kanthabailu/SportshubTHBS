import React from "react";
import { Link } from "react-router-dom";
class Orders extends React.Component{

render ()
{
return ( 
    
        <div>
          
          {/*---- Include the above in your HEAD tag --------*/}
          <div className="container">
            <div className="row">
              <b> <header className="card-header"> <h3> My Orders</h3></header></b>
              <hr style={{border: 'none', borderBottom: '2px solid rgb(102, 102, 184)'}} />  
              <br />
              <div className="col-sm-12 col-md-10 col-md-offset-1">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Total</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="col-sm-8 col-md-6">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#"> <img className="media-object" src="https://www.nicepng.com/png/detail/219-2194223_different-kinds-of-sports-items-png-tennis-equipment.png" style={{width: '72px', height: '72px'}} /> </a>
                          <div className="media-body">
                            <h4 className="media-heading"><a href="#">Tennis equipment</a></h4>
                            <h5 className="media-heading"> by <a href="#">Surya sports</a></h5>
                            <span>Status: </span><span className="text-success"><strong>Received</strong></span>
                          </div>
                        </div></td>
                      <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                        <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={2} />
                      </td>
                      <td className="col-sm-1 col-md-1 text-center"><strong>250</strong></td>
                      <td className="col-sm-1 col-md-1 text-center"><strong>500</strong></td>
                      <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" /> Remove
                        </button></td>
                    </tr>
                    <tr>
                      <td className="col-md-6">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#"> <img className="media-object" src="https://www.looksgud.in/upload/item-image/2377/1ey8b/1ey8b-yoi-yo-bag-hiking-bag-for-men-65-litres-rucksack-travel-backpack_500x500_3.jpg" style={{width: '72px', height: '72px'}} /> </a>
                          <div className="media-body">
                            <h4 className="media-heading"><a href="#">Trucking rucksak</a></h4>
                            <h5 className="media-heading"> by <a href="#">Nike</a></h5>
                            <span>Status: </span><span className="text-success"><strong>Received</strong></span>
                          </div>
                        </div></td>
                      <td className="col-md-1" style={{textAlign: 'center'}}>
                        <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={1} />
                      </td>
                      <td className="col-md-1 text-center"><strong>950.00</strong></td>
                      <td className="col-md-1 text-center"><strong>950.00</strong></td>
                      <td className="col-md-1">
                        <button type="button" className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" /> Remove
                        </button></td>
                    </tr>
                    <tr>
                      <td className="col-md-6">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#"> <img className="media-object" src="https://www.looksgud.in/upload/item-image/2377/1ey8b/1ey8b-yoi-yo-bag-hiking-bag-for-men-65-litres-rucksack-travel-backpack_500x500_3.jpg" style={{width: '72px', height: '72px'}} /> </a>
                          <div className="media-body">
                            <h4 className="media-heading"><a href="#">Trucking rucksak</a></h4>
                            <h5 className="media-heading"> by <a href="#">Nike</a></h5>
                            <span>Status: </span><span className="text-success"><strong>Received</strong></span>
                          </div>
                        </div></td>
                      <td className="col-md-1" style={{textAlign: 'center'}}>
                        <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={1} />
                      </td>
                      <td className="col-md-1 text-center"><strong>950.00</strong></td>
                      <td className="col-md-1 text-center"><strong>950.00</strong></td>
                      <td className="col-md-1">
                        <button type="button" className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" /> Remove
                        </button></td>
                    </tr>
                    <tr>
                      <td className="col-md-6">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#"> <img className="media-object" src="https://www.looksgud.in/upload/item-image/2377/1ey8b/1ey8b-yoi-yo-bag-hiking-bag-for-men-65-litres-rucksack-travel-backpack_500x500_3.jpg" style={{width: '72px', height: '72px'}} /> </a>
                          <div className="media-body">
                            <h4 className="media-heading"><a href="#">Trucking rucksak</a></h4>
                            <h5 className="media-heading"> by <a href="#">Nike</a></h5>
                            <span>Status: </span><span className="text-success"><strong>Received</strong></span>
                          </div>
                        </div></td>
                      <td className="col-md-1" style={{textAlign: 'center'}}>
                        <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={1} />
                      </td>
                      <td className="col-md-1 text-center"><strong>950.00</strong></td>
                      <td className="col-md-1 text-center"><strong>950.00</strong></td>
                      <td className="col-md-1">
                        <button type="button" className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" /> Remove
                        </button></td>
                    </tr>
                    <tr>
                      <td> &nbsp; </td>
                      <td> &nbsp; </td>
                      <td> &nbsp; </td>
                      <td>
                        <button type="button" className="btn btn-default">
                          <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                        </button></td>
                      <td>
                       <Link to="/"> <button type="button" className="btn btn-success">
                          Home <span className="glyphicon glyphicon-play" />
                        </button></Link>
                        </td> 
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
);

}


}

export default Orders