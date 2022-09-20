export class LoggerService {
    public static log(message){
        console.log({LOGGER_INFO:message})
    }
    public static error(message){
        console.error({LOGGER_ERROR:message})
    }
}