import React from 'react'
import styles from './MyForm.module.css'

export const MyForm = () => {
  return (
    <section className={styles.form_container}>
        <form action="" >
            <fieldset className={styles.form_content}>
                <legend>Informações para contato</legend>
                <div className={styles.form_item}>
                    <label htmlFor='nome'>Nome: </label>
                    <input type="text" name='nome' placeholder='Digite seu nome' />
                </div>
                <div className={styles.form_item}>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="text" name='telefone' placeholder='(00) 00000-0000'/>
                </div>
                <div className={styles.form_item}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="mail" name='email' placeholder='email@seuEmail.com'/>
                </div>
                <div className={styles.form_item}>
                    <button>Enviar</button>
                </div>
            </fieldset>
        </form>
    </section>
  )
}
