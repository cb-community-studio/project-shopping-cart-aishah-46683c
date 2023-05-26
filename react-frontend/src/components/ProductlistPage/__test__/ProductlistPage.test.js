import React from "react";
import { render, screen } from "@testing-library/react";

import ProductlistPage from "../ProductlistPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productlist page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductlistPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productlist-datatable")).toBeInTheDocument();
    expect(screen.getByRole("productlist-add-button")).toBeInTheDocument();
});
