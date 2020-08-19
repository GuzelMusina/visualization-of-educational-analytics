function getElementGraph(chartConfig) {
    alert(chartConfig)
    return {
        type: 'tree',
        options: {
            link: {
                aspect: 'arc'
            },
            maxSize: 15,
            minSize: 5,
            node: {
                type: 'circle',
                tooltip: {
                    padding: '8px 10px',
                    borderRadius: '3px',
                }
            }
        },
        series: [
            {
                id: 'theworld',
                parent: '',
                name: 'the world',
                // value: id
            },
            {
                id: 'asia',
                parent: 'theworld',
                name: 'Asia',
                value: 4100000000
            },
            {
                id: 'africa',
                parent: 'theworld',
                name: 'Africa',
                value: 1260000000
            },
            {
                id: 'america',
                parent: 'theworld',
                name: 'America',
                value: 328000000
            },
            {
                id: 'europe',
                parent: 'theworld',
                name: 'Europe',
                value: 741000000
            },
            {
                id: 'ca',
                parent: 'america',
                name: 'California',
                value: 32000000
            },
            {
                id: 'ny',
                parent: 'america',
                name: 'New York',
                value: 19000000
            },
            {
                id: 'txt',
                parent: 'america',
                name: 'Texas',
                value: 29000000
            },
        ],
    }
}



