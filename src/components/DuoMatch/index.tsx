import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  async function handleCopyDiscordUserToClipboard() {
    await Clipboard.setStringAsync(discord);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipboard}
          >
            <Text style={styles.discord}>{discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
