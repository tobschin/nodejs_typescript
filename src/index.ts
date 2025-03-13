
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.post('/', (req:  Request, res: Response) => {
    let body = req.body;
    console.log(req);
    res.json(body);
})

app.get('/:id', async (req: Request, res : Response) => {
    let myId = req.params.id
    let result = await mockRes(myId);

    res.json(result)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


const mockRes = (myId: string) : Promise<any> => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve({id : myId, record : "asdf"}), 2000)
    });

}

export default app;