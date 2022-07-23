import {render,screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Header from './Header'
describe('Header Component',() => {
  test('renders "Watch Now" heading name', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const linkElement = screen.getByText(/Watch Now/);
    expect(linkElement).toBeInTheDocument();
  });
  test('does not render small case in "watch now" heading name', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const linkElement = screen.queryByText(/watch now/);
    expect(linkElement).toBeNull();
  });
  test('renders "Movies" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const moviesLinkElement = screen.getByText('Movies' , {exact : false})
    expect(moviesLinkElement).toBeInTheDocument();
  })
  test('renders "Add Movie" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const addMovieLinkElement = screen.getByText('Add Movie' )
    expect(addMovieLinkElement).toBeInTheDocument();
  })
  test('renders "Favorites" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const favoritesLinkElement = screen.getByText('Favorites' )
    expect(favoritesLinkElement).toBeInTheDocument();
  })
})