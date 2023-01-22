import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitEmpty() {
  const { navigate } = useNavigation();
  return (
    <Text
      className="text-zinc-400 font-regular text-base">
        Você ainda não está monitorando nenhum hábito {' '} 

        <Text
          className="text-violet-400 underline active:text-violet-500"
          onPress={() => navigate('new')}
        >
          inicie o seu dia cadastrando um.

        </Text>
      </Text>
  )
}