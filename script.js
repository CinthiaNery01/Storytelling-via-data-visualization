document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById('myChart1')?.getContext('2d');
    const ctx2 = document.getElementById('myChart2')?.getContext('2d');
    const ctx3 = document.getElementById('myChart3')?.getContext('2d');
    const ctx4 = document.getElementById('myChart4')?.getContext('2d');
    const ctx5 = document.getElementById('myChart5')?.getContext('2d');
    const ctx6 = document.getElementById('myChart6')?.getContext('2d');

    if (!ctx1 || !ctx2 || !ctx3 || !ctx4|| !ctx5|| !ctx6) {
        console.error("Erro: Elements not found");
        return;
    }

    const data1 = {
        labels: ['Drama', 'Musical', 'Adventure/Epic', 'Comedy'],
        datasets: [{
            label: 'Movie Genre',
            data: [34.40, 28.49, 26.35, 10.76], // Dados do gráfico 1
            backgroundColor: [
                'rgba(153, 0, 51, 1)', //vermelho drama
                'rgba(215, 185, 213, 1)', //rosa musical
                'rgba(249, 219, 90, 1)', //amarelo adventure
                'rgba(255, 140, 66, 1)', //laranja comedy
            ],
        }]
    };

    const data2 = {
        labels: ['Comedy', 'Action', 'Drama', 'Sci-Fi'],
        datasets: [{
            label: 'Movie Genre',
            data: [42.32, 25.29, 18.69, 13.74], // Dados do gráfico 2
            backgroundColor: [
                'rgba(255, 140, 66, 1)', //laranja comedy
                'rgba(187, 219, 155, 1)', //action
                'rgba(153, 0, 51, 1)', //vermelho drama
                'rgba(7, 0, 77, 1)', //azul escuro sci fi
            ],
        }]
    };

    const data3 = {
        labels: ['Animation', 'Comic Book/ Superhero', 'Adventure/Epic', 'Sci-Fi'],
        datasets: [{
            label: 'Movie Genre',
            data: [30.89, 26.17, 22.81, 20.13], // Dados do gráfico 3
            backgroundColor: [
                'rgba(98, 115, 239, 1)', //azul claro animation
                'rgba(252, 175, 88, 1)', //laranja comic book
                'rgba(249, 219, 90, 1)', //amarelo adventure
                'rgba(7, 0, 77, 1)', //azul escuro sci fi
            ],
        }]
    };

    const data4 = {
        labels: ['% Woman', '% Men'],
        datasets: [{
            label: 'Genrer of Directors',
            data: [4, 96], // Dados do gráfico 4
            backgroundColor: [
                'rgb(255, 128, 0)', //laranja mulher
                'rgb(7, 0, 77, 1)', //azul homem
            ],
        }]
    };

    const data5 = {
        labels: ['% Woman', '% Men'],
        datasets: [{
            label: 'Genrer of Directors',
            data: [13, 87], // Dados do gráfico 5
            backgroundColor: [
                'rgb(255, 128, 0)', //laranja mulher
                'rgb(7, 0, 77, 1)', //azul homem
            ],
        }]
    };

    const data6 = {
        labels: ['Marvel Cinematic Universe (MCU)', 'Star Wars Franchise', 'Harry Potter Franchise', 'Spider Man Franchise', 'James Bond  Franchise'],
        datasets: [{
            label: '$ Billions USD',
            data: [31.06, 10.32, 9.6, 8.9, 7.9], // Dados do gráfico 6
            backgroundColor: [
                'rgb(255, 53, 53)', //mcu
                '#07004d', //star wars
                '#ff8000', //harry potter
                '#ffcc00', //spider
                '#000000', //james bond
            ],
        }]
    };

    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Popular Genres - 1940s to 1960s'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Popular Genres - 1970s to 1990s'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    const options3 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Popular Genres - 2000s to Present'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    const options4 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '1940s to 2000s'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    const options5 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '2000s to Present'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    const options6 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Box Office Gross Amount in Billion USD'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    new Chart(ctx1, {
        type: 'doughnut',
        data: data1,
        options: options1
    });

    new Chart(ctx2, {
        type: 'doughnut',
        data: data2,
        options: options2
    });

    new Chart(ctx3, {
        type: 'doughnut',
        data: data3,
        options: options3
    });

    new Chart(ctx4, {
        type: 'pie',
        data: data4,
        options: options4
    });

    new Chart(ctx5, {
        type: 'pie',
        data: data5,
        options: options5
    });

    new Chart(ctx6, {
        type: 'bar',
        data: data6,
        options: options6
    });

});