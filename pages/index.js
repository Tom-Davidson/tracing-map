import MainLayout from '../layouts/main';
import { Graph } from "react-d3-graph";
import NoSSR from "../components/nossr";

const graphConfig = {
	directed: true,
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        // size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};
const onClickGraph = function() {
    console.log(`Clicked the graph background`);
};
const onClickNode = function(nodeId) {
    console.log(`Clicked node ${nodeId}`);
};
const onDoubleClickNode = function(nodeId) {
    console.log(`Double clicked node ${nodeId}`);
};
const onRightClickNode = function(event, nodeId) {
    console.log(`Right clicked node ${nodeId}`);
};
const onMouseOverNode = function(nodeId) {
    console.log(`Mouse over node ${nodeId}`);
};
const onMouseOutNode = function(nodeId) {
    console.log(`Mouse out node ${nodeId}`);
};
const onClickLink = function(source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
};
const onRightClickLink = function(event, source, target) {
    console.log(`Right clicked link between ${source} and ${target}`);
};
const onMouseOverLink = function(source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
};
const onMouseOutLink = function(source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
};
const onNodePositionChange = function(nodeId, x, y) {
    console.log(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};
const onZoomChange = (prevZoom, newZoom) => {
	console.log(`Zoom changed from ${prevZoom} to ${newZoom}`);
};

function HomePage({ mapData, env }) {
	return (
		<MainLayout>
			<NoSSR>
				<p>Nodes: {mapData.nodes.length}, Links: {mapData.links.length}</p>
				<p>Server-side env data: {env}</p>
				<Graph
					// ref="graph"
					id="graph"
					data={mapData}
					config={graphConfig}
					onClickNode={onClickNode}
					onDoubleClickNode={onDoubleClickNode}
					onRightClickNode={onRightClickNode}
					onClickGraph={onClickGraph}
					onClickLink={onClickLink}
					onRightClickLink={onRightClickLink}
					onMouseOverNode={onMouseOverNode}
					onMouseOutNode={onMouseOutNode}
					onMouseOverLink={onMouseOverLink}
					onMouseOutLink={onMouseOutLink}
					onNodePositionChange={onNodePositionChange}
					onZoomChange={onZoomChange}
				/>
			</NoSSR>
		</MainLayout>
	);
}
HomePage.getInitialProps = async (ctx) => {
	const rnd = Math.random();
	const res = await fetch(`http://localhost:3000/map.json?${rnd}`);
	const json = await res.json();
	return { mapData: json, env: process.env.SOMEVAR };
};
export default HomePage;
