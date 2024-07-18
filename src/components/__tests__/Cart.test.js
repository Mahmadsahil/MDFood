import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";

test("Should load heading inside Cart component",async  () => {
  await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    })

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load button inside Cart component",async  () => {
  await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    })

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})