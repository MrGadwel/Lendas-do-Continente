var navElement = document.querySelector('.pop-up');
var footer = document.querySelector('.footer');
var header = document.querySelector('.header');






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
    <a class="home-i" href="../../../index.html" ><i class='bx bxs-home'></i>Início</a>
    <span class="close">×</span>
    
    <h2 class="indice-destaque">Índice</h2>
    <details>
        <summary> <i id="indice"  class="fa-solid fa-book"></i>TODAS AS LENDAS</summary>
            <ul>
                <li> <i id="indice"  class="fa-solid fa-book"></i><a href="../../../todas-as-lendas/lenda-dentes-e-garras/lenda-dentes-e-garras.html">DENTES E GARRAS</a></li>
                <li> <i id="indice"  class="fa-solid fa-book"></i><a href="../../../todas-as-lendas/lenda-outras/lenda-outras.html">Outras Lendas</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-fire"></i> ALMAS</summary>
            <ul>
                <li> <i class="fa-solid fa-fire"></i><a href="../../../almas/claire/claire.html"> Claire</a></li>
                <li> <i class="fa-solid fa-fire"></i><a href="../../../almas/glen/glen.html"> Glen</a></li>

            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-shield-halved"></i> ARMAS</summary>
            <ul>
                <li> <i class="fa-solid fa-eye"></i><a href="../../../armas/espada-claire/espada-claire.html"> Espada</a></li>
                <li> <i class="fa-solid fa-hammer"></i><a href="../../../armas/martelo-de-guerra-anão/martelo-de-guerra-anão.html"> Martelo de Guerra Anão</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-dragon"></i> CRIATURS</summary>
            <ul>
                <li> <i class="fa-solid fa-eye"></i><a href="../../../criaturas/berserker/berserker.html"> Berserkers</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-regular fa-map"></i> LUGARES</summary>
            <ul>
                <li> <i class="fa-regular fa-map"></i><a href="../../../lugares/hugel/hugel.html"> Hugel</a></li>
                <li> &nbsp &nbsp &nbsp<i class="fa-regular fa-map"></i><a href="../../../lugares/kohan/kohan.html"> Kohan</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-square"></i> MATERIAIS</summary>
            <ul>
                <li> <i class="fa-solid fa-square"></i><a href="../../../materiais/aço negro/aço negro.html"> Aço Negro</a></li>
                <li> <i class="fa-solid fa-square"></i><a href="../../../materiais/heilig/heilig.html"> Heilig</a></li>
            </ul>
    </details>
    <details>
        <summary> <i class="fa-solid fa-pen-nib"></i> REGISTROS</summary>
            <ul>
                <li> <i class="fa-solid fa-newspaper"></i><a href="../../../registros/diário de ordock/diário de ordock_01.html"> Diário de Ordock</a></li>
            </ul>
    </details>



    
    `;
    var rodape=`
    
    <div><H2>&nbsp</H2></div>
    <table id="tabela_meio"><tr><td>

        <div class="redes_s" id="tabela_meio">

            <a href="https://discord.gg/w3wGyfAT8s" style="background: none;" target="_blank"><img src="../../img/Discord.png" alt="" width="50px"></a>
            <a href="https://www.instagram.com/lendasdocontinente/" style="background: none;" target="_blank"><img src="../../img/Instagram.png" alt="" width="50px"></a>
            <a href="https://twitter.com/lendacontinente" style="background: none;" target="_blank"><img src="../../img/X.png" alt="" width="50px"></a>

        </div>

    </td></tr></table>


    <div class="foooter">
    <div class="footer-gad">
        <H2>LENDAS DO CONTINENTE por <a href="https://gadwel.carrd.co/" style="background: none;" target="_blank" class="link_gado">Gadwel</a></H2>
        <br>
        <div class="links">
        
            <a href="../index.html"><i class='bx bxs-home'></i></a>
            <a href="https://gadwel.carrd.co/" target="_blank"><i class='bx bx-link-alt'></i></i></a>
        </div>
    </div>
    
    <div class="dev">
        <h3>Site desenvolvido por <a class="h-name" href="https://higor-milani.dev/" target="_blank">Higor Milani</a></h3>
        <div class="dev-img">
            <a class="h-img"  href="https://higor-milani.dev/" target="_blank"><img src="../../img/higor-milani-dev.svg" alt="Acesse https://higor-milani.dev/"><a>
            <a class="h-link" href="https://higor-milani.dev/" target="_blank"><h3>Acesse https://higor-milani.dev/</h3></a>
            
        </div>
        <br>
        <br>
    </div>
</div>
    
    `;
    var menutopo=`

    <nav class="nav_cabeçalho">
            <p style="text-indent:0px;" class="texto_cabeçalho"><b><a href="../../index.html" class="link_menutopo">INÍCIO</a></b></p>
            <p style="text-indent:0px;" class="texto_cabeçalho"><b><a href="../../todas-as-lendas/lenda-dentes-e-garras/lenda-dentes-e-garras.html" class="link_menutopo">DENTES E GARRAS</a></b></p>
            <p style="text-indent:0px;" class="texto_cabeçalho"><b><a href="../../fanarts/fanarts.html" class="link_menutopo">FANARTS</a></b></p>
            <p style="text-indent:0px;" class="texto_cabeçalho"><b><a href="../../debug/debug.html" class="link_menutopo">?</a></b></p>
    </nav>
    
    
    `



    ////////////////////////////////////////////////////////////////////////////////////////////



    // Atualização do conteúdo do <nav>
    navElement.innerHTML = novoConteudo;
    footer.innerHTML = rodape;
    header.innerHTML = menutopo;





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


