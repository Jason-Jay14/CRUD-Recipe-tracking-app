import React from "react";

function RecipeTable ({recipes, deleteRecipe}) {
    //Return the recipes as a table.
    return recipes.map((recipe, index) => {
        return (
            <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt={`Graphicof ${recipe.name}`} /></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
            </tr>
        );
    });
}

export default RecipeTable;