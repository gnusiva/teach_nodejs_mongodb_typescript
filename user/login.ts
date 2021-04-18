import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    console.log(req.body)
    if(req.body.username === 'siva' && req.body.password === 'divi') {
        res.send({status: 'success', msg: 'ok ok', token: '239u459123rulwkqflshf9q348rusfjlw234'});
    } else {
        res.send({status: 'failed', msg: 'username and password wrong'});
    }
    
}
