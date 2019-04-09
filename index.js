// Your code here

class Polygon{
    constructor(array){
        this.array = array;
    }
    get getCount(){
        let count = this.array.length;
        return count;
    }
    get perimeter(){
        let sum = 0;
        this.array.forEach(function(a){
            sum += a;
        })
        return sum;
    }
}

class Triangle extends Polygon{
    //use get, it is possible to use triangle.isValid to access this function
    get isValid(){
        if (this.array.length = 3){
            if (this.array[0] + this.array[1] <= this.array[2] || this.array[0] + this.array[2] <= this.array[1] || this.array[1] + this.array[2] <= this.array[0]){
                return false;
            }else{
                return true;
            }
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.array.length = 4){
            for(let i = 0; i < this.array.length; i ++){
                if(this.array[i] === this.array[i+1]){
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    
    get area(){
        return this.array[0] * this.array[0];
    }
}