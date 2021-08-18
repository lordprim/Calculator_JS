class CalcController {
    
    constructor(){

        this._displayCalc = "0";   // o _ diz o atributo é privado.
        this._dataAtual;

    }

    get displayCalc(){
        return this._displayCalc;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    set dataAtual(data){
        this._dataAtual = data;
    }
}