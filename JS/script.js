
onload = function(){
    /* Abaixo as condições que checam se o usuário digitou alguma coisa */
    let area = document.getElementsByTagName("textarea")[0];
    let number = document.getElementById("number").value;
    let input = localStorage.getItem("number");
    let h3 = this.document.getElementById("h3");
    let remove = this.localStorage.getItem("remove");
    
    if(remove == 1){
        area.innerHTML = null;
    }

    else{
        let names = localStorage.getItem("names");
        area.innerHTML = names;
    }
    number.innerHTML = input.value;
    var display = 0;
    display = localStorage.getItem("display");
    let painel = document.getElementsByClassName("painel")[0];
    if(display == 1){
        painel.style.display = "block";
        h3.innerHTML = localStorage.getItem("result");
    }

}

/* Função para sortear os nomes */
const sort = () => {
    let area = document.getElementsByTagName("textarea")[0];
    let number = document.getElementById("number");
    let p = document.getElementById("pname");
    let pn = document.getElementById("pnum");
    let pn2 = document.getElementById("pnum2");
    let text = [];
    if(area.value == ""){
        area.style.border = "1px solid red";
        p.style.display = "block";
        area.focus();
    }

    else{
        let name = area.value.split("\n"); /* Ao lado esquerdo o método .split() definido como "n\" que serve para separar tudo que for digitado o enter" */
        area.style.border = "0";
        p.style.display = "none";
        for(let i = 0; i < name.length; i++){
            let space = name[i].trim(); /* O método trim retira os espaços desnecessários do começo e do final da string */
            if(space == "" || space == " "){
                continue
            }

            text.push(space);
        }

        localStorage.setItem("names", area.value);
        localStorage.setItem("remove", 0);
    }

    if(number.value <= 0){
        number.focus();
        number.style.border = "1px solid red";
        pn.style.display = "block";
        localStorage.setItem("number", number.value);
    }

    else if(number.value >= text.length){
        number.focus();
        number.style.border = "1px solid red";
        pn2.style.display = "block";
        localStorage.setItem("number", number.value);
    }

    else{
        number.style.border = "0";
        pn.style.display = "none";
        pn2.style.display = "none";
        localStorage.setItem("number", number.value);

        /* Abaixo os códigos para sortear um ou mais participantes */
        let sorteados = [];
        let numbers = [];
        for(let i = 0; i < number.value; i++){
            let rep = true;
            while(rep == true){
                let achou = false;
                let num = Math.floor(Math.random() * text.length);
                if(numbers.length == null){
                    sorteados.push(text[num]);
                    numbers.push(num);
                    rep = false;
                }

                else{
                    for(let i = 0; i < numbers.length; i++){
                        if(num == numbers[i]){
                            achou = true;
                        }
                    }

                    if(achou == false){
                        numbers.push(num);
                        sorteados.push(text[num]);
                        rep = false;
                    }
                }
            }
        }
        /* Abaixo os códigos para passar os nomes sorteados para a tela */
        let h3 = document.getElementById("h3");
        let result = "";
        let x = 0;
        for(let i = 0; i < sorteados.length; i++){
            x += 1;
            result += x + "-" + sorteados[i] + "<br>";
        }

        h3.innerHTML = result;
        localStorage.setItem("result", result);
        let painel = document.getElementsByClassName("painel")[0];
        painel.style.display = "block";
        localStorage.setItem("display", 1);

        console.log(sorteados);

    }
    
}

/* Função para limpar os nomes abaixo */

function clear_() {
    localStorage.setItem("remove", 1);
    localStorage.removeItem("display");
}




