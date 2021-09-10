import { useState, useEffect } from 'react';
import { customersOrders } from '../orders';

const Orders = () => {

    const [orders, setOrders] = useState();

    useEffect( async () => {

        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        const res = await fetch("https://jsonplaceholder.typicode.com/users", requestOptions);
        const data = await res.json();
        setOrders(data);
      }, []);

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }

        setSelected(i);
        console.log(selected);
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const calculateTotalCost = (id) => {
        let Items = customersOrders[id-1].orderItems;
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

    return (
        <div className="wrapper">
            <div className="order-list-header">
                <h2 className="order-list-name">All Orders</h2>
                <p className="order-list-amount">{orders ? `${customersOrders.length} orders`: "none"}</p>
            </div>
            <div className="accordion">
                {!!orders ? (
                    customersOrders?.map((order, i) => (
                        <div className="item" key={i}>
                            <div className="item-title" onClick={() => toggle(i)}>
                                <h2>{'#'+order.id+" order"}</h2>
                                <p>{order.createdAt}</p>
                                <span className={selected == i ? "rotate":""}>+</span>
                            </div>
                            <div className={selected == i ? "item-content show":"item-content"}>
                                <div className="order-details">
                                    <div className="total-cost">
                                        <div className="total-cost-title">Total cost</div>
                                        <div>{`${numberWithCommas(calculateTotalCost(order.id))} IQD`}</div>
                                    </div>
                                    <div className="phone-number">
                                        <div className="phone-number-title">Phone number</div>
                                        <div>{order.phone}</div>
                                    </div>
                                    <div className="action">
                                        <button className={order.notified ? "action-btn notify-btn notified":"action-btn notify-btn"}>Notify</button>
                                        <button className="action-btn delete-btn">Delete</button>
                                    </div>
                                </div>
                                <div className="order-items-list">
                                    <div className="order-items-list-header">
                                        <div className="order-items-list-name">Order Items</div>
                                        <div className="order-items-list-length">{order.orderItems.length + " items"}</div>
                                    </div>
                                    <div className="order-items-list-table">
                                        <div className="order-items-list-table-row first-row">
                                            <div className="name">Name</div>
                                            <div className="quantity">Quantity</div>
                                            <div className="price">Price</div>
                                        </div>
                                        {order.orderItems?.map((item) => (
                                            <div className="order-items-list-table-row">
                                                <div className="name">{item.name}</div>
                                                <div className="quantity">{item.amount}</div>
                                                <div className="price">{`${numberWithCommas(item.price)} IQD`}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                )
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

const data = [
    {
        title: "hello world 1",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore assumenda a soluta aspernatur tenetur est cupiditate recusandae, consequuntur dolorem! Exercitationem, rerum praesentium ratione recusandae nobis dolore sit laboriosam ad?`
    },
    {
        title: "hello world 2",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore assumenda a soluta aspernatur tenetur est cupiditate recusandae, consequuntur dolorem! Exercitationem, rerum praesentium ratione recusandae nobis dolore sit laboriosam ad?`
    },
    {
        title: "hello world 3",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore assumenda a soluta aspernatur tenetur est cupiditate recusandae, consequuntur dolorem! Exercitationem, rerum praesentium ratione recusandae nobis dolore sit laboriosam ad? `
    },
]