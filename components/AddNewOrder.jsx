import { useState } from "react";

const AddNewOrder = () => {

    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // to calculate total cost
    const calculateTotalCost = (id) => {
        let Items = customersOrders[id-1].orderItems;
        let totalCost = 0;
        for (const item of Items) {
            let result = parseInt(item.price) * parseInt(item.amount);
            totalCost = totalCost + result;
        }
        return totalCost;
    }


    return (
        <div className="sidebar sidebar-container">
            <div className="sidebar-header">
                <h1>Creating A New Order</h1>
            </div> 
            <div className="order-items-title">
                <h3>Order items</h3>
                <h4>5 items</h4>
            </div>
            <div className="order-items-box">
                <div className="selected-item">
                    <div className="selected-item-name">Espresso</div>
                    <div className="selected-item-details">2 x 4,000 IQD</div>
                    <div className="selected-item-delete"><img src="images/cancel.svg" alt="Cancel" /></div>
                </div>
            </div>
            <div className="order-input">
                <div className="order-input-header">Enter customer details</div>
                <div className="order-input-name">
                    <p>Name</p>
                    <input type="text" name="Name" placeholder="Customer name" />
                </div>
                <div className="order-input-phone">
                    <p>Phone number</p>
                    <input type="text" name="Phone Number" placeholder="Phone number" />
                </div>
            </div>
            <div className="order-save-btn">
                <button>Save This order</button>
            </div>
        </div>
    )
}

export default AddNewOrder;
