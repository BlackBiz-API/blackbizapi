import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Account from './Account';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

jest.mock("clipboard-polyfill");
jest.mock("axios", () => ({
    get: jest.fn(),
    post: jest.fn(),
  }));

describe('Account component', () => {
    test('renders the component with the initial state of sign up form', () => {
      render(<Account />);
  
      expect(screen.getByText(/Get new Key/i)).toBeInTheDocument();
      expect(screen.getByText(/Already Have an Account/i)).toBeInTheDocument();
    });
  
    test('toggles between the registration and login forms', () => {
      render(<Account />);
  
      const signupBtn = screen.getByText(/Get new Key/i);
      const loginBtn = screen.getByText(/Already Have an Account/i);
  
      fireEvent.click(loginBtn);
      expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  
      fireEvent.click(signupBtn);
      expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    });
  
    test('simulates user registration', async () => {
      axios.post.mockResolvedValue({
        data: {
          apiKey: 'sample-api-key',
        },
      });

      render(<Account />);
      fireEvent.click(screen.getByText(/Get new Key/i));

        fireEvent.change(screen.getByPlaceholderText(/First Name/i), {
        target: { value: 'John' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Last Name/i), {
        target: { value: 'Doe' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {
        target: { value: 'john@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Username/i), {
        target: { value: 'john.doe' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), {
        target: { value: 'password123' },
        });

        fireEvent.click(screen.getByText(/Submit/i));

        await waitFor(() => expect(axios.post).toHaveBeenCalled());

        const response = await axios.post.mock.results[0].value;
        expect(response.data.apiKey).toEqual('sample-api-key');
    });

    test('simulates user login', async () => {
        axios.post.mockResolvedValue({
          data: {
            apiKey: 'sample-api-key',
          },
        });
    
        render(<Account />);
        fireEvent.click(screen.getByText(/Already Have an Account/i));
    
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {
          target: { value: 'john.doe@gmail.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), {
          target: { value: 'password123' },
        });
    
        fireEvent.click(screen.getByText(/Submit/i));

        await waitFor(() => expect(axios.post).toHaveBeenCalled());

        const response = await axios.post.mock.results[0].value;
        expect(response.data.apiKey).toEqual('sample-api-key');
      });


  });