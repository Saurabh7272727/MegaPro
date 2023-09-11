import { createContext, useState, useEffect } from 'react';

export const DataTransfer = createContext();
export const CartPageNew = createContext();
export const DeleteItems = createContext();
const AppProvider = ({ children }) => {
    const [items, setItems] = useState({
        img: "",
        title: "",
        counter: "",
        totalamount: "",
        price: "",
    })
    const [arrayData, setarrayData] = useState([]);
    const addtoCart = (img, title, counter, totalamount, price, id) => {
        return setItems({
            img: img,
            title: title,
            counter: counter,
            totalamount: totalamount,
            price: price,
            id: id,
        });
    }
    useEffect(() => {
        setarrayData((saurabh) => {
            return [...saurabh, items]
        });
    }, [items])



    return (
        <DataTransfer.Provider value={addtoCart}>
            <CartPageNew.Provider value={arrayData}>
                <DeleteItems.Provider value={setarrayData}>
                    {children}
                </DeleteItems.Provider>
            </CartPageNew.Provider>
        </DataTransfer.Provider>
    )
}

export default AppProvider;