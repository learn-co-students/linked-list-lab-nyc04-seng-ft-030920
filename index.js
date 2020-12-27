function getName(node){
    return node['name']
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(head, collection){
    return collection[head.next]
}

function nodeAt(index, linkedList, collection){
    let node = headNode(linkedList, collection)

    for(let i = 0; i < index; i++){
        node = next(node, collection)
    }

    return node
}

function addressAt(index, linkedList, collection){
    if(index == 0){
        return linkedList
    }
    return nodeAt(index - 1, linkedList, collection).next
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection)
    let index = 0
    while(currentNode != node){
        currentNode = next(currentNode, collection)
        index ++
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)

    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let currentNode = nodeAt(index, linkedList, collection)
    previousNode.next = currentNode.next
}