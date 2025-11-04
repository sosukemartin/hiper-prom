(() => {
  const beersByMarket = {
    hiper: sampleBeers('Hiper'),
    super: sampleBeers('Super'),
    mini: sampleBeers('Mini'),
    cc: sampleBeers('C&C')
  };

  const marketSelect = document.getElementById('marketType');
  const beersList = document.getElementById('beers-list');
  const posList = document.getElementById('posicionamento-list');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const finishBtn = document.getElementById('finishBtn');

  const craftSim = document.getElementById('craftSim');
  const craftNao = document.getElementById('craftNao');
  const premiumSim = document.getElementById('premiumSim');
  const premiumNao = document.getElementById('premiumNao');
  const mainSim = document.getElementById('mainSim');
  const mainNao = document.getElementById('mainNao');
  const metaSim = document.getElementById('metaSim');
  const metaNao = document.getElementById('metaNao');

  renderBeers(marketSelect.value);
  marketSelect.addEventListener('change', () => renderBeers(marketSelect.value));

  const posItems = [
    { text: "Planograma", pontos: 0.5 },
    { text: "Praya Lager abrindo seguimento de premium", pontos: 0.5 },
    { text: "Tônica Fys próximo a Scheppes / Tônica ou Antarctica Tônica", pontos: 0.5 },
    { text: "Posicionamento Amstel conforme planograma Premium", pontos: 1 },
    { text: "Baden Baden próximo a Colorado", pontos: 1 },
    { text: "Baden Baden / Blue Moon / Lagunitas / Gôndula Especiais", pontos: 1 },
    { text: "Ordem dos estilos Líquidos mais escuros para mais claros", pontos: 1 },
    { text: "Posicionamento marcas conforme planograma Premium", pontos: 1 },
    { text: "Premium – 70% pacotes fechados e 30% em unidades", pontos: 1 },
    { text: "Dupla exposição Heineken 00", pontos: 1 },
    { text: "Mainstream – 70% pacotes fechados e 30% em unidades", pontos: 1 },
    { text: "Marca HNK protegendo Heineken de Spaten", pontos: 1 }
  ];

  renderPosicionamento();

  function sampleBeers(prefix) {
    const arr = [];
    const estilos = [
      'CRAFT Baden Baden IPA Lata 350ml OU Vidro 600ml',
      'CRAFT Baden Baden Pilsen Cristal Lata 350ml OU Vidro 600ml',
      'CRAFT Baden Baden Witbier Lata 350ml OU Vidro 600ml',
      'CRAFT Blue Moon Lata 350ml OU Vidro 355ml',
      'CRAFT Eisenbahn Ipa Lata 350ml OU Vidro 355ml',
      'CRAFT Eisenbahn Pale Ale Lata 350ml OU Vidro 355ml',
      'CRAFT Eisenbahn Session Ipa Lata 350ml OU Vidro 355ml',
      'CRAFT Eisenbahn Weizenbier Vidro 355ml',
      'CRAFT Lagunitas Ipa Lata 350ml OU Vidro 355ml',
      'CRAFT Praya Classica 355ml OU Classica 600ml',

      'PREMIUM Eisenbahn Pilsen Vidro 355ml OU Unfiltered 355ml',
      'PREMIUM Heineken Lager Lata 350ml',
      'PREMIUM Heineken Lager Vidro 250ml OU Lata 269ml',
      'PREMIUM Heineken Lager Vidro 330ml',
      'PREMIUM Heineken Pilsen Zero Lata 350ml OU 269ml',
      'PREMIUM Heineken Pilsen Zero Vidro 330ml',
      'PREMIUM Praya Lager 355ml',
      'PREMIUM Sol Pilsen Vidro 330ml',
      'PREMIUM Amstel Ultra Vidro 275ml OU Lata 269ml',
      'PREMIUM Eisenbahn Pilsen Lata 473ml OU Unfiltered 350ml',
      'PREMIUM Heineken Lager Lata 473ml',

      'MAINSTREAM Amstel Lager Lata 350ml',
      'MAINSTREAM Amstel Lager Lata 473ml',
      'MAINSTREAM Amstel Lager Vidro 355ml',
      ' NAB FYS (Todos Sabores/Variação, exceto Tônica)',
      ' NAB FYS Tônica Lata 350ml (Regular/Zero)'
    ];

    const pontos = {
      'CRAFT Baden Baden IPA Lata 350ml OU Vidro 600ml': [0.5, 1],
      'CRAFT Baden Baden Pilsen Cristal Lata 350ml OU Vidro 600ml': [0.5, 1],
      'CRAFT Baden Baden Witbier Lata 350ml OU Vidro 600ml': [0.5, 1],
      'CRAFT Blue Moon Lata 350ml OU Vidro 355ml': [0.5, 0.5],
      'CRAFT Eisenbahn Ipa Lata 350ml OU Vidro 355ml': [0.5, 1],
      'CRAFT Eisenbahn Pale Ale Lata 350ml OU Vidro 355ml': [0.5, 1],
      'CRAFT Eisenbahn Session Ipa Lata 350ml OU Vidro 355ml': [0.5, 0.5],
      'CRAFT Eisenbahn Weizenbier Vidro 355ml': [0.5, 0.5],
      'CRAFT Lagunitas Ipa Lata 350ml OU Vidro 355ml': [0.5, 0.5],
      'CRAFT Praya Classica 355ml OU Classica 600ml': [0, 0.5],

      'PREMIUM Eisenbahn Pilsen Vidro 355ml OU Unfiltered 355ml': [0.5, 1.5],
      'PREMIUM Heineken Lager Lata 350ml': [1, 1.5],
      'PREMIUM Heineken Lager Vidro 250ml OU Lata 269ml': [1, 1.5],
      'PREMIUM Heineken Lager Vidro 330ml': [0.5, 1.5],
      'PREMIUM Heineken Pilsen Zero Lata 350ml OU 269ml': [0.5, 1.5],
      'PREMIUM Heineken Pilsen Zero Vidro 330ml': [1, 1.5],
      'PREMIUM Praya Lager 355ml': [0.5, 0.5],
      'PREMIUM Sol Pilsen Vidro 330ml': [0.5, 0.5],
      'PREMIUM Amstel Ultra Vidro 275ml OU Lata 269ml': [0.5, 0.5],
      'PREMIUM Eisenbahn Pilsen Lata 473ml OU Unfiltered 350ml': [0.5, 1.5],
      'PREMIUM Heineken Lager Lata 473ml': [1, 1.5],

      'MAINSTREAM Amstel Lager Lata 350ml': [0.5, 1],
      'MAINSTREAM Amstel Lager Lata 473ml': [1, 1.5],
      'MAINSTREAM Amstel Lager Vidro 355ml': [0.5, 0.5],
      ' NAB FYS (Todos Sabores/Variação, exceto Tônica)': [0.5, 0.5],
      ' NAB FYS Tônica Lata 350ml (Regular/Zero)': [0.5, 0.5]
    };

    estilos.forEach((estilo, i) => {
      arr.push({
        id: `${prefix}-beer-${i + 1}`,
        name: `${prefix} — ${estilo}`,
        pontosGelado: pontos[estilo][0],
        pontosGondula: pontos[estilo][1],
        img: `c${i + 1}.png`
      });
    });
    return arr;
  }

  function renderBeers(market) {
    beersList.innerHTML = '';
    const beers = beersByMarket[market] || [];
    beers.forEach(b => {
      const card = document.createElement('div');
      card.className = 'beer';
      card.dataset.id = b.id;
      card.dataset.gelado = b.pontosGelado;
      card.dataset.gondula = b.pontosGondula;

      card.innerHTML = `
        <img src="${b.img}" alt="${b.name}" />
        <div class="meta">
          <h4>${b.name}</h4>
          <div class="controls">
            <div class="row">
              <div class="toggle-simnao" data-choice>
                <button class="opt sim active">SIM</button>
                <button class="opt nao">NÃO</button>
              </div>
            </div>
            <div class="row small-check">
              <label><input type="checkbox" class="gelado"> Gelado (+${b.pontosGelado})</label>
              <label><input type="checkbox" class="gondula"> Gôndula (+${b.pontosGondula})</label>
            </div>
          </div>
        </div>
      `;
      card.querySelectorAll('.opt').forEach(btn => {
        btn.addEventListener('click', () => {
          card.querySelectorAll('.opt').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateScore();
        });
      });
      card.querySelectorAll('input').forEach(i => i.addEventListener('change', updateScore));
      beersList.appendChild(card);
    });
    updateScore();
  }

  function renderPosicionamento() {
    posList.innerHTML = '';
    posItems.forEach(item => {
      const tr = document.createElement('tr');
      tr.dataset.pontos = item.pontos;

      // Remove os botões SIM/NÃO do item "Planograma"
      if (item.text === "Planograma") {
        tr.innerHTML = `<td>${item.text}</td><td colspan="2"></td>`;
      } else {
        tr.innerHTML = `
          <td>${item.text}</td>
          <td><div class="toggle-simnao"><button class="opt sim">SIM</button></div></td>
          <td><div class="toggle-simnao"><button class="opt nao active">NÃO</button></div></td>
        `;
        const sim = tr.querySelector('.sim');
        const nao = tr.querySelector('.nao');
        sim.addEventListener('click', () => {
          sim.classList.add('active');
          nao.classList.remove('active');
          updateScore();
        });
        nao.addEventListener('click', () => {
          nao.classList.add('active');
          sim.classList.remove('active');
          updateScore();
        });
      }
      posList.appendChild(tr);
    });
  }

  function updateScore() {
    let total = 0.0;

    document.querySelectorAll('.beer').forEach(card => {
      const sim = card.querySelector('.opt.sim').classList.contains('active');
      if (!sim) return;
      if (card.querySelector('.gelado').checked)
        total += parseFloat(card.dataset.gelado);
      if (card.querySelector('.gondula').checked)
        total += parseFloat(card.dataset.gondula);
    });

    document.querySelectorAll('#posicionamento-list tr').forEach(tr => {
      if (tr.querySelector('.sim') && tr.querySelector('.sim').classList.contains('active'))
        total += parseFloat(tr.dataset.pontos);
    });

    const precSim = document.getElementById('precificacaoSim');
    if (precSim && precSim.classList.contains('active')) total += 5;

    if (craftSim && craftSim.classList.contains('active')) total += 8;
    if (premiumSim && premiumSim.classList.contains('active')) total += 9;
    if (mainSim && mainSim.classList.contains('active')) total += 8;

    if (metaSim && metaSim.classList.contains('active')) total += 20;

    scoreDisplay.textContent = `Total: ${total.toFixed(1)} pontos`;
  }

  function bindToggle(sim, nao) {
    if (!sim || !nao) return;
    sim.addEventListener('click', () => {
      sim.classList.add('active');
      nao.classList.remove('active');
      updateScore();
    });
    nao.addEventListener('click', () => {
      nao.classList.add('active');
      sim.classList.remove('active');
      updateScore();
    });
  }

  bindToggle(document.getElementById('precificacaoSim'), document.getElementById('precificacaoNao'));
  bindToggle(craftSim, craftNao);
  bindToggle(premiumSim, premiumNao);
  bindToggle(mainSim, mainNao);
  bindToggle(metaSim, metaNao);

  // === PDF COM FONTES REDUZIDAS ===
  finishBtn.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    let y = 40;

    const cleanText = (t) => (t || "").toString().replace(/[^\S\r\n]+/g, " ").normalize("NFC");

    const textWrap = (txt, x, maxWidth = 500) => {
      const lines = doc.splitTextToSize(cleanText(txt), maxWidth);
      lines.forEach(line => {
        doc.text(line, x, y);
        y += 12; // menor espaçamento
      });
    };

    doc.setFontSize(12);
    doc.text('C H E C K L I S T', 50, y);
    y += 25;

    doc.setFontSize(10);
    doc.text('INFORMAÇÕES DA LOJA', 40, y);
    y += 18;

    const lojaTemContrato = document.getElementById('contract')?.value === 'sim' ? 'Sim' :
                            document.getElementById('contract')?.value === 'nao' ? 'Não' : 'Não informado';
    const nomeLoja = document.getElementById('storeName')?.value?.trim() || 'Não informado';
    const numero = document.getElementById('storeNumber')?.value?.trim() || 'Não informado';
    const supervisor = document.getElementById('supervisor')?.value?.trim() || 'Não informado';
    const promotor = document.getElementById('promoter')?.value?.trim() || 'Não informado';
    const tipoMercado = document.getElementById('marketType')?.options[
      document.getElementById('marketType')?.selectedIndex
    ]?.text || 'Não informado';

    doc.setFontSize(9);
    textWrap(`Loja tem contrato: ${lojaTemContrato}`, 50);
    textWrap(`Nome da Loja: ${nomeLoja}`, 50);
    textWrap(`Número: ${numero}`, 50);
    textWrap(`Supervisor: ${supervisor}`, 50);
    textWrap(`Promotor: ${promotor}`, 50);
    textWrap(`Tipo de Mercado: ${tipoMercado}`, 50);
    y += 10;

    doc.setFontSize(10);
    doc.text('PRODUTOS', 40, y);
    y += 18;
    doc.setFontSize(9);

    const produtosSim = [];
    document.querySelectorAll('.beer').forEach(card => {
      const sim = card.querySelector('.opt.sim')?.classList.contains('active');
      if (sim) {
        const nome = cleanText(card.querySelector('h4')?.textContent || '');
        const gelado = card.querySelector('.gelado')?.checked ? card.dataset.gelado : '0';
        const gondula = card.querySelector('.gondula')?.checked ? card.dataset.gondula : '0';
        produtosSim.push(`- ${nome} | Gelado: ${gelado} | Gôndula: ${gondula}`);
      }
    });

    if (produtosSim.length === 0) {
      textWrap('Nenhum produto marcado como SIM.', 50);
    } else {
      produtosSim.forEach(p => textWrap(p, 50));
    }
    y += 10;

    doc.setFontSize(10);
    doc.text('SEGMENTOS', 40, y);
    y += 18;
    doc.setFontSize(9);
    textWrap(`Atinge o Seguimento CRAFT? ${craftSim.classList.contains('active') ? 'SIM' : 'NÃO'}`, 50);
    textWrap(`Atinge o Seguimento PREMIUM? ${premiumSim.classList.contains('active') ? 'SIM' : 'NÃO'}`, 50);
    textWrap(`Atinge o Seguimento MAINSTEAM? ${mainSim.classList.contains('active') ? 'SIM' : 'NÃO'}`, 50);
    y += 10;

    doc.setFontSize(10);
    doc.text('POSICIONAMENTO / LAYOUT', 40, y);
    y += 18;
    doc.setFontSize(9);
    const posSim = [];
    document.querySelectorAll('#posicionamento-list tr').forEach(tr => {
      const sim = tr.querySelector('.sim')?.classList.contains('active');
      if (sim) {
        const text = cleanText(tr.querySelector('td')?.textContent || '');
        if (text) posSim.push(`- ${text}`);
      }
    });
    if (posSim.length === 0) {
      textWrap('Nenhum item marcado como SIM.', 50);
    } else {
      posSim.forEach(t => textWrap(t, 50));
    }
    y += 10;

    doc.setFontSize(10);
    doc.text('VISIBILIDADE', 40, y);
    y += 18;
    doc.setFontSize(9);
    textWrap(`Atinge a meta de pontos extras? ${metaSim.classList.contains('active') ? 'SIM' : 'NÃO'}`, 50);
    textWrap(`Atinge a precificação? ${document.getElementById('precificacaoSim')?.classList.contains('active') ? 'SIM' : 'NÃO'}`, 50);
    y += 10;

    doc.setFontSize(10);
    doc.text('RESUMO DE PONTUAÇÃO', 40, y);
    y += 18;
    doc.setFontSize(12);
    doc.text(cleanText(scoreDisplay.textContent), 50, y);

    doc.save('checklist.pdf');
  });
})();
