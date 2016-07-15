#include "graph.h"
#include "gameState.h"
using namespace std;

#ifndef main_h
#define main_h

#define PEG_COUNT (15)
#define INITIALIZE_SUCCESS (true)
#define INITIALIZE_FAILURE (false)
#define RECURSE_BOARD_SUCCESS (true)
#define RECURSE_BOARD_FAILURE (false)

bool RecurseBoard(Graph *adjGraph, Graph *remoteGraph);
void RecurseBoardHelper(FILE *file, GameState *gameState, Sequence *sequence, Graph *adjGraph, Graph *remoteGraph, int *solutions);
bool InitializeBoard(Graph **adjGraph, Graph **remoteGraph);

#endif
