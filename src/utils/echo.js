export function echo({ title, message, type, icon }) {
  if (process.env.MIX_FRONT_DEBUG)
    switch (type) {
      case 'table':
        console.table(message)
        break;
      case 'group':
        if (process.env.MIX_FRONT_DEBUG_LOG_LEVEL == type || process.env.MIX_FRONT_DEBUG_LOG_LEVEL == "all") {
          console.group(title);
          message.forEach(item => console.log(item));
          console.groupEnd();
        }
        break;
      case 'success':
        if (process.env.MIX_FRONT_DEBUG_LOG_LEVEL == type || process.env.MIX_FRONT_DEBUG_LOG_LEVEL == "all")
          console.info(`%c${icon ? `${icon} ` : ""}${title ?? "DEVTOOL"}:`, "display: inline-block; background-color: green; color: white; font-weight: bold; padding: 3px 7px; border-radius: 3px;", message)
        break;
      case 'error':
        if (process.env.MIX_FRONT_DEBUG_LOG_LEVEL == type || process.env.MIX_FRONT_DEBUG_LOG_LEVEL == "all")
          console.error(`%c${icon ? `${icon} ` : ""}${title ?? "DEVTOOL"}:`, "display: inline-block; background-color: red; color: white; font-weight: bold; padding: 3px 7px; border-radius: 3px;", message)
        break;
      case 'warning':
        if (process.env.MIX_FRONT_DEBUG_LOG_LEVEL == type || process.env.MIX_FRONT_DEBUG_LOG_LEVEL == "all")
          console.warn(`%c${icon ? `${icon} ` : ""}${title ?? "DEVTOOL"}:`, "display: inline-block; background-color: orange; color: black; font-weight: bold; padding: 3px 7px; border-radius: 3px;", message)
        break;
      case 'info':
        if (process.env.MIX_FRONT_DEBUG_LOG_LEVEL == type || process.env.MIX_FRONT_DEBUG_LOG_LEVEL == "all")
          console.debug(`%c${icon ? `${icon} ` : ""}${title ?? "DEVTOOL"}:`, "display: inline-block; background-color: grey; color: white; font-weight: bold; padding: 3px 7px; border-radius: 3px;", message)
      default:
        if (process.env.MIX_FRONT_DEBUG_LOG_LEVEL != "all")
          console.debug(`%c${icon ? `${icon} ` : ""}${title ?? "DEVTOOL"}:`, "display: inline-block; background-color: grey; color: white; font-weight: bold; padding: 3px 7px; border-radius: 3px;", message)
        break;
    }
}