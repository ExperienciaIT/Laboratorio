import styles from './EmployeeForm.module.css'

export const EmployeeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target) // Prototype Formulario con la informacion de los inputs
    const newData = Object.fromEntries(formData) // Conversion de datos a un objeto clave-valor
    const { nombre, apellido, dni, rol, area, email } = newData
    // Validaciones
    // 1 - Cada campo debe poseer al menos 5 caracteres
    for (const [key, value] of formData.entries()) {
      if (value.length >= 5) continue
      console.error(`El campo ${key} debe tener al menos 5 caracteres`)
    }
    // 2 - Nombre, Apellido, Rol, y Area no deben ser numeros
    const cont = {
      nameIsNumber: !isNaN(nombre),
      surnameIsNumber: !isNaN(apellido),
      roleIsNumber: !isNaN(rol),
      workAreaIsNumber: !isNaN(area),
      dataError: 'Los campos nombre, apellido, rol, y área no deben ser números',
      dniError: 'El número de DNI debe tener 8 caracteres',
      emailError: 'El formato del correo no es valido',
      success: 'El usuario se ha creado con exito'
    }
    if (cont.nameIsNumber || cont.surnameIsNumber || cont.roleIsNumber || cont.workAreaIsNumber) console.error(cont.dataError)
    // 3 - La cantidad de caracteres del DNI no deben ser mas de 8
    else if (dni.length !== 8) console.error(cont.dniError)
    // 4 - El campo mail debe tener el formato correcto
    else if (!email.includes('.')) console.error(cont.emailError)
    // Finalmente - Mostrar mensaje de creacion exitosa de usuario
    else {
      const creationDate = new Date()
      const date = creationDate.getDate()
      const month = creationDate.getMonth() + 1
      const year = creationDate.getFullYear()
      const time = `${creationDate.getHours()}:${creationDate.getMinutes() < 9 ? '0' + creationDate.getMinutes() : creationDate.getMinutes()}`
      console.log(`User created succefully on ${date}/${month}/${year} at ${time}hs`)
      console.log(cont.success)
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h1>Panel de Admin</h1>
        <h2>Creación de Usuarios/Empleados</h2>
      </header>
      <main className={styles.main}>
        <form action='#' className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor='nombre' className={styles.label}>
            <h4 className={styles.data}>Nombre</h4>
            <input
              name='nombre'
              type='text'
              placeholder='Mariano, Estefania Laura'
              className={styles.input}
              required
            />
          </label>
          <label htmlFor='apellido' className={styles.label}>
            <h4 className={styles.data}>Apellido</h4>
            <input
              name='apellido'
              type='text'
              placeholder='Mendez, Gaspar Talavera'
              className={styles.input}
              required
            />
          </label>
          <label htmlFor='dni' className={styles.label}>
            <h4 className={styles.data}>DNI</h4>
            <input
              name='dni'
              type='number'
              maxLength={8}
              placeholder='12341234'
              className={styles.input}
              required
            />
          </label>
          <label htmlFor='rol' className={styles.label}>
            <h4 className={styles.data}>Rol a Desempeñar</h4>
            <input
              name='rol'
              type='text'
              placeholder='Secretaria'
              className={styles.input}
              required
            />
          </label>
          <label htmlFor='area' className={styles.label}>
            <h4 className={styles.data}>Area de Trabajo</h4>
            <input
              name='area'
              type='text'
              placeholder='Laboratorio'
              className={styles.input}
              required
            />
          </label>
          <label htmlFor='email' className={styles.label}>
            <h4 className={styles.data}>Correo Electronico</h4>
            <input
              name='email'
              type='email'
              placeholder='ejemplo@gmail.com'
              className={styles.input}
              required
            />
          </label>
          <button type='submit' className={styles.btnSubmit}>
            Crear Usuario
          </button>
        </form>
      </main>
    </>
  )
}
