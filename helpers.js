import Swal from 'sweetalert2';

export function AlertaSwal(title, text, icon, timer, ifConfirmed) {
    Swal.fire({
        title,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/img/articles/article-background.jpg)',
        showCancelButton: true,
        confirmButtonText: "¡Descargar App!",
        cancelButtonText: 'Seguir navegando',
        icon,
        timer      
      }).then(result => {
        if(result.isConfirmed) {
            ifConfirmed();
        }
      })
}

export function downloadAppAlert() {
    let title;
    if(localStorage.getItem("ups")) {
        title = "Para interactuar con la comunidad debes descargarte la App!"
        localStorage.setItem("ups", parseInt(localStorage.getItem('ups')) + 1)
    } else {
        localStorage.setItem("ups", 1)
        title = "Ups! Para interactuar con la comunidad debes descargarte la App!"
    }
    const text = "¡Bajatela ahora!"
    const icon = "warning";
    const timer = 0
    function ifConfirmed() {
        window.open("/descargar");

    }
    AlertaSwal(title,text,icon,timer,ifConfirmed);
}