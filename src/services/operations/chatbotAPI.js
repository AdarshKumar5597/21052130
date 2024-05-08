import { toast } from "react-hot-toast"

import { endpoints } from "../apis"
import { apiConnector } from "../apiconnector"

const { CHATBOT_RULES_API } = endpoints

export const fetchChatbotRules = async (token) => {
  let result = null
  try {
    const response = await apiConnector("GET", CHATBOT_RULES_API, null, {
      authorization: "Bearer " + token,
    })
    console.log("-------------CHAT BOT RULES FETCH RESPONSE------------------")
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Chat Bot Rules.")
    }
    result = response?.data?.rules
  } catch (error) {
    console.log("CHAT BOT RULES API ERROR............", error)
  }
  return result
}
