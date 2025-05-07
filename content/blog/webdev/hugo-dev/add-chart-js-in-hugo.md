---
title: Add Chart.js in HUGO 📈
linkTitle: More chart.js 
description: Add Charts in HUGO with chart.js 🧑‍💻
tags:
- chart.js
svg: true
icon: 🌟
excludeSearch: false
width: wide
series: ["HUGO-DEV"]
series_order: 1
excludeSearch: false
chapter: 3
---

## More Charts

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
