import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Dashboard() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const requestRide = () => {
    console.log("Requesting ride from", pickup, "to", dropoff);
    // TODO: API call
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request a Boda</Text>
      <TextInput placeholder="Pickup Location"  placeholderTextColor="#bbb" style={styles.input} value={pickup} onChangeText={setPickup} />
      <TextInput placeholder="Dropoff Location"  placeholderTextColor="#bbb"  style={styles.input} value={dropoff} onChangeText={setDropoff} />
      <Button title="Request Boda" onPress={requestRide} color="#2e7d32" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16, color: "#2e7d32" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 }
});
