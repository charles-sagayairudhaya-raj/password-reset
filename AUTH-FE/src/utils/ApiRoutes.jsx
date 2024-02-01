const ApiRoutes = {
    SIGNIN : {
         path : '/user/login',
         authenticate : false
    },
    SIGNUP : {
        path : '/user/createUser',
        authenticate : false
    },
    GETALLUSERS : {
        path : '/user',
        authenticate : true
    }
}

export default ApiRoutes