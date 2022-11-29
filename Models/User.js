let User = function(firebaseUser){
    let x = {
        displayName: '',
        email: '',
    }

    if(firebaseUser){
        x.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        x.email = firebaseUser.email ? firebaseUser.email : '';
    }

    return x;
}

export default User;