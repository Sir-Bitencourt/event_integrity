AOS.init();

const dataDoEvento = new Date('Mar 20, 2026 18:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contagemRegressiva = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoRestante = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    const segundoEmMS = 1000;

    const diasAteOEvento = Math.floor(tempoRestante / diaEmMS);
    const horasAteOEvento = Math.floor((tempoRestante % diaEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor((tempoRestante % horaEmMS) / minutoEmMS);
    const segundosAteOEvento = Math.floor((tempoRestante % minutoEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(tempoRestante <= 0) {
        clearInterval(contagemRegressiva);
        document.getElementById('contador').innerHTML = 'Evento já realizado!';
    }
}, 1000);
