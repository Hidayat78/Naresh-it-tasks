// import React from "react";

// export class StateDemo extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             Name: 'Samsung TV',
//             Price: 45000.44,
//             Stock: true,
//             Cities: ['Delhi', 'Hyd'],
//             Rating: { Rate: 4.3, Count: 4000 }
//         };
//     }
//     render() {
//         return (
//             <div className="container-fluid">
//                 <h2>Product Details</h2>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd>{this.state.Name}</dd>
//                     <dt>Price</dt>
//                     <dd>{this.state.Price}</dd>
//                     <dt>Stock</dt>
//                     <dd>{(this.state.Stock == true) ? "Available" : "Out of Stock"}</dd>
//                     <dt>Shipped To</dt>
//                     <dd>
//                         <ol>
//                             {
//                                 this.state.Cities.map(city =>
//                                     <li key={city}>{city}</li>
//                                 )
//                             }
//                         </ol>
//                     </dd>
//                     <dt>Rating</dt>
//                     <dd> <span className="bi bi-star-fill text-success"></span> {this.state.Rating.Rate} [{this.state.Rating.Count}]</dd>
//                 </dl>
//             </div>
//         )
//     }
// }



import React from "react";

export class StateDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            Price: 0
        }
        this.NameChange = this.NameChange.bind(this);
        this.PriceChange = this.PriceChange.bind(this);
    }
    NameChange(e) {
        this.setState({
            Name: e.target.value,
            Price: this.state.Price
        })
    }
    PriceChange(e) {
        this.setState({
            Name: this.state.Name,
            Price: e.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={this.NameChange} type="text" /></dd>
                    <dt>Price</dt>
                    <dd><input onChange={this.PriceChange} type="text" /></dd>
                </dl>
                <hr />
                Name:  {this.state.Name} <br />
                Price: {this.state.Price}
            </div>
        )
    }
}