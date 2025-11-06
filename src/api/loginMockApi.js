
const mockOtp = "4353"; 

const MockAuthAPI = {
  sendOtp: async (phone) => {
    console.log("Sending OTP to", phone); 
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true, otp: mockOtp }; 
  },

  verifyOtp: async (phone, otp) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (otp !== mockOtp) {
      throw { message: "Wrong OTP" };
    }

    return {
      token: "mock-token-123",
      phone,
      expiresAt: Date.now() + 10 * 60 * 1000, 
    };
  },

  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { success: true };
  },
};

export default MockAuthAPI;
