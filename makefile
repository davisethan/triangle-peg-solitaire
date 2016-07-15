game: main.o graph.o gameState.o
	g++ -o game main.o graph.o gameState.o
main.o: main.cpp
	g++ -c main.cpp
graph.o: graph.cpp
	g++ -c graph.cpp
gameState.o: gameState.cpp
	g++ -c gameState.cpp
clean:
	rm -f game
	rm -f *.o
	rm -f *~
	rm -f *#
	rm -f *.txt
