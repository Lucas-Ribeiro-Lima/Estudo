import { Queue } from './queue'
//Grafos são estruturas de dados composta por vértices e arestas.

/**
 *                      4   raiz(nó)
 *                    /   \
 *(filho a esquerda) 2     6 (filho a direita)
 *                 /   \     \
 *               1      3     8   folhas
 */

type Tree<T> = {
  root: node<T>
}

type node<T> = {
  val: T,
  left?: node<T>,
  right?: node<T>
}

/**
 *  Um grafo específicos muito bem conhecido é a árvore binária.
 * 
 *  Cada nó tem apenas dois filhos, a direita e a esquerda e as folhas não possuem filhos.
 * 
 *  Uma árvore binária completa é conhecida como heap, ela possui seus niveis completamente
 * preenchidos, com excessão das folhas. Ela é muito bem implementada em arrays.
 *  Veja o arquivo heap.ts para maiores detalhes.
 */

/**
 * Quando balanceadas reduzem buscas binárias a tempo O(log n)
 * A cada iteração a quantidade de opções cai pela metade, ate encontrar ou falhar.
 */

/**
 * Algoritmos de busca em grafos
 * - DFS
 * - BFS
 */

function dfsPostOrder<T>(node?: node<T> | null) {
  if (!node) return
  dfsPostOrder(node.left)
  dfsPostOrder(node.right)
  console.log(node.val)
}

function searchTree<T>(tree: Tree<T>) {
  if (!tree.root) {
    console.log("Árvore vazia")
    return
  }

  dfsPostOrder(tree.root)
}

function bfs(tree: Tree<number>, target: number) {
  const queue = new Queue<node<number>>()

  queue.enqueue(tree.root)

  while(!queue.isEmpty()) {
    let dummy = queue.dequeue()!

    if(dummy.val === target) return true

    if(dummy.left) queue.enqueue(dummy.left)
    if(dummy.right) queue.enqueue(dummy.right)


    console.log(`Filhos do nó ${dummy.val} invertidos`)
  }

  return false
}

// Arvore balanceada com menor a esquerda
function binarySearch(tree: Tree<number>, target: number) {
  function dfs(target: number, node?: node<number>) {
    if(!node) return null

    if(node.val === target) return node

    return (target < node.val) 
     ? dfs(target, node.left)
     : dfs(target, node.right) 
  }

  return dfs(target, tree.root)
}

/**
 * Também pode ser implementada utilizando-se de uma fila, gerando assim uma busca em largura.
 * Porém a DFS possui eficiência O(log N) sendo muito eficaz em árvores balanceadas, por decidir o lado
 * correto a se ir.
 */