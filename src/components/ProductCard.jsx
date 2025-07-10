import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, finalPrice, description, imageUrl } = product;
  const discountPercent = price > 0 ? Math.round(((price - finalPrice) / price) * 100) : 0;
  const navigate = useNavigate();

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
      <div className="w-full h-[400px] bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl mb-6 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="flex justify-center items-center h-full">
            <Star className="w-12 h-12 text-amber-400" />
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="text-lg font-medium text-amber-900 mb-1">{name}</h3>
        <p className="text-amber-700 text-sm mb-2">{description}</p>
        <p className="text-lg font-semibold text-amber-900 mb-2">
          ₹{finalPrice}
          {price > finalPrice && (
            <>
              <span className="text-sm line-through text-amber-600 ml-2">₹{price}</span>
              <span className="text-sm text-green-700 ml-2">({discountPercent}% OFF)</span>
            </>
          )}
        </p>

        <button
          onClick={() => navigate("/cart")}
          className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
