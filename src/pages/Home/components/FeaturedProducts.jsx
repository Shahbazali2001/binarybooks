import {useState, useEffect} from "react";
import ProductCard from "../../../components/Elements/ProductCard";


const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function featuredProducts() {
     try{

      const response = await fetch('http://localhost:5000/featured_products');
      const data = await response.json();
      setProducts(data);
      
     }catch(error){
       console.error('Error fetching featured products:', error);
     }
      
    }
    featuredProducts();

  }, []);



  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
          <div className="flex flex-wrap justify-center lg:flex-row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}   
          </div>
    </section>
  );
};

export default FeaturedProducts;
