import { ChartRenderer } from "../ChartRenderer.js";

class GaugeChart extends ChartRenderer {
    constructor(canvasId) {
        super(canvasId);
    }

    createConfig(score, max, thresholds = {}) {
        //const percentage = (score / max) * 100;
        const remaining = max - score;

        let color = '#4caf50';
        if (thresholds.high && score >= thresholds.high) color = '#f44336';
        else if (thresholds.medium && score >= thresholds.medium) color = '#ff9800';

        return {
            type: 'doughnut',
            data: {
                labels: ['Puntuación obtenida', 'Restante'],
                datasets: [{
                    data: [score, remaining],
                    backgroundColor: [color, '#e0e0e0'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                return `${label}: ${value} / ${max}`;
                            }
                        }
                    }
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: function (chart) {
                    const width = chart.width;
                    const height = chart.height;
                    const ctx = chart.ctx;
                    ctx.restore();
                    const fontSize = (height / 114).toFixed(2);
                    ctx.font = `bold ${fontSize}em sans-serif`;
                    ctx.textBaseline = 'middle';
                    const text = `${score}/${max}`;
                    const textX = Math.round((width - ctx.measureText(text).width) / 2);
                    const textY = height / 2;
                    ctx.fillStyle = '#333';
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        };
    }

    renderGauge(score, max, thresholds) {
        const config = this.createConfig(score, max, thresholds);
        this.render(config);
    }
}

export { GaugeChart };