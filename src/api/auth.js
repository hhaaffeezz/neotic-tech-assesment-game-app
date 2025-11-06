import api from "./api";
// auth Api
const AuthAPI = {
 
  sendOtp: async (phone) => {
    try {
      const response = await api.post("/auth/send-otp", { phone });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Verify OTP
  verifyOtp: async (phone, otp) => {
    try {
      const response = await api.post("/auth/verify-otp", { phone, otp });
      return response.data; 
    } catch (error) {
      throw error.response?.data || error;
    }
  },

 
  logout: async () => {
    try {
      const response = await api.post("/auth/logout");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default AuthAPI;
