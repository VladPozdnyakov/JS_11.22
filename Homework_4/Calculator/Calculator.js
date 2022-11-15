
class Calculator {
    constructor(par1, par2) {
        if(!Number.isFinite(par1) || !Number.isFinite(par2) ) {
            throw new Error('Parametras are invalid')
        }
        this.par1 = par1;
        this.par2 = par2;
        this.setX = this.setX.bind(this)
        this.setY = this.setY.bind(this)
        this.getSum = this.getSum.bind(this)
        this.getMul = this.getMul.bind(this)
        this.getSub = this.getSub.bind(this)
        this.getDiv = this.getDiv.bind(this)
    }
    setX(num) {
        if(!Number.isFinite(num)){
            throw new Error('Parametr is invalid')
        }
        return this.par1 = num
    }
    setY(num) {
        if(!Number.isFinite(num)){
            throw new Error('Parametr is invalid')
        }
        return this.par2 = num
    }
    getSum() {
        return this.par1 + this.par2
    }
    getMul() {
        return this.par1 * this.par2
    }
    getSub() {
        return this.par1 - this.par2
    }
    getDiv() {
        if(this.par2 === 0){
            throw new Error('Parametr two is invalid')  
        }
        return this.par1 / this.par2
    }
}