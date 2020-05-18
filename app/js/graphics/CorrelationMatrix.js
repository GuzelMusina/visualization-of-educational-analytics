function getCorrelationMatrix(data) {
    return {
        type: 'heatmap',
        backgroundColor: '#325598 #10203a',
        fillType: 'radial',
        plot: {
            aspect: "none",
            valueBox: {
                visible: false
            },
            rules: [
                {
                    backgroundColor: '#191970',
                    rule: '%v == 1'
                },
                {
                    backgroundColor: '#4169e1',
                    rule: '%v >= 0.99 && %v < 1'
                },
                {
                    backgroundColor: '#4682b4',
                    rule: '%v >= 0.95 && %v < 0.99'
                },
                {
                    backgroundColor: '#6495ed',
                    rule: '%v >= 0.8 && %v < 0.95'
                },
                {
                    backgroundColor: '#1e90ff',
                    rule: '%v >= 0.7 && %v < 0.8'
                },
                {
                    backgroundColor: '#87CEFA',
                    rule: '%v >= 0.6 && %v < 0.7'
                },
                {
                    backgroundColor: '#B0C4DE',
                    rule: '%v >= 0.5 && %v < 0.6'
                },
                {
                    backgroundColor: '#E0FFFF',
                    rule: '%v >= 0.4 && %v < 0.5'
                },
                {
                    backgroundColor: '#F0F8FF',
                    rule: '%v >= 0.3 && %v < 0.4'
                },
                {
                    backgroundColor: '#F0FFFF',
                    rule: '%v >= 0.2 && %v < 0.3'
                },
                {
                    backgroundColor: '#FFFFFF',
                    rule: '%v>=0 && %v < 0.2'
                }
            ]
        },
        plotarea: {
            margin: '30px 30px 85px 105px',
            backgroundColor: 'none'
        },
        scaleX: {
            values: data.fields,
            alpha: 0.5,
            item: {
                paddingTop: '5px',
                fontColor: '#93abc9',
                fontFamily: 'arial',
                fontSize: '10px',
            },
            itemsOverlap: true,
            lineColor: '#000',
            lineWidth: '2px',
            maxLabels: 999,
            textAlign: 'right',
            tick: {
                visible: false
            }
        },
        scaleY: {
            values: [data.fields[8], data.fields[7], data.fields[6], data.fields[5],
                data.fields[4], data.fields[3], data.fields[2], data.fields[1], data.fields[0]],
            item: {
                paddingRight: '5px',
                fontColor: '#93abc9',
                fontFamily: 'arial',
                fontSize: '10px',
                textAlign: 'right'
            },
            lineColor: '#000',
            lineWidth: '2px',
            tick: {
                alpha: 0.5,
                lineColor: '#000'
            }
        },
        tooltip: {
            text: 'Коэфициент корреляции<br>%k и %t:<br><b>%v</b>',
            padding: '5px 10px',
            borderColor: 'none',
            borderRadius: '8px',
            borderWidth: '0px',
            fontColor: '#fff',
            fontFamily: 'Arial',
            fontSize: '10px',
            fontWeight: 'normal',
            shadow: false
        },
        series: [
            {
                text: data.fields[8],
                values: [countCorrelation(data.sub3Ex, data.getGender),
                    countCorrelation(data.sub3Ex, data.getEducationType),
                    countCorrelation(data.sub3Ex, data.getEgeScore),
                    countCorrelation(data.sub3Ex, data.sub1EgeMod),
                    countCorrelation(data.sub3Ex, data.sub2EgeMod),
                    countCorrelation(data.sub3Ex, data.sub3EgeMod),
                    countCorrelation(data.sub3Ex, data.sub1Ex),
                    countCorrelation(data.sub3Ex, data.sub2Ex),
                    countCorrelation(data.sub3Ex, data.sub3Ex),
                ]
            },
            {
                text: data.fields[7],
                values: [countCorrelation(data.sub2Ex, data.getGender),
                    countCorrelation(data.sub2Ex, data.getEducationType),
                    countCorrelation(data.sub2Ex, data.getEgeScore),
                    countCorrelation(data.sub2Ex, data.sub1EgeMod),
                    countCorrelation(data.sub2Ex, data.sub2EgeMod),
                    countCorrelation(data.sub2Ex, data.sub3EgeMod),
                    countCorrelation(data.sub2Ex, data.sub1Ex),
                    countCorrelation(data.sub2Ex, data.sub2Ex),
                    countCorrelation(data.sub2Ex, data.sub3Ex),
                ]
            },
            {
                text: data.fields[6],
                values: [countCorrelation(data.sub1Ex, data.getGender),
                    countCorrelation(data.sub1Ex, data.getEducationType),
                    countCorrelation(data.sub1Ex, data.getEgeScore),
                    countCorrelation(data.sub1Ex, data.sub1EgeMod),
                    countCorrelation(data.sub1Ex, data.sub2EgeMod),
                    countCorrelation(data.sub1Ex, data.sub3EgeMod),
                    countCorrelation(data.sub1Ex, data.sub1Ex),
                    countCorrelation(data.sub1Ex, data.sub2Ex),
                    countCorrelation(data.sub1Ex, data.sub3Ex),
                ]
            },
            {
                text: data.fields[5],
                values: [countCorrelation(data.sub3EgeMod, data.getGender),
                    countCorrelation(data.sub3EgeMod, data.getEducationType),
                    countCorrelation(data.sub3EgeMod, data.getEgeScore),
                    countCorrelation(data.sub3EgeMod, data.sub1EgeMod),
                    countCorrelation(data.sub3EgeMod, data.sub2EgeMod),
                    countCorrelation(data.sub3EgeMod, data.sub3EgeMod),
                    countCorrelation(data.sub3EgeMod, data.sub1Ex),
                    countCorrelation(data.sub3EgeMod, data.sub2Ex),
                    countCorrelation(data.sub3EgeMod, data.sub3Ex),
                ]
            }, {
                text: data.fields[4],
                values: [countCorrelation(data.sub2EgeMod, data.getGender),
                    countCorrelation(data.sub2EgeMod, data.getEducationType),
                    countCorrelation(data.sub2EgeMod, data.getEgeScore),
                    countCorrelation(data.sub2EgeMod, data.sub1EgeMod),
                    countCorrelation(data.sub2EgeMod, data.sub2EgeMod),
                    countCorrelation(data.sub2EgeMod, data.sub3EgeMod),
                    countCorrelation(data.sub2EgeMod, data.sub1Ex),
                    countCorrelation(data.sub2EgeMod, data.sub2Ex),
                    countCorrelation(data.sub2EgeMod, data.sub3Ex),
                ]
            },
            {
                text: data.fields[3],
                values: [countCorrelation(data.sub1EgeMod, data.getGender),
                    countCorrelation(data.sub1EgeMod, data.getEducationType),
                    countCorrelation(data.sub1EgeMod, data.getEgeScore),
                    countCorrelation(data.sub1EgeMod, data.sub1EgeMod),
                    countCorrelation(data.sub1EgeMod, data.sub2EgeMod),
                    countCorrelation(data.sub1EgeMod, data.sub3EgeMod),
                    countCorrelation(data.sub1EgeMod, data.sub1Ex),
                    countCorrelation(data.sub1EgeMod, data.sub2Ex),
                    countCorrelation(data.sub1EgeMod, data.sub3Ex),
                ]
            },
            {
                text: data.fields[2],
                values: [countCorrelation(data.getEgeScore, data.getGender),
                    countCorrelation(data.getEgeScore, data.getEducationType),
                    countCorrelation(data.getEgeScore, data.getEgeScore),
                    countCorrelation(data.getEgeScore, data.sub1EgeMod),
                    countCorrelation(data.getEgeScore, data.sub2EgeMod),
                    countCorrelation(data.getEgeScore, data.sub3EgeMod),
                    countCorrelation(data.getEgeScore, data.sub1Ex),
                    countCorrelation(data.getEgeScore, data.sub2Ex),
                    countCorrelation(data.getEgeScore, data.sub3Ex),
                ]
            },
            {
                text: data.fields[1],
                values: [countCorrelation(data.getEducationType, data.getGender),
                    countCorrelation(data.getEducationType, data.getEducationType),
                    countCorrelation(data.getEducationType, data.getEgeScore),
                    countCorrelation(data.getEducationType, data.sub1EgeMod),
                    countCorrelation(data.getEducationType, data.sub2EgeMod),
                    countCorrelation(data.getEducationType, data.sub3EgeMod),
                    countCorrelation(data.getEducationType, data.sub1Ex),
                    countCorrelation(data.getEducationType, data.sub2Ex),
                    countCorrelation(data.getEducationType, data.sub3Ex),
                ]
            },
            {
                text: data.fields[0],
                values: [countCorrelation(data.getGender, data.getGender),
                    countCorrelation(data.getGender, data.getEducationType),
                    countCorrelation(data.getGender, data.getEgeScore),
                    countCorrelation(data.getGender, data.sub1EgeMod),
                    countCorrelation(data.getGender, data.sub2EgeMod),
                    countCorrelation(data.getGender, data.sub3EgeMod),
                    countCorrelation(data.getGender, data.sub1Ex),
                    countCorrelation(data.getGender, data.sub2Ex),
                    countCorrelation(data.getGender, data.sub3Ex),
                ]
            }
        ]
    };
}