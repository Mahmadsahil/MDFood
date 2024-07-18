import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import NavigationBar from '../NavigationBar';
import '@testing-library/jest-dom';

test('Should have a cart icon in NavigationBar', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <NavigationBar />
            </Provider>
        </BrowserRouter>
    );

    const cartIcon = screen.getByRole('img', { name: /Logo/i });
    expect(cartIcon).toBeInTheDocument();

    const cartCount = screen.getByText(/0/);
    expect(cartCount).toBeInTheDocument();

    
});
