function actualizarTiempo(){
    const tiempo = new Date();
    const horas = String(tiempo.getHours()).padStart(2, '0');
    const minutos = String(tiempo.getMinutes()).padStart(2, '0');
    const segundos = String(tiempo.getSeconds()).padStart(2, '0');

    //document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;

    document.getElementById('horas').textContent = `${horas}`;
    document.getElementById('minutos').textContent = `${minutos}`;
    document.getElementById('segundos').textContent = `${segundos}`;
}

actualizarTiempo();
setInterval(actualizarTiempo, 1000);

