import * as React from "react";
import { Props, State } from "./types";
import * as actions from "./actions";
import { StoreState } from "./types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
//Stateless Function Component
const FunctionHello = ({ name, enthusiasmLevel = 1 }: Props) => {
    if (enthusiasmLevel <= 0) {
        throw new Error("Bit more enthusiasm plz");
    }
    return (
        <div data-test="hello">
            <div data-test="greeting">
                Hello {name + getExclaimationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
};

//Stateful Component
class ComponentHello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }
    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }
    // TODO: Implement this.props.enthusiasmLevel
    render() {
        const { name } = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error("Could be a bit more enthusiasitic");
        }

        return (
            <div data-test="hello-div">
                <div data-test="greeting-div">
                    Hello{" "}
                    {name + getExclaimationMarks(this.state.currentEnthusiasm)}
                </div>
                <button
                    data-test="increment-button"
                    onClick={() => actions.incrementEnthusiasm()}
                >
                    +
                </button>
                <button
                    data-test="decrement-button"
                    onClick={() => actions.decrementEnthusiasm()}
                >
                    -
                </button>
            </div>
        );
    }
}
const getExclaimationMarks = (numChars: number) => {
    return Array(numChars + 1).join("!");
};

const mapStateToProps = (
    { enthusiasmLevel, languageName }: StoreState,
    ownProps: Props
) => {
    return {
        enthusiasmLevel: ownProps.enthusiasmLevel || enthusiasmLevel,
        name: ownProps.name,
        languageName
    };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentHello);

export { FunctionHello, ComponentHello as UnconnectedHello };
