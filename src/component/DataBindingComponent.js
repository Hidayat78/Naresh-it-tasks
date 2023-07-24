
export function DataBindingComponent() {

    var menu = [
        { Category: "Electronics", Products: ["Mobile", "Watch"] },
        { Category: "Footwear", Products: ["Nike Casuals", "Lee Boot"] }
    ];

    return (
        <div className="container-fluid mt-2">
            <ol>
                {
                    menu.map(item =>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product =>
                                        <li key={product}>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    menu.map(item =>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product =>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}