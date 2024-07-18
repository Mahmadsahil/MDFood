import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from "../Body";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Restaurant_API_Data from '../../mocks/Restaurant_API_Data.json'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Restaurant_API_Data);
        }
    });
});


describe("Body Component", () => {

    test("Should render WhatsOnMind Text on Body Component", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                </BrowserRouter>
            )
        }
        )
        const testData = screen.getByText(/What's on your mind/);
        expect(testData).toBeInTheDocument();
    })

    test("Should render Filter Text on Body Component", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                </BrowserRouter>
            )
        }
        )
        const testData = screen.getByText(/Filter/);
        expect(testData).toBeInTheDocument();
    })

    test("Should render button on Body Component", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                </BrowserRouter>
            )
        }
        )
        const button = screen.getAllByRole('button');
        expect(button.length).toBe(5);
    })

})
