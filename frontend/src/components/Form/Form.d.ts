interface InputFormProps {
    onSubmit: (value: string) => void;
    placeholder?: string;
    buttonLabel?: string;
    initialValue?: string;
}
export declare function Form({ onSubmit, placeholder, buttonLabel, initialValue }: InputFormProps): import("react/jsx-runtime").JSX.Element;
export {};
