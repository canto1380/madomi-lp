import Swal from 'sweetalert2'

export const messageSendEmail = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Mensaje enviado con exito!',
      html: 'En breve nos pondremos en contacto.',
      showConfirmButton: false,
      timer: 2500
    })
  }
  
  export const ErrorSendMail = () => {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'A ocurrido un error',
      html: 'Por favor intentelo de nuevo mas tarde.',
      showConfirmButton: false,
      timer: 2500
    })
  }