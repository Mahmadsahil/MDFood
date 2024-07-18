import React from "react";
import { act, render, screen } from "@testing-library/react"
import Restorants, { RestauranPromoted } from "../Restorants"
import '@testing-library/jest-dom';
import MOCK_DATA from '../../mocks/restaurantCardMock.json'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from '../../utils/appStore';

test("Should render Restaurant with resData on the screen", () => {
    act(() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Restorants resData={MOCK_DATA} />
                </Provider>
            </BrowserRouter>
        )
    })

    const RestaurantName = screen.getByText("Kamat Annaleela Restaurant");
    expect(RestaurantName).toBeInTheDocument();

});

test("Should render Pramoted Restaurant with Promoted on the screen", () => {
    const PromotedRestorants = RestauranPromoted(Restorants);

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <PromotedRestorants resData={MOCK_DATA} />
            </Provider>
        </BrowserRouter>
    );

    const promotedBadge = screen.getByTestId('promoted');
    expect(promotedBadge).toBeInTheDocument();
});