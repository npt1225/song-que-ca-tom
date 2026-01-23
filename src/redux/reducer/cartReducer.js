const stateDefault = {
    cartItems: [] // mảng giỏ hàng
};

export const CartReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const item = action.product;

            // kiểm tra đã có trong giỏ chưa
            const index = state.cartItems.findIndex(
                p => p.id === item.id
            );

            if (index !== -1) {
                // đã có → tăng số lượng
                state.cartItems[index].quantity += 1;
            } else {
                // chưa có → thêm mới
                state.cartItems.push({
                    ...item,
                    quantity: 1
                });
            }

            return { ...state };
        }

        default:
            return state;
    }
};
