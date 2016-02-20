#include <iostream>
#include "Main.h"
#include "Graph.h"
#include "GameState.h"
using namespace std;

int main(int argc, char *argv[]) {
	cout << "Initializing the Triangle Solo Noble board game..." << endl;
	Graph *adjGraph;
	Graph *remoteGraph;
	if (InitializeBoard(&adjGraph, &remoteGraph) == INITIALIZE_SUCCESS) {
		cout << "\tSuccess!" << endl;
	} else {
		cout << "\tFailure." << endl;
		return EXIT_FAILURE;
	}

	cout << "Finding game winning solutions..." << endl;
	if (RecurseBoard(adjGraph, remoteGraph) == RECURSE_BOARD_FAILURE) {
		cout << "\tFailure." << endl;
		return EXIT_FAILURE;
	} else {
		cout << "\tSuccess!" << endl << "Solutions sent to SoloNoble.txt!" << endl;
	}

	return EXIT_SUCCESS;
}

RecurseBoardData::RecurseBoardData(FILE *file, GameState *gameState, Sequence *sequence, Graph *adjGraph, Graph *remoteGraph, int *solutionCount) {
	this->file = file;
	this->gameState = gameState;
	this->sequence = sequence;
	this->adjGraph = adjGraph;
	this->remoteGraph = remoteGraph;
	this->solutionCount = solutionCount;
}

bool RecurseBoard(Graph *adjGraph, Graph *remoteGraph) {
	char *gameSequence = (char *) "SoloNoble.txt";
	FILE *gameSequenceFile = fopen(gameSequence, "w");

	// Remove initial peg
	int solutionCount = 0;
	for (int i = 0; i < PEG_COUNT; i++) {
		GameState *gameState = new GameState(PEG_COUNT);
		Sequence *sequence = new Sequence(PEG_COUNT);
		gameState->RemovePeg(i);
		RecurseBoardData *recurseBoardData = new RecurseBoardData(gameSequenceFile, gameState, sequence, adjGraph, remoteGraph, &solutionCount);
		RecurseBoardHelper(recurseBoardData);
	}

	fclose(gameSequenceFile);
	return RECURSE_BOARD_SUCCESS;
}

void RecurseBoardHelper(RecurseBoardData *recurseBoardData) {
	// Record the game state
	int pegCount = recurseBoardData->gameState->CountPegs(PEG_COUNT);
	recurseBoardData->sequence->gameStateArr[PEG_COUNT - 1 - pegCount] = recurseBoardData->gameState;

	// If only one peg remains, the game is won!
	// Otherwise step through the board looking for a legal jump
	if (pegCount == 1) {
		fprintf(recurseBoardData->file, "%s", recurseBoardData->sequence->PrintSequence(recurseBoardData->solutionCount, PEG_COUNT).c_str());
	} else {
		for (int srcIdx = 0; srcIdx < PEG_COUNT; srcIdx++) {
			if (recurseBoardData->gameState->pegArr[srcIdx]) {
				AdjListNode *adjNode = recurseBoardData->adjGraph->pegArr[srcIdx].head;
				AdjListNode *remoteNode = recurseBoardData->remoteGraph->pegArr[srcIdx].head;
				while (adjNode && remoteNode) {
					int adjIdx = adjNode->pegIdx;
					int remoteIdx = remoteNode->pegIdx;
					if(recurseBoardData->gameState->pegArr[adjIdx] && !recurseBoardData->gameState->pegArr[remoteIdx]) {
						// Legal move found!
						GameState *gameState = recurseBoardData->gameState;
						GameState *gameStateCopy = recurseBoardData->gameState->CopyGameState(PEG_COUNT);
						gameStateCopy->JumpPeg(srcIdx, adjIdx, remoteIdx);
						recurseBoardData->gameState = gameStateCopy;
						RecurseBoardHelper(recurseBoardData);
						recurseBoardData->gameState = gameState;
					}
					adjNode = adjNode->next;
					remoteNode = remoteNode->next;
				}
			}
		}
	}
}

bool InitializeBoard(Graph **adjGraphPtr, Graph **remoteGraphPtr) {
	Graph *adjGraph = new Graph(PEG_COUNT);
	Graph *remoteGraph = new Graph(PEG_COUNT);

	// Peg 0
	adjGraph->AddEdge(0, 1);
	adjGraph->AddEdge(0, 2);
	remoteGraph->AddEdge(0, 3);
	remoteGraph->AddEdge(0, 5);

	// Peg 1
	adjGraph->AddEdge(1, 3);
	adjGraph->AddEdge(1, 4);
	remoteGraph->AddEdge(1, 6);
	remoteGraph->AddEdge(1, 8);

	// Peg 2
	adjGraph->AddEdge(2, 4);
	adjGraph->AddEdge(2, 5);
	remoteGraph->AddEdge(2, 7);
	remoteGraph->AddEdge(2, 9);

	// Peg 3
	adjGraph->AddEdge(3, 1);
	adjGraph->AddEdge(3, 4);
	adjGraph->AddEdge(3, 6);
	adjGraph->AddEdge(3, 7);
	remoteGraph->AddEdge(3, 0);
	remoteGraph->AddEdge(3, 5);
	remoteGraph->AddEdge(3, 10);
	remoteGraph->AddEdge(3, 12);

	// Peg 4
	adjGraph->AddEdge(4, 7);
	adjGraph->AddEdge(4, 8);
	remoteGraph->AddEdge(4, 11);
	remoteGraph->AddEdge(4, 13);

	// Peg 5
	adjGraph->AddEdge(5, 2);
	adjGraph->AddEdge(5, 4);
	adjGraph->AddEdge(5, 8);
	adjGraph->AddEdge(5, 9);
	remoteGraph->AddEdge(5, 0);
	remoteGraph->AddEdge(5, 3);
	remoteGraph->AddEdge(5, 12);
	remoteGraph->AddEdge(5, 14);

	// Peg 6
	adjGraph->AddEdge(6, 3);
	adjGraph->AddEdge(6, 7);
	remoteGraph->AddEdge(6, 1);
	remoteGraph->AddEdge(6, 8);

	// Peg 7
	adjGraph->AddEdge(7, 4);
	adjGraph->AddEdge(7, 8);
	remoteGraph->AddEdge(7, 2);
	remoteGraph->AddEdge(7, 9);

	// Peg 8
	adjGraph->AddEdge(8, 4);
	adjGraph->AddEdge(8, 7);
	remoteGraph->AddEdge(8, 1);
	remoteGraph->AddEdge(8, 6);

	// Peg 9
	adjGraph->AddEdge(9, 5);
	adjGraph->AddEdge(9, 8);
	remoteGraph->AddEdge(9, 2);
	remoteGraph->AddEdge(9, 7);

	// Peg 10
	adjGraph->AddEdge(10, 6);
	adjGraph->AddEdge(10, 11);
	remoteGraph->AddEdge(10, 3);
	remoteGraph->AddEdge(10, 12);

	// Peg 11
	adjGraph->AddEdge(11, 7);
	adjGraph->AddEdge(11, 12);
	remoteGraph->AddEdge(11, 4);
	remoteGraph->AddEdge(11, 13);

	// Peg 12
	adjGraph->AddEdge(12, 7);
	adjGraph->AddEdge(12, 8);
	adjGraph->AddEdge(12, 11);
	adjGraph->AddEdge(12, 13);
	remoteGraph->AddEdge(12, 3);
	remoteGraph->AddEdge(12, 5);
	remoteGraph->AddEdge(12, 10);
	remoteGraph->AddEdge(12, 14);

	// Peg 13
	adjGraph->AddEdge(13, 8);
	adjGraph->AddEdge(13, 12);
	remoteGraph->AddEdge(13, 4);
	remoteGraph->AddEdge(13, 11);

	// Peg 14
	adjGraph->AddEdge(14, 9);
	adjGraph->AddEdge(14, 13);
	remoteGraph->AddEdge(14, 5);
	remoteGraph->AddEdge(14, 12);

	*adjGraphPtr = adjGraph;
	*remoteGraphPtr = remoteGraph;
	return INITIALIZE_SUCCESS;
}
