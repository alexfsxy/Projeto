import "../Style.css";
import React, {useState} from "react";
import  Logo from"../assets/vantagens-cartao-de-saude.jpeg";
import  medicina from"../assets/medicina.png";
import { Navigate} from "react-router-dom"



const PageSobre = () => {

    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)
    }



    return (
<div>
<header>
<a href="#" id="logo" className="nav-item">
<h2><i className="material-icons"></i>Cartão de Saúde</h2></a>
<nav className="nav-item">

 <ul className={showMenu !== true ? 'ul-pagesobre' : 'ul-pagesobre show-ul'}>

 <a href="#about"><li>Sobre</li></a>
 <a href="#employees-container"><li>Contato</li></a>
 <a href="#account"><li>FAQ</li></a>
 <a href="#about"><li></li></a>

  

  
</ul>

     
<button id="cta">
        <p>Login</p>

        <a href="cadastramento.html">
            
        <i className="material-icons"></i></a></button>

 

       
    
        <button id="register-button">
        <p>Cadastra-se</p>
        <a href="cadastramento.html">
        <i className="material-icons"></i></a></button>
        
</nav>
</header>


<main>


 <section id="hero">

<div>
    <h1>O que é cartão de saúde</h1>
    
    <div>
      
      <p>O cartão saúde é uma solução que funciona como um método alternativo aos planos de saúde tradicionais: ele oferece aos usuários acesso a serviços de saúde por meio de um sistema de pagamento ou descontos em consultas, exames e procedimentos médicos. 

Diferente de um seguro saúde convencional, que geralmente envolve contratos de longo prazo e mensalidades fixas, a ideia é pagar apenas pelos serviços que utilizam, mas com descontos.

Esta ferramenta é ideal para pessoas que não possuem cobertura de plano de saúde. O cartão pode ser oferecido por diversas entidades, incluindo hospitais, clínicas, e até empresas especializadas em benefícios de saúde. 

Além disso, pode ser tanto uma aquisição pessoal como parte dos benefícios aos colaboradores de uma empresa. </p>   
         </div>
         </div>
      
      
</section>



            
     <section id="about">
      
     <img src={Logo} alt="Cartao de Saude." width={400} />
      <div>
      
      <h1>Sobre</h1>
<div>
<p>O cartão de benefício saúde tem se tornado uma tendência crescente no mercado. Em grande parte, isso acontece devido à realidade de que uma parcela significativa da população não possui cobertura de plano de saúde particular. 

Uma pesquisa destacada pela Agência Brasil em 2018 revelou que quase 70% dos brasileiros não têm plano de saúde particular, um dado que deixa claro a necessidade de alternativas acessíveis e flexíveis no acesso a cuidados médicos.

Essa falta de cobertura tradicional impulsiona a busca por opções que possam oferecer algum nível de suporte sem os custos proibitivos associados aos planos de saúde convencionais. 

Então, como fica perceptível, o cartão de benefício saúde acaba respondendo a essa demanda ao proporcionar uma maneira mais econômica de acessar serviços de saúde.

É ele que permite aos usuários pagar apenas pelos serviços que utilizam, sem a necessidade de mensalidades fixas ou longos compromissos contratuais.

Além disso, o cartão saúde é especialmente atraente para quem encontra-se desassistido pelos sistemas tradicionais de saúde — o que pode ser um grande diferencial para muitas pessoas que precisam gerenciar suas despesas médicas de forma mais eficiente.
</p>
</div>
</div>
</section>
<img src={medicina} alt="medicina." width={800} />
<nav className="navbar navbar-light bg-light mb-4">

    <div className="container">
        <div className="navbar-brand h1">
            
   <h1> Na definição da Organização Mundial da Saúde (OMS), a tecnologia aplicada à saúde é:</h1>

<h1>“A aplicação de conhecimentos e habilidades organizados na forma de dispositivos, medicamentos, vacinas, procedimentos e sistemas desenvolvidos para resolver um problema de saúde e melhorar a qualidade de vida”.</h1>
        </div>
    </div>        
</nav>




<section id="account">
  <article id="registration-form">
    
    <h2>FAQ</h2>
    <p></p>
    <h4>Perguntas e respostas</h4>
    <p></p>
    <p></p>
    <div>
    <h3>O que é CNS?</h3>
    <p>O CNS é o documento de identificação do usuário do SUS, que contém informações pessoais,
         contatos e documentos</p>
         <p></p>
        <div>
     <h3>Como fazer o Cartão SUS?</h3> 
     <p>O Cartão SUS pode ser feito na Secretaria Municipal de Saúde,
         em uma unidade de saúde ou no Programa Saúde da Família.</p>
         <p></p>
     <div>
     <h3>Quais os documentos necessários para fazer o Cartão</h3>
     <p>Os documentos necessários são carteira de identidade(RG),
        certidão de nascimento, carteira de trabalho, CPF e comprovante de endereço.</p>
        <p></p>
     </div>
     </div>
     </div>      
    
  </article>

</section>

<section id="employees-container">
  <h2>Contato</h2>
  <section id="employees">
    <article>
     
      <p>
        Telefone: 0800 000 000 000</p>
       <p> Whatsapp:(55) 51-999999999
      </p>
    </article>
    <article>
    
      <p>
       email: cartaosaude@ig.com.br
      </p>
      <p>telegram: canalcartaosaude</p>
    </article>
  </section>
</section>



</main>
<footer>Visite as nossas redes sociais
<a href="https://www.instagram.com/p/DBjoN3vvDzm/"><button>Acessar</button></a>

</footer>
            
  </div>
        );
        }

        export default PageSobre;