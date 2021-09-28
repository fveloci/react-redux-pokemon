import React from 'react'
import { useSelector } from 'react-redux'

const ResultadoPokemon = () => {

    const buscador = useSelector(state => state.buscador)

    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="text-warning">Buscando...</div>}
            {
            buscador.pokemon.length >= 1 &&
                <div className="text-success">
                <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" style={{width: '200px', height: 'auto', background: 'white', borderRadius: '10px'}}/>
                <span style={{fontSize: '30px', marginLeft: '10px'}}><b>{buscador.pokemon[0].name.toUpperCase()}</b></span>
                </div>
            }
            {buscador.error &&
                <span className="text-danger">{buscador.error}</span>
            }
        </div>
    )
}

export default ResultadoPokemon
