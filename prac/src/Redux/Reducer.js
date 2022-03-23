import { ADD_API } from "./ActionType";

const initState = {
    Name: "api",
    data: []
};

export const Fakestore_Reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_API:
            return { ...state, data: [...state.data, ...payload] };
        default:
            return { ...state };
    }
};