export const mockRes = (myId: string) : Promise<any> => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve({id : myId, record : "jkl"}), 2000)
    });
}


