function getVerticalBarChart(data) {
    return {
        "graphset": [{
            "type": "bar",
            "background-color": "#2B313B",
            "plotarea": {
                "margin": "dynamic"
            },
            "legend": {
                "align": "center",
                "marker": {
                    "type": "circle",
                    "border-color": "none",
                    "size": "10px"
                },
            },
            "plot": {
                "tooltip": {
                    "padding": "5 10",
                    "border-width": 2,
                    "border-radius": 5,
                    "alpha": 0.75,
                    "text": "Среднее значение = %node-value",
                },
                "bars-space-left": 0.15,
                "bars-space-right": 0.15,
                "animation": {
                    "effect": "ANIMATION_SLIDE_BOTTOM",
                    "sequence": 0,
                    "speed": 800,
                    "delay": 800
                }
            },
            "scale-y": {
                "line-color": "#fff",
                "item": {
                    "font-color": "#fff"
                },
                "values": "2:5",
                "guide": {
                    "visible": true
                },
                "label": {
                    "text": "Оценка",
                    "font-family": "arial",
                    "bold": true,
                    "font-size": "14px",
                    "font-color": "#fff",
                },
            },
            "scaleX": {
                "color": "#fff",
                "values": [
                    data.subjectsArrEge[0],
                    data.subjectsArrEge[1],
                    data.subjectsArrEge[2],
                ],
                "placement": "default",
                "tick": {
                    "size": 58,
                    "placement": "cross"
                },
                "itemsOverlap": true,
                "item": {
                    "offsetY": -55,
                    "font-color": "#fff"

                }
            },
            "series": [{
                "values": [
                    countAverage(data.sub1EgeMod),
                    countAverage(data.sub2EgeMod),
                    countAverage(data.sub3EgeMod),
                ],
                "borderRadiusTopLeft": 7,
                "background-color": "#8993c7",
                "text": "ЕГЭ",
            },
                {
                    "values": [
                        countAverage(data.sub1Ex),
                        countAverage(data.sub2Ex),
                        countAverage(data.sub3Ex),
                    ],
                    "borderRadiusTopLeft": 7,
                    "background-color": "#fdb462",
                    "text": "Экзамен"
                },
            ]
        }]
    }
}