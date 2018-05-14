// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(a) {
		this.head = new Node(a, this.head);
	}

	size() {
		let count = 0;
		let curNode = this.head;
		while(curNode) {
			count++;
			curNode = curNode.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let curNode = this.head;
		while(curNode && curNode.next) {
			curNode = curNode.next;
		}
		return curNode;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		let a = this.getFirst().next;
		this.head = a;
	}

	removeLast() {
		let prevNode = null;
		let curNode = this.head;
		while(curNode && curNode.next) {
			prevNode = curNode;
			curNode = curNode.next;
		}

		if(curNode === this.head) {
			this.head = null;
		} else {
			prevNode.next = null;
		}
	};

	insertLast(a) {
		if(!this.size()) {
			this.insertFirst(a);
			return;
		}

		let last = this.getLast();
		last.next = new Node(a);
	}

	getAt(n) {
		if(isNaN(n)) {
			return null;
		}

		let curNode = this.getFirst();
		for(let i = 0; i < n; i++) {
			if(curNode && curNode.next) {
				curNode = curNode.next;
			} else {
				return null;
			}
		}

		return curNode;
	}

	removeAt(n) {
		// look thru, get next node, prev node, prevNode.next = nextNode
		if(isNaN(n) || !this.head) {
			return null;
		}

		if (n === 0) {
			this.head = this.head.next;
			return;
		}

		let prevNode = null;
		let curNode = this.head;
		let nextNode = this.head && this.head.next;

		for(let i = 0; i < n; i++) {
			if(!curNode.next) {
				return null;
			}
			prevNode = curNode;
			curNode = prevNode.next;
			if(curNode) {
				nextNode = curNode.next;
			}
		}

		prevNode.next = nextNode;
	}
}

module.exports = { Node, LinkedList };
