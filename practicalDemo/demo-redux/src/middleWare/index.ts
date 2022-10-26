export function logMiddleWare() {
    return (next: (arg0: any) => any) => {
        return (action: { type: any; }) => {
            const {type} = action;
            console.log('发生一次action:',type);
            return next(action)
        }
    }
}