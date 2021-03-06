import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { Table } from "reactstrap";

import { getOrdersArr } from "../../redux/reducers/OrdersReducer";
import { loadMyOrders } from "../../redux/actions/orders";
import HomepageLayout from "../Layouts/HomepageLayout";

class OrdersPage extends Component {

	componentDidMount() {
		this.props.loadMyOrders();
	}

	render() {
		const { orders } = this.props;

		return (
			<HomepageLayout className="py-3">
				<h1>My Orders</h1>

				<Table bordered>
					<thead>
						<tr>
							<th>Order #</th>
							<th>User #</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => 
						<tr key={order.id} onClick={() => this.props.goToOrder(order.id)}>
							<th scope="row">{order.id}</th>
							<td>{order.userId}</td>
							<td>{order.totalPrice}</td>
						</tr>
						)}
					</tbody>
				</Table>

			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
	orders: getOrdersArr(state.orders)
});

const mapDispatchToProps = dispatch => ({
	loadMyOrders: () => dispatch(loadMyOrders()),
	goToOrder: (id) => dispatch(push(`/order/${id}`)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersPage);
