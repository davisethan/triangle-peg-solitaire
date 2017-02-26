#include "gamestate.h"

GameState::GameState() {
	for (int i = 0; i < NODES; i++)
		nodes[i] = true;
}

GameState GameState::copyGameState() {
	GameState gameState = GameState();
	for (int i = 0; i < NODES; i++)
		gameState.nodes[i] = nodes[i];
	return gameState;
}

array<bool, NODES> GameState::viewGameState() {
	return nodes;
}

void GameState::removeNode(int node) {
	nodes[node] = false;
}

void GameState::jumpNode(int src, int adj, int remote) {
	if (nodes[src] && nodes[adj] && !nodes[remote]) {
		nodes[src] = false;
		nodes[adj] = false;
		nodes[remote] = true;
	}
}

int GameState::countNodes() {
	int total = 0;
	for (int i = 0; i < NODES; i++) {
		if (nodes[i])
			total++;
	}
	return total;
}

Sequence::Sequence() {
	for (int i = 0; i < NODES - 1; i++) {
		GameState gameState = GameState();
		states[i] = gameState.nodes;
	}
}

array<array<bool, NODES>, NODES - 1> Sequence::viewSequence() {
	return states;
}
