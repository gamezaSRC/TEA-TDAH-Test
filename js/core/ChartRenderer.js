class ChartRenderer {
    constructor(canvasId = 'resultChart') {
        this.canvasId = canvasId;
        this.chartInstance = null;
    }

    render(config) {
        const canvas = document.getElementById(this.canvasId);
        if (!canvas) return;
        this.destroy();
        const existingChart = Chart.getChart(canvas);
        if (existingChart)
            existingChart.destroy();
        this.chartInstance = new Chart(canvas, config);
    }

    destroy() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
            this.chartInstance = null;
        }
    }
}

export { ChartRenderer };
