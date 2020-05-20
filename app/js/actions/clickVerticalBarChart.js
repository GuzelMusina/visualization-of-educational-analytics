function clickVerticalBarChart(idChart, anotherChart0, anotherChart1, anotherChart2, id0, id1, id2) {
    element = document.getElementById(idChart);
    element.addEventListener('click', function (event) {
        var target = event.target;
        //alert(target.id);
        if (target.id === id0) {
            var childrenUL = document.getElementById(anotherChart0);
            childrenUL.hidden = !childrenUL.hidden;
        } else if (target.id === id1) {
            var childrenUL = document.getElementById(anotherChart1);
            childrenUL.hidden = !childrenUL.hidden;
        }else if (target.id === id2) {
            var childrenUL = document.getElementById(anotherChart2);
            childrenUL.hidden = !childrenUL.hidden;
        }

    });
}
