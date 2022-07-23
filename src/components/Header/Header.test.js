import {render,screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Header from './Header'
describe('Header Component',() => {
  test('renders "Advance Medico" heading name', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const linkElement = screen.getByText(/Advance Medico/);
    expect(linkElement).toBeInTheDocument();
  });
  test('does not render small case in "advance medico" heading name', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const linkElement = screen.queryByText(/advance medico/);
    expect(linkElement).toBeNull();
  });
  test('renders "Home" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const homeLinkElement = screen.getByText('Home' , {exact : false})
    expect(homeLinkElement).toBeInTheDocument();
  })
  test('renders "Add Appointment" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const addAppointmentLinkElement = screen.getByText('Add Appointment' )
    expect(addAppointmentLinkElement).toBeInTheDocument();
  })
  test('renders "Appointments" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const appointmentsLinkElement = screen.getByText('Appointments' )
    expect(appointmentsLinkElement).toBeInTheDocument();
  })
  test('renders "User" Link',() => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const userLinkElement = screen.getByText('User' )
    expect(userLinkElement).toBeInTheDocument();
  })
})