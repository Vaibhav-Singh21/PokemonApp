import React from 'react'

export default function PokemonList({ pokemon}) {
    return (
        <div>
            <div style={{textAlign: 'center', color: '#000', padding:'1rem', fontSize:'large',backgroundColor:'#E5D68A'}}>
            {pokemon.map(p =>(
                <div key={p}>
                        {p}</div>
            ))}
            </div>
        </div>
    )
}
