import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { Navbar } from "../../../src/ui"


const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}) )


describe('Pruebas en Navbar', () => { 
    
    const contextValue={
        logged: true,
        user: {
            name:'Ash',
            id:'123'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )

    test('Debe Mostrar el nombre del usuario', () => {
        
        render(
            <MemoryRouter  >
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getByText('Ash')).toBeTruthy()
        //screen.debug()

    })

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        
        render(
            <MemoryRouter  >
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const LogoutBtn = screen.getByRole('button')
        fireEvent.click( LogoutBtn )

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true})

    })

})