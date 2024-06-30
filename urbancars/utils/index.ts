// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '5704ae7d40mshda89451df5d1158p15c06fjsn41847b31f738',
// 		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


export async function fetchCars(){
    const headers =    {
        
            'x-rapidapi-key': '5704ae7d40mshda89451df5d1158p15c06fjsn41847b31f738',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }


const response =await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {headers:headers});

const result = await response.json();

return result ;
}

