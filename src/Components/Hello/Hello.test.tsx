import * as React from "react";
import * as enzyme from "enzyme";
import { ComponentHello } from "./Hello";
import HelloReducer from "./reducer";
import * as constants from "./constants";

describe("Render correctly given correct inputs and throw error given incorrect inputs", () => {
    test("renders correct input when no enthusiasm level given", () => {
        const hello = enzyme.shallow(<ComponentHello name="Test Name" />);
        expect(hello.find(`[data-test='greeting-div']`).text()).toEqual(
            "Hello Test Name!"
        );
    });

    test("Renders the correct text with an explict enthusiasm of 1", () => {
        const hello = enzyme.shallow(
            <ComponentHello name="Test Name" enthusiasmLevel={1} />
        );
        expect(hello.find(`[data-test="greeting-div"]`).text()).toEqual(
            "Hello Test Name!"
        );
    });

    // TODO: test not throwing when enthusiasm set to 0
    // test("Throws when enthusiasm is at 0 ", () => {
    //     const hello = enzyme.shallow(
    //         <ComponentHello name="Test Name" enthusiasmLevel={0} />
    //     );
    //     expect(hello.find(`[data-test="greeting-div"]`).text()).toEqual(
    //         "Could be a bit more enthusiastic"
    //     );
    // });

    test("Throws when enthusiasm is less then 0", () => {
        expect(() => {
            enzyme.shallow(
                <ComponentHello name="Test Name" enthusiasmLevel={-10} />
            );
        }).toThrow();
    });
});

describe("Reducer Test", () => {
    // TODO: figure out why args of type {} not applicable (but test stills runs, typescript will not compile though)
    // it("should return default value when no action performed/initialized", () => {
    //     expect(HelloReducer(undefined, {})).toEqual({
    //         languageName: "Typescript",
    //         enthusiasmLevel: 1
    //     });
    // });
    it("should increment store state by 1 when action.type case INCREMENT_VALUE", () => {
        expect(
            HelloReducer(undefined, { type: constants.INCREMENT_ENTHUSIASM })
        ).toEqual({
            languageName: "Typescript",
            enthusiasmLevel: 2
        });
    });
    it("should decrement store state by 1 when action.type case DECEREMENT_VALUE", () => {
        expect(
            HelloReducer(undefined, { type: constants.DECREMENT_ENTHUSIASM })
        ).toEqual({
            languageName: "Typescript",
            enthusiasmLevel: 0
        });
    });
});
describe("Test Increment/Decrement Buttons", () => {
    let hello: any;
    beforeEach(() => {
        hello = enzyme.shallow(
            <ComponentHello name="test" enthusiasmLevel={2} />
        );
    });
    test("onClick increment number of ! should increase by 1", () => {
        hello.find(`[data-test="increment-button"]`).simulate("click");
        expect(hello.find(`[data-test="greeting-div"]`).text()).toBe(
            "Hello test!!!"
        );
    });
    test("onClick decrement number of ! should decrease by 1", () => {
        hello.find(`[data-test="decrement-button"]`).simulate("click");
        expect(hello.find(`[data-test="greeting-div"]`).text()).toBe(
            "Hello test!"
        );
    });
});
