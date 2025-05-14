let button = document.querySelector('button');

let input = document.querySelector('input');

let ul = document.querySelector('ul');

let url = 'http://universities.hipolabs.com/search?name=';


async function getColleges(country) {

      
    let result = await axios.get(url + country);
    
    return result.data;
}


function show(colleges) {

ul.innerText = ''

     for (college of colleges) {

         let li = document.createElement('li');

         li.innerText = college.name;

         ul.appendChild(li);
     }
     
     input.value = '';
}


button.addEventListener('click', async ()=> {

try {
    let country = input.value;

    let colleges = await getColleges(country);

    show (colleges);

} catch (err) {

      console.log('Error in fetching data');
}
});




