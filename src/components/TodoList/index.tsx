import { ScrollView, Text, View, ViewProps } from "react-native";
import { TodoData } from "../../types/todo";
import { TaskCard } from "../TaskCard";
import { InfoLabel } from "./InfoLabel";
import { styles } from "./styles";
interface TodoListProps extends ViewProps {
  todos: TodoData[];
  setTodos: (
    newTodo: TodoData[] | ((prevVar: TodoData[]) => TodoData[])
  ) => void;
}
export function TodoList({ todos, setTodos, ...rest }: TodoListProps) {
  return (
    <View {...rest} style={[styles.container, rest.style]}>
      <View style={styles.infoContainer}>
        <InfoLabel text="Criadas" number={todos.length} variant="blue" />
        <InfoLabel
          text="Concluidas"
          number={todos.filter((val) => val.complete).length}
          variant="purple"
        />
      </View>
      <ScrollView>
        {todos.map((val) => (
          <TaskCard key={val.text} Todo={val} setTodos={setTodos} />
        ))}
      </ScrollView>
    </View>
  );
}
