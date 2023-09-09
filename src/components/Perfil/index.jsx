/* eslint-disable react/prop-types */
import styles from './Perfil.modules.css'

const Perfil = ({nomeUsuario}) => {
    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className='avatar' src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className='name'>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;