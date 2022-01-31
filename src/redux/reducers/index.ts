const initialState = {
    people: []
}

export default function reducer(state = initialState, action: any) {
   switch (action.type){
       case 'SET_PEOPLE':{
           return {
               ...state,
               people:[
                   ...state.people,
                   ...action.payload
               ]
           }
       }
       default:
           return state
   }
}
