#ifndef Graph_h
#define Graph_h

class AdjListNode {
	public:
		int pegIdx;
		AdjListNode *next;

		AdjListNode(int dest);
};

class AdjList {
	public:
		AdjListNode *head;
};

class Graph {
	public:
		int pegCount;
		AdjList *pegArr;

		Graph(int N);
		void AddEdge(int src, int dest);
		void PrintGraph();
		~Graph();
};

#endif
