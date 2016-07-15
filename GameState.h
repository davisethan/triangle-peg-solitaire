using namespace std;

#ifndef gameState_h
#define gameState_h

class GameState {
	public:
		bool *pegs;

		GameState(int count);
		GameState *CopyGameState(int count);
		string PrintGameState(int count);
		void RemovePeg(int peg);
		void JumpPeg(int src, int adj, int remote);
		int CountPegs(int total);
		~GameState();
};

class Sequence {
	public:
		GameState **states;

		Sequence(int count);
		string PrintSequence(int *solutions, int count);
		~Sequence();
};

#endif
