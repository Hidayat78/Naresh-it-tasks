import { useState, useEffect } from "react";
import "./ShoppingComponent.css";

export function ShoppingComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    function GetCartCount() {
        setItemsCount(cartItems.length);
    }

    function LoadCategories() {
        fetch("http://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("all");
                setCategories(data);
            })
    }

    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
        GetCartCount();
    }, []);

    function CategoryChanged(e) {
        if (e.target.value == "all") {
            LoadProducts("http://fakestoreapi.com/products");
        } else {
            LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    function AddToCartClick(e) {
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                setCartItems(data);
                alert(`${data.title}\nAdded to Cart`);
            })
        GetCartCount();
        console.log(itemsCount);

    }

    return (
        <div className="container-fluid">
            <div className="bg-dark text-white text-center p-2">
                <h1><span className="bi bi-cart4"></span> Shopping</h1>
            </div>
            <div className="row mt-2">
                <nav className="col-2">
                    <label className="form-label">Select Category</label>
                    <div>
                        <select onChange={CategoryChanged} className="form-select">
                            {
                                categories.map(category =>
                                    <option key={category} value={category}> {category.toUpperCase()} </option>
                                )
                            }
                        </select>
                        <div className="mt-4">
                            <ul className="list-unstyled">
                                {
                                    categories.map(category =>
                                        <li><input type="checkbox" />{category.toUpperCase()}</li>
                                    )
                                }
                            </ul>

                        </div>
                    </div>
                </nav>
                <main className="col-8">
                    <div className="d-flex flex-wrap catalog">
                        {
                            products.map(product =>
                                <div key={product.id} className="card m-2 p-2">
                                    <img src={product.image} className="card-img-top" height="150" />
                                    <div className="card-header">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd>
                                                <span className="bi bi-star-fill text-success"></span> {product.rating.rate} [{product.rating.count}]
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button onClick={AddToCartClick} id={product.id} className="btn btn-danger w-100"> <span className="bi bi-cart4"></span> Add to Cart</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </main>
                <aside className="col-2">
                    <button className="btn btn-dark w-100">
                        <span className="bi bi-cart"></span> [<span>{itemsCount}</span>] Cart Items
                    </button>
                </aside>
            </div>
        </div>
    )
}