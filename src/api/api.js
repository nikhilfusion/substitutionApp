import axios from 'axios';
export default class api {
	static getTopSellerMedicines() {
		return new Promise((resolve, reject) => {
      axios.get('http://substitutes.pharmeasy.in:3000/api/getTopSellerMedicines')
      .then((result) => {
        resolve(result.data);
      })
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	  })	
	}
	static getCart() {
		return new Promise((resolve, reject) => {
      axios.get('http://substitutes.pharmeasy.in:3000/api/getCart')
      .then((result) => {
        resolve(result.data);
      })
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	  })	
	}
}
