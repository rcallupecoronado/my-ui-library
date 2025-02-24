import React, { ChangeEvent } from "react";

export interface DropdownProps {
    options: { value: string; label: string }[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void; // Change here
    disabled?: boolean;
    backgroundColor?: string;
    textColor?: string;
    disabledBackgroundColor?: string;
}