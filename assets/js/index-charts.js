// Teacher-Student chart
const ts_chart_div = document.querySelector(".teacher-student-chart")
const s_chart_div = document.querySelector(".student-number-chart")

var ts_options = {
    chart: {
        type: 'line',
        toolbar: {
            show: false // Hide the toolbar
        }
    },
    series: [
        {
            name: 'Students',
            data: [24, 48, 56, 32, 34, 52, 25]
        },
        {
            name: 'Teachers',
            data: [45, 60, 75, 51, 42, 42, 30]
        }
    ],
    xaxis: {
        categories: ["Yan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    stroke: {
        curve: 'smooth',
    },
    colors: ["#70C4CF", "#3D5EE1"]
}

var s_options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    series: [
        {
            name: 'Boys',
            data: [224, 248, 356, 432, 234, 352, 425, 534, 321, 374, 254]
        },
        {
            name: 'Girls',
            data: [145, 260, 275, 351, 342, 342, 530, 432, 322, 384, 234]
        }
    ],
    xaxis: {
        categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            borderRadius: 2, // Set the radius for rounded corners
        }
    },

    dataLabels: {
        enabled: false // Hide data labels (numbers on bars) globally
    },

    colors: ["#70C4CF", "#3D5EE1"]
}

const ts_chart = new ApexCharts(ts_chart_div, ts_options);
const s_chart = new ApexCharts(s_chart_div, s_options);

ts_chart.render();
s_chart.render();
