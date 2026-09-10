export const initialState = {
  cartList: [],
};

const cartReducers = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const prod = action.payload;
      const exist = state.cartList.some((item) => item.id === prod.id);
      if (exist) {
        return {
          ...state,
          cartList: state.cartList.map((item) =>
            item.id === prod.id ? { ...item, sq: 1 } : item,
          ),
        };
      }
      return { ...state, cartList: [...state.cartList, { ...prod, sq: 1 }] };
    }

    case "INC_QUANTITY":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload ? { ...item, sq: item.sq + 1 } : item,
        ),
      };

    case "DEC_QUANTITY":
      return {
        ...state,
        cartList: state.cartList
          .map((item) =>
            item.id === action.payload ? { ...item, sq: item.sq - 1 } : item,
          )
          .filter((item) => item.sq > 0),
      };

    case "CLEAR_CART":
      return {
        cartList: [],
      };

    default:
      return state;
  }
};

export default cartReducers;
