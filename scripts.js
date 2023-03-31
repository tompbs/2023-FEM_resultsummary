fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // display result bars
        const barsContainer = document.querySelector('.barsContainer');
        const barList = data.map(create_bar_from_data);
        barsContainer.append(...barList)

        // display average score
        const averageScore = compute_average_score(data);
        const roundedScore = averageScore.toFixed(0);
        const bigscore = document.querySelector('.bigscore');
        bigscore.textContent = roundedScore.toString();
    })
    .catch(error => console.error('Error fetching data:', error));


function create_bar_from_data(data) {
    // creates the bar 
    const bar = document.createElement('div');
    bar.classList.add('bar');

    // adds icon to the bar
    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = data.icon;
    bar.appendChild(icon);
    
    // adds category to the bar 
    const category = document.createElement('p');
    category.classList.add('category');
    category.textContent = data.category;
    bar.appendChild(category);

    // stores the category for background styling in CSS
    bar.dataset.category = data.category;

    // adds score to the bar
    const score = document.createElement('p');
    score.classList.add('score');
    score.textContent = data.score;
    bar.appendChild(score);

    // adds /100 to the bar
    const maxScore = document.createElement('p');
    maxScore.textContent = '/ 100';
    bar.appendChild(maxScore);

    return bar;
}


function compute_average_score(data) {
    const score_array = data.map(item => item.score);
    const summed_score = score_array.reduce((a, b) => a + b);
    const average_score = summed_score / score_array.length;
    return average_score;
}
