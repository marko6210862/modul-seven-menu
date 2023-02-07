function MyRecipeComponent ({label, image, calories, ingredients}) {
    return (
<div>
    <div className="container">
        <h3>{label}</h3>
    </div>    
    <div className="container"> 
        <img className="tasty" src={image} alt='foto'/>
    </div>

<ul className="list">
    {ingredients.map(ingredient => (
    <li><img className="check" src="https://img.icons8.com/puffy/512/experimental-checkmark-puffy.png" alt="icon"/> {ingredient}</li>
    ))}
</ul>

    <div className="container">       
        <p className="par">{calories.toFixed()} calories</p>
    </div>
</div>
)
}

export default MyRecipeComponent;