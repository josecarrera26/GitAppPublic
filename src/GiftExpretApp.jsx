import {useState} from 'react'
import {AddCategory, GifGrid} from './Components'

export const GiftExpretApp = () => {
  const [categories, setCategories] = useState([])
  
  const onAddCategory = ( newCategory) => {
    if (categories.includes(newCategory)) {
      alert('la categoria' + newCategory + ' ya existe');
      return;
    }
    setCategories([newCategory, ...categories])
    
  }

  
    return (
        <>
        <div>GiftExpretApp</div>
        <AddCategory
          onNewCategory = { onAddCategory}
        />
            {
                categories.map( (category) => (
                        <GifGrid category= {category}
                        key={category}/>
                ))
            }

        </>
  )
}
