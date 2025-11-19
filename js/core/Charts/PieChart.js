import { ChartRenderer } from "../ChartRenderer.js";

class PieChart extends ChartRenderer {
    constructor(canvasId) {
        super(canvasId);
    }

    createConfig(categories, values, colors) {
        return {
            type: 'pie',
            data: {
                labels: categories,
                datasets: [{
                    data: values,
                    backgroundColor: colors || ['#4caf50', '#ff9800', '#f44336', '#2196f3', '#9c27b0'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }
        };
    }

    renderPie(categories, values, colors) {
        const config = this.createConfig(categories, values, colors);
        this.render(config);
    }
}
export { PieChart };