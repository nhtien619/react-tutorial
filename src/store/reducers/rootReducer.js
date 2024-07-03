const initState = {
    users: [
        { id: 1, name: "Tom" },
        { id: 2, name: "Ken" }
    ]
}


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>> run into delete user:', action);
            let users = state.users;
            users = users.filter(u => u.id !== action.payload.id);

            return {
                ...state, users
            }

        case 'ADD_USER':
            console.log('>>>> run into Add user:', action.payload);

            let addUser = action.payload;

            return {
                ...state, users: [...state.users, addUser]
            }

            break;
        case '':
            break;
    }

    return state;
}

export default rootReducer;