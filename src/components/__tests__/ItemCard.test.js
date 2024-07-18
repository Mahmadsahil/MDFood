import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import ItemCard from "../ItemCard";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import ItemListMockData from "../../mocks/ItemListMockData.json"

test("Should render ItemCard in ItemCard Component", () => {
    render(
        <Provider store={appStore}>
            <ItemCard item={ItemListMockData[0]} />
        </Provider>
    );

    const data = screen.getByTestId("ItemCardid");
    expect(data).toBeInTheDocument();
})

test("Should render image1 in ItemCard Component", () => {
    render(
        <Provider store={appStore}>
            <ItemCard item={ItemListMockData[0]} />
        </Provider>
    );

    const imgData = screen.getByAltText('veg');
    expect(imgData).toBeInTheDocument();
})

