import firebase from '../fb'

export function getBlogs(){
    return(dispatch) =>{
        firebase.database().ref('/blogs').on('value', snapshot=>{
            dispatch({
                type:"BLOGS_FETCH",
                payload:snapshot.val()
            })
        })
        
    }
}

export function postBlogs(title, content){
    return(dispatch)=>{
        firebase.database().ref('/blogs').push({title,content})
    }
}

export function deleteBlogs(key){
    return(dispatch)=>{
        firebase.database().ref(`/blogs/${key}`).remove()
    }
}

export function editBlogs(title, content, key){
    return(dispatch)=>{
        firebase.database().ref(`/blogs`).child(key).update({title,content} )
    }
}