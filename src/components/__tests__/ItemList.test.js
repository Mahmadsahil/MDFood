import React, { act } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ItemList from "../ItemList";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import ItemListMockData from '../../mocks/ItemListMockData.json'

test("Should render  in ItemList component", async () => {
    await act(async () => {

        await render(
            <Provider store={appStore}>
                <ItemList items={ItemListMockData} />
            </Provider>
        )
    })

    const data = screen.getByTestId("ItemList");
    expect(data).toBeInTheDocument();
}) 