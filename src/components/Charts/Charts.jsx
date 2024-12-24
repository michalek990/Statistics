import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import styles from "./Charts.module.css";

// Rejestracja elementów i skal
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

// Mockowane dane
const mockData = {
    labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec"],
    datasets: [
        {
            label: "Sprzedaż",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderWidth: 2,
        },
        {
            label: "Zyski",
            data: [5, 15, 8, 6, 7, 9],
            borderColor: "rgba(255,99,132,1)",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderWidth: 2,
        },
    ],
};

const pieData = {
    labels: ["Produkty A", "Produkty B", "Produkty C"],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
    ],
};

const Charts = () => {
    return (
        <div className={styles.chartContainer}>
            <h2>Wykres Liniowy</h2>
            <Line data={mockData} className={styles.chart} />

            <h2>Wykres Słupkowy</h2>
            <Bar data={mockData} className={styles.chart} />

            <h2>Wykres Kołowy</h2>
            <Pie data={pieData} className={styles.chart} />
        </div>
    );
};

export default Charts;
