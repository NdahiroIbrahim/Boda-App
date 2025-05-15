import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  selected: "user" | "operator";
  onSelect: (role: "user" | "operator") => void;
};

export default function RoleSelector({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Role</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, selected === "user" && styles.active]}
          onPress={() => onSelect("user")}
        >
          <Text style={selected === "user" ? styles.activeText : styles.text}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selected === "operator" && styles.active]}
          onPress={() => onSelect("operator")}
        >
          <Text style={selected === "operator" ? styles.activeText : styles.text}>Boda Operator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
  label: { fontWeight: "bold", marginBottom: 8, color: "#2e7d32" },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
  button: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#2e7d32",
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  active: {
    backgroundColor: "#2e7d32",
  },
  text: {
    color: "#2e7d32",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
