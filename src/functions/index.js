export const dateProcessor = (data) => {
    if(data ==false){
        return 'deadline haven\'t set'
    }
    let newDate = data.substring(8, 10)+'.'+data.substring(5, 7)+'.'+data.substring(0, 4)
    return newDate  
}