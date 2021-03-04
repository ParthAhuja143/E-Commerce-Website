export const initialState = {
    basket : [] , 
    user : null ,
    search : ''
}

//Selector
export const getBasketTotal = (basket) => basket?.reduce((amount , item) => item.price + amount , 0)

const reducer = (state ,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET' : return {
            ...state , // Whatever the state was
            basket : [...state.basket , action.item], // Add an item to the current basket
        }


        case 'REMOVE_FROM_BASKET' : 
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        )
        let newBasket = [...state.basket]  // Temp basket

        if(index >= 0){
            newBasket.splice(index , 1)
        }
        else{
            console.warn(`Can't remove product( id : ${action.id} ) as it is not in basket !`)
        }

        return {...state , basket : newBasket}


        case 'SET_USER' : 
        return {...state , user : action.user }

        
        case 'Search' :
        return {...state , search : action.search}


        case 'EMPTY_BASKET' : 
        return {...state , basket : []}


        default : return state
    }
}

export default reducer