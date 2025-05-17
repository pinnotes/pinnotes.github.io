---
title: Chart JS 
linkTitle: Charts
---


#### Line Chart

{{< chart >}}

  type: 'line',
  data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July'
      ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(192, 75, 143)',
      tension: 0.1
    }]
  },

{{< /chart >}}


---

#### Bar Chart

{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}

#### Custom Bar Chart

{{< chart >}}
type: 'bar',
  data: {
  labels:  ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
},
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
{{< /chart >}}


#### Venn Diagram

{{< chart >}}
type: 'venn',
  data: {
    labels: [
      'Soccer', 'Tennis', 'Volleyball',
      'Soccer ∩ Tennis', 'Soccer ∩ Volleyball', 'Tennis ∩ Volleyball',
      'Soccer ∩ Tennis ∩ Volleyball'
    ],
    datasets: [{
      label: 'Sports',
      data: [
        { sets: ['Soccer'], value: 2 },
        { sets: ['Tennis'], value: 0 },
        { sets: ['Volleyball'], value: 1 },
        { sets: ['Soccer', 'Tennis'], value: 1 },
        { sets: ['Soccer', 'Volleyball'], value: 0 },
        { sets: ['Tennis', 'Volleyball'], value: 1 },
        { sets: ['Soccer', 'Tennis', 'Volleyball'], value: 1 }
      ]
    }]
  }
  {{< /chart >}}

### Pie Chart

{{< chart >}}
 type: 'pie',
  data: {
    labels: ["Set A", "Set B", "Set C"],
    datasets: [{
      data: [10, 15, 8], // sizes of sets
      backgroundColor: ["#36a2eb", "#ff6384", "#ffce56"]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sizes of Sets A, B, and C"
    }
  }
 {{< /chart >}}

#### Bubble Chart

{{< chart >}}
type: 'bubble',
  data: {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
  }
 {{< /chart >}}

#### Doughnut and Pie Charts

{{< chart >}}
type: 'doughnut',
  data: {
    labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  }
 {{< /chart >}}

#### Line Chart

{{< chart >}}
type: 'line',
  data: {
    labels: [
    'Red',
    'Blue',
    'Yellow',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
  }
 {{< /chart >}}

#### Mixed Chart Types

{{< chart >}}
type: 'scatter',
  data: {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 50, 50, 50],
    fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }]
},
    options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
 {{< /chart >}}

#### Scatter Chart 

{{< chart >}}
type: 'scatter',
  data: {
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
},
    options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
 {{< /chart >}}
