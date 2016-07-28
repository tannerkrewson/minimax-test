var child_15 = {
	text: {
		name: "8"
	},
	value: 8
};

var child_16 = {
	text: {
		name: "7"
	},
	value: 7
};

var child_17 = {
	text: {
		name: "3"
	},
	value: 3
};

var child_18 = {
	text: {
		name: "9"
	},
	value: 9
};

var child_19 = {
	text: {
		name: "9"
	},
	value: 9
};

var child_20 = {
	text: {
		name: "8"
	},
	value: 8
};

var child_21 = {
	text: {
		name: "2"
	},
	value: 2
};

var child_22 = {
	text: {
		name: "4"
	},
	value: 4
};

var child_23 = {
	text: {
		name: "1"
	},
	value: 1
};

var child_24 = {
	text: {
		name: "8"
	},
	value: 8
};

var child_25 = {
	text: {
		name: "8"
	},
	value: 8
};

var child_26 = {
	text: {
		name: "9"
	},
	value: 9
};
var child_27 = {
	text: {
		name: "9"
	},
	value: 9
};

var child_28 = {
	text: {
		name: "9"
	},
	value: 9
};

var child_29 = {
	text: {
		name: "3"
	},
	value: 3
};

var child_30 = {
	text: {
		name: "4"
	},
	value: 4
};

var child_7 = {
	text: {
		name: "child_7"
	},
	children: [child_15, child_16]
};

var child_8 = {
	text: {
		name: "child_8"
	},
	children: [child_17, child_18]
};

var child_9 = {
	text: {
		name: "child_9"
	},
	children: [child_19, child_20]
};

var child_10 = {
	text: {
		name: "child_10"
	},
	children: [child_21, child_22]
};

var child_11 = {
	text: {
		name: "child_11"
	},
	children: [child_23, child_24]
};

var child_12 = {
	text: {
		name: "child_12"
	},
	children: [child_25, child_26]
};

var child_13 = {
	text: {
		name: "child_13"
	},
	children: [child_27, child_28]
};

var child_14 = {
	text: {
		name: "child_14"
	},
	children: [child_29, child_30]
};

var child_3 = {
	text: {
		name: "child_3"
	},
	children: [child_7, child_8]
};

var child_4 = {
	text: {
		name: "child_4"
	},
	children: [child_9, child_10]
};

var child_5 = {
	text: {
		name: "child_5"
	},
	children: [child_11, child_12]
};

var child_6 = {
	text: {
		name: "child_6"
	},
	children: [child_13, child_14]
};

var child_1 = {
	text: {
		name: "child_1"
	},
	children: [child_3, child_4]
};

var child_2 = {
	text: {
		name: "child_2"
	},
	children: [child_5, child_6]
};

var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple"
	},

	nodeStructure: {
		text: {
			name: "Parent node"
		},

		children: [child_1, child_2]
	}
};

function minmax(node, depth, max_player) {
	if (depth == 0 || !("children" in node)) {
		return node.value;
	}

	var best_value, v;
	if (max_player) {
		//maximizing player
		best_value = Number.NEGATIVE_INFINITY;

		for (var child in node.children) {
			v = minmax(node.children[child], depth - 1, false);
			best_value = Math.max(v, best_value);
		}
		return best_value;
	}
	else {
		//minimizing player
		best_value = Number.POSITIVE_INFINITY;

		for (var child in node.children) {
			v = minmax(node.children[child], depth - 1, true);
			best_value = Math.min(v, best_value);
		}
		return best_value;
	}
}

function CallMinMax() {
	var data = minmax(simple_chart_config.nodeStructure, 5, true);
	console.log(data);
}
