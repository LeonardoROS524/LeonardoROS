async function fetchProbabilities() {
    const data = [
        { match: 'São Paulo vs Bragantino', teamA: 60, teamB: 40, date: '20/11/2024' },
        { match: 'São Paulo vs Atlético Mineiro', teamA: 40, teamB: 60, date: '23/11/2024' },
        { match: 'São Paulo vs Grêmio', teamA: 50, teamB: 50, date: '01/12/2024' },
        { match: 'São Paulo vs Juventude', teamA: 80, teamB: 20, date: 'Não Confirmado' },
        { match: 'São Paulo vs Botafogo', teamA: 70, teamB: 30, date: 'Não Confirmado' },
    ];


    const probabilitiesContainer = document.querySelector('.probabilities');
    probabilitiesContainer.innerHTML = '<h2>Probabilidades de Vitória</h2>';

    
    data.forEach(match => {
        const matchSection = document.createElement('div');
        matchSection.classList.add('match-section');
        matchSection.innerHTML = `
            <h3>Confronto: ${match.match}</h3>
            <p>Data: ${match.date}</p>
            <div class="probability-column">
                <div class="team-probability team-a">${match.teamA}%</div>
                <div class="team-probability team-b">${match.teamB}%</div>
            </div>
        `;
        probabilitiesContainer.appendChild(matchSection);
    });
}


window.onload = fetchProbabilities;


const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/api/probabilidades', (req, res) => {
    res.json(matchData);
});


app.get('/api/probabilidade/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const match = matchData[id];

    if (match) {
        res.json(match);
    } else {
        res.status(404).json({ message: 'Confronto não encontrado.' });
    }
});


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
