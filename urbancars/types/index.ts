import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyle?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;   
    btnType?: "button" | "submit" | "reset";
}


export interface SearchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
  }