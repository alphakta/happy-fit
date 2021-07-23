            var i;
            select("SELECT * FROM repas WHERE imageRepasRecto = 'none.png'").then((data) => {
                for(i = 0; i < data.length; i++)
                {
                    addNom(data[i].designationRepas)
                    addTemps(data[i].tempsPrepa)
                    addIngredient(data[i].listeIngredient)
                    addRecette(data[i].recetteRepas)
                    addLipide(data[i].lipidesRepas)
                    addGlucide(data[i].glucideRepas)
                    addProteins(data[i].proteinesRepas)
                    addCalories(data[i].nbCaloriesRepas)    
                 }  
                });