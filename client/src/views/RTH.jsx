import React from 'react'
import vipImage from '../vip.png'
import Furniture from "./Furniture";

export default class Products extends React.Component {
	constructor(props) {
		super(props);



		this.state = {
			products: []
		}

		// fetch is a promise based method that grabs data from APIs// 

		//several functions that fetch different API's that returns different data in a json object, that re renders the page// 

		this.allProducts = () => {
			fetch('/api/allproducts')
				.then((res) => res.json())
				.then(
					(data) => {
						this.setState({
							isLoaded: true,
							products: data

						}, console.log("state -", this.state));
					},
					(error) => {
						this.setState({
							isLoaded: true,
							error
						})
					});
		}
		//fetching data specifically from the living room api, products are rendered using the living room filter button// 

		this.livingRoom = () => {
			fetch('/api/products/Living_Room')
				.then((res) => res.json())
				.then(
					(data) => {
						this.setState({
							isLoaded: true,
							products: data

						}, console.log("state -", this.state));
					},
					(error) => {
						this.setState({
							isLoaded: true,
							error
						})
					});
		}

		//fetching data specifically from the bed room api, products are rendered using the bed room filter button// 


		this.bedRoom = () => {
			fetch('/api/products/Bed_Room')
				.then((res) => res.json())
				.then(
					(data) => {
						this.setState({
							isLoaded: true,
							products: data

						}, console.log("state -", this.state));
					},
					(error) => {
						this.setState({
							isLoaded: true,
							error
						})
					});
		}
	}

	//fethcing all data from the all products api runs code when the products component fully mounts // 

	componentDidMount() {
		fetch('/api/users/allProducts')
			.then((res) => res.json())
			.then(
				(data) => {
					this.setState({
						isLoaded: true,
						products: data

					}, console.log("state -", this.state));
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					})
				});

	}

	//Buttons used to filter through products, onClick event is used to populate the products in each category//

	render() {
		return (
			<div>
				<div className="header">
					<h1 className="headerContent">Browse our luxorious living and bedroom sets</h1>
				</div>

				<div className="filterBtn" >
					<button className="buttons" onClick={this.allProducts}>All Furniture</button>
					<button className="buttons" onClick={this.livingRoom}>Living Room Furniture</button>
					<button className="buttons" onClick={this.bedRoom}>Bed Room Furniture</button>
				</div>

				<div className="wrap">
					{this.state.products.map((products, index) => {
						console.log(products);
						//This component is used to map all data provided by the api//
						return (
							<div className="div">
								<Furniture
									img={products.Images}
									name={products.product_Name}
									price={products.Price}
									description={products.About}
								/>
							</div>
						);
					})}

				</div>
			</div>
		);
	}
}



