'Use strict'
let op = 0;
let hipo = 0;
let cat1 = 0;
let cat2 = 0;
let hipor = 0;
let catr1 = 0;
let catr2 = 0;
op=prompt("Bienvenido, Que desea calcular? 1 Para Hipotenusa, 2 Para algún Cateto:");
    switch (true){
        case op==1:
            cat1=prompt("Ingrese el Cateto1:");
            cat2=prompt("Ingrese el Cateto2:");
            function hipot(cat1,cat2) {
                return Math. sqrt(cat1*cat1 + cat2*cat2)}
                hipor=hipot(cat1,cat2);
                alert("Hipotenusa:"+hipor);
            break;
        case op==2:
            hipo=prompt("Ingrese la Hipotenusa:");
            cat2=prompt("Ingrese el Cateto:");
            function cate1(cat2,hipo) {
                return Math. sqrt(hipo * hipo - cat2 * cat2)}
                catr1=cate1(cat2,hipo);
                alert("Cateto:"+catr1);
            break;
        default:
            alert("Error");
            break;
    }