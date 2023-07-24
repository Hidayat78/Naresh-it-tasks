import { useState } from "react"

export function DataBindingComponent1() {

    const [product, setProduct] = useState({ Name: 'Your Product Name', Price: 0, City: 'Hyd', Stock: true })

    function ChangeName(e) {
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function ChangePrice(e) {
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }
    function ChangeCity(e) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })
    }
    function ChangeStock(e) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })
    }

    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-3">
                    <h2>Register</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={ChangeName} value={product.Name} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={ChangePrice} value={product.Price} className="form-control" /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={ChangeCity} value={product.City} className="form-select">
                                <option>Delhi</option>
                                <option>Hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch"><input onChange={ChangeStock} className="form-check-input" checked={product.Stock} type="checkbox" /> Available</dd>
                    </dl>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock === true) ? "Available" : "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}