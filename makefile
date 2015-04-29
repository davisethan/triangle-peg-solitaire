Game: Main.o Graph.o GameState.o
	g++ -g -o Game Main.o Graph.o GameState.o
Main.o: Main.cpp
	g++ -c -g Main.cpp
Graph.o: Graph.cpp
	g++ -c -g Graph.cpp
GameState.o: GameState.cpp
	g++ -c -g GameState.cpp
clean:
	rm -f Game
	rm -f *.o
	rm -f *~
	rm -f *#
	rm -f *.txt
