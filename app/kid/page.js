"use client"
import { useDispatch } from "react-redux";
import { Kids } from "../data";
import { addToCart } from "@/store/CreateSlice/slice";
import { v4 as uuidv4 } from 'uuid';


export default function kid() {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        const newItem = {
          ...item,
          id: uuidv4(),
        }
        dispatch(addToCart(newItem));
      };
    

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-5">
                <u>Kid's Category</u>
            </h1>
            <div className="row">
                {Kids.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card text-center h-100">
                            <img
                                src={item.src}
                                alt={item.name}
                                className="card-img-top"
                                style={{ maxHeight: "150px", objectFit: "contain" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    Price: <b>${item.price}</b>
                                </p>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 
