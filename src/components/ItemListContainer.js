import ItemCount from './ItemCount';

const ItemListContainer = ( { stockLimit } ) => { 
    
    {/*Renderizado*/}
    return(
        <>          
            <ItemCount stockLimit="5"/>
        </>
    )
};

export default ItemListContainer;