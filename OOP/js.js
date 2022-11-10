'use strict'
class Create{
    constructor() {

        this.Quantity = document.querySelector('.Quantity')
        this.Color = document.querySelector('.Color')
        this.Btn = document.querySelector('.Btn')
        this.body = document.querySelector('body')
    }
    Take(){
        let i = 0;
        while (i<this.Quantity.value){
            i++;
            let xxx = document.createElement('div')
            xxx.style.backgroundColor = this.Color.value
            this.body.appendChild(xxx)
        }
    }
    Build(){
        this.Btn.addEventListener('click',()=>{this.Take()
        })
    }
}
let create = new Create();
create.Build();

