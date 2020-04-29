function getPieChartConfig(data) {
    return {
        type: 'pie',
        backgroundColor: '#2B313B',
        title: {
            text: 'Global Browser Usage',
            align: 'left',
            fontColor: '#fff',
            fontFamily: 'Open Sans',
            fontSize: '25px',
            offsetX: '10px',
        },
        plot: {
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
            margin: '5 0 0 0'
        },
        series: [
            {
                text: 'Зависит',
                values: [data.countCorrelation],
                backgroundColor: '#50ADF5'
            },
            {
                text: 'Не зависит',
                values: [1 - data.countCorrelation],
                backgroundColor: '#6FB07F'
            }
        ]
    };
}
