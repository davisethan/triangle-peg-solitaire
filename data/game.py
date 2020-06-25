import os


class Game:
  """
  Triangle Peg Solitaire.
  """

  PEG_COUNT = 15


  def gameSolutions(self):
    """
    Find all solutions to Triangle Peg Solitaire.
    """
    
    graph = {
      0: [{"adj": 1, "remote": 3}, {"adj": 2, "remote": 5}],
      1: [{"adj": 3, "remote": 6}, {"adj": 4, "remote": 8}],
      2: [{"adj": 4, "remote": 7}, {"adj": 5, "remote": 9}],
      3: [{"adj": 1, "remote": 0}, {"adj": 4, "remote": 5}, {"adj": 6, "remote": 10}, {"adj": 7, "remote": 12}],
      4: [{"adj": 7, "remote": 11}, {"adj": 8, "remote": 13}],
      5: [{"adj": 2, "remote": 0}, {"adj": 4, "remote": 3}, {"adj": 8, "remote": 12}, {"adj": 9, "remote": 14}],
      6: [{"adj": 3, "remote": 1}, {"adj": 7, "remote": 8}],
      7: [{"adj": 4, "remote": 2}, {"adj": 8, "remote": 9}],
      8: [{"adj": 4, "remote": 1}, {"adj": 7, "remote": 6}],
      9: [{"adj": 5, "remote": 2}, {"adj": 8, "remote": 7}],
      10: [{"adj": 6, "remote": 3}, {"adj": 11, "remote": 12}],
      11: [{"adj": 7, "remote": 4}, {"adj": 12, "remote": 13}],
      12: [{"adj": 7, "remote": 3}, {"adj": 8, "remote": 5}, {"adj": 11, "remote": 10}, {"adj": 13, "remote": 14}],
      13: [{"adj": 8, "remote": 4}, {"adj": 12, "remote": 11}],
      14: [{"adj": 9, "remote": 5}, {"adj": 13, "remote": 12}]
    }
    solutions = {
      "cur": [],
      "all": []
    }

    for node in graph:
      # Backtrack step
      seen = {node}

      # Record game state
      state = [node not in seen for node in graph]
      solutions["cur"].append(state)

      self._gameSolutionsRecur(graph, seen, solutions)

      # Backtrack un-step
      solutions["cur"].pop()

    # Save solutions to files
    os.mkdir("data")
    for i, solution in enumerate(solutions["all"]):
      with open(f"./data/{i}.txt", "w") as f:
        f.write(self._printSolution(solution))


  def _gameSolutionsRecur(self, graph, seen, solutions):
    """
    Solutions found by recursion backtrack algorithm.

    In:
    graph (dict): Game move options.
    seen (set): Pegs removed from game.
    solutions (dict): Meta game solutions data.
    """

    # Recursion base case
    if len(seen) == Game.PEG_COUNT - 1:
      solution = [state for state in solutions["cur"]]
      solutions["all"].append(solution)
      return

    # Recursion step
    for node in graph:
      if node not in seen:
        for edge in graph[node]:
          # Legal move
          if edge["adj"] not in seen and edge["remote"] in seen:
            # Backtrack step
            seen.add(node)
            seen.add(edge["adj"])
            seen.remove(edge["remote"])

            # Record game state
            state = [node not in seen for node in graph]
            solutions["cur"].append(state)
            
            self._gameSolutionsRecur(graph, seen, solutions)
            
            # Backtrack un-step
            solutions["cur"].pop()
            seen.remove(node)
            seen.remove(edge["adj"])
            seen.add(edge["remote"])


  def _printSolution(self, sol):
    """
    Make readable game solution.

    In:
    sol (list[list[bool]]): Computed solution of game states.

    Out:
    (str): Readable game solution.
    """
    s = "".join([self._printState(state) for state in sol])
    return s


  def _printState(self, state):
    """
    Make readable game state.

    In:
    state (list[bool]): Computed game state.

    Out:
    (str): Readable game state.
    """
    def btoi(b):
      """
      Boolean to integer.
      """
      if b: return "1"
      else: return "0"

    s = ""
    s += "    " + btoi(state[0]) + "\n"
    s += "   " + btoi(state[1]) + " " + btoi(state[2]) + "\n"
    s += "  " + btoi(state[3]) + " " + btoi(state[4]) + " " + btoi(state[5]) + "\n"
    s += " " + btoi(state[6]) + " " + btoi(state[7]) + " " + btoi(state[8]) + " " + btoi(state[9]) + "\n"
    s += btoi(state[10]) + " " + btoi(state[11]) + " " + btoi(state[12]) + " " + btoi(state[13]) + " " + btoi(state[14]) + "\n\n"
    return s


if __name__ == "__main__":
  game = Game()
  game.gameSolutions()
