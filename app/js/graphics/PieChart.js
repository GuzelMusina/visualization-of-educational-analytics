function getPieChartConfig(data) {
    return {
        type: 'pie',
        backgroundColor: '#2B313B',
        plot: {
            width: '100%',
            tooltip: {
                text: 'Нажмите чтобы узнать подробнее о %npv%',
                padding: '5 10',
                fontFamily: 'Open Sans',
                fontSize: '12px'
            },
            valueBox: {
                text: '%t\n%npv%',
                fontFamily: 'Open Sans',
                placement: 'out'
            },
            animation: {
                effect: 'ANIMATION_EXPAND_VERTICAL',
                method: 'ANIMATION_REGULAR_EASE_OUT',
                sequence: 'ANIMATION_BY_PLOT',
                speed: 500
            },
            borderColor: '#2B313B',
            borderWidth: '5px'
        },
        plotarea: {
            margin: '5 20 5 5'
        },
        series: [
            {
                text: 'Зависит',
                values: [countCorrelation(data.getExamScore, data.getEgeScore)],
                backgroundColor: '#50ADF5'
            },
            {
                text: 'Не зависит',
                values: [1 - countCorrelation(data.getExamScore, data.getEgeScore)],
                backgroundColor: '#6FB07F'
            }
        ]
    };
}
