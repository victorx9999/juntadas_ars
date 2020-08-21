'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('artigos', [{
            id: 1,
            titulo: 'Portaria nº 138/GJF, de 24 de Julho de 2006',
            descricao: 'Disciplina o funcionamento da seção de Arquivo e Depósito Judicial e dá outras providências.',
            arquivo: 'd6fffb808527158f7ee199c94166149b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2006-07-24 00:00:00.000',
            updated_at: '2006-07-24 00:00:00.000'
        }, {
            id: 2,
            titulo: 'Portaria nº 09/7ª Vara, de 04 de Maio de 2009',
            descricao: 'Dispõe sobre a uniformização dos procedimentos quanto aos processos que tratam de beneficios por incapacidade no âmbito do Juízado Especial Federal da SJPB.',
            arquivo: 'a18c2e359a114a905853763e4b82e08d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2009-05-04 00:00:00.000',
            updated_at: '2009-05-04 00:00:00.000'
        }, {
            id: 3,
            titulo: 'Portaria nº 31/08ª Vara, de 06 de Outubro de 2009',
            descricao: 'Determina que as partes que já ajuizaram ações pleiteando concessão/restabelecimento do beneficio de Amparo Assistencial de que trata a Lei nº 8741/93, poderão ter seus processos julgados sem a necessidade de realização de audiência de instrução.',
            arquivo: 'c9a4ae1a7a44816afd4e1d1bbd19cbcf',
            ativo: 1,
            usuario_id: 1,
            created_at: '2009-10-06 00:00:00.000',
            updated_at: '2009-10-06 00:00:00.000'
        }, {
            id: 4,
            titulo: 'Portaria nº 1290/GDF, de 05 de Novembro de 2009',
            descricao: 'Determina que seja efetuada escala de trabalho/horário dos servidores Técnico Judiciário - Especialidade Segurança e Transportes lotados na SA, que não exercem atividades comissionadas.',
            arquivo: '9601ed54e37bcbe17c47aad8b7c63149',
            ativo: 1,
            usuario_id: 1,
            created_at: '2009-11-05 00:00:00.000',
            updated_at: '2009-11-05 00:00:00.000'
        }, {
            id: 5,
            titulo: 'Portaria nº 013/GDF, de 06 de Janeiro de 2010',
            descricao: 'Dispõe sobre a utilização do correio eletrônico como meio institucional de comunicação, diminuição do impacto ambiental das atividades internas da Seção Judiciária da Paraíba e dá outras providências.',
            arquivo: 'd0e8d8c7ce5b89463e854332d8544e92',
            ativo: 1,
            usuario_id: 1,
            created_at: '2010-01-06 00:00:00.000',
            updated_at: '2010-01-06 00:00:00.000'
        }, {
            id: 6,
            titulo: 'Portaria nº 223/GDF, de 15 de Março de 2010',
            descricao: 'Determina que a Seção de Segurança e Transportes funcionará em expediente integral, devendo, para tanto permanecer pelo menos um servidor em atividade, de segunda a sexta-feira, das 7h30min às 19h.',
            arquivo: '8aa0d68568b919f209fc25d5909f3cb6',
            ativo: 1,
            usuario_id: 1,
            created_at: '2010-03-15 00:00:00.000',
            updated_at: '2010-03-15 00:00:00.000'
        }, {
            id: 7,
            titulo: 'Portaria nº 357/GDF, de 30 de Abril de 2010',
            descricao: 'Constitui o “Comitê Institucional da Seção Judiciária da Paraíba – SJPB”, que será composto pelos ocupantes de cargos ou funções comissionadas.',
            arquivo: '3de265ae29cf8c72fea18bb364ed6189',
            ativo: 1,
            usuario_id: 1,
            created_at: '2010-04-30 00:00:00.000',
            updated_at: '2010-04-30 00:00:00.000'
        }, {
            id: 8,
            titulo: 'Portaria nº 03/GAB/TR, de 18 de Maio de 2010',
            descricao: 'Dispõe sobre o horário de funcionamento da Turma Recursal; a jornada de trabalho dos servidores e estagiários; o sistema eletrônico de controle de frequência; a instituição do banco de horas e dá outras providências.',
            arquivo: '15a852bf8282216daa5d19578ad90cf6',
            ativo: 1,
            usuario_id: 1,
            created_at: '2010-05-18 00:00:00.000',
            updated_at: '2010-05-18 00:00:00.000'
        }, {
            id: 9,
            titulo: 'Portaria nº 012/2010-GDS de 27 de Maio de 2010',
            descricao: 'Regulamenta o funcionamento do Juizado Especial Federal Adjunto Cível da 8ª Vara Federal da Paraíba, Subseção Judiciária de Sousa e adota outras providências.',
            arquivo: '1dbb1eee3e16f1b15a8e1743357ce7a0',
            ativo: 1,
            usuario_id: 1,
            created_at: '2010-05-27 00:00:00.000',
            updated_at: '2010-05-27 00:00:00.000'
        }, {
            id: 10,
            titulo: 'Portaria nº 013/2010-GDS de 28 de Maio de 2010',
            descricao: 'Altera o regulamento de funcionamento do Juizado Especial Federal Adjunto Cível da 8ª Vara Federal da Paraíba, Subseção Judiciária de Sousa e adota outras providências.',
            arquivo: '7cabc88ff5badeb3e9ba09ff0deebb46',
            ativo: 1,
            usuario_id: 1,
            created_at: '2010-05-28 00:00:00.000',
            updated_at: '2010-05-28 00:00:00.000'
        }, {
            id: 11,
            titulo: 'Portaria nº 036/GDF, de 22 de Fevereiro de 2011',
            descricao: 'Disciplina o cumprimento das diligências externas da Seção de Arquivo e Depósito Judicial, que exijam a presença de Executantes de Mandados.',
            arquivo: '020f9745c586025799357e9a35a51c06',
            ativo: 1,
            usuario_id: 1,
            created_at: '2011-02-22 00:00:00.000',
            updated_at: '2011-02-22 00:00:00.000'
        }, {
            id: 12,
            titulo: 'Portaria nº 059/GDF, de 04 de Junho de 2012',
            descricao: 'Disciplina os procedimentos de atermação de pedidos, cadastro de advogados e serviço de Telejuizado para funcionamento junto aos Juizados Especiais Federais de João Pessoa (7ª e 13ª Varas) e Turma Recursal.',
            arquivo: '034a7ac48aab2c427d1d5ceaac1e66fd',
            ativo: 1,
            usuario_id: 1,
            created_at: '2012-06-04 00:00:00.000',
            updated_at: '2012-06-04 00:00:00.000'
        }, {
            id: 13,
            titulo: 'Portaria nº 093/GDF, de 10 de Agosto de 2012',
            descricao: 'Intitui o uso do correio eletrônico como meio de comunicação geral, em substituição aos memorandos, ofícios, notificações, avisos e intimações, inclusive em processos administrativos, sendo nestes preferencialmente.',
            arquivo: '17cfa49925beebc206048cf18b7c170b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2012-08-10 00:00:00.000',
            updated_at: '2012-08-10 00:00:00.000'
        }, {
            id: 14,
            titulo: 'Portaria nº 096/GDF, de 16 de Agosto de 2012',
            descricao: 'Disciplina a concessão de licença para capacitação prevista no art. 87 da Lei nº 8.112/90, com a redação dada pela Lei nº 9.527/97.',
            arquivo: 'f380704e5e0870a50edda7c410032417',
            ativo: 1,
            usuario_id: 1,
            created_at: '2012-08-16 00:00:00.000',
            updated_at: '2012-08-16 00:00:00.000'
        }, {
            id: 15,
            titulo: 'Portaria nº 33/GDF, de 16 de Abril de 2013',
            descricao: 'Determina que esta Seção Judiciária observe integralmente, durante todas as fases dos procedimentos licitatórios, a legislação que obriga a inserção de critérios e quesitos de sustentabilidade ambiental.',
            arquivo: '9f74c59a4637baab452c9ea6cec9c744',
            ativo: 1,
            usuario_id: 1,
            created_at: '2013-04-16 00:00:00.000',
            updated_at: '2013-04-16 00:00:00.000'
        }, {
            id: 16,
            titulo: 'Portaria nº 84/GDF, de 18 de Julho de 2013',
            descricao: 'Amplia a obrigatoriedade de utilização do Processo Judicial Eletrônico (PJe) na Sede da Seção Judiciária e nas Subseção e dá outras porvidências.',
            arquivo: 'f4d7efd45ea7610c5f8a6a482f4f605f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2013-07-18 00:00:00.000',
            updated_at: '2013-07-18 00:00:00.000'
        }, {
            id: 17,
            titulo: 'Portaria nº 133/GDF, de 26 de Setembro de 2013',
            descricao: 'Amplia a obrigatoriedade de utilização do Processo Judicial Eletrônico(PJe), na sede da Seção Judiciária e nas Subseções Judiciárias.',
            arquivo: '0885be49da7822e99a40dd26701dd1d5',
            ativo: 1,
            usuario_id: 1,
            created_at: '2013-09-26 00:00:00.000',
            updated_at: '2013-09-26 00:00:00.000'
        }, {
            id: 18,
            titulo: 'Portaria nº 155/GDF, de 07 de Novembro de 2013',
            descricao: 'Regula o procedimento de averbação de tempo de serviço prestado por servidor da Seção Judiciária da Paraíba junto a instituições privadas ou a outros órgãos públicos.',
            arquivo: '319aec469f7b14e459e411f8abcf3e37',
            ativo: 1,
            usuario_id: 1,
            created_at: '2013-11-07 00:00:00.000',
            updated_at: '2013-11-07 00:00:00.000'
        }, {
            id: 19,
            titulo: 'Portaria nº 189/GDF, de 12 de Dezembro de 2013',
            descricao: 'Estabelece que, enquanto não houver normativo específico, emitido pelo CJF e/ou TRF5, que os servidores efetivos, oriundos do serviço público dos Estados, do Distrito Federal e dos Municípios, ainda que regidos por Regime Próprio de Previdência nos órgãos originários com ingresso na Seção Judiciária da Paraíba, a partir de 14 de outubro de 2013, sem quebra de continuidade, sujeitar-se-ão ao novo regime de previdência complementar instituído pela Lei nº 12.618 de 30 de abril de 2012..',
            arquivo: 'a13a565955b0770f8aa1834becf0c7f7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2013-12-12 00:00:00.000',
            updated_at: '2013-12-12 00:00:00.000'
        }, {
            id: 20,
            titulo: 'Portaria nº 006/GDF, de 14 de Janeiro de 2014',
            descricao: 'Estabelece que as ações conexas e o incidentes processuais deverão ser propostos exclusivamente pelo Processo Judicial Eletrônico, ainda que a ação principal a qual estejam vinculadas tramite por meio físico.',
            arquivo: '72104d0f15a0d660db12f81960dbf3c7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-01-14 00:00:00.000',
            updated_at: '2014-01-14 00:00:00.000'
        }, {
            id: 21,
            titulo: 'Portaria nº 034/GDF, de 28 de Março de 2014',
            descricao: 'Amplia a obrigatoriedade do Processo Judicial Eletrônico – PJe para as demais classes cíveis e abrange as cartas precatórias, de ordem e rogatórias.',
            arquivo: 'fbbebc9930f1de921b39bd96b7b60b89',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-03-28 00:00:00.000',
            updated_at: '2014-03-28 00:00:00.000'
        }, {
            id: 22,
            titulo: 'Portaria nº 039/GDF, de 22 de Abril de 2014',
            descricao: 'Determina que sejam distribuídas para as Varas Comuns as cartas deprecadas pela Justiça Estadual, no exercício da competência delegada de que trata o art. 109, §3º, da Constituição Federal.',
            arquivo: '6830fa3c1d0a23a7fed2fe87a908a914',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-04-22 00:00:00.000',
            updated_at: '2014-04-22 00:00:00.000'
        }, {
            id: 23,
            titulo: 'Portaria nº 041/GDF, de 24 de Abril de 2014',
            descricao: 'Dispõe sobre a emissão de Atestado De Capacidade Técnica - ACT, no âmbito da Justiça Federal na Paraíba.',
            arquivo: 'a9cb78a7228be359e1360587d93aefa9',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-04-24 00:00:00.000',
            updated_at: '2014-04-24 00:00:00.000'
        }, {
            id: 24,
            titulo: 'Portaria nº 045/GDF, de 29 de Abril de 2014',
            descricao: 'Dispõe sobre a concessão de estágio a estudantes de nível superior no âmbito da Seção Judiciárias da Paraíba.',
            arquivo: '15d49dffe82fb448a994c15b1c0beb80',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-04-29 00:00:00.000',
            updated_at: '2014-04-29 00:00:00.000'
        }, {
            id: 25,
            titulo: 'Portaria nº 073/GDF, de 18 de Junho de 2014',
            descricao: 'Altera, em parte, a Portaria nº 396/GDF, de 07 de Maio de 2010, que dispõe sobre a Central de Mandados da Seção Judiciária da Paraíba.',
            arquivo: 'ebc4523aa6edc59274ac53598cbb319b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-06-18 00:00:00.000',
            updated_at: '2014-06-18 00:00:00.000'
        }, {
            id: 26,
            titulo: 'Portaria nº 076/GDF, de 30 de Junho de 2014',
            descricao: 'Institui a Comissão Socioambiental e regulamenta sua atribuições no âmbito da Seção Judiciária na Paraíba.',
            arquivo: 'a3c64fd3cd4eb9ef8681491f74a8444b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-06-30 00:00:00.000',
            updated_at: '2014-06-30 00:00:00.000'
        }, {
            id: 27,
            titulo: 'Portaria nº 083/GDF, de 30 de Julho de 2014',
            descricao: 'Dispõe sobre o procedimento administrativo de transferência de bens móveis entre os setores da Seção Judiciária da Paraíba.',
            arquivo: '053fa8ac1175627eb961df746dc5d097',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-07-30 00:00:00.000',
            updated_at: '2014-07-30 00:00:00.000'
        }, {
            id: 28,
            titulo: 'Portaria nº 086/GDF, de 07 de Agosto de 2014',
            descricao: 'Estabelece diretrizes gerais para a redistribuição dos processos penais em tramitação na 1º, 2º e 3º Varas Federais.',
            arquivo: '2422fc88936f89b15860934eb60fa441',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-08-07 00:00:00.000',
            updated_at: '2014-08-07 00:00:00.000'
        }, {
            id: 29,
            titulo: 'Portaria nº 149/GDF, de 14 de Novembro de 2014',
            descricao: 'Atualiza o quadro de substituições automáticas dos magistrados da Seção Judiciária da Paraíba.',
            arquivo: 'f275084932b9d83651d9192d59f8a66f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2014-11-14 00:00:00.000',
            updated_at: '2014-11-14 00:00:00.000'
        }, {
            id: 30,
            titulo: 'Portaria nº 050/GDF, de 07 de Abril de 2015',
            descricao: 'Revoga a Portaria nº 012/GDF de 07 de Janeiro de 2011 e dispõe sobre o horário de funcionamento da JFPB; a jornada de trabalho, o sistema eletrônico de controle de frequência, a instituição do banco de horas, a concessão de folga compensatória para os servidores lotados na Secretaria Administrativa da Sede e dá outras providências.',
            arquivo: 'a43602093316a6af3c8acb9a31e3de81',
            ativo: 1,
            usuario_id: 1,
            created_at: '2015-04-07 00:00:00.000',
            updated_at: '2015-04-07 00:00:00.000'
        }, {
            id: 31,
            titulo: 'Portaria nº 079/GDF, de 19 de Junho de 2015',
            descricao: 'Estabelece que a concessão de diárias para os Oficiais de Justiça pressupõe decisão prévia de autoridade administrativa, conforme art 3º, II da Resolução nº 73/2009 do CNJ.',
            arquivo: '03ec43605472506c67533341e9592865',
            ativo: 1,
            usuario_id: 1,
            created_at: '2015-06-19 00:00:00.000',
            updated_at: '2015-06-19 00:00:00.000'
        }, {
            id: 32,
            titulo: 'Portaria nº 082/GDF, de 25 de Junho de 2015',
            descricao: 'Revoga a Portaria nº 139/GDF de 12 de fevereiro de 2003 e estabelece normas para a utilização do estacionamento da sede da Seção Judiciária da Paraíba.',
            arquivo: 'b7f0fac0248fa3bf070410a920825e9e',
            ativo: 1,
            usuario_id: 1,
            created_at: '2015-06-25 00:00:00.000',
            updated_at: '2015-06-25 00:00:00.000'
        }, {
            id: 33,
            titulo: 'Portaria nº 131/GDF, de 11 de Novembro de 2015',
            descricao: 'Revoga o capítulo V da Portaria nº 237/GDF de 23 de Março de 2006 e dispõe sobre a obrigatoriedade de devolução do cartão ou token, crachá de identificação, chave(s) de acesso a Setores deste Seção Judiciária e outros documentos e materiais sob guarda do servidor, quando do seu desligamento ou afastamento legal prolongado.',
            arquivo: 'ee458c768c7d10e4e1a18276ae7752be',
            ativo: 1,
            usuario_id: 1,
            created_at: '2015-11-11 00:00:00.000',
            updated_at: '2015-11-11 00:00:00.000'
        }, {
            id: 34,
            titulo: 'Portaria nº 141/GDF, de 04 de Dezembro de 2015',
            descricao: 'Disciplina, no âmbito da Seção Judiciária da Paraíba, os procedimentos de acesso à informação que tratam a Lei no 12.527 de 18 de novembro de 2011 e o Decreto nº 7.724 de 16 de Maio de 2012.',
            arquivo: 'adf32435e86a29e3156cc085ac241c64',
            ativo: 1,
            usuario_id: 1,
            created_at: '2015-12-04 00:00:00.000',
            updated_at: '2015-12-04 00:00:00.000'
        }, {
            id: 35,
            titulo: 'Portaria nº 018/GDF, de 07 de Março de 2016',
            descricao: 'Determina a atualização do PJe quanto a tramitação das Cartas Precatórias Fiscais, em decorrências da associação do assunto “Direito Processual Civil do Trabalho / Objetos de Cartas Precatórias / De Ordem / Atos Executórios” à competência Execução Fiscal, assim como em face da desvinculação deste assunto propriamente dito em relação às demais competências.',
            arquivo: '65b32af645f20ca4f4789f7389798a5a',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-03-07 00:00:00.000',
            updated_at: '2016-03-07 00:00:00.000'
        }, {
            id: 36,
            titulo: 'Portaria nº 020/GDF, de 14 de Março de 2016',
            descricao: 'Atualiza a relação de feriados e pontos facultativos na Seção Judiciária da Paraíba, revogando a Portaria nº 002/GDF de Janeiro de 2016.',
            arquivo: '010535d956c3b2938aea89ed8ecd6513',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-03-14 00:00:00.000',
            updated_at: '2016-03-14 00:00:00.000'
        }, {
            id: 37,
            titulo: 'Resolução nº 04, de 16 de Março de 2016',
            descricao: 'Audiência de Custódia - Dispõe sobre a apresentação de pessoa detida em flarante delito, até 24 horas após a sua prisão, para participar de audiência de custódia.',
            arquivo: '95a3a68ba720da8dc71b398e432f6ea3',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-03-16 00:00:00.000',
            updated_at: '2016-03-16 00:00:00.000'
        }, {
            id: 38,
            titulo: 'Resolução Pleno nº 10, de 10 de Junho de 2016',
            descricao: 'Dispõe sobre a anexação de documentos no Sistema de Processo Judicial Eletrônico Federal - PJe de 1º e 2º Graus no âmbito da 5ª Região.',
            arquivo: '33b33d4fbeebabe6f4373a089b9f9217',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-06-10 00:00:00.000',
            updated_at: '2016-06-10 00:00:00.000'
        }, {
            id: 39,
            titulo: 'Portaria nº 042/GDF, de 29 de Julho de 2016',
            descricao: 'Determina a utilização obrigatória do Processo Judicial Eletrônico – PJe para o processamento e tramitação das demandas judiciais da classe EXECUÇÃO PENAL, a partir de setembro de 2016, bem como de todos os seus incidentes processuais e ações conexas, no âmbito da SJPB e sua Subseções.',
            arquivo: '48d1cbe298eac26a1e31008ec090ae9f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-07-29 00:00:00.000',
            updated_at: '2016-07-29 00:00:00.000'
        }, {
            id: 40,
            titulo: 'Portaria nº 043/GDF, de 29 de Julho de 2016',
            descricao: 'Institui o CEJUSC, vinculado ao Núcleo Judiciário de Secretária Administrativa desta Seção Judiciária, responsavel pelo desenvolvimento de programas destinados a auxiliar, orientar e estimular a autocomposição, através da realização de sessões e audiências de conciliação e/ou mediação.',
            arquivo: '450fb54fe600ca39a1a2122b887cbb30',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-07-29 00:00:00.000',
            updated_at: '2016-07-29 00:00:00.000'
        }, {
            id: 41,
            titulo: 'Portaria nº 054/GDF, de 14 de Setembro de 2016',
            descricao: 'Atualiza as normas que regulamentam o funcionamento da Biblioteca “Juiz Federal Agnelo Amorim Filho” da Seção Judiciária da Paraíba.',
            arquivo: '45fc25e11233fed9f823e069bf23e34c',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-09-14 00:00:00.000',
            updated_at: '2016-09-14 00:00:00.000'
        }, {
            id: 42,
            titulo: 'Portaria nº 056/GDF, de 28 de Setembro de 2016',
            descricao: 'Disciplina procedimentos e estabelece prazos para a marcação das férias regulamentares, no âmbito da SJPB, de acordo com a resolução nº 221/22, do Conselho da Justiça Federal.',
            arquivo: '915c5fab322c62011c6ba28f270d644f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-09-28 00:00:00.000',
            updated_at: '2016-09-28 00:00:00.000'
        }, {
            id: 43,
            titulo: 'Portaria nº 070/GDF, de 28 de Novembro de 2016',
            descricao: 'Define normais gerais sobre a administração de material e patrimônio na SJPB.',
            arquivo: '3055d0fb7d7a71dfd2f27c641f39bbc4',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-11-28 00:00:00.000',
            updated_at: '2016-11-28 00:00:00.000'
        }, {
            id: 44,
            titulo: 'Portaria nº 074/GDF, de 02 de Dezembro de 2016',
            descricao: 'Determina a utilização obrigatória, a partir de Janeiro 2017, do Processo Judicial Eletrônico – PJe para o processamento e tramitação das demandas judiciais dos feitos relativos a classe EXECUÇÃO FISCAL e suas ações conexas, acidentais ou dependentes, em toda a SJPB.',
            arquivo: 'f61ed7ff1ad37414acb9c81d7ff1abf9',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-12-02 00:00:00.000',
            updated_at: '2016-12-02 00:00:00.000'
        }, {
            id: 45,
            titulo: 'Portaria nº 076/GDF, de 09 de Dezembro de 2016',
            descricao: 'Estabelece a utilização obrigatória, a partir de Janeiro de 2017, do Processo Judicial Eletrônico – PJe para ajuizamento e tramitação das demandas judiciais no âmbito da SJPB.',
            arquivo: '21a048623969c552ecae92d2bf92bfc7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-12-09 00:00:00.000',
            updated_at: '2016-12-09 00:00:00.000'
        }, {
            id: 46,
            titulo: 'Portaria nº 079/GDF, de 16 de Dezembro de 2016',
            descricao: 'Dispõe sobre os procedimentos básicos a serem adotados no acompanhamento e fiscalização da execução dos contratos administrativos, no âmbito da Seção Judiciária da Paraíba, e dá outras providências.',
            arquivo: '9516fbaa4ff3c7d7ab1ebebd84c744ee',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-12-16 00:00:00.000',
            updated_at: '2016-12-16 00:00:00.000'
        }, {
            id: 47,
            titulo: 'Portaria nº 080/GDF, de 16 de Dezembro de 2016',
            descricao: 'Dispõe sobre os procedimentos para a apuração de infrações e aplicação de penalidades a licitantes e contratados (as) no âmbito da Seção Judiaria da Paraíba e outras providências.',
            arquivo: '9c676ce28b5729dc07ba51a0519e6d3e',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-12-16 00:00:00.000',
            updated_at: '2016-12-16 00:00:00.000'
        }, {
            id: 48,
            titulo: 'Portaria nº 081/GDF, de 16 de Dezembro de 2016',
            descricao: 'Dispõe sobre a obrigatoriedade de utilização do Sistema de Processo Judicial Eletrônico - Pje, no ambiente de Custódia, na Seção e Subseções Judiciárias da Paraíba e dá outras providências.',
            arquivo: '5fc496aaf4b193339236fde45ca13ef0',
            ativo: 1,
            usuario_id: 1,
            created_at: '2016-12-16 00:00:00.000',
            updated_at: '2016-12-16 00:00:00.000'
        }, {
            id: 49,
            titulo: 'Portaria nº 007/GDF, de 10 de Março de 2017',
            descricao: 'Dispõe sobre a adoção de lista de verificação (checklists) nos processos administrativos, com vista ao aperfeiçoamento da Gestão de Riscos e das estruturas de Controle Interno da SJPB.',
            arquivo: 'bf11cb1974f1f968d98695b883ede331',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-03-10 00:00:00.000',
            updated_at: '2017-03-10 00:00:00.000'
        }, {
            id: 50,
            titulo: 'Portaria nº 010/GDF, de 21 de Março de 2017',
            descricao: 'Autoriza o TELETRABALHO em regime parcial e experimental, no âmbito da Secretaria Administrativa.',
            arquivo: '673860ba64bebeb9dbd74efab9e3dd5b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-03-21 00:00:00.000',
            updated_at: '2017-03-21 00:00:00.000'
        }, {
            id: 51,
            titulo: 'Portaria nº 011/GDF, de 27 de Março de 2017',
            descricao: 'Revoga a Portaria nº 116/GDF de 15 de Setembro de 2017 e estabelece que, para a concessão de diárias para os Oficiais de Justiça deve ser observada integralmente a Resolução nº CJF-RES-2015/00340 de 11/02/2015, que dispõe sobre a regulamentação e concessão de diárias e da aquisição de passagens áreas no âmbito do CJF de Primeiro e Segundo grau.',
            arquivo: 'd388b0bbfba67ffecd03700bbab1107d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-03-27 00:00:00.000',
            updated_at: '2017-03-27 00:00:00.000'
        }, {
            id: 52,
            titulo: 'Portaria nº 014/GDF, de 29 de Março de 2017',
            descricao: 'Altera a Portaria nº123/GDF de 08 de outubro de 2015 que estabeleceu o Regulamento da Central de Mandados/CEMAN da JFPB.',
            arquivo: '09981313f2b5905f600e39cd5605274d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-03-29 00:00:00.000',
            updated_at: '2017-03-29 00:00:00.000'
        }, {
            id: 53,
            titulo: 'Portaria nº 01/2017-CEJUSC, de 09 de Maio de 2017',
            descricao: 'Estabelece a utilização do SISTEMA DE MARCAÇÃO DE AUDIÊNCIAS pelas Varas Federais Comuns e pela Vara Federal Privativa de Execuções Fiscais.',
            arquivo: '9646dadd68218f1ac9215bb8979dcc76',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-05-09 00:00:00.000',
            updated_at: '2017-05-09 00:00:00.000'
        }, {
            id: 54,
            titulo: 'Ato nº 242/2017, de 25 de Abril de 2017',
            descricao: 'Cria o sistema de convênios SCC.',
            arquivo: '45bff06f2b8276424f0ffbd5a8f9be3a',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-04-25 00:00:00.000',
            updated_at: '2017-04-25 00:00:00.000'
        }, {
            id: 55,
            titulo: 'Portaria nº 020/GDF, de 28 de Abril de 2017',
            descricao: 'Delega à Direção da Secretaria Administrativa e à Direção do Núcleo de Gestão de Pessoas competência para a prática de atos administrativos.',
            arquivo: 'ecce9a04698328694da22a83ecf42af7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-04-28 00:00:00.000',
            updated_at: '2017-04-28 00:00:00.000'
        }, {
            id: 56,
            titulo: 'Ordem de Serviço nº 0060562/GDF, de 09 de Junho de 2017',
            descricao: 'Estabelece rotinas de trabalho direcionadas à Seções de Distribuição (varas comuns), na hipótese de interposição de recursos, ações conexas e incidentes processuais interpostos em autos físicos de natureza penal.',
            arquivo: 'd522c5abf70f511865a40302b1165a68',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-06-09 00:00:00.000',
            updated_at: '2017-06-09 00:00:00.000'
        }, {
            id: 57,
            titulo: 'Portaria nº 1162/GDF, de 08 de Agosto de 2017',
            descricao: 'Estabelece critérios para a implantação e operacionalização, pelas Varas Federais e CEJUSC, da comunicação dos atos processuais (intimações) através da ferramenta WhatsApp na Seção Judiciária da Paraíba.',
            arquivo: 'ec74ce0c5877964c6a722e3bbd0942c6',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-08-08 00:00:00.000',
            updated_at: '2017-08-08 00:00:00.000'
        }, {
            id: 58,
            titulo: 'Portaria nº 112/GDF, de 25 de Agosto de 2017',
            descricao: 'Dispõe sobre a apresentação e tramitação de Reclamações Pré-Processuais no “Ambiente do Centro de Conciliação”, no Sistema de Processo Judicial Eletrônico – PJe, no âmbito da Seção Judiciária da Paraíba.',
            arquivo: 'ff83ddb98e4c5cea03b49fb6c9ada376',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-08-25 00:00:00.000',
            updated_at: '2017-08-25 00:00:00.000'
        }, {
            id: 59,
            titulo: 'Portaria nº 1003/GDF, de 18 de Setembro de 2017',
            descricao: 'Regulamenta a destinação das armas de fogo apreendidas e dos bens vinculados a Ações Penais e Inquéritos Policiais arquivados e desaforados por declinação de competência e institui a lista de verificação para baixa definitiva/incompetência de feitos de natureza criminal',
            arquivo: '050ba4b6b3949c6448caf44d1c9b2d00',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-09-18 00:00:00.000',
            updated_at: '2017-09-18 00:00:00.000'
        }, {
            id: 60,
            titulo: 'Portaria nº 1448/GDF, de 27 de Outubro de 2017',
            descricao: 'Lista as comarcas estaduais que permanecem com a competência federal delegada para processamento e julgamento de causas de natureza previdenciária.',
            arquivo: '5dea00ec5142586d1f63676dbc47588a',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-10-27 00:00:00.000',
            updated_at: '2017-10-27 00:00:00.000'
        }, {
            id: 61,
            titulo: 'Portaria nº 1448/GDF, de 27 de Outubro de 2017',
            descricao: 'Altera a Portaria nº 020/GDF, de 28/abril/2017, que delega à Direção da Secretaria Administrativa e à Direção do Núcleo de Gestão de Pessoas a competência para a prática de atos administrativos.',
            arquivo: '33bb645b03aae761f9be0eb064f0c46f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-10-27 00:00:00.000',
            updated_at: '2017-10-27 00:00:00.000'
        }, {
            id: 62,
            titulo: 'Portaria nº 1450, de 06 de Novembro de 2017',
            descricao: 'Disciplina os serviços administrativos referentes ao Plantão Judiciário na Seção Judiciária da Paraíba e dá outras providências',
            arquivo: '92e2be7534a78c0ca925660c2a95cd3e',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-11-06 00:00:00.000',
            updated_at: '2017-11-06 00:00:00.000'
        }, {
            id: 63,
            titulo: 'Portaria nº 1460, de 06 de Novembro de 2017',
            descricao: 'Institui o Centro de Inteligência na Seção Judiciaria da Paraíba e dá outras providências',
            arquivo: 'cdc79f9d0e31a3d462f8baca317547a4',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-11-06 00:00:00.000',
            updated_at: '2017-11-06 00:00:00.000'
        }, {
            id: 64,
            titulo: 'Ato nº 572 2017',
            descricao: 'Relativo aos feriados e publi...',
            arquivo: 'b7dee4138b0f3d29770cb4e5044860f4',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-12-01 00:00:00.000',
            updated_at: '2017-12-01 00:00:00.000'
        }, {
            id: 65,
            titulo: 'Portaria nº 1544, de 04 de Dezembro de 2017',
            descricao: 'Disciplina prazos para procedimentos licitatórios',
            arquivo: '0a2359876f5a70c278b8621a6e98c29b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2017-12-04 00:00:00.000',
            updated_at: '2017-12-04 00:00:00.000'
        }, {
            id: 66,
            titulo: 'Portaria nº 54, de 01 de fevereiro de 2018',
            descricao: 'Institui a Central Integrada de Mandados para o cumprimento de diligências entre a Sede da Seção e as Subseções Judiciárias da Paraíba.',
            arquivo: '944663d71970f5bffb45d64eed6f264d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-02-01 00:00:00.000',
            updated_at: '2018-02-01 00:00:00.000'
        }, {
            id: 67,
            titulo: 'Portaria nº 137, de 14 de março de 2018',
            descricao: 'Institui medidas visando à redução de despesas, no âmbito da Seção Judiciária da Paraíba, e dá outras proviências.',
            arquivo: 'affe4b1b19e4b78b80f25e9ada3857d2',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-03-14 00:00:00.000',
            updated_at: '2018-03-14 00:00:00.000'
        }, {
            id: 68,
            titulo: 'Portaria nº 158, de 14 de março de 2018',
            descricao: 'Apresenta esclarecimentos sobre permutas entre oficiais de justiça dos Juizados Especiais Federais, da Turma Recursal e oficiais de justiça das varas comuns, e dá outras providências',
            arquivo: 'e11aa03d859ce458bb0ca398452073c0',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-03-14 00:00:00.000',
            updated_at: '2018-03-14 00:00:00.000'
        }, {
            id: 69,
            titulo: 'Resolução Pleno nº 03, de 21 de março de 2018',
            descricao: 'Dispõe sobre a digitalização de processos físicos em tramitação e sua inclusão no sistema de Processo Judicial Eletrônico - PJe',
            arquivo: 'cb7383bfe537a37fe26ac12aafc6dc6f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-03-21 00:00:00.000',
            updated_at: '2018-03-21 00:00:00.000'
        }, {
            id: 70,
            titulo: 'Portaria nº 189, de 22 de março de 2018',
            descricao: 'Suspensão de prazo processual por falta de energia elétrica',
            arquivo: '840f3624baca6518b4082a82a4f708e1',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-03-22 00:00:00.000',
            updated_at: '2018-03-22 00:00:00.000'
        }, {
            id: 71,
            titulo: 'Ato nº 127, de 25 de abril de 2018',
            descricao: 'Dispõe sobre o funcionamento da Justiça Federal de 1º e 2º Graus da 5ª Região, durante os jogos do Brasil na Copa do Mundo de 2018, e estabelece outras providências.',
            arquivo: 'da04cb767fbd4f913955e2b0ed2953ed',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-04-25 00:00:00.000',
            updated_at: '2018-04-25 00:00:00.000'
        }, {
            id: 72,
            titulo: 'Portaria nº 292, de 27 de abril de 2018',
            descricao: 'Institui condecorações a serem outorgadas pela Justiça Federal, Seção Judiciária da Paraíba, e dá outras providências.',
            arquivo: '97ae0bf6203ffe2dc3b5ed95ea968ed8',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-04-27 00:00:00.000',
            updated_at: '2018-04-27 00:00:00.000'
        }, {
            id: 73,
            titulo: 'Portaria nº 294, de 30 de abril de 2018',
            descricao: 'Institui Comissão para digitalização de processos físicos em tramitação na Sede da Seção Judiciária da Paraíba e inclusão no sistema de Processo Judicial Eletrônico - Pje.',
            arquivo: '58d5b812ce86179c7633bcaa31e28ca1',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-04-30 00:00:00.000',
            updated_at: '2018-04-30 00:00:00.000'
        }, {
            id: 74,
            titulo: 'Portaria nº 296, de 02 de maio de 2018',
            descricao: 'Dispõe sobre a concessão de auxílio-transporte aos servidores do Quadro de Pessoal da Justiça Federal na Paraíba.',
            arquivo: '16eb5c67586a3fde5a9295ff6dc52415',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-05-02 00:00:00.000',
            updated_at: '2018-05-02 00:00:00.000'
        }, {
            id: 75,
            titulo: 'Portaria nº 10, de 24 de maio de 2018',
            descricao: 'Suspende o expediente forense e prorroga os prazos com vencimento em 24 e 25/05/2018.',
            arquivo: '33a33666e287e8410097f1bd08c94698',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-05-24 00:00:00.000',
            updated_at: '2018-05-24 00:00:00.000'
        }, {
            id: 76,
            titulo: 'Portaria nº 368, de 27 de maio de 2018',
            descricao: 'Prorroga os prazos processuais com vencimento no dias 28 maio 2018 para o primeiro dia útil subsequente na Seção Judiciária da Paraíba.',
            arquivo: '897477f79db5e918c3f8f972e7c5a6c4',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-05-27 00:00:00.000',
            updated_at: '2018-05-27 00:00:00.000'
        }, {
            id: 77,
            titulo: 'Resolução Pleno 09, de 27 de junho de 2018',
            descricao: 'Regulamenta, no âmbito da Justiça Federal de 1º e 2º graus da 5ª Região, a expedição de certidões judiciais e dá outras providências',
            arquivo: '5a2ee136fed9344d8d31ad9133793bff',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-06-27 00:00:00.000',
            updated_at: '2018-06-27 00:00:00.000'
        }, {
            id: 78,
            titulo: 'Ato nº 301, de 29 de agosto de 2018',
            descricao: 'Dispõe sobre a obrigatoriedade de utilização do PJe para impetração de Mandado de Segurança e Interposição de Agravo de Instrumento.',
            arquivo: '21c73293b40f6bff399ddab40f2ac984',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-08-29 00:00:00.000',
            updated_at: '2018-08-29 00:00:00.000'
        }, {
            id: 79,
            titulo: 'Portaria nº 759, de 15 de outubro de 2018',
            descricao: 'Estabelece critérios para a distribuição de ações em meio físico, decorrentes de declinação de competência, perante os Juizados Especiais Federais na sede da Seção Judiciária.',
            arquivo: '0aa29d5df3978147caf4545ceba1aa89',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-10-15 00:00:00.000',
            updated_at: '2018-10-15 00:00:00.000'
        }, {
            id: 80,
            titulo: 'Edital nº 11, de 23 de outubro de 2018',
            descricao: 'Editais de Inspeções Judiciais 2019',
            arquivo: '4dd9a8770e276ea888810e7554e716a2',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-10-23 00:00:00.000',
            updated_at: '2018-10-23 00:00:00.000'
        }, {
            id: 81,
            titulo: 'Resolução Pleno nº 18, de 12 de dezembro de 2018',
            descricao: 'Amplia a competência das 1ª, 2ª e 3ª Varas Federais da sede da Seção Judiciária da Paraíba - SJPB.',
            arquivo: '5d4b40085240638691351666ac670ec7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-12-12 00:00:00.000',
            updated_at: '2018-12-12 00:00:00.000'
        }, {
            id: 82,
            titulo: 'Portaria nº 958, de 13 de dezembro de 2018',
            descricao: 'Institui o Plantão Anual Regionalizado durante o ano de 2019, na Sede da Seção Judiciária da Paraíba.',
            arquivo: 'bd043ebeb2593b679926a64d502f172b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-12-13 00:00:00.000',
            updated_at: '2018-12-13 00:00:00.000'
        }, {
            id: 83,
            titulo: 'Portaria nº 979, de 17 de dezembro de 2018',
            descricao: 'Restringe a tramitação dos pedidos de desarquivamento de autos judiciais.',
            arquivo: 'f67a7dbb9346d948f0857a4cb69f3f8c',
            ativo: 1,
            usuario_id: 1,
            created_at: '2018-12-17 00:00:00.000',
            updated_at: '2018-12-17 00:00:00.000'
        }, {
            id: 84,
            titulo: 'Ato nº 04, de 09 de janeiro de 2019',
            descricao: 'Torna Público os feriados, no âmbito do Tribunal Regional Federal Federal da 5ª Região, durante o exercício de 2019.',
            arquivo: 'd1a3487b4a089fb38a15a0c9f4d25ec6',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-01-09 00:00:00.000',
            updated_at: '2019-01-09 00:00:00.000'
        }, {
            id: 85,
            titulo: 'Portaria nº 61, de 25 de janeiro de 2019',
            descricao: 'Restabelece a tramitação dos pedidos de desarquivamento de autos judiciais.',
            arquivo: '971881227805ff236c15e5d4581c05cb',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-01-25 00:00:00.000',
            updated_at: '2019-01-25 00:00:00.000'
        }, {
            id: 86,
            titulo: 'Portaria nº 132, de 14 de fevereiro de 2019',
            descricao: 'Decreta como ponto facultativo o dia 06 de março de 2019 (quarta-feira de cinzas), no âmbito da Seção Judiciária da Paraíba, e dá outras providências.',
            arquivo: '16dd964816f9d152ecc7068be3f1277e',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-02-14 00:00:00.000',
            updated_at: '2019-02-14 00:00:00.000'
        }, {
            id: 87,
            titulo: 'Portaria nº 189, de 13 de março de 2019',
            descricao: 'Institui o Escritório de Inovação, com a finalidade de desenvolver atividades de pesquisa e implementar soluções relacionadas às atividades da Justiça Federal na Paraíba, em especial na área de Tecnologia da Informação.',
            arquivo: '132b0b7487cce942e8969a0ec8b59a57',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-03-13 00:00:00.000',
            updated_at: '2019-03-13 00:00:00.000'
        }, {
            id: 88,
            titulo: 'Portaria nº 244, de 22 de março de 2019',
            descricao: 'Estabelece critérios para a distribuição e a migração de ações recebidas em meio físico, decorrentes de declinação de competência, no âmbito da Sede da Seção Judiciária.',
            arquivo: 'b875019d0619aab478a6d2e71d7fc9e8',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-03-22 00:00:00.000',
            updated_at: '2019-03-22 00:00:00.000'
        }, {
            id: 89,
            titulo: 'Portaria nº 274, de 01 de abril de 2019',
            descricao: 'Estabelece critérios para a tramitação das ações nos Juizados Especiais Federais e da Turma Recursal, na Sede da Seção Judiciária da Paraíba.',
            arquivo: '02559627080910cd25f2da65dc40971a',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-04-01 00:00:00.000',
            updated_at: '2019-04-01 00:00:00.000'
        }, {
            id: 90,
            titulo: 'Portaria nº 279, de 03 de abril de 2019',
            descricao: 'Estabelece regras mínimas de segurança, no âmbito da Seção Judiciária da Paraíba, institui o Grupo de Segurança Operacional e dá outras providências.',
            arquivo: '9d57daec493d44b002f6379ed1797642',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-04-03 00:00:00.000',
            updated_at: '2019-04-03 00:00:00.000'
        }, {
            id: 91,
            titulo: 'Ordem de Serviço nº 0926683, de 22 de abril de 2019',
            descricao: 'Estabelece critérios para a distribuição de processos oriundos de outros Órgãos Judiciais, de acordo com a Resolução 10/2016 do TRF da 5ª Região.',
            arquivo: '8e05a56733a3cbf886ae75702fdfd23e',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-04-22 00:00:00.000',
            updated_at: '2019-04-22 00:00:00.000'
        }, {
            id: 92,
            titulo: 'Edital nº 7, de 09 de maio de 2019',
            descricao: 'Faz saber aos que lerem o presente Edital ou dele tiverem conhecimento que, em 2019, serão realizadas INSPEÇÕES JUDICIAIS nas Varas Federais da Seção Judiciária da Paraíba, nos períodos neste instrumento especificados, sob a presidência dos respectivos Juízes Federais, com o auxílio dos Juízes Federais Substitutos, onde houver.',
            arquivo: 'dd26310148936940e02ea2150773ceeb',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-05-09 00:00:00.000',
            updated_at: '2019-05-09 00:00:00.000'
        }, {
            id: 93,
            titulo: 'Portaria nº 429, de 17 de maio de 2019',
            descricao: 'Disciplina o funcionamento da Seção de Arquivo e Depósito Judicial, relativamente ao arquivamento e desarquivamento de autos, na Sede desta Seccional, e dá outras providências.',
            arquivo: '6c24452cec2a00d5d9f5ecb7dd19c7f0',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-05-17 00:00:00.000',
            updated_at: '2019-05-17 00:00:00.000'
        }, {
            id: 94,
            titulo: 'Portaria nº 436, de 21 de maio de 2019',
            descricao: 'Transfere o ponto facultativo do dia 20 (Corpus Christi) para o dia 21 de junho 2019, no âmbito da Seção Judiciária da Paraíba, e dá outras providências.',
            arquivo: '23e793dd2d58a3ef568d135b941d019d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-05-21 00:00:00.000',
            updated_at: '2019-05-21 00:00:00.000'
        }, {
            id: 95,
            titulo: 'Ato nº 208, de 04 de junho de 2019',
            descricao: 'Regulamenta o Sistema Eletrônico de Execução Unificado (SEEU) no âmbito do Tribunal Regional Federal da 5ª Região e Seções Judiciárias vinculadas.',
            arquivo: 'ea561c7039c201f705c59296481ab02d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-06-04 00:00:00.000',
            updated_at: '2019-06-04 00:00:00.000'
        }, {
            id: 96,
            titulo: 'Portaria nª 34, de 13 de agosto de 2019',
            descricao: 'Implanta a CENTRAL DE MANDADOS no âmbito da Subseção Judiciária de Campina Grande e aprova seu REGULAMENTO.',
            arquivo: '671e970fcdd6fb05c0c6a8942600101b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-08-13 00:00:00.000',
            updated_at: '2019-08-13 00:00:00.000'
        }, {
            id: 97,
            titulo: 'Resolução Pleno Nº 08, de 04 de setembro de 2019',
            descricao: 'Disciplina a tramitação dos inquéritos, ações penais e procedimentos criminais incidentais no PJe',
            arquivo: 'cceb4b8a231e0a64044f951ca4b1b745',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-09-04 00:00:00.000',
            updated_at: '2019-09-04 00:00:00.000'
        }, {
            id: 98,
            titulo: 'Portaria da Direção do Foro nº 868 de 27 de Setembro de 2019',
            descricao: 'Revoga a Portaria/GDF, nº 189/2019, que instituiu o ESCRITÓRIO DE INOVAÇÃO da Seção Judiciária da Paraíba e dá outras providências.',
            arquivo: 'b0d66565ce67fc66292c3fd58547a84d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-09-27 00:00:00.000',
            updated_at: '2019-09-27 00:00:00.000'
        }, {
            id: 99,
            titulo: 'Ato nº 386, de 03 de Outubro de 2019',
            descricao: 'Transfere para 31 de outubro de 2019, quinta-feira, as comemorações alusivas ao Dia do Servidor Público, previsto no art. 236, da Lei nº 8.112/90',
            arquivo: '73bf0d1852334e022ef75b62ce375b43',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-10-03 00:00:00.000',
            updated_at: '2019-10-03 00:00:00.000'
        }, {
            id: 100,
            titulo: 'Ato nº 480, de 13 de Dezembro de 2019',
            descricao: 'Lista as comarcas estaduais que permanecem com a competência federal delegada para processamento e julgamento de causas de natureza previdenciária, conforme o disposto no inc. III, do art. 15, da Lei 5.010, de 30 de maio de 1966, com a redação dada pelo art. 3º, da Lei 13.876, de 20 de setembro de 2019.',
            arquivo: 'e20fc9ddcef2630bc4ae0aa05b21c1b4',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-12-13 00:00:00.000',
            updated_at: '2019-12-13 00:00:00.000'
        }, {
            id: 101,
            titulo: 'Portaria nº 1129, de 13 de Dezembro de 2019',
            descricao: 'Institui o Plantão Regionalizado de 2020.',
            arquivo: '46a79ca82518eb53ea31bf529d5c1ee3',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-12-13 00:00:00.000',
            updated_at: '2019-12-13 00:00:00.000'
        }, {
            id: 102,
            titulo: 'Resolução nº 614, de 16 de Dezembro de 2019',
            descricao: 'Dispõe sobre a alteração dos art. 14, 15 e 16 da Resolução CJF n. 318 de 4 de novembro de 2014',
            arquivo: 'e9212d16919bb2736c479d080fc51278',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-12-16 00:00:00.000',
            updated_at: '2019-12-16 00:00:00.000'
        }, {
            id: 103,
            titulo: 'Ato nº 507, de 26 de Dezembro de 2019',
            descricao: 'Torna públicos os feriados, no âmbito do Tribunal Regional Federal da 5ª Região, durante o exercício de 2020',
            arquivo: '6765cf32f2b91406b7b7be3c2088cfb8',
            ativo: 1,
            usuario_id: 1,
            created_at: '2019-12-26 00:00:00.000',
            updated_at: '2019-12-26 00:00:00.000'
        }, {
            id: 104,
            titulo: 'Portaria nº 1, de 2 de janeiro de 2020',
            descricao: 'Estabelece regras acerca do atendimento realizado pelas unidades integrantes da Seção Judiciária da Paraíba e dá outras providências.',
            arquivo: 'bea7f559cf126806d1783f91d9acc66b',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-01-02 00:00:00.000',
            updated_at: '2020-01-02 00:00:00.000'
        }, {
            id: 105,
            titulo: 'Portaria nº 14, de 27 de janeiro de 2020',
            descricao: 'Correição Ordinária na Seção Judiciária da Paraíba.',
            arquivo: '780a6c6ad40aa52e968127ddc9fcbade',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-01-27 00:00:00.000',
            updated_at: '2020-01-27 00:00:00.000'
        }, {
            id: 106,
            titulo: 'Ato nº 101, de 12 de março de 2020',
            descricao: 'Dispõe sobre medidas de prevenção relativas ao COVID-19.',
            arquivo: '5b4662bc9a6e92b6df7533def430c9e7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-12 00:00:00.000',
            updated_at: '2020-03-17 00:00:00.000'
        }, {
            id: 107,
            titulo: 'Portaria nº 167, de 17 de março de 2020',
            descricao: 'Dispõe sobre medidas de prevenção relativas ao COVID-19 na Seção Judiciária da Paraíba.',
            arquivo: '3c0497d450b28d92e9ced9238dc1b602',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-17 00:00:00.000',
            updated_at: '2020-03-17 00:00:00.000'
        }, {
            id: 108,
            titulo: 'Recomendação Nº 62, de 17 de março de 2020',
            descricao: 'Recomenda aos Tribunais e magistrados das preventivas à propagação da infecção pelo novo coronavírus – Covid-19 no âmbito dos sistemas de justiça penal e socioeducativo.',
            arquivo: '350d55c7830acbdad34871bb12ced07d',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-17 00:00:00.000',
            updated_at: '2020-03-17 00:00:00.000'
        }, {
            id: 109,
            titulo: 'Portaria Conjunta nº 1, de 18 de março de 2020',
            descricao: 'Dispõe sobre a padronização de procedimentos e atividades dos Analistas Judiciários - Área Judiciária - Especialidade Execução de Mandados na prevenção ao COVID-19.',
            arquivo: '5d161155e2e1ff376aa33550eced083f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-18 00:00:00.000',
            updated_at: '2020-03-18 00:00:00.000'
        }, {
            id: 110,
            titulo: 'Ato nº 112, de 19 de março de 2020',
            descricao: 'Dispõe sobre medidas de prevenção relativas ao COVID-19.',
            arquivo: 'c8559913da847a9f8db92e512d030085',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-19 00:00:00.000',
            updated_at: '2020-03-19 00:00:00.000'
        }, {
            id: 111,
            titulo: 'Resolução nº 313, de 19 de março de 2020',
            descricao: 'Estabelece, no âmbito do Poder Judiciário, regime de Plantão Extraordinário, para uniformizar o funcionamento dos serviços judiciários, com o objetivo de prevenir o contágio pelo novo Coronavírus – Covid-19, e garantir o acesso à justiça neste período emergencial.',
            arquivo: 'ac6b0467b330049d20a13dfdc4e518a9',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-19 00:00:00.000',
            updated_at: '2020-03-19 00:00:00.000'
        }, {
            id: 112,
            titulo: 'Portaria nº 57, 20 de março de 2020',
            descricao: 'Incluir no Observatório Nacional sobre Questões Ambientais, Econômicas e Sociais de Alta Complexidade e Grande Impacto e Repercussão o caso Coronavirus - Covid-19',
            arquivo: '5e0f4c9e0696f6d0a26a562dc9945219',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-20 00:00:00.000',
            updated_at: '2020-03-20 00:00:00.000'
        }, {
            id: 113,
            titulo: 'Ato Conjunto TRF-5, 23 de março de 2020',
            descricao: 'Dispõe sobre a destinação de pena de prestação pecuniária, transação penal e suspensão condicional do processo nas ações criminais para o enfrentamento da pandemia decorrente do novo coronavírus – COVID-19',
            arquivo: '47610f5ae99052068e8fb1c31559cd0f',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-23 00:00:00.000',
            updated_at: '2020-03-23 00:00:00.000'
        }, {
            id: 114,
            titulo: 'Portaria nº 180, 31 de março de 2020',
            descricao: 'Dispõe sobre a prorrogação do regime de teletrabalho no Tribunal Regional Federal da 5ª Região e Seções Judiciárias vinculadas',
            arquivo: '14a46ecaf2e0058ca698df4caa2fded2',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-03-31 00:00:00.000',
            updated_at: '2020-03-31 00:00:00.000'
        }, {
            id: 115,
            titulo: 'Resolução nº 314, 20 de abril de 2020',
            descricao: 'Prorroga, no âmbito do Poder Judiciário, em parte, o regime instituído pela Resolução nº 313, de 19 de março de 2020, modifica as regras de suspensão de prazos processuais e dá outras providências.',
            arquivo: 'bd43acf9d002c18e0b9e9dcd755240c7',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-04-20 00:00:00.000',
            updated_at: '2020-04-20 00:00:00.000'
        }, {
            id: 116,
            titulo: 'Ato nº 140, 21 de abril de 2020',
            descricao: 'Dispõe acerca do regime de trabalho diferenciado e dos prazos processuais no âmbito do Tribunal Regional Federal da 5ª Região e das Seções Judiciárias vinculadas',
            arquivo: '808d097f6c09bccfe31059260632d89c',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-04-21 00:00:00.000',
            updated_at: '2020-04-21 00:00:00.000'
        }, {
            id: 117,
            titulo: 'Portaria nº 251, 28 de abril de 2020',
            descricao: 'Regulamenta as atividades a serem cumpridas pelos servidores em regime de trabalho diferenciado cujas atribuições regulares são predominantemente presenciais.',
            arquivo: 'b7d66916937e9b939f0f08f3442c9b82',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-04-28 00:00:00.000',
            updated_at: '2020-04-28 00:00:00.000'
        }, {
            id: 118,
            titulo: 'Ato nº 162, 7 de maio de 2020',
            descricao: 'Dispõe acerca do regime de trabalho diferenciado e dos prazos processuais no âmbito do Tribunal Regional Federal da 5ª Região e das Seções Judiciárias vinculadas.',
            arquivo: '7f886532edebe8856d3818da06349fb2',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-05-07 00:00:00.000',
            updated_at: '2020-05-07 00:00:00.000'
        }, {
            id: 119,
            titulo: 'Resolução nº 318, 7 de maio de 2020',
            descricao: 'Prorroga, no âmbito do Poder Judiciário, em parte, o regime instituído pelas Resoluções nº 313, de 19 de março de 2020, e nº 314, de 20 de abril de 2020, e dá outras providências.',
            arquivo: 'ccfedc5a16159115a317784ad67cc729',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-05-07 00:00:00.000',
            updated_at: '2020-05-07 00:00:00.000'
        }, {
            id: 120,
            titulo: 'Recomendação nº 66, 13 de maio de 2020',
            descricao: 'Recomenda aos Juízos com competência para o julgamento das ações que versem sobre o direito à saúde a adoção de medidas para garantir os melhores resultados à sociedade durante o período excepcional de pandemia da Covid-19.',
            arquivo: 'a64129a70e25ddc53b8d7f6c7c5b9113',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-05-13 00:00:00.000',
            updated_at: '2020-05-13 00:00:00.000'
        }, {
            id: 121,
            titulo: 'Edital nº 9, 20 de maio de 2020',
            descricao: 'INSPEÇÕES JUDICIAIS 2020 - ALTERAÇÃO',
            arquivo: 'ec2e076bf69f0d91334f678d62c358cf',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-05-20 00:00:00.000',
            updated_at: '2020-05-20 00:00:00.000'
        }, {
            id: 122,
            titulo: 'Portaria nº 79, 22 de maio de 2020',
            descricao: 'Prorroga o prazo de vigência das Resoluções CNJ nº 313/2020, nº 314/2020 e nº 318/2020',
            arquivo: 'bc714c40b9af93d44edbdfa4b25a5876',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-05-22 00:00:00.000',
            updated_at: '2020-05-22 00:00:00.000'
        }, {
            id: 123,
            titulo: 'Ato nº 199, 22 de maio de 2020',
            descricao: 'Dispõe acerca do regime de trabalho diferenciado e dos prazos processuais no âmbito do Tribunal Regional Federal da 5ª Região e das Seções Judiciárias vinculadas',
            arquivo: 'c5f5dbcf5a887c9f4923359ac1539ecb',
            ativo: 1,
            usuario_id: 1,
            created_at: '2020-05-22 00:00:00.000',
            updated_at: '2020-05-22 00:00:00.000'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('artigos', null, {});
    }
};
