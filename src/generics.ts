const returnValue = <T>(value: any) => value

const message = returnValue<string>('Hello world!!')
const counter = returnValue<number>(5)


// Promisse 

const returnPromisse = async (): Promise<string> => {
    return "olá";
}