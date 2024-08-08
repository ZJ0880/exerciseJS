function puntuacionTenis(puntos) {
    const puntuaciones = ['Love', '15', '30', '40'];
    let score = { 'P1': 0, 'P2': 0 };

    const mostrarPuntuacion = () => {
        const p1 = score['P1'];
        const p2 = score['P2'];
        if (p1 >= 3 && p2 >= 3) {
            if (p1 === p2) return 'Deuce';
            if (Math.abs(p1 - p2) === 1) return `Ventaja ${p1 > p2 ? 'P1' : 'P2'}`;
            return `P1 ${p1 > p2 ? 'Gana' : 'Pierde'} el juego`;
        }
        return `${puntuaciones[p1]} - ${puntuaciones[p2]}`;
    };

    for (let punto of puntos) {
        score[punto]++;
        console.log(mostrarPuntuacion());
        if (score['P1'] >= 4 && score['P1'] - score['P2'] >= 2) {
            console.log('Ha ganado el P1');
            break;
        } else if (score['P2'] >= 4 && score['P2'] - score['P1'] >= 2) {
            console.log('Ha ganado el P2');
            break;
        }
    }
}

puntuacionTenis(['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1']);
