interface Test{
  print(msg:string):string
}

export default class $Test implements Test{
  print(message: string): string {
    return `Сообщение: ${message}`
  }
}