export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
export interface State {
    currentEnthusiasm: number;
}
export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}
