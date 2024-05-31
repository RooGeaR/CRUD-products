import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList, remove } from "../api/productAPI";
import ProductList from "../components/ProductList";
import CreateBtn from "../components/buttons/CreateBtn";
import Loading from "../components/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getList().then((data) => { 
      setProducts(data);
      setIsLoading(false)
    });
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true)
    await remove(id)
    const newProducts = products.filter(product => product.id !== id)
    setProducts(newProducts);
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center gap-2.5">
      <Link to="produce" state={null} className="self-end">
        <CreateBtn />
      </Link>
      <div className="mt-10">
        {isLoading ? <Loading /> : <ProductList products={products} handleDelete={handleDelete}/>}
      </div>
    </div>
  );
};

export default Home;
