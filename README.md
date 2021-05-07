# The Shoppies Movie Nominations

* User Features:
  * Users can search movies using the search input. Results are powered by the [OMDb API](http://www.omdbapi.com/).
  * Users can nominate movies from the search results. The nomination button becomes disabled once it is clicked.
  * Users can remove nominated movies if they are having second thoughts. The nomination button becomes enabled again in the search results.
  * Users will receive a notification from the top of the screen once they have nominated five movies.
  * Users will be presented with the option to submit their nomination list once there are five movies nominated. Once submitted they will receive a notification thanking them for their submission and the page will refresh.
  * Users that have already nominated five nominees and try to nominate another  will receive a notification warning them to first remove a movie from their nomination list.
  * Users can view the code on GitHub or contact the developer via the buttons at the top right of the screen.

* Technical Notes:
  * The OMDb API would sometimes return duplicate results with duplicate keys. In order for React to handle the results properly a filter function was used to remove duplicates.
  * Many movies return 'N/A' instead of a movie poster. A default image was set for these instances.
  * Tests were written using React Testing Library to test:
    * Overall snapshot of the application
    * Use case to search for a movie
    * Use case to nominate a movie
    * Use case to remove a movie from nomination

* Notes For Future Improvements:
  * Use Material UI or some other library to enhance aesthetics of page.
  * Use pagination to allow user to search through more results per query.
  * Use local storage to retain nominations state if user navigates away from page.
