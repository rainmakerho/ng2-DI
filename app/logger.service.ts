import {Injectable} from '@angular/core';

@Injectable()
export class Logger{
    logs:string[] = [];
    constructor(){
        console.log(`Logger constructor : ${new Date().toISOString()}`);
    }
    log(message:string){
        this.logs.push(message);
        console.log(message);
    }
}

@Injectable()
export class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) { super(); }

  log(message: string) {
    let name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}

@Injectable()
export class UserService{
    user = {
        name: 'rainmaker'
    };
}

export let eventBetterLoggerFactory = (userSevice:UserService) =>{
  return new EvenBetterLogger(userSevice);
};

export let loggerProvider =
  { provide: Logger,
    useFactory: eventBetterLoggerFactory,
    deps: [UserService]
  };