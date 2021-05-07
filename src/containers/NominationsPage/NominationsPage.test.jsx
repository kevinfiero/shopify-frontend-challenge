import React from 'react';
import NominationsPage from "./NominationsPage";
import { screen, render, waitFor, fireEvent, act } from '@testing-library/react';
require('dotenv').config();

describe('Nominations Page Container', () => {
  it('searches for movies when a search term is typed', () => {
    render(<NominationsPage />);

    const searchInput = screen.getByPlaceholderText('Search For A Movie...')

    fireEvent.input(searchInput, {
      target: {
        value: 'ninja',
      },
    });
    
    return waitFor(() => {
      expect(screen.getByTestId('movies')).not.toBeEmptyDOMElement();
    });
  });

  it('press nomination button and populate nominations column', () => {
    render(<NominationsPage />);

    const searchInput = screen.getByPlaceholderText('Search For A Movie...')

    fireEvent.input(searchInput, {
      target: {
        value: 'ninja',
      },
    });

    waitFor(() => {expect(screen.getByTestId('movies')).not.toBeEmptyDOMElement()});

    waitFor(() => {fireEvent.click(screen.getAllByText('Nominate')[0])})
    
    return waitFor(() => {expect(screen.getByTestId('nominations')).not.toBeEmptyDOMElement()});

  });

  it('press remove button', () => {
    render(<NominationsPage />);

    const searchInput = screen.getByPlaceholderText('Search For A Movie...')

    fireEvent.input(searchInput, {
      target: {
        value: 'ninja',
      },
    });

    waitFor(() => {expect(screen.getByTestId('movies')).not.toBeEmptyDOMElement()});

    waitFor(() => {fireEvent.click(screen.getAllByText('Nominate')[0])})
    
    waitFor(() => {expect(screen.getByTestId('nominations')).not.toBeEmptyDOMElement()});

    waitFor(() => {fireEvent.click(screen.getByText('Remove'))})

    return waitFor(() => {expect(screen.queryByTestId('nominations')).toBeFalsy()})

  });
});
