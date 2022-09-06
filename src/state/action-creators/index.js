export const addMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type : 'add',
            payload : amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type : 'withdraw',
            payload : amount
        })
    }
}