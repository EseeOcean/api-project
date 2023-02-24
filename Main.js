let getData = (catName) => {
   return fetch("https://api.api-ninjas.com/v1/cats?name=" + catName, {
      headers: {
         'X-Api-Key': 'PCL7RuQ3Cf6HyAgUyg+mKg==ouuSMUK2EC0AGVNs',
      }
   }).then((response) => response.json())
}




let submitQuery = (e) => {

   e.preventDefault();

   let value = document.querySelector("#cat_search").value;

   getData(value).then(function (data) {

      console.log(data);
let firstItem = data[0];

console.log(firstItem);
// console.log(firstItem)
      // Get first item from list
      // Then show in below html in structured way
      
      let showData = `<ul>
      <li><b> name</b> ${firstItem.name}</li>
    <li><b>min_weight</b>${firstItem.min_weight}</li>
   <li><b>max_weight</b>${firstItem.max_weight}</li>
    <li><b>min_life_expectancy</b>${firstItem.min_life_expectancy} </li>
    <li><b>max_life_expectancy</b>${firstItem.max_life_expectancy} </li>
   <li><b>shedding</b>: ${firstItem.shedding}</li>
    <li><b>family_friendly</b>${firstItem.family_friendly} </li>
    </ul>
    </p>
    `

      document.querySelector("#output").innerHTML = showData

   })

}
