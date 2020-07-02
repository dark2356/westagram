const thisIsButton = document.querySelector('.coment-button');
const comment = document.querySelector('.coment')
const comment_controler = document.querySelector('.commnet-plus');
const search = document.querySelector('.search')

comment.addEventListener('keyup', CommentHandler);

function CommentHandler(e) {
    if(event.keyCode == 13){
        let divtag = document.createElement('div')
        let divtag2 = document.createElement('div')
        let spantag1 = document.createElement('span')
        let spantag2 = document.createElement('span')
        let buttontag = document.createElement('button')
        divtag.classList = "classList_divtag"
        divtag2.classList = "classList_divtag2"
        spantag1.classList = "classList_spantag1"
        spantag2.classList = "classList_spantag2"
        buttontag.classList = "classList_buttontag"
        buttontag.innerHTML = "삭제"
        spantag1.innerHTML = "Wecode"
        spantag2.innerHTML = comment.value
        comment_controler.appendChild(divtag)
        divtag.appendChild(divtag2)
        divtag2.appendChild(spantag1)
        divtag2.appendChild(spantag2)
        divtag.appendChild(buttontag)
        comment.value = ""
    }
}
    



