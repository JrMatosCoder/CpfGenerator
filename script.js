class CpfGenerator{
    static gerateNumber(){
        let Numbers = '';
        for(let i = Numbers.length; i < 11; i++){
            Numbers = Numbers + (Math.floor(Math.random() * (9 - 0 + 1)) + 0);
        }
        return Numbers
    }
    static geratePointing(){
        let NumGenerated = this.gerateNumber();
        return NumGenerated.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}

console.log(CpfGenerator.geratePointing())
console.log(CpfGenerator.gerateNumber())