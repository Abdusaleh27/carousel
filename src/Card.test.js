import React from "react";
import { render,fireEvent, screen } from "@testing-library/react";
import Card from "./Card";

//smoke test
test("Card renders", () =>{
    render(<Card />);
});

//snapshot test
test("Card snapshot", () =>{
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});