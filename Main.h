#include "Graph.h"
#include "GameState.h"
using namespace std;

#ifndef Main_h
#define Main_h

#define PEG_COUNT (15)
#define INITIALIZE_SUCCESS (true)
#define INITIALIZE_FAILURE (false)
#define RECURSE_BOARD_SUCCESS (true)
#define RECURSE_BOARD_FAILURE (false)

class RecurseBoardData {
	public:
		FILE *file;
		GameState *gameState;
		Sequence *sequence;
		Graph *adjGraph;
		Graph *remoteGraph;
		int *solutionCount;

		RecurseBoardData(FILE *file, GameState *gameState, Sequence *sequence, Graph *adjGraph, Graph *remoteGraph, int *solutionCount);
};

bool RecurseBoard(Graph *adjGraph, Graph *remoteGraph);
void RecurseBoardHelper(RecurseBoardData *recurseBoardData);
bool InitializeBoard(Graph **adjGraph, Graph **remoteGraph);

#endif
