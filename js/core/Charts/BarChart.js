import { ChartRenderer } from "../ChartRenderer.js";

class BarChart extends ChartRenderer {
    constructor(canvasId) {
        super(canvasId);
    }

    createConfig(categories, values, options = {}) {
        const colors = values.map(v => {
            if (v >= 2.0) return '#f44336';
            if (v >= 1.67) return '#ff9800';
            return '#4caf50';
        });

        return {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    label: options.dataLabel || 'Puntuación',
                    data: values,
                    backgroundColor: colors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: options.maxValue || Math.max(...values) * 1.2
                    }
                }
            }
        };
    }

    renderBar(categories, values, options) {
        const config = this.createConfig(categories, values, options);
        this.render(config);
    }
}

export { BarChart };