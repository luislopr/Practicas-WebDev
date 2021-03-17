var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    this.isPresent = (num) => {
        let current = this.root;

        if (!current)
            return false;

        while (current) {
            console.log(num, current);
            if (num === current.value)
                return true;

            if (num > current.value) {
                current = current.right;
            }
            else if (num < current.value) {
                current = current.left;
            }
        }
        return false;
    }
    this.findMin = () => {
        let current = this.root;

        if (!current)
            return null;

        while (current) {
            if (current.left)
                current = current.left;
            else return current.value;
        }
    }
    this.findMax = () => {
        let current = this.root;

        if (!current)
            return null;

        while (current) {
            if (current.right)
                current = current.right;
            else return current.value;
        }
    }
    this.add = (num) => {
        let current = this.root;

        if (!current)
            return this.root = new Node(num);

        while (current) {
            if (num > current.value) {
                if (!current.right)
                    return current.right = new Node(num);
                else
                    current = current.right;
            }
            else if (num < current.value) {
                if (!current.left)
                    return current.left = new Node(num);
                else
                    current = current.left;
            } else
                return null;
        }
    }
    this.findMaxHeight = (current = this.root) => {

        if (!current)
            return -1;

        const leftH = this.findMaxHeight(current.left);
        const rightH = this.findMaxHeight(current.right);

        if (current.left || current.right) {
            if (current.left)
                return this.findMaxHeight(current.left) + 1;

            if (current.right)
                return this.findMaxHeight(current.right) + 1;
        }
        else return 0;

        return Math.max(leftH, rightH) + 1;
    }

    this.maxHeight = (current = this.root) => {
        console.log(current);

        if (current == null)
            return -1;
        else {
            /* compute the depth of each subtree */
            let lDepth = this.maxHeight(current.left);
            let rDepth = this.maxHeight(current.right);

            /* use the larger one */
            if (lDepth > rDepth)
                return (lDepth + 1);
            else
                return (rDepth + 1);
        }
    }//End Func

}//End Func

    /*
      this.findMaxHeight = () => {
      }
      this.isBalanced = () => {
      }
    */
    // Only change code above this line


let arbol = new BinarySearchTree();
for (let index = 0; index <= 4; index++)
    arbol.add(Math.floor(Math.random() * 100));

displayTree(arbol);
console.log(arbol.maxHeight());
