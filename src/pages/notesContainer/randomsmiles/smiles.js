import React, {useMemo} from "react";

export const Smiles = () => {
    const smiles = ['🐶', '😀', '😜', '😎', '🙂', '😬', '🤟', '✌️'];
    const changeSmile = useMemo(() => smiles[Math.floor(Math.random() * smiles.length)], []);
    return(
    <div className='smiles'>
        <h1>Nothing found! {changeSmile}</h1>
    </div>
    )
}