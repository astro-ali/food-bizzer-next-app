import { useState, useRef } from "react";
import useStore from "../store";
import { apiSaveOrder } from '../api/hello';

const AddNewOrder = () => {

    const { orderItems, addOrderItem, emptyOrderItems, deleteOrderItem } = useStore();
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const input_name = useRef();
    const input_phone = useRef();

    // to calculate total cost
    const calculateTotalCost = (list) => {
        let total_cost = 0;
        for (const item of list) {
            total_cost += parseInt(item.amount) * parseInt(item.itemPrice);
        }
        return total_cost.toString();
    }

    const handleName = (e) => {
        setCustomerName(e.target.value);
    }

    const handlePhone = (e) => {
        setPhoneNumber(e.target.value);
    }

    const saveOrder = () => {

        if(input_name.current.value == '') return alert("Name field is empty");

        let new_order_item = [];
        for (const item of orderItems) {
            let new_item = {
                name: item.itemName,
                price: item.itemPrice,
                amount: item.amount
            }
            new_order_item.push(new_item);
        }

        let new_order = {
            CustomerName: customerName,
            phone: phoneNumber,
            total_cost: calculateTotalCost(orderItems),
            orderItem: [...new_order_item]
        }

        apiSaveOrder(new_order, (data, error) => {
            if(error) return alert("Something went wrong");
            console.log(data);
            input_name.current.value = '';
            input_phone.current.value = '';
            emptyOrderItems();
        });

    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className={`sidebar sidebar-container${orderItems.length == 0 ? " hide":""}`}>
            <div className="sidebar-header">
                <h1>Creating A New Order</h1>
            </div> 
            <div className="order-items-title">
                <h3>Order items</h3>
                <h4>{ orderItems.length == 0 ? "no items" : `${orderItems.length} items`}</h4>
            </div>
            <div className="order-items-box">
                {!!orderItems ? (
                    orderItems?.map((item, i) => (
                        <div className="selected-item" key={i}>
                            <div className="selected-item-name">{item.itemName}</div>
                            <div className="selected-item-details">{`${item.amount} x ${numberWithCommas(item.itemPrice)} IQD`}</div>
                            <div className="selected-item-delete" onClick={() => deleteOrderItem(i)}><img src="images/cancel.svg" alt="Cancel" /></div>
                        </div>
                    ))
                ) : (
                    <h3>No items</h3>
                )}
            </div>
            <div className="order-input">
                <div className="order-input-header">Enter customer details</div>
                <div className="order-input-name">
                    <p>Name</p>
                    <input type="text" name="Name" placeholder="Customer name" onChange={handleName} ref={input_name} />
                </div>
                <div className="order-input-phone">
                    <p>Phone number</p>
                    <input type="text" name="Phone Number" placeholder="Phone number" onChange={handlePhone} ref={input_phone} />
                </div>
            </div>
            <div className="order-save-btn">
                <button onClick={() => saveOrder()}>Save This order</button>
            </div>
        </div>
    )
}

export default AddNewOrder;
