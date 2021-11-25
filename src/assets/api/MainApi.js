import axios from "axios";
import { SERVER } from "../../config/config.json";
class MainApi {
  async trySendMessage(userChat, message_history) {
    const body = {
      message_history: message_history,
      message: userChat,
    };
    const response = await axios.post(`${SERVER}/chat`, body);
    return response;
  }
}

export default new MainApi();
