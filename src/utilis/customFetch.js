const is_ok = true; 
export const customFetch = (time, task) => {
    return new Promise((res, rej) => {
        setTimeout(() =>{

        }, time)
        if(is_ok){
            res(task)
        } else{
            console.log(rej)
        }
    })

};
    
