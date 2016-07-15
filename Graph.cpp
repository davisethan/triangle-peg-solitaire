#include <iostream>
#include "graph.h"
using namespace std;

AdjListNode::AdjListNode(int dest) {
	this->peg = dest;
	this->next = NULL;
}

Graph::Graph(int N) {
	this->count = N;
	AdjList *arr = new AdjList[N];
	this->pegs = arr;
}

void Graph::AddEdge(int src, int dest) {
	AdjListNode *node = new AdjListNode(dest);
	node->next = this->pegs[src].head;
	this->pegs[src].head = node;
}

Graph::~Graph() {
	delete[] this->pegs;
}
