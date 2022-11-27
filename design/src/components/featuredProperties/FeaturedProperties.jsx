import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className='featuredProp'>
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className='propertyItem' key={item._id}>
              <img src={item.photos[0]} alt='image' className='propertyImg' />
              <span className='propertyName'>{item.name}</span>
              <span className='propertyCity'>{item.city}</span>
              <span className='propertyPrice'>
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='propertyRating'>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
