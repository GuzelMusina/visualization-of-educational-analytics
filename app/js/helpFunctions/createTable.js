function createTable(data, id0, id01, id1, id11, id2, id21, id3, id4, id5) {
    var table0 = document.getElementById(id0);
    var table01 = document.getElementById(id01);
    var table1 = document.getElementById(id1);
    var table11 = document.getElementById(id11);
    var table2 = document.getElementById(id2);
    var table21 = document.getElementById(id21);

    for (var i = 0; i < data.sub1Ex.length; i++) {
        var tr0 = document.createElement('tr');
        tr0.innerHTML = data.sub1Ege[i];
        table0.append(tr0);
        var tr01 = document.createElement('tr');
        tr01.innerHTML = data.sub1Ex[i];
        table01.append(tr01);

        var tr1 = document.createElement('tr');
        tr1.innerHTML = data.sub2Ege[i];
        table1.append(tr1);
        var tr11 = document.createElement('tr');
        tr11.innerHTML = data.sub2Ex[i];
        table11.append(tr11);

        var tr2 = document.createElement('tr');
        tr2.innerHTML = data.sub3Ege[i];
        table2.append(tr2);
        var tr21 = document.createElement('tr');
        tr21.innerHTML = data.sub3Ex[i];
        table21.append(tr21);
    }

    document.getElementById(id3).innerHTML = data.subjectsArrEge[0];
    document.getElementById(id4).innerHTML = data.subjectsArrEge[1];
    document.getElementById(id5).innerHTML = data.subjectsArrEge[2];
}