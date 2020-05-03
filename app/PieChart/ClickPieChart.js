function clickToPieChart(pieChart, anotherChart0, anotherChart1, id0, id1) {
    element = document.getElementById(pieChart);
    element.addEventListener('click', function (event) {
        var target = event.target;
        //alert(target.id);
        if (target.id === id0) {
            var childrenUL = document.getElementById(anotherChart0);
            childrenUL.hidden = !childrenUL.hidden;
        } else if (target.id === id1) {
            var childrenUL = document.getElementById(anotherChart1);
            childrenUL.hidden = !childrenUL.hidden;
        }

    });
}


