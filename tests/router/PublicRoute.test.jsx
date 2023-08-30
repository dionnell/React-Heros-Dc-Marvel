import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('pruebas en Prublic Route', () => {

    test('debe de mostrar el children si no esta autenticado', () => { 
        
        const contextValue= {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
            )

        expect( screen.getByText('Ruta Publica') ).toBeTruthy()
        //screen.debug()

    })

    test('Debe de Navegar si esta Autenticado', () => {
        
        const contextValue= {
            logged: true,
            user: {
                name:'Ash',
                id:'123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    
                    <Routes>
                        <Route path='/login' element={ 
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute> 
                        } />

                        <Route path='/dc' element={ <h1>Pagina DC</h1> } />
                    </Routes>
                    
                    
                </MemoryRouter>
            </AuthContext.Provider>
            )

            expect( screen.getByText('Pagina DC') ).toBeTruthy()
            //screen.debug()

    })

})