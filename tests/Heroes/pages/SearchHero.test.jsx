import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { Search } from "../../../src/Heroes/pages/SearchHero"


const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}) )

describe('Pruebas en SearchHero', () => { 
    
    beforeEach( () => jest.clearAllMocks() )

    test('debe de mostrarse correctamente con valores por defecto', () => { 
        
        const {container} = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
        //screen.debug()
        
    })

    test('debe de mostrar a batman y el input con el valor del queryString', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('none')

        //screen.debug()
        
    })

    test('debe de mostrar un Error si no encuenta el hero', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=robocop']}>
                <Search />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('')

        //screen.debug()
        
    })

    test('debe de Llamar el Navigate a la pantalla nueva', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <Search />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.change( input, { target: {name: 'searchText', value:'green' } })
        
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect( mockedUseNavigate ).toHaveBeenCalledWith("?q=green")

        //screen.debug()
        
    })


})