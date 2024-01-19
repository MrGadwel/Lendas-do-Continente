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
                <li> <i id="indice"  class="fa-solid fa-book"></i><a href="../../../pages/todas-as-lendas/lenda-dentes-e-garras/lenda-dentes-e-garras.html">DENTES E GARRAS</a></li>
                <li> <i id="indice"  class="fa-solid fa-book"></i><a href="../../../pages/todas-as-lendas/lenda-outras/lenda-outras.html">Outras Lendas</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-shield-halved"></i> ARMAS</summary>
            <ul>
                <li> <i class="fa-solid fa-eye"></i><a href="../../../pages/armas/espada-claire/espada-claire.html"> Espada</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-dragon"></i> CRIATURS</summary>
            <ul>
                <li> <i class="fa-solid fa-eye"></i><a href="../../../pages/criaturas/berserker/berserker.html"> Berserkers</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-regular fa-map"></i> LUGARES</summary>
            <ul>
                <li> <i class="fa-regular fa-map"></i><a href="../../../pages/lugares/kohan/kohan.html"> Kohan</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-square"></i> MATERIAIS</summary>
            <ul>
                <li> <i class="fa-solid fa-square"></i><a href="../../../pages/materiais/aço negro/aço negro.html"> Aço Negro</a></li>
                <li> <i class="fa-solid fa-square"></i><a href="../../../pages/materiais/heilig/heilig.html">Heilig</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-newspaper"></i></i> REGISTROS</summary>
            <ul>
                <li> <i class="fa-solid fa-newspaper"></i><a href="../../../pages/registros/diário de ordock/diário de ordock_01.html"> Diário de Ordock</a></li>
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


