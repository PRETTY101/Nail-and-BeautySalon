export const appointmentsApi = {
  create: async (appointment) => {
    console.log("Appointment:", appointment);

    return {
      success: true,
      data: appointment,
    };
  },
};
