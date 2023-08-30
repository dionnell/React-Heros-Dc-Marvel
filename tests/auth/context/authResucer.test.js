import { authReducer, types } from "../../../src/auth"

describe('Pruebas en el authReducer ', () => { 
    
    test('Debe Retornar el Estado por defecto', () => { 
        
        const state = authReducer({ logged: false }, {} )

        expect(state).toEqual({ logged: false })
    })

    test('debe llamar el login autenticar y establecer el user', () => {
        
        const action ={
            type: types.login,
            payload: {
                name:'Bruce',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('debe el logout borrar el name del usuario y logged en false', () => {
        
        const state ={
            logged: true,
            user: {
                id:'123',
                name:'Bruce'
            }
        }

        const action ={
            type: types.logout
        }

        const NewState = authReducer(state, action)
        expect(NewState).toEqual({
            logged: false
        })

    })

})