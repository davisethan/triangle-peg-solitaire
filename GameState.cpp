#include <iostream>
#include "GameState.h"
using namespace std;

GameState::GameState(int pegCount) {
	bool *arr = new bool[pegCount];
	for (int i = 0; i < pegCount; i++) {
		arr[i] = true;
	}
	pegArr = arr;
}

GameState *GameState::CopyGameState(int pegCount) {
	GameState *gameState = new GameState(pegCount);
	for (int i = 0; i < pegCount; i++) {
		gameState->pegArr[i] = this->pegArr[i];
	}
	return gameState;
}

string GameState::PrintGameState(int pegCount) {
	/*       0
	 *      1  2
	 *    3  4  5
	 *   6  7  8  9
	 * 10 11 12 13 14
	 */
	string *strArr = new string[pegCount];
	for (int i = 0; i < pegCount; i++) {
		strArr[i] = pegArr[i] ? "1" : "0";
	}

	string sequence = "    " + strArr[0] + "\n";
	sequence += "   " + strArr[1] + " " + strArr[2] + "\n";
	sequence += "  " + strArr[3] + " " + strArr[4] + " " + strArr[5] + "\n";
	sequence += " " + strArr[6] + " " + strArr[7] + " " + strArr[8] + " " + strArr[9] + "\n";
	sequence += strArr[10] + " " + strArr[11] + " " + strArr[12] + " " + strArr[13] + " " + strArr[14] + "\n\n";

	return sequence;
}

void GameState::RemovePeg(int pegIdx) {
	if (pegArr[pegIdx]) {
		pegArr[pegIdx] = false;
	}
}

void GameState::JumpPeg(int src, int adj, int remote) {
	if (pegArr[src] && pegArr[adj] && !pegArr[remote]) {
		pegArr[src] = false;
		pegArr[adj] = false;
		pegArr[remote] = true;
	}
}

int GameState::CountPegs(int pegCount) {
	int count = 0;
	for (int i = 0; i < pegCount; i++) {
		if (pegArr[i]) {
			count++;
		}
	}
	return count;
}

GameState::~GameState() {
	delete[] pegArr;
}

Sequence::Sequence(int pegCount) {
	gameStateArr = (GameState **) malloc((pegCount - 2) * sizeof(GameState**));
}

string Sequence::PrintSequence(int *solutionCount, int pegCount) {
	(*solutionCount)++;
	string solutionStr = to_string(*solutionCount);
	string solutionMsg = "Solution " + solutionStr + "\n---------------\n";

	for (int i = 0; i < pegCount - 1; i++) {
		solutionMsg += gameStateArr[i]->PrintGameState(pegCount);
	}

	return solutionMsg;
}

Sequence::~Sequence() {
	for (int i = 0; gameStateArr[i] != NULL; i++) {
		free(gameStateArr[i]);
	}
}
