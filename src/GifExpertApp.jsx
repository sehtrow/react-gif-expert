import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Better Call Soul']);    

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;
        setCategories([ newCategory, ...categories ]);        
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory                 
                onNewCategory={ ( event ) => onAddCategory( event )}
            />
                        
                {                       
                    categories.map( ( category ) => 
                        <GifGrid   
                            key={ category } 
                            category={category} />
                    )
                }                            

        </>
        
    )
}
