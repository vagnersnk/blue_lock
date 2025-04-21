import { Alert } from 'react-native';
function dividir_time(jogadores, qtd) {
    const times = Array.from({ length: qtd }, () => []);

    jogadores.forEach((jogador, index) => {
        times[index % qtd].push(jogador);
    });

    return times;
}

export default function Sorteio_geral(player, qtd) {
    const times_qtd = parseInt(qtd);

    // Verifique se o número de times é válido
    if (isNaN(times_qtd) || times_qtd <= 0) {
        console.log("Quantidade de times inválida.");
        return;
    }

    const lista_jogadores = player.split(/[\s,]+/).map(j => j.trim()).filter(j => j !== '');

    // Verifique se o número de jogadores é divisível pelo número de times
    if (lista_jogadores.length % times_qtd === 0) {
        const sorteio = lista_jogadores.sort(() => Math.random() - 0.5);
        const times = dividir_time(sorteio, times_qtd);
        return times;
    } else {
        console.log("Quantidade de jogadores não é divisível pelo número de times.");
    }
}