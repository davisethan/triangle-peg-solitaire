#include "main.h"

NODE_MODULE(addon, Init);

void Init(Local<Object> exports) {
	NODE_SET_METHOD(exports, "main", Main);
}

void Main(const FunctionCallbackInfo<Value>& args) {
	Graph adjGraph = Graph();
	Graph remoteGraph = Graph();
	InitializeBoard(&adjGraph, &remoteGraph);

	vector<array<array<bool, NODES>, NODES - 1>> solutions = {};
	RecurseBoard(adjGraph, remoteGraph, &solutions);

	Isolate* isolate = args.GetIsolate();
	Local<Array> target = Array::New(isolate);

	for (int i = 0; i < (int) solutions.size(); i++) {
		Local<Array> sequence = Array::New(isolate);
		for (int j = 0; j < NODES - 1; j++) {
			Local<Array> gameState = Array::New(isolate);
			for (int k = 0; k < NODES; k++) {
				Local<Boolean> node = Boolean::New(isolate, solutions[i][j][k]);
				gameState->Set(k, node);
			}
			sequence->Set(j, gameState);
		}
		target->Set(i, sequence);
	}

	args.GetReturnValue().Set(target);
}

void RecurseBoard(Graph adjGraph, Graph remoteGraph, vector<array<array<bool, NODES>, NODES - 1>>* solutionsPtr) {
	for (int i = 0; i < NODES; i++) {
		GameState gameState = GameState();
		Sequence sequence = Sequence();
		gameState.removeNode(i);
		RecurseBoardHelper(adjGraph, remoteGraph, gameState, sequence, solutionsPtr);
	}
}

void RecurseBoardHelper(Graph adjGraph, Graph remoteGraph, GameState gameState, Sequence sequence, vector<array<array<bool, NODES>, NODES - 1>>* solutionsPtr) {
	int total = gameState.countNodes();
	sequence.states[NODES - total - 1] = gameState.nodes;

	if (1 == total) {
		array<array<bool, NODES>, NODES - 1> solution = sequence.viewSequence();
		solutionsPtr->push_back(solution);
	} else {
		for (int src = 0; src < NODES; src++) {
			if (gameState.nodes[src]) {
				for (int dest = 0; dest < (int) adjGraph.field[src].size(); dest++) {
					int adj = adjGraph.field[src][dest];
					int remote = remoteGraph.field[src][dest];
					if (gameState.nodes[adj] && !gameState.nodes[remote]) {
						GameState gameStateCopy = gameState.copyGameState();
						gameStateCopy.jumpNode(src, adj, remote);
						RecurseBoardHelper(adjGraph, remoteGraph, gameStateCopy, sequence, solutionsPtr);
					}
				}
			}
		}
	}
}

void InitializeBoard(Graph* adjGraphPtr, Graph* remoteGraphPtr) {
	Graph adjGraph = Graph();
	Graph remoteGraph = Graph();

	for (int i = 0; i < NODES; i++) {
		adjGraph.addVertice();
		remoteGraph.addVertice();
	}

	adjGraph.addEdge(0, 1);
	adjGraph.addEdge(0, 2);
	remoteGraph.addEdge(0, 3);
	remoteGraph.addEdge(0, 5);

	adjGraph.addEdge(1, 3);
	adjGraph.addEdge(1, 4);
	remoteGraph.addEdge(1, 6);
	remoteGraph.addEdge(1, 8);

	adjGraph.addEdge(2, 4);
	adjGraph.addEdge(2, 5);
	remoteGraph.addEdge(2, 7);
	remoteGraph.addEdge(2, 9);

	adjGraph.addEdge(3, 1);
	adjGraph.addEdge(3, 4);
	adjGraph.addEdge(3, 6);
	adjGraph.addEdge(3, 7);
	remoteGraph.addEdge(3, 0);
	remoteGraph.addEdge(3, 5);
	remoteGraph.addEdge(3, 10);
	remoteGraph.addEdge(3, 12);

	adjGraph.addEdge(4, 7);
	adjGraph.addEdge(4, 8);
	remoteGraph.addEdge(4, 11);
	remoteGraph.addEdge(4, 13);

	adjGraph.addEdge(5, 2);
	adjGraph.addEdge(5, 4);
	adjGraph.addEdge(5, 8);
	adjGraph.addEdge(5, 9);
	remoteGraph.addEdge(5, 0);
	remoteGraph.addEdge(5, 3);
	remoteGraph.addEdge(5, 12);
	remoteGraph.addEdge(5, 14);

	adjGraph.addEdge(6, 3);
	adjGraph.addEdge(6, 7);
	remoteGraph.addEdge(6, 1);
	remoteGraph.addEdge(6, 8);

	adjGraph.addEdge(7, 4);
	adjGraph.addEdge(7, 8);
	remoteGraph.addEdge(7, 2);
	remoteGraph.addEdge(7, 9);

	adjGraph.addEdge(8, 4);
	adjGraph.addEdge(8, 7);
	remoteGraph.addEdge(8, 1);
	remoteGraph.addEdge(8, 6);

	adjGraph.addEdge(9, 5);
	adjGraph.addEdge(9, 8);
	remoteGraph.addEdge(9, 2);
	remoteGraph.addEdge(9, 7);

	adjGraph.addEdge(10, 6);
	adjGraph.addEdge(10, 11);
	remoteGraph.addEdge(10, 3);
	remoteGraph.addEdge(10, 12);

	adjGraph.addEdge(11, 7);
	adjGraph.addEdge(11, 12);
	remoteGraph.addEdge(11, 4);
	remoteGraph.addEdge(11, 13);

	adjGraph.addEdge(12, 7);
	adjGraph.addEdge(12, 8);
	adjGraph.addEdge(12, 11);
	adjGraph.addEdge(12, 13);
	remoteGraph.addEdge(12, 3);
	remoteGraph.addEdge(12, 5);
	remoteGraph.addEdge(12, 10);
	remoteGraph.addEdge(12, 14);

	adjGraph.addEdge(13, 8);
	adjGraph.addEdge(13, 12);
	remoteGraph.addEdge(13, 4);
	remoteGraph.addEdge(13, 11);

	adjGraph.addEdge(14, 9);
	adjGraph.addEdge(14, 13);
	remoteGraph.addEdge(14, 5);
	remoteGraph.addEdge(14, 12);

	*adjGraphPtr = adjGraph;
	*remoteGraphPtr = remoteGraph;
}
