// Fetch the data from the JSON file
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const barsContainer = document.querySelector('.barsContainer');
        let totalScore = 0;

        // Loop through the data to create the bar divs
        data.forEach(item => {
            const bar = document.createElement('div');
            bar.classList.add('bar');

            const icon = document.createElement('img');
            icon.classList.add('icon');
            icon.src = item.icon;
            bar.appendChild(icon);

            const category = document.createElement('p');
            category.classList.add('category');
            category.textContent = item.category;
            bar.appendChild(category);

            const score = document.createElement('p');
            score.classList.add('score');
            score.textContent = item.score;
            bar.appendChild(score);

            const maxScore = document.createElement('p');
            maxScore.textContent = '/ 100';
            bar.appendChild(maxScore);

            barsContainer.appendChild(bar);

            totalScore += item.score;

        });
        const averageScore = Math.round(totalScore / data.length);
        const bigscore = document.querySelector('.bigscore');
        bigscore.textContent = averageScore.toString();
    });