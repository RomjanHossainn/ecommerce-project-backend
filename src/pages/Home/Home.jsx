import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
    
    const loadededProdcuts = useLoaderData();
    const [isshow,setIsshow] = useState(true)
    
    return (
      <div>
        
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="grid md:grid-cols-2 pt-12 pb-8 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {isshow
              ? loadededProdcuts
                  .slice(0, 8)
                  ?.map((product) => (
                    <SingleProduct
                      key={product._id}
                      product={product}
                    ></SingleProduct>
                  ))
              : loadededProdcuts?.map((product) => (
                  <SingleProduct
                    key={product._id}
                    product={product}
                  ></SingleProduct>
                ))
                }
                
          </div>
          <div className="flex justify-center">
            <button
              className={!isshow ? "hidden" : "btn btn-primary px-8"}
              onClick={() => setIsshow(!isshow)}
            >
              Show All
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
    
};

export default Home;