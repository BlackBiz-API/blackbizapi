import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Try from "./Try";

const API = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

jest.mock("axios");

describe("Try component", () => {
  test("renders the component and makes a successful API call", async () => {
    const mockData = {
      data: [
        {
          id: 1,
          name: "Sample Black-Owned Business",
        },
      ],
    };

    axios.get.mockResolvedValue(mockData);

    render(<Try />);

    expect(screen.getByText("🔥 Try it out")).toBeInTheDocument();

    const cityInput = screen.getByPlaceholderText("Enter city");
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    fireEvent.change(cityInput, { target: { value: "new-york" } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/v1/businesses/city/new-york?limit=1`, {
      headers: {
        'x-api-key': `${API}`,
      },
    });

    await waitFor(() => {
        const jsonPrettyElement = screen.getByTestId("json-pretty");
        expect(jsonPrettyElement).toBeInTheDocument();
        expect(jsonPrettyElement).toHaveTextContent("Sample Black-Owned Business");
      });

})
})