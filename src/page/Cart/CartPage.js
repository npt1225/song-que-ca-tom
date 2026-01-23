import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";

export default function CartPage() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            {/* Page Header */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Cart</h1>
            </div>

            {/* Cart Page */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 1 item mẫu */}
                                <tr>
                                    <td>
                                        <img
                                            src="img/vegetable-item-3.png"
                                            className="img-fluid rounded-circle"
                                            style={{ width: 80, height: 80 }}
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <p className="mt-4">Big Banana</p>
                                    </td>
                                    <td>
                                        <p className="mt-4">$2.99</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm text-center border-0"
                                                defaultValue="1"
                                            />
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mt-4">$2.99</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                                            <i className="fa fa-times text-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Total */}
                    <div className="row g-4 justify-content-end">
                        <div className="col-lg-4">
                            <div className="bg-light rounded p-4">
                                <h4 className="mb-3">Cart Total</h4>
                                <div className="d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>$99.00</strong>
                                </div>
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary mt-3">
                                    Proceed Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
