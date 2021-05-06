import React from 'react';
import NominationsPage from "./NominationsPage";
import { screen, render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('Nominations Page Container', () => {

  it('searches for movies when a search term is typed', () => {
    render(<NominationsPage />);

    const searchInput = screen.getByPlaceholderText('Search For A Movie...')

    user.type(searchInput, 'ninja');

    return waitFor(() => {
      expect(screen.getByTestId('movies')).not.toBeEmptyDOMElement();
    });
  });
});
