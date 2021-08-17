import os


class Game:
    """
    Triangle Peg Solitaire find all solutions by backtracking algorithm
    """

    def __init__(self):
        """
        Triangle Peg Solitaire find all solutions by backtracking algorithm
        """
        self.GRAPH = {
            0: [{"jump": 1, "end": 3}, {"jump": 2, "end": 5}],
            1: [{"jump": 3, "end": 6}, {"jump": 4, "end": 8}],
            2: [{"jump": 4, "end": 7}, {"jump": 5, "end": 9}],
            3: [{"jump": 1, "end": 0}, {"jump": 4, "end": 5}, {"jump": 6, "end": 10}, {"jump": 7, "end": 12}],
            4: [{"jump": 7, "end": 11}, {"jump": 8, "end": 13}],
            5: [{"jump": 2, "end": 0}, {"jump": 4, "end": 3}, {"jump": 8, "end": 12}, {"jump": 9, "end": 14}],
            6: [{"jump": 3, "end": 1}, {"jump": 7, "end": 8}],
            7: [{"jump": 4, "end": 2}, {"jump": 8, "end": 9}],
            8: [{"jump": 4, "end": 1}, {"jump": 7, "end": 6}],
            9: [{"jump": 5, "end": 2}, {"jump": 8, "end": 7}],
            10: [{"jump": 6, "end": 3}, {"jump": 11, "end": 12}],
            11: [{"jump": 7, "end": 4}, {"jump": 12, "end": 13}],
            12: [{"jump": 7, "end": 3}, {"jump": 8, "end": 5}, {"jump": 11, "end": 10}, {"jump": 13, "end": 14}],
            13: [{"jump": 8, "end": 4}, {"jump": 12, "end": 11}],
            14: [{"jump": 9, "end": 5}, {"jump": 13, "end": 12}]
        }
        self.unseen = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14}
        self.solution = []
        self.solutions = []

        self.get_solutions()
        self.write_solutions()

    def get_solutions(self):
        """
        Get solutions
        :return: None
        """
        for vertex in self.GRAPH:
            # Backtracking ready
            self.unseen.remove(vertex)
            step = [vertex in self.unseen for vertex in self.GRAPH]
            self.solution.append(step)
            # Backtracking step
            self.get_solutions_helper()
            # Backtracking unready
            self.unseen.add(vertex)
            self.solution.pop()

    def get_solutions_helper(self):
        """
        Get solutions helper by backtracking algorithm
        :return: None
        """
        # Base case
        if len(self.unseen) == 1:
            solution = self.solution.copy()
            self.solutions.append(solution)
        # Step case
        else:
            for vertex in self.GRAPH:
                if vertex in self.unseen:
                    for edge in self.GRAPH[vertex]:
                        if edge["jump"] in self.unseen and edge["end"] not in self.unseen:
                            # Peg solitaire jump
                            self.unseen.remove(vertex)
                            self.unseen.remove(edge["jump"])
                            self.unseen.add(edge["end"])
                            # Backtracking ready
                            step = [vertex in self.unseen for vertex in self.GRAPH]
                            self.solution.append(step)

                            # Backtracking step
                            self.get_solutions_helper()

                            # Peg solitaire unjump
                            self.unseen.add(vertex)
                            self.unseen.add(edge["jump"])
                            self.unseen.remove(edge["end"])
                            # Backtracking unready
                            self.solution.pop()

    def write_solutions(self):
        """
        Write solutions to file
        :return: None
        """
        os.mkdir("data")
        for index, solution in enumerate(self.solutions):
            with open(f"./data/{index}.txt", "w") as file:
                file.write(self.solution_string(solution))

    def solution_string(self, solution):
        """
        Readable game solution
        :param solution: Game solution
        :return: Readable game solution
        """
        return "".join(self.step_string(step) for step in solution)

    def step_string(self, step):
        """
        Readable game step
        :param step: Game step
        :return: Readable game step
        """
        string = f""
        string += f"    {self.boolean_integer_string(step[0])}\n"
        string += f"   {self.boolean_integer_string(step[1])} {self.boolean_integer_string(step[2])}\n"
        string += f"  {self.boolean_integer_string(step[3])} {self.boolean_integer_string(step[4])} {self.boolean_integer_string(step[5])}\n"
        string += f" {self.boolean_integer_string(step[6])} {self.boolean_integer_string(step[7])} {self.boolean_integer_string(step[8])} {self.boolean_integer_string(step[9])}\n"
        string += f"{self.boolean_integer_string(step[10])} {self.boolean_integer_string(step[11])} {self.boolean_integer_string(step[12])} {self.boolean_integer_string(step[13])} {self.boolean_integer_string(step[14])}\n\n"
        return string

    def boolean_integer_string(self, boolean):
        """
        Boolean integer string
        :param boolean: Boolean
        :return: Integer string
        """
        return "1" if boolean is True else "0"

if __name__ == "__main__":
    Game()
