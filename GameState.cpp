#include <iostream>
#include "gameState.h"
using namespace std;

GameState::GameState(int count) {
	bool *arr = new bool[count];
	for (int i = 0; i < count; i++) {
		arr[i] = true;
	}
	this->pegs = arr;
}

GameState *GameState::CopyGameState(int count) {
	GameState *gameState = new GameState(count);
	for (int i = 0; i < count; i++) {
		gameState->pegs[i] = this->pegs[i];
	}
	return gameState;
}

string GameState::PrintGameState(int count) {
	/*       0
	 *      1  2
	 *    3  4  5
	 *   6  7  8  9
	 * 10 11 12 13 14
	 */
	string *strs = new string[count];
	for (int i = 0; i < count; i++) {
		strs[i] = this->pegs[i] ? "1" : "0";
	}

	string sequence = "    " + strs[0] + "\n";
	sequence += "   " + strs[1] + " " + strs[2] + "\n";
	sequence += "  " + strs[3] + " " + strs[4] + " " + strs[5] + "\n";
	sequence += " " + strs[6] + " " + strs[7] + " " + strs[8] + " " + strs[9] + "\n";
	sequence += strs[10] + " " + strs[11] + " " + strs[12] + " " + strs[13] + " " + strs[14] + "\n\n";

	return sequence;
}

void GameState::RemovePeg(int peg) {
	if (this->pegs[peg]) {
		this->pegs[peg] = false;
	}
}

void GameState::JumpPeg(int src, int adj, int remote) {
	if (this->pegs[src] && this->pegs[adj] && !this->pegs[remote]) {
		this->pegs[src] = false;
		this->pegs[adj] = false;
		this->pegs[remote] = true;
	}
}

int GameState::CountPegs(int total) {
	int count = 0;
	for (int i = 0; i < total; i++) {
		if (this->pegs[i]) {
			count++;
		}
	}
	return count;
}

GameState::~GameState() {
	delete[] this->pegs;
}

Sequence::Sequence(int count) {
	this->states = (GameState **) malloc((count - 2) * sizeof(GameState**));
}

string Sequence::PrintSequence(int *solutions, int count) {
	(*solutions)++;
	string str = to_string(*solutions);
	string msg = "[Solution " + str + "]\n";

	for (int i = 0; i < count - 1; i++) {
		msg += this->states[i]->PrintGameState(count);
	}

	return msg;
}

Sequence::~Sequence() {
	for (int i = 0; this->states[i] != NULL; i++) {
		free(this->states[i]);
	}
}
