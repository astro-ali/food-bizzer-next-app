import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { URL } from '../api/hello';
import Popup from './Popup';
import { apiSendSMS, apiDeleteOrder } from '../api/hello';

const Orders = () => {

    const router = useRouter();

    const [orders, setOrders] = useState();
    const [selected, setSelected] = useState(null);
    const [togglePopup, setTogglePopup] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect( async () => {

        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        const res = await fetch(`${URL}/orders`, requestOptions);
        const data = await res.json();

        setOrders(data);
      }, []);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }


    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const calculateTotalCost = (id) => {
        console.log(orders.customers);
        let Items = orders.customers[id].orderItem;
        let totalCost = 0;
        for (const item of Items) {
            let result = parseInt(item.price) * parseInt(item.amount);
            totalCost = totalCost + result;
        }
        return totalCost;
    }

    const notifyUser = (phone) => {
        apiSendSMS(phone, (data, error) => {
            if(error){
                console.log(error);
                return alert("Failed to sending SMS notification");
            }
            console.log(data);
            return alert("SMS sent successfully");
        });
    }

    const deleteOrder = (id) => {
        setTogglePopup(true);
        setDeleteId(id);
    }

    const confirmDeleteOrder = () => {
        apiDeleteOrder(deleteId, (res, error) => {
            if(error) return alert("Failed to delete this order");
            console.log(res);
            console.log(`${deleteId} got deleted`);
            router.reload();
        })
        setTogglePopup(false);
    }

    const calculateWaitingTime = (orderTime) => {
        let date2 = new Date(orderTime);
        let now = new Date(); // now time
        let time = date2.getTime();
        let now_time = now.getTime();
        let wait = new Date((now_time - time) - 6 * 60 * 60 * 1000);
        if(wait.getHours() == 0) return `waiting ${wait.getMinutes()}m`;
        return `waiting ${wait.getHours()}h ${wait.getMinutes()}m`;
    }

    return (
        <div className="wrapper">
            <div className="order-list-header">
                <h2 className="order-list-name">All Orders</h2>
                <p className="order-list-amount">{!!orders ? `${orders.customers.length} orders`: "none"}</p>
            </div>
            <div className="accordion">
                {!!orders ? (
                    orders.customers?.map((order, i) => (
                        <div className="item" key={i}>
                            <div className="item-title" onClick={() => toggle(i)}>
                                <h2>{'#'+(i+1)+" "+ order.CustomerName}</h2>
                                <p>{calculateWaitingTime(order.CreatedAt)}</p>
                                <span className={selected == i ? "rotate":""}>+</span>
                            </div>
                            <div className={selected == i ? "item-content show":"item-content"}>
                                <div className="order-details">
                                    <div className="total-cost">
                                        <div className="total-cost-title">Total cost</div>
                                        <div>{`${numberWithCommas(calculateTotalCost(i))} IQD`}</div>
                                    </div>
                                    <div className="phone-number">
                                        <div className="phone-number-title">Phone number</div>
                                        <div>{order.phone}</div>
                                    </div>
                                    <div className="action">
                                        <button onClick={() => notifyUser(order.phone)} className={order.notified? "action-btn notify-btn notified":"action-btn notify-btn"}>Notify</button>
                                        <button onClick={() => deleteOrder(order.CustomerId)} className="action-btn delete-btn">Delete</button>
                                    </div>
                                </div>
                                <div className="order-items-list">
                                    <div className="order-items-list-header">
                                        <div className="order-items-list-name">Order Items</div>
                                        <div className="order-items-list-length">{order.orderItem.length + " items"}</div>
                                    </div>
                                    <div className="order-items-list-table">
                                        <div className="order-items-list-table-row first-row">
                                            <div className="name">Name</div>
                                            <div className="quantity">Quantity</div>
                                            <div className="price">Price</div>
                                        </div>
                                        {order.orderItem?.map((item, i) => (
                                            <div className="order-items-list-table-row" key={i}>
                                                <div className="name">{item.name}</div>
                                                <div className="quantity">{item.amount}</div>
                                                <div className="price">{`${numberWithCommas(item.price)} IQD`}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> )
                )) : (
                    <div className="loading">
                        <h1>Loading ...</h1>
                    </div>
                )}
            </div> 
            <Popup trigger={togglePopup} setClose={setTogglePopup}> 
                <h4 className="confirm-message">Are you sure you want to delete this order?</h4>
                <div className="user-answer">
                    <div onClick={() => confirmDeleteOrder()} className="confirm-btn">Yes</div>
                    <div onClick={() => setTogglePopup(false)} className="cancel-btn">No</div>
                </div>
            </Popup>
        </div>
    );
};

export default Orders;