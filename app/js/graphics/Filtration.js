function getFiltration(data) {
    return {
        type: 'bubble',
        legend: {
            adjustLayout: true,
            align: 'center',
            borderWidth: '0px',
            marker: {
                type: 'circle'
            },
            toggleAction: 'none'
        },
        plot: {
            tooltip: {
                text: '%data-country has a population of %node-size-value <br>with a %vt year life expectancy <br> if you make %kl (GDP)',
                fontSize: '15px',
                rules: [{
                    backgroundColor: '#ff8a80',
                    rule: '%node-size-value >= 10000000'
                },
                    {
                        backgroundColor: '#82b1ff',
                        rule: '%node-size-value > 1000000 && %node-size-value < 10000000'
                    },
                    {
                        backgroundColor: '#b388ff',
                        rule: '%node-size-value < 1000000'
                    }
                ],
                thousandsSeparator: ','
            },
            marker: {
                rules: [{
                    alpha: 0.8,
                    backgroundColor: '#ff8a80',
                    rule: '%node-size-value >= 10000000'
                },
                    {
                        alpha: 0.8,
                        backgroundColor: '#82b1ff',
                        rule: '%node-size-value > 1000000 && %node-size-value < 10000000'
                    },
                    {
                        alpha: 0.8,
                        backgroundColor: '#b388ff',
                        rule: '%node-size-value < 1000000'
                    }
                ]
            }
        },
        plotarea: {
            margin: 'dynamic'
        },
        scaleX: {
            label: {
                text: 'GDP Per Capita (Income)'
            },
            thousandsSeparator: ',',
            zooming: true
        },
        scaleY: {
            label: {
                text: 'Education Type'
            },
            maxValue: 0,
            minValue: 1,
            step: 1
        },
        scrollX: {},
        scrollY: {},
        preview: {
            adjustLayout: true
        },
        series: [{
            values: createValue(data),
            legendItem: {
                visible: false
            },
            legendMarker: {
                visible: false
            }
        },
            {
                legendItem: {
                    text: 'Population > 10,000,000'
                },
                legendMarker: {
                    backgroundColor: '#ff8a80'
                }
            },
            {
                legendItem: {
                    text: 'Population < 1,000,000'
                },
                legendMarker: {
                    backgroundColor: '#b388ff'
                }
            },
            {
                legendItem: {
                    text: '10,000,000 > Population > 1,000,000'
                },
                legendMarker: {
                    backgroundColor: '#82b1ff'
                }
            }
        ]
    }
};

function createValue(data) {
    let value = [];

    for (let i = 0; i < data.sub1Ex.length; i++) {
        value.push([data.ids[i],
            data.getEducationType[i], data.getGender[i]]);
    }
    //alert(value);
    return value;
}