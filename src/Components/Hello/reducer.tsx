import { EnthusiasmAction } from "./actions";
import { StoreState } from "./types";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "./constants";

const INITIAL_STATE: StoreState = {
    languageName: "Typescript",
    enthusiasmLevel: 1
};

export default (state = INITIAL_STATE, action: EnthusiasmAction) => {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM: {
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1
            };
        }
        case DECREMENT_ENTHUSIASM: {
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel - 1
            };
        }
        default: {
            return state;
        }
    }
};
