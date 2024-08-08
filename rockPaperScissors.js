const reglas = {
    'piedra': ['tijera', 'lagarto'],
    'papel': ['piedra', 'spock'],
    'tijera': ['papel', 'lagarto'],
    'lagarto': ['papel', 'spock'],
    'spock': ['piedra', 'tijera']
};

function calcularGanador(jugada1, jugada2) {
    if (jugada1 === jugada2) return 'Tie';
    if (reglas[jugada1].includes(jugada2)) return 'Player 1';
    return 'Player 2';
}

const partidas = [ ['piedra', 'tijera'], ['papel', 'spock'], ['lagarto', 'piedra'] ];
let puntuaciones = { 'Player 1': 0, 'Player 2': 0, 'Tie': 0 };

for (let [jugada1, jugada2] of partidas) {
    let resultado = calcularGanador(jugada1, jugada2);
    puntuaciones[resultado]++;
}

console.log(puntuaciones['Player 1'] > puntuaciones['Player 2'] ? 'Player 1' :
             puntuaciones['Player 2'] > puntuaciones['Player 1'] ? 'Player 2' :
             'Tie');
