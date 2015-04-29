#include <iostream>
#include "Graph.h"
using namespace std;

AdjListNode::AdjListNode(int dest) {
	pegIdx = dest;
	next = NULL;
}

Graph::Graph(int N) {
	pegCount = N;
	AdjList *arr = new AdjList[N];
	pegArr = arr;
}

void Graph::AddEdge(int src, int dest) {
	AdjListNode *node = new AdjListNode(dest);
	node->next = this->pegArr[src].head;
	this->pegArr[src].head = node;
}

void Graph::PrintGraph() {
	for (int v = 0; v < this->pegCount; v++) {
		AdjListNode *pCrawl = this->pegArr[v].head;
		cout << "Adjacency list of vertex " << v << ":\n\thead";
		while(pCrawl) {
			cout << " -> " << pCrawl->pegIdx;
			pCrawl = pCrawl->next;
		}
		cout << endl;
	}
}

Graph::~Graph() {
	delete[] pegArr;
}
