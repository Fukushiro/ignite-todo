import { ScrollView, Text, View, ViewProps } from "react-native";
import { Clipboard } from "../../assets/Clipboard";
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
      {todos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Clipboard />
          <Text style={styles.emptyContainerText1}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.emptyContainerText2}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      ) : null}
      <ScrollView style={styles.list}>
        {todos.map((val) => (
          <TaskCard
            key={val.text}
            style={{ marginBottom: 8 }}
            Todo={val}
            setTodos={setTodos}
          />
        ))}
      </ScrollView>
    </View>
  );
}
