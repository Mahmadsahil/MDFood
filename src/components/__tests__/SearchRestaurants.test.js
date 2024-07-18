import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import WhatsOnYourMinditem from "../WhatsOnYourMinditem";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import SearchRestaurants from "../SearchRestaurants";


describe("Test SearchRestaurants", () => {

    test('should render input on SearchRestaurants component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <SearchRestaurants />
                </Provider>
            </BrowserRouter>
        )

        const textbox = screen.getByRole("textbox");
        expect(textbox).toBeInTheDocument();
    })

    test('should render button on SearchRestaurants component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <SearchRestaurants />
                </Provider>
            </BrowserRouter>
        )

        const button = screen.getByRole("button", { name: "Search" });
        expect(button).toBeInTheDocument();

    })

   })