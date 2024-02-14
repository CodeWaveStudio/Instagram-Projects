const search=document.getElementById('search-dish');
const actBtn=document.getElementById('gen-Btn');
const errorMsg=document.querySelector('.error');
const recipeElement=document.querySelector('.recipe');

search.addEventListener('input',()=>{errorMsg.innerHTML=''});
actBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
    console.log("ursl"+url);
    if(search.value==''){
        e.preventDefault();
        errorMsg.innerHTML='Please Enter Dish Name !';
        return false
    }
    recipeElement.innerHTML='';
    errorMsg.innerHTML='';
    fetch(url).then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        return response.json();
    }).then(data=>{
        console.log(data);
        if(data.meals.length>0){
        const firstChild=data.meals[0];
   if(firstChild!=''){
    //showing image of dish
    const image=document.createElement('img');
    image.src=firstChild.strMealThumb;
    recipeElement.appendChild(image);
    //showing dish name
    const title=document.createElement('h2');
    title.innerText="Dish Name : "+firstChild.strMeal;
    console.log(firstChild.strMeal);
    recipeElement.appendChild(title);
    //showing origin of dish
    const origin=document.createElement('h2');
    origin.innerText="Origin Of Dish : "+firstChild.strArea;
    console.log(origin.strArea);
    recipeElement.appendChild(origin);
   //showing ingredients and their measures
   const ingredientElement=document.createElement('p');
   
    const ingredients=[];
    for(let i=0;i<=20;i++){
        const ingredient=firstChild[`strIngredient${i}`];
        const measures=firstChild[`strMeasure${i}`];
     
        console.log(ingredient+" "+measures);
        if(ingredient && measures){
            ingredients.push(`${ingredient} (${measures})`);
        }
        else if(ingredient){
            ingredients.push(ingredient);
        }
    }
    ingredientElement.innerText=`Ingredients : ${ingredients}`;
 
    recipeElement.appendChild(ingredientElement);
    //show description of cooking
    const descriptionElement=document.createElement('p');
    descriptionElement.innerText=`Intrucion : ${firstChild.strInstructions}`;
    recipeElement.appendChild(descriptionElement);
   }
}
    })
    .catch(error => {
        //  displayAlert(`There was a problem with the fetch operation: ${error.message}`, 'email-alert');
          console.error("There was a problem with the fetch operation:", error);
          errorMsg.innerHTML='Dish Not Found !';
      });
    
})


