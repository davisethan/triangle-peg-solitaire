Game: Main.o Graph.o GameState.o
	g++ -o Game Main.o Graph.o GameState.o
Main.o: Main.cpp
	g++ -c Main.cpp
Graph.o: Graph.cpp
	g++ -c Graph.cpp
GameState.o: GameState.cpp
	g++ -c GameState.cpp
clean:
	rm -f Game
	rm -f *.o
	rm -f *~
	rm -f *#
	rm -f *.txt
