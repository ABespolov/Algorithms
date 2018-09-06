class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinaryTree {
    constructor() {
        this.head = null;
    }
    add(value, currNode) {
        if (this.head == null) {
            this.head = new Node(value);
        } else {
            if (currNode == undefined) {
                currNode = this.head;
            }
            if (value < currNode.value) {
                if (currNode.left != null) {
                    this.add(value, currNode.left);
                } else {
                    currNode.left = new Node(value);
                    currNode.left.parent = currNode;
                }
            } else {
                if (currNode.right != null) {
                    this.add(value, currNode.right);
                } else {
                    currNode.right = new Node(value);
                    currNode.right.parent = currNode;
                }
            }
        }
    }
    printDirect(currNode) {
        if (currNode == undefined) {
            currNode = this.head;
        }
        console.log(currNode.value);
        if (currNode.left != null) {
            this.printDirect(currNode.left);
        }
        if (currNode.right != null) {
            this.printDirect(currNode.right);
        }
    }
    printSymmetric(currNode) {
        if (currNode == undefined) {
            currNode = this.head;
        }
        if (currNode.left != null) {
            this.printSymmetric(currNode.left);
        }
        console.log(currNode.value);
        if (currNode.right != null) {
            this.printSymmetric(currNode.right);
        }
    }
    printReverse(currNode) {
        if (currNode == undefined) {
            currNode = this.head;
        }
        if (currNode.left != null) {
            this.printSymmetric(currNode.left);
        }
        if (currNode.right != null) {
            this.printSymmetric(currNode.right);
        }
        console.log(currNode.value);
    }
    printTraverse() {
        var currNode = this.head;
        var queue = [];
        queue.push(this.head);
        while (queue.length > 0) {
            currNode = queue.shift();
            console.log(currNode.value);
            if (currNode.left != null) {
                queue.push(currNode.left);
            }
            if (currNode.right != null) {
                queue.push(currNode.right);
            }
        }
    }
    findElement(value, currNode, element) {
        if (currNode == undefined) {
            currNode = this.head;
        }
        if (currNode.value == value) {
            return currNode;
        }
        if (value < currNode.value) {
            if (currNode.left != null) {
                return this.findElement(value, currNode.left);
            } else {
                return null;
            }
        } else {
            if (currNode.right != null) {
                return this.findElement(value, currNode.right);
            } else {
                return null;
            }
        }
    }

    deleteNode(value) {
        var element = this.findElement(value);
        if (element.left == null && element.right == null) {
            if (element.parent.left && element.parent.left.value == element.value) {
                element.parent.left = null;
            }
            if (element.parent.right && element.parent.right.value == element.value) {
                element.parent.right = null;
            }
        } else if (element.left == null || element.right == null) {
            if (value < element.parent.value) {
                element.parent.left = element.left || element.right;
            }
            if (value > element.parent.value) {
                element.parent.right = element.left || element.right;
            } else {
                var newNode = element.right.left;
                element.right = null;

            }
        }

    }
}

var binaryTree = new BinaryTree();

binaryTree.add(60);
binaryTree.add(35);
binaryTree.add(76);
binaryTree.add(17);
binaryTree.add(42);
binaryTree.add(68);
binaryTree.add(11);
binaryTree.add(24);
binaryTree.add(63);
binaryTree.add(69);
binaryTree.add(23);
//binaryTree.printDirect();
//binaryTree.printSymmetric();
//binaryTree.printReverse();
//binaryTree.printTraverse();
//binaryTree.findElement(35);
binaryTree.deleteNode(24);

binaryTree.printTraverse();