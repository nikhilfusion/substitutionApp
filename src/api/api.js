import axios from 'axios';
export default class api {
	static getUser() {
		return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        resolve(result.data);
      })
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	  })	
	}
}
