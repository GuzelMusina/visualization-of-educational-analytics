function getVerticalBarChart(data) {
    return {
        "graphset": [{
            "type": "bar",
            "background-color": "white",
            "title": {
                "text": "График зависимостей по предметам",
                "font-color": "#7E7E7E",
                "backgroundColor": "none",
                "font-size": "22px",
                "alpha": 1,
                "adjust-layout": true,
            },
            "plotarea": {
                "margin": "dynamic"
            },
            "legend": {
                "layout": "x3",
                "overflow": "page",
                "alpha": 0.05,
                "shadow": false,
                "align": "center",
                "adjust-layout": true,
                "marker": {
                    "type": "circle",
                    "border-color": "none",
                    "size": "10px"
                },
                "border-width": 0,
                "maxItems": 3,
                "toggle-action": "hide",
                "pageOn": {
                    "backgroundColor": "#000",
                    "size": "10px",
                    "alpha": 0.65
                },
                "pageOff": {
                    "backgroundColor": "#7E7E7E",
                    "size": "10px",
                    "alpha": 0.65
                },
                "pageStatus": {
                    "color": "black"
                }
            },
            "plot": {
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
                "line-color": "#7E7E7E",
                "item": {
                    "font-color": "#7e7e7e"
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
                    "font-color": "#7E7E7E",
                },
            },
            "scaleX": {
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
                    "offsetY": -55
                }
            },
            "tooltip": {
                "background-color": "#f90",
                "padding": "5 10",
                "border-color": "#009",
                "border-width": 2,
                "border-radius": 5,
                "alpha": 0.75,
                "text": "Среднее значение = %node-value",
            },
            "series": [{
                "values": [
                    data.egeScoreSub1,
                    data.egeScoreSub2,
                    data.egeScoreSub3,
                ],
                "borderRadiusTopLeft": 7,
                "background-color": "#8993c7",
                "text": "ЕГЭ",
            },
                {
                    "values": [
                        data.examScoreSub1,
                        data.examScoreSub2,
                        data.examScoreSub3,
                    ],
                    "borderRadiusTopLeft": 7,
                    "background-color": "#fdb462",
                    "text": "Экзамен"
                },
            ]
        }]
    }
}