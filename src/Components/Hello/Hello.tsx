import * as React from "react";
import { Props, State } from "./types";

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
                    onClick={() =>
                        this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
                    }
                >
                    +
                </button>
                <button
                    onClick={() =>
                        this.updateEnthusiasm(this.state.currentEnthusiasm - 1)
                    }
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

export { FunctionHello, ComponentHello };
