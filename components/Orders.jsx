import { useState, useEffect } from 'react';
import { URL } from '../api/hello';

const Orders = () => {

    const [orders, setOrders] = useState();
    const [selected, setSelected] = useState(null);

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
        let Items = orders.customers[id-1].orderItem;
        let totalCost = 0;
        for (const item of Items) {
            let result = parseInt(item.price) * parseInt(item.amount);
            totalCost = totalCost + result;
        }
        return totalCost;
    }

    const hidePhoneNumber = (phone) => {
        let newPhone = "";
        phone = phone.split('');
        for(const i in phone){
            if( i > 3 && i < 8){
                newPhone = newPhone + phone[i];
            }
            else {
                newPhone = newPhone + phone[i];
            }

        }
        return newPhone;
    }

    const notifyUser = (id) => {
        console.log(`${id} notified`);
    }

    const deleteOrder = (id) => {
        console.log(`${id} deleted`);
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
                                <h2>{'#'+(i+1)+" order"}</h2>
                                <p>{order.CreatedAt}</p>
                                <span className={selected == i ? "rotate":""}>+</span>
                            </div>
                            <div className={selected == i ? "item-content show":"item-content"}>
                                <div className="order-details">
                                    <div className="total-cost">
                                        <div className="total-cost-title">Total cost</div>
                                        <div>{`${numberWithCommas(calculateTotalCost(order.CustomerId))} IQD`}</div>
                                    </div>
                                    <div className="phone-number">
                                        <div className="phone-number-title">Phone number</div>
                                        <div>{order.phone}</div>
                                    </div>
                                    <div className="action">
                                        <button onClick={() => notifyUser(order.CustomerId)} className={order.notified? "action-btn notify-btn notified":"action-btn notify-btn"}>Notify</button>
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
        </div>
    );
};

export default Orders;