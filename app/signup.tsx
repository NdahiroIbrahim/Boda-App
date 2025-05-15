import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import RoleSelector from "../components/RoleSelector";

export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "operator">("user");

  const handleSignup = () => {
    // TODO: API call
    console.log({ fullName, phone, email, password, role });
    router.push("/signin");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Full Name" style={styles.input} value={fullName} onChangeText={setFullName} />
      <TextInput placeholder="Phone Number" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      
      <RoleSelector selected={role} onSelect={setRole} />

      <Button title="Sign Up" onPress={handleSignup} color="#2e7d32" />

      <TouchableOpacity onPress={() => router.push("/signin")}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16, color: "#2e7d32" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 },
  link: { marginTop: 12, textAlign: "center", color: "#2e7d32" }
});
