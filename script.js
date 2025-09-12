// ===== Dados Simulados (Mock API) =====
const dados = {
  instagram: { seguidores: 12000, curtidas: 340, engajamento: 5.4, alcance: 8000 },
  twitter: { seguidores: 5000, curtidas: 120, engajamento: 3.1, alcance: 4200 },
  tiktok: { seguidores: 25000, curtidas: 1500, engajamento: 8.7, alcance: 19000 }
};

// ===== Elementos =====
const seguidoresEl = document.getElementById("seguidores");
const curtidasEl = document.getElementById("curtidas");
const engajamentoEl = document.getElementById("engajamento");
const alcanceEl = document.getElementById("alcance");

// ===== Gráfico =====
const ctx = document.getElementById("metricChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [{
      label: "Interações",
      data: [0,0,0,0,0,0,0],
      borderColor: "#00f5ff",
      backgroundColor: "rgba(0,245,255,0.2)",
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#222" } }
    },
    scales: {
      x: { ticks: { color: "#666" } },
      y: { ticks: { color: "#666" } }
    }
  }
});

// ===== Atualizar Métricas =====
function atualizar(network) {
  const { seguidores, curtidas, engajamento, alcance } = dados[network];
  seguidoresEl.textContent = seguidores.toLocaleString();
  curtidasEl.textContent = curtidas.toLocaleString();
  engajamentoEl.textContent = engajamento + "%";
  alcanceEl.textContent = alcance.toLocaleString();

  // Atualiza gráfico com dados aleatórios (simulação)
  chart.data.datasets[0].data = Array.from({length:7}, () => Math.floor(Math.random()*200));
  chart.update();
}

// ===== Alternar Tema =====
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ===== Botões de redes =====
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => atualizar(btn.dataset.network));
});

// Inicialização
atualizar("instagram");
