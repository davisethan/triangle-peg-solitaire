#include "graph.h"

Graph::Graph() {
  vector< vector<int> > graph = {};
  field = graph;
}

void Graph::addVertice() {
  vector<int> vertice = {};
  field.push_back(vertice);
}

void Graph::addEdge(int src, int dest) {
  field[src].push_back(dest);
}
