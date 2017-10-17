#ifndef graph_h
#define graph_h

#include <vector>

using namespace std;

class Graph {
	public:
		vector< vector<int> > field;

		Graph();
		void addVertice();
		void addEdge(int src, int dest);
};

#endif
