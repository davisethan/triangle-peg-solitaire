#ifndef gameState_h
#define gameState_h

#include <array>

using namespace std;

#define NODES (15)

class GameState {
	public:
		array<bool, NODES> nodes;

		GameState();
		GameState copyGameState();
		array<bool, NODES> viewGameState();
		void removeNode(int node);
		void jumpNode(int src, int adj, int remote);
		int countNodes();
};

class Sequence {
	public:
		array<array<bool, NODES>, NODES - 1> states;

		Sequence();
		array<array<bool, NODES>, NODES - 1> viewSequence();
};

#endif
