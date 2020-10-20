export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //removing from basket
      let newBasket = [...state.basket];
      let index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id:${action.id}) as it is not in the `
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      break;
    default:
      return state;
  }
}

export default reducer;
