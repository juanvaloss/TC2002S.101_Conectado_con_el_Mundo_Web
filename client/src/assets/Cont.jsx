var cont = 0;

export function aumentarCont () {
    cont = cont + 1;
};

export function printCont () {
    console.log (cont);
};

export function returnCont () {
    return cont;
};

export function resetCont () {
    cont = 0;
}