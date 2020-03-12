import * as d3 from "d3";
import * as d3f from "d3-force";
// import * from "d3-scale-chromatic";

const node = document.createElement("div");

var w = 1900;
var h = 1000;
var linkDistance = 275;

var colors = d3.schemeCategory10;

var dataset = {
  nodes: [
    {
      name: "Philip Marlowe",
      occ: "Private Eye",
      scope: "The Long Goodbye",
      id: 0,
      sig: 20
    },
    {
      name: "Bernie Ohls",
      occ: "Police",
      scope: "The Long Goodbye",
      id: 1,
      sig: 5
    },
    {
      name: "Randy Starr",
      occ: "Racketeer",
      scope: "The Long Goodbye",
      id: 3,
      sig: 10
    },
    {
      name: "Dr. Verringer",
      occ: "Quack",
      scope: "The Long Goodbye",
      id: 4,
      sig: 10
    },
    {
      name: "Terry Lennox",
      occ: "Wealthy",
      scope: "The Long Goodbye",
      id: 20,
      sig: 20
    },
    {
      name: "Eileen Wade",
      occ: "Wealthy",
      scope: "The Long Goodbye",
      id: 21,
      sig: 20
    },
    {
      name: "Roger Wade",
      occ: "Writer",
      scope: "The Long Goodbye",
      id: 22,
      sig: 20
    },
    {
      name: "Sylvia Lennox",
      occ: "Wealthy",
      scope: "The Long Goodbye",
      id: 23,
      sig: 15
    },
    {
      name: "Linda Loring",
      occ: "Wealthy",
      scope: "The Long Goodbye",
      id: 24,
      sig: 10
    },
    {
      name: "Harlan Potter",
      occ: "Newspaper Magnate",
      scope: "The Long Goodbye",
      id: 25,
      sig: 10
    },
    {
      name: "Sergeant Green",
      occ: "Police",
      scope: "The Long Goodbye",
      id: 26,
      sig: 5
    },
    {
      name: "Sewell Endicott",
      occ: "Lawyer",
      scope: "The Long Goodbye",
      id: 27,
      sig: 5
    },
    {
      name: "Chick Agostino",
      occ: "Bodyguard",
      scope: "The Long Goodbye",
      id: 28,
      sig: 5
    },
    {
      name: "Howard Spencer",
      occ: "Publisher",
      scope: "The Long Goodbye",
      id: 29,
      sig: 10
    },
    {
      name: "Gregorius",
      occ: "Police",
      scope: "The Long Goodbye",
      id: 32,
      sig: 5
    },
    {
      name: "Mendy Menendez",
      occ: "Racketeer",
      scope: "The Long Goodbye",
      id: 40,
      sig: 10
    },
    {
      name: "Candy",
      occ: "Butler",
      scope: "The Long Goodbye",
      id: 41,
      sig: 5
    }
  ],
  edges: [
    {
      source: 0,
      type: "hired by",
      target: 6
    },
    {
      source: 0,
      type: "hired by",
      target: 13
    },
    {
      source: 11,
      type: "hired to_represent",
      target: 0
    },
    {
      source: 0,
      type: "friends",
      target: 1
    },
    {
      source: 0,
      type: "hired by",
      target: 5
    },
    {
      source: 0,
      type: "friends",
      target: 4
    },
    {
      source: 1,
      type: "investigating murder_of",
      target: 7
    },
    {
      source: 0,
      type: "friends",
      target: 1
    },
    {
      source: 15,
      type: "associates",
      target: 2
    },
    {
      source: 2,
      type: "army buddies",
      target: 4
    },
    {
      source: 6,
      type: "held prisoner_by",
      target: 3
    },
    {
      source: 15,
      type: "former associates",
      target: 4
    },
    {
      source: 10,
      type: "looking for",
      target: 4
    },
    {
      source: 2,
      type: "army buddies",
      target: 4
    },
    {
      source: 8,
      type: "in laws",
      target: 4
    },
    {
      source: 7,
      type: "married to",
      target: 4
    },
    {
      source: 5,
      type: "former lovers",
      target: 4
    },
    {
      source: 0,
      type: "friends",
      target: 4
    },
    {
      source: 16,
      type: "works for",
      target: 5
    },
    {
      source: 5,
      type: "former lovers",
      target: 4
    },
    {
      source: 0,
      type: "hired by",
      target: 5
    },
    {
      source: 5,
      type: "married to",
      target: 6
    },
    {
      source: 0,
      type: "hired by",
      target: 6
    },
    {
      source: 13,
      type: "publisher for",
      target: 6
    },
    {
      source: 16,
      type: "works for",
      target: 6
    },
    {
      source: 6,
      type: "held prisoner_by",
      target: 3
    },
    {
      source: 6,
      type: "former lovers",
      target: 7
    },
    {
      source: 5,
      type: "married to",
      target: 6
    },
    {
      source: 10,
      type: "investigating murder_of",
      target: 7
    },
    {
      source: 6,
      type: "former lovers",
      target: 7
    },
    {
      source: 1,
      type: "investigating murder_of",
      target: 7
    },
    {
      source: 7,
      type: "married to",
      target: 4
    },
    {
      source: 7,
      type: "daughter of",
      target: 9
    },
    {
      source: 7,
      type: "sisters",
      target: 8
    },
    {
      source: 8,
      type: "in laws",
      target: 4
    },
    {
      source: 8,
      type: "daughter of",
      target: 9
    },
    {
      source: 7,
      type: "sisters",
      target: 8
    },
    {
      source: 11,
      type: "hired by",
      target: 9
    },
    {
      source: 8,
      type: "daughter of",
      target: 9
    },
    {
      source: 7,
      type: "daughter of",
      target: 9
    },
    {
      source: 14,
      type: "coworkers",
      target: 10
    },
    {
      source: 10,
      type: "looking for",
      target: 4
    },
    {
      source: 10,
      type: "investigating murder_of",
      target: 7
    },
    {
      source: 11,
      type: "hired by",
      target: 9
    },
    {
      source: 11,
      type: "hired to_represent",
      target: 0
    },
    {
      source: 12,
      type: "works for",
      target: 15
    },
    {
      source: 0,
      type: "hired by",
      target: 13
    },
    {
      source: 13,
      type: "publisher for",
      target: 6
    },
    {
      source: 14,
      type: "coworkers",
      target: 10
    },
    {
      source: 12,
      type: "works for",
      target: 15
    },
    {
      source: 15,
      type: "former associates",
      target: 4
    },
    {
      source: 15,
      type: "associates",
      target: 2
    },
    {
      source: 16,
      type: "works for",
      target: 5
    },
    {
      source: 16,
      type: "works for",
      target: 6
    }
  ]
};

var svg = d3
  .select(node)
  .append("svg")
  .attr("width", w)
  .attr("height", h);

const simulation = d3
  .forceSimulation()
  .force("charge", d3.forceManyBody().strength(-1000))
  .force(
    "link",
    d3
      .forceLink()
      .id(d => d.id)
      .distance(linkDistance)
  )
  .force("x", d3.forceX())
  .force("y", d3.forceY());

svg
  .append("defs")
  .append("marker")
  .attr("id", "arrowhead")
  .attr("viewBox", "-0 -5 10 10") //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
  .attr("refX", 50) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
  .attr("refY", 0)
  .attr("orient", "auto")
  .attr("markerWidth", 18)
  .attr("markerHeight", 18)
  .attr("xoverflow", "visible")
  .append("svg:path")
  .attr("d", "M 0,-5 L 10 ,0 L 0,5")
  .attr("fill", "#999")
  .style("stroke", "none");

var edges = svg
  .selectAll("line")
  .data(dataset.edges)
  .enter()
  .append("line")
  .attr("id", function(d, i) {
    return "edge" + i;
  })
  .style("stroke", "#ccc")
  .style("pointer-events", "none")
  .attr("marker-end", "url(#arrowhead)");

var nodes = svg
  .selectAll("circle")
  .data(dataset.nodes)
  .enter()
  .append("circle")
  .attr("r", function(d, i) {
    if (d.sig === undefined) {
      return 20;
    } else {
      return d.sig * 3;
    }
  })
  .style("fill", function(d, i) {
    return colors(i);
  })
  .call(simulation.drag);

var nodelabels = svg
  .selectAll(".nodelabel")
  .data(dataset.nodes)
  .enter()
  .append("text")
  .attr({
    x: function(d) {
      return d.x;
    },
    y: function(d) {
      return d.y;
    },
    class: "nodelabel",
    stroke: "black"
  })
  .text(function(d) {
    return d.name;
  });

var edgepaths = svg
  .selectAll(".edgepath")
  .data(dataset.edges)
  .enter()
  .append("path")
  .attr({
    d: function(d) {
      return (
        "M " +
        d.source.x +
        " " +
        d.source.y +
        " L " +
        d.target.x +
        " " +
        d.target.y
      );
    },
    class: "edgepath",
    "fill-opacity": 0,
    "stroke-opacity": 0,
    fill: "blue",
    stroke: "red",
    id: function(d, i) {
      return "edgepath" + i;
    }
  })
  .style("pointer-events", "none");

var edgelabels = svg
  .selectAll(".edgelabel")
  .data(dataset.edges)
  .enter()
  .append("text")
  .style("pointer-events", "none")
  .attr({
    class: "edgelabel",
    id: function(d, i) {
      return "edgelabel" + d;
    },
    dx: 80,
    dy: 0,
    "font-size": 18,
    fill: "#303030"
  });

edgelabels
  .append("textPath")
  .attr("xlink:href", function(d, i) {
    return "#edgepath" + i;
  })
  .style("pointer-events", "none")
  .text(function(d, i) {
    return "" + d.type;
  });

simulation.on("tick", function() {
  edges.attr({
    x1: function(d) {
      return d.source.x;
    },
    y1: function(d) {
      return d.source.y;
    },
    x2: function(d) {
      return d.target.x;
    },
    y2: function(d) {
      return d.target.y;
    }
  });

  nodes.attr({
    cx: function(d) {
      return d.x;
    },
    cy: function(d) {
      return d.y;
    }
  });

  nodelabels
    .attr("x", function(d) {
      return d.x;
    })
    .attr("y", function(d) {
      return d.y;
    });

  edgepaths.attr("d", function(d) {
    var path =
      "M " +
      d.source.x +
      " " +
      d.source.y +
      " L " +
      d.target.x +
      " " +
      d.target.y;
    //console.log(d)
    return path;
  });

  edgelabels.attr("transform", function(d, i) {
    if (d.target.x < d.source.x) {
      bbox = this.getBBox();
      rx = bbox.x + bbox.width / 2;
      ry = bbox.y + bbox.height / 2;
      return "rotate(180 " + rx + " " + ry + ")";
    } else {
      return "rotate(0)";
    }
  });
});

var svg = d3
  .select(node)
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var defs = svg.append("defs");

defs
  .append("clipPath")
  .attr("id", "circle1")
  .append("circle")
  .attr("cx", 350)
  .attr("cy", 200)
  .attr("r", 180);

defs
  .append("clipPath")
  .attr("id", "circle2")
  .append("circle")
  .attr("cx", 550)
  .attr("cy", 200)
  .attr("r", 180);

export default node;
