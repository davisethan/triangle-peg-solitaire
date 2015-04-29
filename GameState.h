using namespace std;

#ifndef GameState_h
#define GameState_h

class GameState {
	public:
		bool *pegArr;

		GameState(int pegCount);
		GameState *CopyGameState(int pegCount);
		string PrintGameState(int pegCount);
		void RemovePeg(int pegIdx);
		void JumpPeg(int src, int adj, int remote);
    int CountPegs(int pegCount);
		~GameState();
};

class Sequence {
	public:
		GameState **gameStateArr;

		Sequence(int pegCount);
		string PrintSequence(int *solutionCount, int pegCount);
		~Sequence();
};

#endif
