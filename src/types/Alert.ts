type Alert = {
  message: string;
  severity?: "error" | "success" | "info" | "warning" | undefined;
};

export default Alert;
