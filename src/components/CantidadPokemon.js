import React from 'react'
//import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const CantidadPokemon = (props) => {

    // AS HOOK
    const game_shop = useSelector((state) => state.game_shop) 

    return (
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    )
}

/*const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
}*/

//export default connect(mapStateToProps)(CantidadPokemon) 
export default CantidadPokemon