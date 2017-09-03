import React, { PropTypes, Component } from 'react';
import './MedicineCard.css';
import { Link } from 'react-router';
import UpdateQuantity from '../Cart/updateQuantity';

// const MedicineCard = ({medName}) => {
// 	const { _medicineId, _medicineName, _formFactor, _packSize, _manufacturer, _quantity, _price, _substitute, _quantityPerFormFactor } = medName;
//   const compareLink = `/compare/${_medicineId}`;
//   return (
//     <div className="medicineCardContainer">
//       <h2>{_medicineName}</h2>
//       <div>{_quantityPerFormFactor}</div>
//       <div>{_formFactor} | {_packSize}</div>
//       <div>{`by ${_manufacturer}`}</div>
//       <div className="priceRxContainer">
//         <div>
//           <span>Prescription Required</span>
//         </div>
//         <div className="priceContainer">Rs. {_price}</div>
//       </div>
//       <div className="quantityContainer">
//         <div className="subsBannerContainer">
//           <span className="subsBanner">Save upto x% more, explore available substitutes</span>
//         	<Link className="subsCount" to={compareLink}>{_substitute && _substitute.length || 0} substitutes</Link>
//         </div>
//         <div></div>
//         <updateQuantity {...medName}/>
//       </div>
//     </div>
//   );
// }

class MedicineCard extends Component {
  
  constructor(props) {
    super(props);
    this.onChange.bind(this);
  }

  onChange(qty, itemId) {
    console.log('qty is ', qty);
    console.log('itemId is ', itemId);
  }

  render(){
    const { medicineID, medicineName, formFactor, packSize, manufacturer, quantity, price, substitutes, quantityPerFormFactor } = this.props.medName;
    const compareLink = `/compare/${medicineID}`;
    return (
      <div className="medicineCardContainer">
        <h2>{medicineName}</h2>
        <div>{quantityPerFormFactor}</div>
        <div>{formFactor} | {packSize}</div>
        <div>{`by ${manufacturer}`}</div>
        <div className="priceRxContainer">
          <div>
            <span>Prescription Required</span>
          </div>
          <div className="priceContainer">Rs. {price}</div>
        </div>
        <div className="quantityContainer">
          <div className="subsBannerContainer">
            <span className="subsBanner">Save upto x% more, explore available substitutes</span>
            <Link className="subsCount" to={compareLink}>{substitutes && substitutes.length || 0} substitutes</Link>
          </div>
          <div className="modifyQtyContainer">
            <UpdateQuantity itemId={medicineID} quantity={0} onChange= {(qty, itemId) => { this.onChange(qty, itemId) }} />
          </div>
        </div>
      </div>
    );
  }
}

export default MedicineCard;

MedicineCard.propTypes = {
  medName: PropTypes.object
};
MedicineCard.defaultProps = {
	medName: {}
};
