import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function Form({ onSubmit, placeholder = "Digite aqui...", buttonLabel = "Enviar", initialValue = "" }) {
    const [value, setValue] = useState(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim())
            return;
        onSubmit(value);
        setValue("");
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", value: value, onChange: e => setValue(e.target.value), placeholder: placeholder }), buttonLabel && _jsx("button", { type: "submit", children: buttonLabel })] }));
}
