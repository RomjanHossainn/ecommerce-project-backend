
const SingleProduct = ({product}) => {

    const { title, description, image, price, rating, category }= product || {};
    


    return (
      <div className="border rounded-md p-6 text-center cursor-pointer">
        <div className="">
          <img src={image} className="h-72 mx-auto" alt="" />
        </div>
        <div className="mt-5">
          <p className="text-lg font-semibold">{price}$</p>
          <h5>{title}</h5>
        </div>
      </div>
    );
};

export default SingleProduct;