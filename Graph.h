#ifndef graph_h
#define graph_h

class AdjListNode {
	public:
		int peg;
		AdjListNode *next;

		AdjListNode(int dest);
};

class AdjList {
	public:
		AdjListNode *head;
};

class Graph {
	public:
		int count;
		AdjList *pegs;

		Graph(int N);
		void AddEdge(int src, int dest);
		~Graph();
};

#endif
