const courses = [
    {
        title: "Introdução ao Mercado de Ações",
        description: "O Que é o Mercado de Ações?",
        content: "Definição do Mercado de Ações. <p> O mercado de ações é um ambiente onde são negociadas partes de propriedade de empresas, chamadas de ações. Cada ação representa uma fração do capital social da empresa e confere ao seu detentor (acionista) direitos e responsabilidades como sócio da companhia.",
        videoUrl: "video/invideo-ai-1080 Introdução ao Mercado de Ações_ O que é_ 2024-07-16.mp4" // Coloque o caminho do vídeo do curso de HTML aqui
    },
{
    title:"Objetivo do Mercado de Ações",
        description:"",
        content:"O principal objetivo do mercado de ações é proporcionar às empresas uma forma de captar recursos financeiros para investimentos, crescimento e expansão. Para os investidores, o mercado de ações oferece a oportunidade de adquirir uma participação em empresas e potencialmente lucrar com a valorização das ações ou através do recebimento de dividendos.<p>Objetivo do Mercado de Ações<p>O principal objetivo do mercado de ações é proporcionar às empresas uma forma de captar recursos financeiros para investimentos, crescimento e expansão. Para os investidores, o mercado de ações oferece a oportunidade de adquirir uma participação em empresas e potencialmente lucrar com a valorização das ações ou através do recebimento de dividendos.",
        videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui

},
{
title:"Como Funciona o Mercado de Ações?",
description:"Oferta Pública Inicial (IPO):<p>",
content:"Quando uma empresa decide abrir seu capital, ela realiza uma oferta pública inicial (IPO), emitindo ações para serem compradas por investidores no mercado primário.<p>Mercado Secundário:<p>Após a IPO, as ações são negociadas no mercado secundário, onde os investidores compram e vendem ações entre si. Este mercado é o que geralmente chamamos de bolsa de valores.<p>Pregão Eletrônico:<p>A negociação de ações ocorre em pregões eletrônicos, onde ordens de compra e venda são executadas através de sistemas informatizados. No Brasil, a principal bolsa de valores é a B3 (Brasil, Bolsa, Balcão).",
videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui

},


{
    title:"Importância do Mercado de Ações",
    description:"Para as Empresas:",
    content:"Captação de recursos para investimentos.Melhoria da governança corporativa devido à necessidade de maior transparência.Valorização da marca e maior visibilidade no mercado.<p>Para os Investidores:<p> Potencial de retorno financeiro através da valorização das ações.Recebimento de dividendos, que são partes dos lucros distribuídos aos acionistas.Diversificação de investimentos, reduzindo o risco geral do portfólio.<p>Para a Economia:<p>Fomento ao crescimento econômico, ao facilitar o financiamento de empresas.Maior eficiência na alocação de recursos.Indicador de confiança e saúde econômica.<p>Principais Bolsas de Valores no Mundo:<p>NYSE (New York Stock Exchange): A maior bolsa de valores do mundo, localizada em Nova York, EUA.NASDAQ: Também nos EUA, conhecida por listar empresas de tecnologia e inovação.B3 (Brasil, Bolsa, Balcão): Principal bolsa de valores do Brasil, localizada em São Paulo.LSE (London Stock Exchange): Bolsa de valores de Londres, uma das mais antigas e importantes da Europa.TSE (Tokyo Stock Exchange): A maior bolsa de valores do Japão e uma das mais significativas da Ásia.",
    videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui
},
    {
        title: "História da Bolsa de Valores",
        description: "",
        content: "A história da bolsa de valores é marcada por inovação, expansão e desafios. Desde sua criação em Amsterdã até a modernização digital atual, as bolsas de valores continuam a desempenhar um papel crucial na economia global, facilitando o crescimento das empresas e oferecendo oportunidades de investimento para indivíduos ao redor do mundo.",
        videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui
    },
    {
        title: "Origem das Bolsas de Valores",
        description: "Primeiras Formas de Comércio e Troca.",
        content: "Antes da existência das bolsas de valores, o comércio e a troca de mercadorias ocorriam em feiras e mercados. Comerciantes se reuniam para trocar bens e serviços, e essa prática estabeleceu as bases para os mercados financeiros.<p>Criação da Primeira Bolsa de Valores (Amsterdã).<p>A primeira bolsa de valores oficial foi criada em Amsterdã, na Holanda, em 1602. A Companhia Holandesa das Índias Orientais foi a primeira empresa a emitir ações para o público, permitindo que investidores comprassem uma parte da empresa e compartilhassem dos lucros. Esta prática inovadora de emissão de ações criou um mercado secundário onde essas ações poderiam ser compradas e vendidas.<p>Evolução das Bolsas de Valores ao Redor do Mundo.<p>Londres (London Stock Exchange)<p>Em 1698, a bolsa de valores de Londres foi estabelecida em Jonathan’s Coffee House, onde os comerciantes se reuniam para negociar ações. A London Stock Exchange (LSE) se formalizou em 1801, tornando-se uma das maiores e mais influentes bolsas do mundo.<p>Nova York (New York Stock Exchange)<p>A New York Stock Exchange (NYSE) foi fundada em 1792, quando 24 corretores de valores assinaram o Acordo de Buttonwood. Localizada em Wall Street, a NYSE cresceu e se tornou a maior bolsa de valores do mundo em termos de capitalização de mercado.<p>Nova York (New York Stock Exchange).",
        videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui
    },
    {
        title:"Bolsas de Valores Atuais",
        description:"Principais Bolsas Atuais",
        content:"NYSE (New York Stock Exchange)<p>NASDAQ<p>LSE (London Stock Exchange)<p>Tokyo Stock Exchange (TSE)<p>Shanghai Stock Exchange (SSE)<p>Hong Kong Stock Exchange (HKEX)<p>B3 (Brasil, Bolsa, Balcão).<p>Tendências Atuais e Futuras<p>Crescimento das fintechs e tecnologias disruptivas.Aumento do interesse em investimentos sustentáveis (ESG).Expansão do mercado de criptomoedas e blockchain.",
        videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui
    },

    {
        title:"",
        description:"",
        content:"",
        videoUrl: "path/to/html-course-video.mp4" // Coloque o caminho do vídeo do curso de HTML aqui
    },
    
];

function loadCourseList() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    courses.forEach((course, index) => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerText = course.title;
        courseItem.addEventListener('click', () => showCourseDetail(index));
        courseList.appendChild(courseItem);
    });
}

function showCourseDetail(index) {
    const course = courses[index];
    const courseContent = document.getElementById('course-content');
    const courseList = document.getElementById('course-list');
    const courseDetail = document.getElementById('course-detail');
    const courseVideo = document.getElementById('course-video');

    courseContent.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <p>${course.content}</p>
    `;
    
    courseVideo.src = course.videoUrl;

    courseList.style.display = 'none';
    courseDetail.style.display = 'block';
}

function hideCourseDetail() {
    const courseList = document.getElementById('course-list');
    const courseDetail = document.getElementById('course-detail');

    courseList.style.display = 'block';
    courseDetail.style.display = 'none';
    const courseVideo = document.getElementById('course-video');
    courseVideo.pause();
    courseVideo.src = "";
}

document.getElementById('back-btn').addEventListener('click', hideCourseDetail);

// Carregar a lista de cursos ao iniciar a página
document.addEventListener('DOMContentLoaded', loadCourseList);