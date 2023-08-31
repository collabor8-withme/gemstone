import * as http from "http";
import { Config, DepGraph } from "../index";
import { exec } from "child_process";

function webServer(config: Config, depGraph: DepGraph): any {
    const depthType = [
        { name: 'depth1', color: '#ff6e76', symbolSize: 200 },
        { name: 'depth2', color: '#4992ff', symbolSize: 120 },
        { name: 'depth3', color: '#7cffb2', symbolSize: 80 },
        { name: 'depth4', color: '#8d48e3', symbolSize: 50 },
        { name: 'depth5', color: '#58d9f9', symbolSize: 30 },
        { name: 'depth6', color: '#05c091', symbolSize: 25 },
        { name: 'depth7', color: '#ff8a45', symbolSize: 15 },
        { name: 'depth8', color: '#ff8a45', symbolSize: 5 },
    ];

    const option = {
        title: {
            text: "DepAnlz - @depanlz/web-server",
            left: "center",
            textStyle: {
                color: "white"
            }
        },
        tooltip: {
            trigger: "item"
        },
        color: ['#ff6e76', '#4992ff', '#7cffb2', '#8d48e3', '#58d9f9', '#05c091', '#ff8a45', '#f88a45'],
        legend: {
            right: 0,
            orient: 'vertical',
            textStyle: {
                color: "white"
            },
            padding: 20,
            itemWidth: 30,
            itemHeight: 15,
            data: ["depth1", "depth2", "depth3", "depth4", "depth5", "depth6", "depth7", "depth8"]
        },
        darkMode: true,
        backgroundColor: "#100C2A",
        series: [
            {
                type: 'graph',
                layout: 'force',
                force: {
                    edgeLength: 300,
                    repulsion: 4000,
                    gravity: 0.1
                },
                draggable: true,
                roam: true,
                edgeSymbol: ["none", "arrow"],
                edgeSymbolSize: [4, 10],
                label: {
                    show: true,
                    color: "#fff",
                    formatter: "{b}"
                },
                emphasis: {
                    focus: 'adjacency',
                    label: {
                        position: 'right',
                        show: true
                    }
                },
                lineStyle: {
                    color: "source",
                    width: 0.5,
                    curveness: 0.1,
                    opacity: 0.7
                },
                categories: depthType.slice(0, config.DEPTH),
                nodes: depGraph.nodes.map(node => {
                    return {
                        ...node,
                        name: node.id,
                        category: node.level,
                        symbolSize: depthType[node.level].symbolSize,
                        itemStyle: { color: depthType[node.level].color }
                    };
                }),
                edges: depGraph.edges,
            }
        ]
    };

    const str = JSON.stringify(option, null, 2);
    const PORT = webServer.prototype.PORT;
    http.createServer((req, res) => {

        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}

#container {
    width: 100%;
    height: 100%;
}
</style>
<body>
    <div id="container"></div>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <script>
                const myChart = echarts.init(document.getElementById('container'));
                myChart.showLoading();
                myChart.hideLoading();
                const option = ${str}
                myChart.setOption(option);
                console.log(echarts)
    </script>
</body>
</html>
            `;
        res.end(html);
    }).listen(PORT, () => {
        console.log(`The dependency graph is rendered in http://localhost:${PORT}`);
        // 在 Unix-like 系统中，使用 open 命令
        if (process.platform === 'darwin') {
            exec(`open http://localhost:${PORT}`);
        }
        // 在 Windows 系统中，使用 start 命令
        else if (process.platform === 'win32') {
            exec(`start http://localhost:${PORT}`);
        }
        // 在 Linux 等系统中，可以使用 xdg-open 命令
        else {
            exec(`xdg-open http://localhost:${PORT}`);
        }
    });
}

export {
    webServer
};



