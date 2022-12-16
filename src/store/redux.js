const { createSlice, configureStore } = require("@reduxjs/toolkit");
const { act } = require("react-dom/test-utils");

const Favoris = createSlice({
    name:"favoris",
    initialState: [],
    reducers:{
        ajouterPerso: (state, action)=>{
            const NewPersoFavoris ={
                id: Math.random*Math.random,
                text: action.payload
            }
            //state.push(ajouterPerso);
        },
        supprimerPerso: (state, action)=>{
            state = state.filter((t)=> t.id !== action.payload);
        }
    }

})
//export const {ajouterPerso, supprimerPerso} = favorisSlice.actions;

//export const store = configureStore({
//    reducer:{
//        favoris: favorisSlice.reducer,
//    },
//})