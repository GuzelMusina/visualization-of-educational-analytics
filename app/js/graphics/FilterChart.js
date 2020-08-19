function getFilterChart(data) {
    return {
        type: 'pop-pyramid',
        "background-color": "#2B313B",
        globals: {
            fontSize: '14px'
        },
        title: {
            text: 'Гендерное распределение',
            "color": "#fff",
            fontSize: '24px'
        },
        options: {
            // values can be: 'bar', 'hbar', 'area', 'varea', 'line', 'vline'
            aspect: 'hbar'
        },
        legend: {
            shared: true
        },
        // plot represents general series, or plots, styling
        plot: {
            // hoverstate
            tooltip: {
                padding: '10px 15px',
                borderRadius: '3px',
                text: 'ID № <b>%v</b>'
            },
            valueBox: {
                color: '#fff',
                placement: 'top-in',
            },
            // animation docs here:
            // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
            // animation: {
            //     effect: 'ANIMATION_EXPAND_BOTTOM',
            //     method: 'ANIMATION_STRONG_EASE_OUT',
            //     sequence: 'ANIMATION_BY_NODE',
            //     speed: 222
            // }
        },
        scaleX: {
            label: {
                text: ''
            },
        },
        scaleY: {
            // scale label with unicode character
            label: {
                text: 'id'
            }
        },
        series: [{
            text: 'Мужчины',
            values: getMGender(data),
            // two colors with a space makes a gradient
            backgroundColor: '#4682b4',
            dataSide: 1
        }, {
            text: 'Женщины',
            values: getFGender(data),
            // two colors with a space makes a gradient
            backgroundColor: '#ee7988',
            dataSide: 2
        }
        ]
    }
}

function getMGender(data) {
    let arr = [];
    for (let i = 0; i < data.getGender.length; i++) {
        if (data.getGender[i] == 0) {
            arr.push(data.ids[i]);
        } else {
            arr.push("");
        }
    }
    return arr;
}

function getFGender(data) {
    let arr = [];
    for (let i = 0; i < data.getGender.length; i++) {
        if (data.getGender[i] == 1) {
            arr.push(data.ids[i]);
        } else {
            arr.push("");
        }
    }
    return arr;
}
