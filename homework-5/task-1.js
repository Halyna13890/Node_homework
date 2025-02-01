import http from 'http'


const server = http.createServer((req, res) =>{
    const authHeaders = req.header['autorization'];

    if(!authHeaders){
        res.writeHead(401, {'Content-Type': 'text/plain'})
        res.end('Unauthorized')
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Authorization header received')
    }
    
})



server.listen(3000, () => {
    console.log('Server running on port 3000');
    
})