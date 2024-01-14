var navElement = document.querySelector('.pop-up');






    /////////////////////////////////////////////////////////////////////////////////////////////////
    // AQUI VOCE VAI MUDAR OS ITENS DO ÍNDICE
    /**
     * <details>
        <summary> <i id="indice"  class="fa-solid fa-book"></i>NOME DO TOPICO</summary>
        <ul>
            <li><a href="ADICIONE A URL DA PAGINA AQUI">TÓPICO</a></li>
        </ul>
        </details>

        -----------------------------------
        <i id="indice"  class="fa-solid fa-book"></i>

        ICONE USADO DE https://fontawesome.com/search?o=r&m=free

        COPIAR A OPÇÃO "HTML" E ADICIONAR [id="indice"]

        <i class="fa-solid fa-house"></i> ----> PARA ----> <i id="indice" class="fa-solid fa-house"></i>


        (USAR ÍCONS GRATUITOS, OU VOCE PODE PAGAR POR ELES)

     */


    // sempre seguir esse padrão de URL: ../../pasta-da-pagina/pagina.html


    // MUDAR INDICE AQUI
    var novoConteudo = `
    <a class="home-i" href="../../../index.html" ><i class='bx bxs-home'></i>Home</a>
    <span class="close">×</span>
    
    <h2 class="indice-destaque">Índice</h2>
    <details>
        <summary> <i id="indice"  class="fa-solid fa-book"></i>TODAS AS LENDAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>
    <details>
        <summary> <i id="indice"  class="fa-solid fa-book"></i>MISCELÂNEAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice"  class="fa-solid fa-khanda"></i>ARMAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice"  class="fa-solid fa-dice-d20"></i>OBJETOS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice"  class="fa-solid fa-dragon"></i>CRIATURAS</summary>
        <ul>
            <li><a href="../../pages/draconianos-altos/draconianos-altos.html">Draconianos Altos</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice"  class="fa-solid fa-clover"></i>PLANTAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice" class="fa-solid fa-ankh"></i>CULTOS E CRENÇAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice" class="fa-brands fa-studiovinari"></i>DEIDADES</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice" class="fa-solid fa-feather"></i>TEXTOS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice" class="fa-solid fa-chess-rook"></i>LUGARES</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice" class="fa-solid fa-fire-flame-curved"></i>MAGIA</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary><i id="indice" class="fa-solid fa-cubes-stacked"></i>MATERIAIS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>
    <details>
        <summary><i id="indice" class="fa-solid fa-dragon"></i>Pessoas</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>
    `;

    ////////////////////////////////////////////////////////////////////////////////////////////



    // Atualização do conteúdo do <nav>
    navElement.innerHTML = novoConteudo;





const indicebtn = document.getElementById('ibtn');

const pop = document.getElementById('id-pop');

const closeBtn = document.querySelector('.close'); 

function exibirPopup(){
    pop.style.display = 'block';
}

function fecharPopup(){
    pop.style.display = 'none';
}

indicebtn.addEventListener('click', exibirPopup );

closeBtn.addEventListener('click', fecharPopup);


