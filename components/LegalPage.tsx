import React from 'react';
import { PageView } from '../types';

interface LegalPageProps {
  page: 'terms' | 'privacy' | 'copyright';
}

const LegalPage: React.FC<LegalPageProps> = ({ page }) => {
  const content = {
    terms: {
      title: 'Termos de Uso',
      body: (
        <>
          <p className="mb-4">
            Bem-vindo ao Estúdio CRIA. Ao acessar nosso site e utilizar nossos serviços, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Serviços</h3>
          <p className="mb-4">
            O Estúdio CRIA oferece serviços de produção multimídia, incluindo fotografia, vídeo, animação e produção musical. Os detalhes específicos de cada projeto serão acordados em contrato individual.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Propriedade Intelectual</h3>
          <p className="mb-4">
            Todo o material produzido pelo Estúdio CRIA é protegido por direitos autorais. A transferência de direitos de uso será especificada no contrato de cada projeto.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Responsabilidades</h3>
          <p className="mb-4">
            Nos comprometemos a entregar os projetos com a máxima qualidade e dentro dos prazos estipulados, desde que o cliente forneça todas as informações e materiais necessários em tempo hábil.
          </p>
        </>
      )
    },
    privacy: {
      title: 'Política de Cancelamento',
      body: (
        <>
          <p className="mb-4">
            Nossa política de cancelamento visa proteger tanto o tempo da nossa equipe quanto o investimento dos nossos clientes.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Prazos</h3>
          <p className="mb-4">
            Cancelamentos devem ser comunicados com antecedência mínima de 48 horas para sessões de estúdio e 7 dias para produções externas ou eventos.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Reembolsos</h3>
          <p className="mb-4">
            O sinal pago para reserva de data não é reembolsável em caso de cancelamento por parte do cliente fora do prazo estipulado.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Reagendamentos</h3>
          <p className="mb-4">
            Permitimos um reagendamento sem custo adicional, desde que solicitado dentro do prazo de aviso prévio.
          </p>
        </>
      )
    },
    copyright: {
      title: 'Copyright',
      body: (
        <>
          <p className="mb-4">
            Todos os direitos reservados ao Estúdio CRIA.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Uso de Imagem e Som</h3>
          <p className="mb-4">
            O conteúdo exibido neste site (fotos, vídeos, animações, áudios e textos) é de propriedade exclusiva do Estúdio CRIA ou de seus respectivos clientes, utilizado com permissão.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Proibições</h3>
          <p className="mb-4">
            É estritamente proibida a reprodução, distribuição, modificação ou uso comercial de qualquer material deste site sem autorização prévia por escrito do Estúdio CRIA.
          </p>
        </>
      )
    }
  };

  const currentContent = content[page];

  return (
    <section className="py-32 bg-obsidian min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
          {currentContent.title}
        </h1>
        <div className="prose prose-invert prose-lg text-gray-400">
          {currentContent.body}
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
