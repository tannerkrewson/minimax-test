//
//	minimax-test
//

//	Objects

function Tree(depth, maxGoesFirst) {
	this.depth = depth;
	this.maxGoesFirst = maxGoesFirst;
	this.path = new Array();

	//generate the tree
	var parentNode = new Node();
	parentNode.setName('Parent node');
	parentNode.setChildren(generateChildren(this.depth-1, getRandom(2, 2)));

	this.tree = {
		chart: {
			container: "#OrganiseChart-simple"
		},

		nodeStructure: parentNode
	};

	function generateChildren(depth, numChildren) {
		var children = [];

		//for each child we need to create
		for (var i = 0; i < numChildren; i++) {
			var newChild = new Node();
			if (depth > 1) {
				newChild.setName('child_' + depth);
				newChild.setChildren(generateChildren(depth-1, getRandom(2, 2)));
			} else {
				var max = 9;
				var min = 1;
				var randy = Math.floor(Math.random() * (max - min + 1)) + min;
				newChild.setValue(randy);
				newChild.setName(randy);
			}

			//add it to the array
			children.push(newChild);
		}
		return children;
	}
}

Tree.prototype.getBestValue = function() {
	return this.minmax(this.tree.nodeStructure, this.depth, this.maxGoesFirst);
}

Tree.prototype.render = function() {
	new Treant(this.tree);
}

Tree.prototype.minmax = function(node, depth, max_player) {
	if (depth == 0 || !("children" in node)) {
		return node.value;
	}

	var best_value, v;
	if (max_player) {
		//maximizing player
		best_value = Number.NEGATIVE_INFINITY;

		for (var child in node.children) {
			v = this.minmax(node.children[child], depth - 1, false);
			best_value = Math.max(v, best_value);
		}
		if(depth === this.depth - 1) {
			this.path.push(best_value);
		}
		return best_value;
	}
	else {
		//minimizing player
		best_value = Number.POSITIVE_INFINITY;

		for (var child in node.children) {
			v = this.minmax(node.children[child], depth - 1, true);
			best_value = Math.min(v, best_value);
		}
		if(depth === this.depth - 1) {
			this.path.push(best_value);
		}
		return best_value;
	}
}

Tree.prototype.bestMove = function() {
	var best;
	if (this.maxGoesFirst === true) {
		best = Math.max(...this.path);
	}
	else {
		best = Math.min(...this.path);
	}
	return this.path.indexOf(best);
}

function Node() {}

Node.prototype.setChildren = function(children) {
	this.children = children;
}

Node.prototype.setValue = function(value) {
	this.value = value;
}

Node.prototype.setName = function(name) {
	this.text = {
		name: name.toString()
	}
}


//	Misc. Functions

function getRandom(avrgBranchFactor, variance) {
	var rand = Math.floor((Math.random() * 2 * variance) + avrgBranchFactor - Math.floor(variance/2))
	return rand;
}


//	Main

var tree = new Tree(4, true);
tree.render();

function CallMinMax() {
	var bestValue = tree.getBestValue();
	alert(bestValue);
}

function CallBestMove() {
	var bestMove = tree.bestMove();
	alert(bestMove);
}
