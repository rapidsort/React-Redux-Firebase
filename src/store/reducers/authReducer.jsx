const initState={
    authError: null
}

const authReducer = (state= initState, action) =>{

    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            };

        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;

        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            };

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            };

        default:
            return state;
    }

}

export default authReducer;
