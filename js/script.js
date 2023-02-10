const allInput = document.querySelectorAll('input');

//console.log(allInput);
const applyChange = function(e){
    console.log(e.target.value);
    console.log(this);
    const suffix = this.dataset.size || "" ;
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,e.target.value + suffix)
};

allInput.forEach(input => input.addEventListener('input',applyChange))

