function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('age')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Data inválida!')
    } else { 
        var fsex = document.getElementsByName('radiosex') 
        var result = ano - Number(fano.value)
        var genero = ''
        if (fsex[1].checked) {
            genero = 'homem'
            if (result <= 2) {
            img.src = 'images/bebef.png' }
            else if (result <= 5) {
                img.src = 'images/criancam.png'
            } else {
                if (result <= 8) {
                img.src = 'images/criam.png'
                } else if (result <= 12) {
                img.src = 'images/criavm.png'
                } else {
                    if (result <= 20) {
                        img.src = 'images/adom.png'
                    } else if (result <= 40) {
                        img.src = 'images/adultm.png'
                    } else {
                        if (result <= 65) {
                        img.src = 'images/adultvm.png'
                        } else if (result < 129) {
                        img.src = 'images/idosom.png'
                        } else {
                            img.src = 'images/olavo.png'
                        }
                    }
                }
            }
        } else if (fsex[0].checked) {
            genero = 'mulher'
            if (result <= 2) {
            img.src = 'images/bebem.png' }
            else if (result <= 5) {
                img.src = 'images/criancaf.png'
            } else {
                if (result <= 8) {
                img.src = 'images/criaf.png'
                } else if (result <=12) {
                    img.src = 'images/criavf.png'
                } else {
                    if (result <= 20) {
                        img.src = 'images/adof.png'
                    } else if (result <=40) {
                        img.src = 'images/adultf.png'
                    } else {
                        if(result <= 65) {
                            img.src = 'images/adultvf.png'
                        } else if(result < 129) {
                            img.src = 'images/idosof.png'
                        } else {
                            img.src = 'images/eliza.jpg'
                        }
                    }
                }
            }

        } 
        msg.innerHTML = `Detectamos ${genero} com ${result} anos `
    }
}