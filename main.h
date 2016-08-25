#ifndef main_h
#define main_h

#include <vector>
#include <array>
#include <node.h>
#include "gamestate.h"
#include "graph.h"

using namespace v8;
using namespace std;

#define NODES (15)

void Init(Local<Object> exports);
void Main(const FunctionCallbackInfo<Value>& args);
void RecurseBoard(Graph adjGraph, Graph remoteGraph, vector<array<array<bool, NODES>, NODES - 1>>* solutionsPtr);
void RecurseBoardHelper(Graph adjGraph, Graph remoteGraph, GameState gameState, Sequence sequence, vector<array<array<bool, NODES>, NODES - 1>>* solutionsPtr);
void InitializeBoard(Graph* adjGraphPtr, Graph* remoteGraphPtr);

#endif
