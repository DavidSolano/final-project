let User = function(firebaseUser){
    let x = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
    }

    if(firebaseUser){
        x.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        x.email = firebaseUser.email ? firebaseUser.email : '';
        x.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        x.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }

    return x;
}

export default User;