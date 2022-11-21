import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt=''
        className='searchImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with air conditioning
        </span>
        <span className='siFeatures'>
          Entire studio &#183; 1 bathroom &#183; 21m<sup>2</sup> 1 full bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='siDetailsTexts'>
          <span className='siPrice'>$123</span>
          <spam className='siTaxOp'>Includes tax or fees</spam>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
